const SITE_LINKS = {
  paper: "",
  code: "",
};

const ROLE_COLORS = {
  enrollment: [138, 100, 17],
  mixture: [91, 105, 116],
  baseline: [185, 71, 56],
  comparison: [82, 103, 123],
  expert: [40, 85, 197],
  ours: [15, 118, 110],
  target: [40, 85, 197],
};

const allPlayers = new Set();
let activeExperimentId = window.SYKI_EXPERIMENTS?.[0]?.id;

function playIcon() {
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7 4 12 8-12 8z"></path></svg>';
}

function pauseIcon() {
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5v14M15 5v14"></path></svg>';
}

function formatTime(value) {
  if (!Number.isFinite(value)) return "0:00";
  const seconds = Math.max(0, Math.floor(value));
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}

function readPcm16Wave(buffer) {
  const view = new DataView(buffer);
  let offset = 12;
  let channels = 1;
  let bits = 16;
  let dataOffset = -1;
  let dataLength = 0;

  while (offset + 8 <= view.byteLength) {
    const id = String.fromCharCode(
      view.getUint8(offset),
      view.getUint8(offset + 1),
      view.getUint8(offset + 2),
      view.getUint8(offset + 3),
    );
    const size = view.getUint32(offset + 4, true);
    if (id === "fmt ") {
      channels = view.getUint16(offset + 10, true);
      bits = view.getUint16(offset + 22, true);
    }
    if (id === "data") {
      dataOffset = offset + 8;
      dataLength = size;
      break;
    }
    offset += 8 + size + (size % 2);
  }

  if (dataOffset < 0 || bits !== 16) return [];
  const frameSize = channels * 2;
  const frames = Math.floor(dataLength / frameSize);
  const samples = new Float32Array(frames);
  for (let index = 0; index < frames; index += 1) {
    samples[index] = view.getInt16(dataOffset + index * frameSize, true) / 32768;
  }
  return samples;
}

function summarizeWave(samples, bars = 92) {
  if (!samples.length) return new Array(bars).fill(0.12);
  const values = [];
  const stride = Math.max(1, Math.floor(samples.length / bars));
  for (let bar = 0; bar < bars; bar += 1) {
    const start = bar * stride;
    const end = Math.min(samples.length, start + stride);
    let peak = 0;
    for (let index = start; index < end; index += 1) {
      peak = Math.max(peak, Math.abs(samples[index]));
    }
    values.push(Math.max(0.055, peak));
  }
  const sorted = [...values].sort((a, b) => a - b);
  const reference = sorted[Math.floor(sorted.length * 0.94)] || 1;
  return values.map((value) => Math.min(1, value / reference));
}

class WavePlayer {
  constructor(card, source, role, label) {
    this.card = card;
    this.canvas = card.querySelector(".waveform");
    this.scrubber = card.querySelector(".scrubber");
    this.playButton = card.querySelector(".play-button");
    this.currentTime = card.querySelector(".current-time");
    this.duration = card.querySelector(".duration");
    this.role = role;
    this.color = ROLE_COLORS[role] || ROLE_COLORS.mixture;
    this.values = new Array(92).fill(0.11);
    this.audio = document.createElement("audio");
    this.audio.src = source;
    this.audio.preload = "metadata";
    this.audio.hidden = true;
    card.appendChild(this.audio);
    this.playButton.innerHTML = playIcon();
    this.playButton.setAttribute("aria-label", `Play ${label}`);
    this.scrubber.setAttribute("aria-label", `Seek ${label}`);
    allPlayers.add(this);
    this.bind();
    this.loadWave(source);
    this.draw();
  }

  bind() {
    this.playButton.addEventListener("click", () => this.toggle());
    this.audio.addEventListener("loadedmetadata", () => {
      this.duration.textContent = formatTime(this.audio.duration);
    });
    this.audio.addEventListener("error", () => {
      this.card.classList.add("is-unavailable");
      this.playButton.disabled = true;
      this.playButton.setAttribute("aria-label", "Audio unavailable");
    });
    this.audio.addEventListener("play", () => {
      for (const player of allPlayers) {
        if (player !== this) player.pause();
      }
      this.playButton.innerHTML = pauseIcon();
      this.playButton.setAttribute("aria-label", "Pause audio");
      this.animate();
    });
    this.audio.addEventListener("pause", () => {
      this.playButton.innerHTML = playIcon();
    });
    this.audio.addEventListener("ended", () => {
      this.playButton.innerHTML = playIcon();
      this.scrubber.value = "0";
      this.draw();
    });
    this.audio.addEventListener("timeupdate", () => this.syncProgress());
    this.scrubber.addEventListener("input", () => {
      if (Number.isFinite(this.audio.duration)) {
        this.audio.currentTime = (Number(this.scrubber.value) / 1000) * this.audio.duration;
      }
      this.syncProgress();
    });
  }

