# SykiTSE-MoE audio demo

Static research demo for the SykiTSE-MoE paper. The page follows a paper-like reading order: abstract, final paper figures, main-table listening comparisons, component ablations, and aggregate results. Each of the four listening groups contains five curated examples. No build step is required.

## Local preview

Run a static server from this directory:

```powershell
python -m http.server 4173
```

Then open `http://127.0.0.1:4173/`.

## Project links

Public demo: https://sykitse-moe.github.io/

Set the final paper URL at the top of `app.js` after the arXiv page is available:

```js
const SITE_LINKS = {
  paper: "https://arxiv.org/abs/XXXX.XXXXX",
  code: "",
};
```

Links with empty values stay hidden.

## GitHub Pages

1. Create a public repository, for example `sykitse-moe-demo`.
2. Push the contents of this directory to the repository's `main` branch.
3. Open `Settings > Pages`.
4. Select `Deploy from a branch`, then choose `main` and `/(root)`.
5. The project site will appear at `https://OWNER.github.io/sykitse-moe-demo/`.

The repository owner needs a GitHub account. Visitors do not need an account.

## Audio provenance

The included examples are short, 16 kHz clips from LibriSpeech-based evaluation roots and independently seeded blind mixture pools. The source material is distributed under [CC BY 4.0](https://www.openslr.org/12/). WSJ0 remains part of the paper evaluation, but its audio is not redistributed on this public demo page.

The four listening experiments are:

1. Main-table two-speaker comparisons across WeSep, USEF-TSE, MeanFlow variants, and SykiTSE-MoE.
2. Main-table three-speaker comparisons across the same systems.
3. Mixed-count MeanFlow, the frozen two-speaker expert, and Exact-Anchor selection.
4. Mixed-count MeanFlow, the full-reference three-speaker expert, and speaker-aware reference-view reranking.

Main-table cases show ten aligned tracks: prompt, mixture, official and same-data-fine-tuned WeSep, original and mixed-count-fine-tuned USEF-TSE, original and mixed-count-fine-tuned MeanFlow-TSE, SykiTSE-MoE, and clean target. Ablation cases show six aligned tracks. Audio-card scores are case-level SI-SDRi; case headers report final absolute SI-SDR.