  async loadWave(source) {
    const cached = window.SYKI_WAVEFORMS?.[source];
    if (cached) {
      this.values = cached;
      this.draw();
      return;
    }
    try {
      const response = await fetch(source);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      this.values = summarizeWave(readPcm16Wave(await response.arrayBuffer()));
      this.draw();
    } catch {
      this.values = new Array(92).fill(0.12);
      this.draw();
    }
  }

  async toggle() {
    if (this.audio.paused) {
      try {
        await this.audio.play();
      } catch {
        this.pause();
      }
    } else {
      this.pause();
    }
  }

  pause() {
    this.audio.pause();
  }

  syncProgress() {
    const ratio = Number.isFinite(this.audio.duration) && this.audio.duration > 0
      ? this.audio.currentTime / this.audio.duration
      : 0;
    this.scrubber.value = String(Math.round(ratio * 1000));
    this.currentTime.textContent = formatTime(this.audio.currentTime);
    this.draw();
  }

  animate() {
    if (this.audio.paused) return;
    this.syncProgress();
    requestAnimationFrame(() => this.animate());
  }

  draw() {
    const rect = this.canvas.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return;
    const scale = window.devicePixelRatio || 1;
    this.canvas.width = Math.round(rect.width * scale);
    this.canvas.height = Math.round(rect.height * scale);
    const context = this.canvas.getContext("2d");
    context.scale(scale, scale);
    const width = rect.width;
    const height = rect.height;
    const gap = 1.5;
    const barWidth = Math.max(1, (width - gap * (this.values.length - 1)) / this.values.length);
    const progressX = width * (Number(this.scrubber.value) / 1000);

    context.clearRect(0, 0, width, height);
    this.values.forEach((value, index) => {
      const x = index * (barWidth + gap);
      const barHeight = Math.max(3, value * (height - 10));
      const y = (height - barHeight) / 2;
      const alpha = x + barWidth / 2 <= progressX ? 0.95 : 0.27;
      context.fillStyle = `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, ${alpha})`;
      context.fillRect(x, y, barWidth, barHeight);
    });
  }
}

function scoreText(score) {
  if (!Number.isFinite(score)) return "";
  return `${score > 0 ? "+" : ""}${score.toFixed(2)} dB`;
}

function gainText(item) {
  if (item.badge) return item.badge;
  if (!Number.isFinite(item.finalScore) || !Number.isFinite(item.baselineScore)) {
    return "clean extraction";
  }
  const gain = item.finalScore - item.baselineScore;
  return gain > 0.005 ? `+${gain.toFixed(2)} dB` : "retained";
}

function buildTracks(experiment, item) {
  const tracks = experiment.tracks || [
    { id: "prompt", role: "enrollment", label: "Speaker prompt", detail: "Target enrollment", file: "prompt.wav" },
    { id: "baseline", role: "baseline", label: experiment.baselineLabel, detail: experiment.baselineDetail, file: "baseline.wav" },
    { id: "sykitse", role: "ours", label: experiment.oursLabel, detail: experiment.oursDetail, file: "sykitse.wav" },
  ];
  const fallbackScores = { baseline: item.baseline, sykitse: item.ours };
  return tracks.map((track) => ({
    ...track,
    detail: item.trackDetails?.[track.id] || track.detail,
    score: item.scores?.[track.id] ?? fallbackScores[track.id],
  }));
}

function renderTabs() {
  const tabs = document.querySelector("#experiment-tabs");
  tabs.replaceChildren();
  window.SYKI_EXPERIMENTS.forEach((experiment, index) => {
    const button = document.createElement("button");
    const isActive = experiment.id === activeExperimentId;
    button.className = `tab-button${isActive ? " is-active" : ""}`;
    button.type = "button";
    button.role = "tab";
    button.id = `tab-${experiment.id}`;
    button.dataset.experiment = experiment.id;
    button.setAttribute("aria-selected", String(isActive));
    button.setAttribute("aria-controls", "case-list");
    button.tabIndex = isActive ? 0 : -1;
    button.innerHTML = `<span>${String(index + 1).padStart(2, "0")}</span>${experiment.shortLabel}`;
    button.addEventListener("click", () => selectExperiment(experiment.id));
    button.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
      event.preventDefault();
      const direction = event.key === "ArrowRight" ? 1 : -1;
      const nextIndex = (index + direction + window.SYKI_EXPERIMENTS.length) % window.SYKI_EXPERIMENTS.length;
      selectExperiment(window.SYKI_EXPERIMENTS[nextIndex].id, true);
    });
    tabs.appendChild(button);
  });
}

function renderExperimentSummary(experiment) {
  const summary = document.querySelector("#experiment-summary");
  const metrics = experiment.metrics || [
    { label: "Before", value: experiment.before, unit: "dB" },
    { label: "After", value: experiment.after, unit: "dB" },
    { label: "Gain", value: experiment.after - experiment.before, unit: "dB" },
  ];
  const metricMarkup = metrics.map((metric) => `
    <div>
      <dt>${metric.label}</dt>
      <dd>${typeof metric.value === "number" ? metric.value.toFixed(3) : metric.value}${metric.unit ? ` <span>${metric.unit}</span>` : ""}</dd>
    </div>
  `).join("");
  summary.innerHTML = `
    <div class="experiment-copy">
      <p class="experiment-number">${experiment.cases.length} listening examples</p>
      <h3>${experiment.title}</h3>
      <p>${experiment.summary}</p>
    </div>
    <dl class="experiment-metric" aria-label="Aggregate SI-SDRi results" style="--metric-count: ${Math.max(1, metrics.length)}">
      ${metricMarkup}
    </dl>
  `;
}

function renderCases(experiment) {
  for (const player of allPlayers) player.pause();
  allPlayers.clear();
  const caseList = document.querySelector("#case-list");
  const template = document.querySelector("#player-template");
  caseList.replaceChildren();

  experiment.cases.forEach((item, index) => {
    const section = document.createElement("section");
    section.className = "case-study";
    section.setAttribute("aria-labelledby", `${item.id}-title`);
    const caseStatus = item.status || item.kind || "clean final";
    const statusClass = caseStatus?.replaceAll(" ", "-");
    const status = caseStatus
      ? `<span class="case-status case-status-${statusClass}">${caseStatus}</span>`
      : "";
    const attenuation = Number.isFinite(item.interfererAttenuation)
      ? `<span class="case-attenuation">${item.interfererAttenuation.toFixed(1)} dB interferer attenuation</span>`
      : "";
    section.innerHTML = `
      <header class="case-header">
        <div>
          <div class="case-meta">
            <span class="case-label">Example ${String(index + 1).padStart(2, "0")}</span>
            <span class="case-gain">${gainText(item)}</span>
            ${status}
            ${attenuation}
          </div>
          <h3 id="${item.id}-title">${item.title || `${item.source} listening sample`}</h3>
        </div>
        <code class="case-id">${item.sample}</code>
      </header>
      <div class="audio-grid"></div>
    `;
    const audioGrid = section.querySelector(".audio-grid");
    audioGrid.style.setProperty("--track-columns", String(experiment.columns || 4));
    const audioDirectory = item.audioDir || item.id;
    buildTracks(experiment, item).forEach((track) => {
      const card = template.content.firstElementChild.cloneNode(true);
      card.dataset.role = track.role;
      card.querySelector(".track-label").textContent = track.label;
      card.querySelector(".track-detail").textContent = track.detail;
      card.querySelector(".track-score").textContent = scoreText(track.score);
      if (Number.isFinite(track.score)) {
        card.querySelector(".track-score").title = "Case-level SI-SDRi";
      }
      audioGrid.appendChild(card);
      const source = `assets/audio/${audioDirectory}/${track.file}`;
      new WavePlayer(card, source, track.role, track.label);
    });
    caseList.appendChild(section);
  });
}

function selectExperiment(id, focusTab = false) {
  const experiment = window.SYKI_EXPERIMENTS.find((entry) => entry.id === id);
  if (!experiment) return;
  activeExperimentId = id;
  renderTabs();
  renderExperimentSummary(experiment);
  renderCases(experiment);
  if (focusTab) document.querySelector(`#tab-${id}`)?.focus();
}

function configureLinks() {
  Object.entries(SITE_LINKS).forEach(([name, url]) => {
    const link = document.querySelector(`#${name}-link`);
    if (!link || !url) return;
    link.href = url;
    link.hidden = false;
    link.target = "_blank";
    link.rel = "noreferrer";
  });
}

function redrawPlayers() {
  for (const player of allPlayers) player.draw();
}

configureLinks();
selectExperiment(activeExperimentId);
window.addEventListener("resize", redrawPlayers);
