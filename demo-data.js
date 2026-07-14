window.SYKI_EXPERIMENTS = [
  {
    "id": "main-two",
    "shortLabel": "Main / 2-spk",
    "title": "Main comparison: two speakers",
    "summary": "Five high-quality cases from the full evaluation suite, including three genuine Exact-Anchor switches. Every model receives the same mixture and speaker prompt.",
    "columns": 5,
    "metrics": [
      {
        "label": "MeanFlow",
        "value": 19.015,
        "unit": "dB"
      },
      {
        "label": "Mixed-count",
        "value": 17.312,
        "unit": "dB"
      },
      {
        "label": "SykiTSE-MoE",
        "value": 19.161,
        "unit": "dB"
      }
    ],
    "tracks": [
      {
        "id": "prompt",
        "role": "enrollment",
        "label": "Speaker prompt",
        "detail": "Target enrollment utterance",
        "file": "prompt.wav"
      },
      {
        "id": "mixture",
        "role": "mixture",
        "label": "Mixture",
        "detail": "Input mixture",
        "file": "mixture.wav"
      },
      {
        "id": "wesep",
        "role": "comparison",
        "label": "Official WeSep",
        "detail": "Official checkpoint",
        "file": "wesep.wav"
      },
      {
        "id": "wesep_ft",
        "role": "comparison",
        "label": "WeSep same-data FT",
        "detail": "Fine-tuned on the matched training pool",
        "file": "wesep_ft.wav"
      },
      {
        "id": "usef",
        "role": "comparison",
        "label": "USEF-TSE",
        "detail": "Official checkpoint",
        "file": "usef.wav"
      },
      {
        "id": "usef_ft",
        "role": "comparison",
        "label": "USEF mixed-count FT",
        "detail": "Fine-tuned on 1/2/3/4-speaker mixtures",
        "file": "usef_ft.wav"
      },
      {
        "id": "meanflow_original",
        "role": "comparison",
        "label": "MeanFlow-TSE",
        "detail": "Official checkpoint",
        "file": "meanflow_original.wav"
      },
      {
        "id": "meanflow_mixed",
        "role": "baseline",
        "label": "MeanFlow mixed-count FT",
        "detail": "One model for 1/2/3/4 speakers",
        "file": "meanflow_mixed.wav"
      },
      {
        "id": "sykitse",
        "role": "ours",
        "label": "SykiTSE-MoE",
        "detail": "Count-specific path with local verification",
        "file": "sykitse.wav"
      },
      {
        "id": "target",
        "role": "target",
        "label": "Clean target",
        "detail": "Reference only; never used at inference",
        "file": "target.wav"
      }
    ],
    "cases": [
      {
        "id": "main-card2-01",
        "sample": "pair0259_dd6fdb90b82c",
        "source": "Paired800",
        "title": "Paired800 evaluation sample",
        "badge": "Final 20.54 dB SI-SDR",
        "status": "interference reduced",
        "scores": {
          "wesep": 16.865705773234367,
          "wesep_ft": 18.94183211028576,
          "usef": -42.04582400619984,
          "usef_ft": -58.09017367660999,
          "meanflow_original": 0.27914274483919144,
          "meanflow_mixed": -56.89813323318958,
          "sykitse": 21.04709915816784
        },
        "finalSiSdr": 20.537381172180176,
        "interfererAttenuation": 26.884789588430177,
        "targetToInterferer": 32.106230207715775
      },
      {
        "id": "main-card2-02",
        "sample": "pair0238_3505417a9bcd",
        "source": "Paired800",
        "title": "Paired800 evaluation sample",
        "badge": "Final 18.09 dB SI-SDR",
        "status": "interference reduced",
        "scores": {
          "wesep": 16.10056295990944,
          "wesep_ft": 9.312592297792435,
          "usef": -38.80798324942589,
          "usef_ft": -38.52266773581505,
          "meanflow_original": -32.498164027929306,
          "meanflow_mixed": -31.06941446661949,
          "sykitse": 19.756201654672623
        },
        "finalSiSdr": 18.092573881149292,
        "interfererAttenuation": 19.78721280549775,
        "targetToInterferer": 23.78639931860849
      },
      {
        "id": "main-card2-03",
        "sample": "pair0344_7c1de953f0c8",
        "source": "Paired800",
        "title": "Paired800 evaluation sample",
        "badge": "Final 15.17 dB SI-SDR",
        "status": "interference reduced",
        "scores": {
          "wesep": 7.895272225141525,
          "wesep_ft": -18.45179095864296,
          "usef": 16.646691411733627,
          "usef_ft": 16.678387969732285,
          "meanflow_original": -39.75209727883339,
          "meanflow_mixed": -50.09109511971474,
          "sykitse": 16.6930590569973
        },
        "finalSiSdr": 15.167557001113892,
        "interfererAttenuation": 11.980320806635753,
        "targetToInterferer": 16.296953772860864
      },
      {
        "id": "main-card2-04",
        "sample": "librimix360val_card2__val_00866_4356-6506-0044_288-131218-0029_s1",
        "source": "LibriMix360 validation",
        "title": "LibriMix360 validation evaluation sample",
        "badge": "Final 26.40 dB SI-SDR",
        "status": "interference reduced",
        "scores": {
          "wesep": 24.93270650971681,
          "wesep_ft": 24.68380466569215,
          "usef": 18.692103778012097,
          "usef_ft": 20.249304925091565,
          "meanflow_original": 26.341171418316662,
          "meanflow_mixed": 24.36372057069093,
          "sykitse": 26.341171418316662
        },
        "finalSiSdr": 26.404590606689453,
        "interfererAttenuation": 43.56075205265558,
        "targetToInterferer": 45.24370326086177
      },
      {
        "id": "main-card2-05",
        "sample": "card2_fixed_v3__card2_routeeasy_v3_mix0023_spk1",
        "source": "Fixed held-out",
        "title": "Fixed held-out evaluation sample",
        "badge": "Final 26.00 dB SI-SDR",
        "status": "interference reduced",
        "scores": {
          "wesep": 16.57984584569931,
          "wesep_ft": 17.65314429998398,
          "usef": -9.917056262493134,
          "usef_ft": 18.91474336385727,
          "meanflow_original": 22.665677964687347,
          "meanflow_mixed": 21.70256942510605,
          "sykitse": 22.665677964687347
        },
        "finalSiSdr": 25.99522829055786,
        "interfererAttenuation": 30.891152837918213,
        "targetToInterferer": 39.59300206329366
      }
    ]
  },
  {
    "id": "main-three",
    "shortLabel": "Main / 3-spk",
    "title": "Main comparison: three speakers",
    "summary": "Five high-quality cases from the same full comparison suite, now with two interfering speakers. Every system receives the same mixture and enrollment utterance.",
    "columns": 5,
    "metrics": [
      {
        "label": "MeanFlow",
        "value": 6.719,
        "unit": "dB"
      },
      {
        "label": "Mixed-count",
        "value": 12.735,
        "unit": "dB"
      },
      {
        "label": "SykiTSE-MoE",
        "value": 13.779,
        "unit": "dB"
      }
    ],
    "tracks": [
      {
        "id": "prompt",
        "role": "enrollment",
        "label": "Speaker prompt",
        "detail": "Target enrollment utterance",
        "file": "prompt.wav"
      },
      {
        "id": "mixture",
        "role": "mixture",
        "label": "Mixture",
        "detail": "Input mixture",
        "file": "mixture.wav"
      },
      {
        "id": "wesep",
        "role": "comparison",
        "label": "Official WeSep",
        "detail": "Official checkpoint",
        "file": "wesep.wav"
      },
      {
        "id": "wesep_ft",
        "role": "comparison",
        "label": "WeSep same-data FT",
        "detail": "Fine-tuned on the matched training pool",
        "file": "wesep_ft.wav"
      },
      {
        "id": "usef",
        "role": "comparison",
        "label": "USEF-TSE",
        "detail": "Official checkpoint",
        "file": "usef.wav"
      },
      {
        "id": "usef_ft",
        "role": "comparison",
        "label": "USEF mixed-count FT",
        "detail": "Fine-tuned on 1/2/3/4-speaker mixtures",
        "file": "usef_ft.wav"
      },
      {
        "id": "meanflow_original",
        "role": "comparison",
        "label": "MeanFlow-TSE",
        "detail": "Official checkpoint",
        "file": "meanflow_original.wav"
      },
      {
        "id": "meanflow_mixed",
        "role": "baseline",
        "label": "MeanFlow mixed-count FT",
        "detail": "One model for 1/2/3/4 speakers",
        "file": "meanflow_mixed.wav"
      },
      {
        "id": "sykitse",
        "role": "ours",
        "label": "SykiTSE-MoE",
        "detail": "Count-specific path with local verification",
        "file": "sykitse.wav"
      },
      {
        "id": "target",
        "role": "target",
        "label": "Clean target",
        "detail": "Reference only; never used at inference",
        "file": "target.wav"
      }
    ],
    "cases": [
      {
        "id": "main-card3-01",
        "sample": "card3_heldout__card3_mix0023_spk1",
        "source": "Held-out LibriSpeech",
        "title": "Held-out LibriSpeech evaluation sample",
        "badge": "Final 18.76 dB SI-SDR",
        "status": "interference reduced",
        "scores": {
          "wesep": 7.191542387008667,
          "wesep_ft": 16.17292284965515,
          "usef": 11.779640913009644,
          "usef_ft": 18.680055141448975,
          "meanflow_original": 5.573674440383911,
          "meanflow_mixed": 17.331104278564453,
          "sykitse": 17.377463579177856
        },
        "finalSiSdr": 18.761945962905884,
        "interfererAttenuation": 18.322949768470828,
        "targetToInterferer": 25.510478480373756
      },
      {
        "id": "main-card3-02",
        "sample": "card3_heldout__card3_mix0002_spk1",
        "source": "Held-out LibriSpeech",
        "title": "Held-out LibriSpeech evaluation sample",
        "badge": "Final 17.13 dB SI-SDR",
        "status": "interference reduced",
        "scores": {
          "wesep": 4.661980867385864,
          "wesep_ft": 14.360763430595398,
          "usef": 6.987600922584534,
          "usef_ft": 14.81004536151886,
          "meanflow_original": 4.891617298126221,
          "meanflow_mixed": 13.900776505470276,
          "sykitse": 15.205431580543518
        },
        "finalSiSdr": 17.133175134658813,
        "interfererAttenuation": 23.397161605790163,
        "targetToInterferer": 29.437721114334508
      },
      {
        "id": "main-card3-03",
        "sample": "card3_heldout__card3_mix0016_spk1",
        "source": "Held-out LibriSpeech",
        "title": "Held-out LibriSpeech evaluation sample",
        "badge": "Final 17.61 dB SI-SDR",
        "status": "interference reduced",
        "scores": {
          "wesep": 10.45846939086914,
          "wesep_ft": 15.533446073532104,
          "usef": 5.38953423500061,
          "usef_ft": 16.123299598693848,
          "meanflow_original": 7.005276083946228,
          "meanflow_mixed": 15.268604755401611,
          "sykitse": 16.126606464385986
        },
        "finalSiSdr": 17.612106800079346,
        "interfererAttenuation": 22.904934249907328,
        "targetToInterferer": 27.535235278583347
      },
      {
        "id": "main-card3-04",
        "sample": "card3_random__card3_mix0013_spk1",
        "source": "Unseen LibriSpeech",
        "title": "Unseen LibriSpeech evaluation sample",
        "badge": "Final 17.06 dB SI-SDR",
        "status": "interference reduced",
        "scores": {
          "wesep": 4.2881906777620316,
          "wesep_ft": 10.474262908101082,
          "usef": 3.835441842675209,
          "usef_ft": 16.816039755940437,
          "meanflow_original": 13.743929341435432,
          "meanflow_mixed": 16.266360953450203,
          "sykitse": 16.394721940159798
        },
        "finalSiSdr": 17.060359716415405,
        "interfererAttenuation": 19.922549455485598,
        "targetToInterferer": 26.05283907333831
      },
      {
        "id": "main-card3-05",
        "sample": "card3_heldout__card3_mix0022_spk1",
        "source": "Held-out LibriSpeech",
        "title": "Held-out LibriSpeech evaluation sample",
        "badge": "Final 16.74 dB SI-SDR",
        "status": "interference reduced",
        "scores": {
          "wesep": 5.932993367314339,
          "wesep_ft": 15.421466305851936,
          "usef": 6.9418466836214066,
          "usef_ft": 15.31702347099781,
          "meanflow_original": -4.464414641261101,
          "meanflow_mixed": 15.843641236424446,
          "sykitse": 16.299521401524544
        },
        "finalSiSdr": 16.742159128189087,
        "interfererAttenuation": 19.89233549172647,
        "targetToInterferer": 25.091937824662466
      }
    ]
  },
  {
    "id": "ablation-two",
    "shortLabel": "Ablation / 2-spk",
    "title": "Ablation: Exact-Anchor two-slot selection",
    "summary": "Five genuine second-slot rescues from an independently seeded blind set. The frozen two-speaker anchor locks onto the wrong speaker, while enrollment similarity selects the complementary slot.",
    "columns": 3,
    "metrics": [
      {
        "label": "Mixed-count",
        "value": 17.312,
        "unit": "dB"
      },
      {
        "label": "2-spk expert",
        "value": 19.015,
        "unit": "dB"
      },
      {
        "label": "+ Exact-Anchor",
        "value": 19.161,
        "unit": "dB"
      }
    ],
    "tracks": [
      {
        "id": "prompt",
        "role": "enrollment",
        "label": "Speaker prompt",
        "detail": "Target enrollment utterance",
        "file": "prompt.wav"
      },
      {
        "id": "mixture",
        "role": "mixture",
        "label": "Mixture",
        "detail": "Input mixture",
        "file": "mixture.wav"
      },
      {
        "id": "meanflow_mixed",
        "role": "baseline",
        "label": "MeanFlow mixed-count FT",
        "detail": "Mixed-count control",
        "file": "meanflow_mixed.wav"
      },
      {
        "id": "expert",
        "role": "expert",
        "label": "2-spk expert",
        "detail": "Frozen official MeanFlow anchor",
        "file": "expert.wav"
      },
      {
        "id": "sykitse",
        "role": "ours",
        "label": "+ Exact-Anchor",
        "detail": "Enrollment-matched slot selected",
        "file": "sykitse.wav"
      },
      {
        "id": "target",
        "role": "target",
        "label": "Clean target",
        "detail": "Reference only; never used at inference",
        "file": "target.wav"
      }
    ],
    "cases": [
      {
        "id": "ablation-two-anchor-01",
        "sample": "pair14181_945ed943099f",
        "source": "Blind25600-A",
        "title": "Blind25600-A evaluation sample",
        "badge": "Final 21.67 dB SI-SDR",
        "scores": {
          "meanflow_mixed": -28.310873731970787,
          "expert": -28.25981877744198,
          "sykitse": 20.971357598900795
        },
        "finalSiSdr": 21.673221588134766,
        "interfererAttenuation": 41.002219757908435,
        "targetToInterferer": 47.47457424722573,
        "status": "slot 1 selected"
      },
      {
        "id": "ablation-two-anchor-02",
        "sample": "pair0239_2c0449961aeb",
        "source": "Blind25600-A",
        "title": "Blind25600-A evaluation sample",
        "badge": "Final 21.51 dB SI-SDR",
        "scores": {
          "meanflow_mixed": 20.08284240961075,
          "expert": -36.67209476232529,
          "sykitse": 19.219047129154205
        },
        "finalSiSdr": 21.50516986846924,
        "interfererAttenuation": 16.482131959703924,
        "targetToInterferer": 24.548246286771732,
        "status": "slot 1 selected"
      },
      {
        "id": "ablation-two-anchor-03",
        "sample": "pair4991_04c23365502f",
        "source": "Blind25600-A",
        "title": "Blind25600-A evaluation sample",
        "badge": "Final 22.12 dB SI-SDR",
        "scores": {
          "meanflow_mixed": 11.513631939888,
          "expert": -38.234283328056335,
          "sykitse": 17.496681809425354
        },
        "finalSiSdr": 22.11555242538452,
        "interfererAttenuation": 19.37858735023053,
        "targetToInterferer": 29.7519654708996,
        "status": "slot 1 selected"
      },
      {
        "id": "ablation-two-anchor-04",
        "sample": "pair14088_70f39a8277cc",
        "source": "Blind25600-A",
        "title": "Blind25600-A evaluation sample",
        "badge": "Final 22.09 dB SI-SDR",
        "scores": {
          "meanflow_mixed": -42.70850986242294,
          "expert": -34.729269444942474,
          "sykitse": 19.68696266412735
        },
        "finalSiSdr": 22.089543342590332,
        "interfererAttenuation": 17.100151746011104,
        "targetToInterferer": 25.101936610711526,
        "status": "slot 1 selected"
      },
      {
        "id": "ablation-two-anchor-05",
        "sample": "pair9668_b22064106ff6",
        "source": "Blind25600-A",
        "title": "Blind25600-A evaluation sample",
        "badge": "Final 20.20 dB SI-SDR",
        "scores": {
          "meanflow_mixed": -34.59254205226898,
          "expert": -40.98792254924774,
          "sykitse": 16.70319139957428
        },
        "finalSiSdr": 20.20071268081665,
        "interfererAttenuation": 32.91380198543415,
        "targetToInterferer": 42.05254492723226,
        "status": "slot 1 selected"
      }
    ]
  },
  {
    "id": "ablation-three",
    "shortLabel": "Ablation / 3-spk",
    "title": "Ablation: speaker-aware reference reranking",
    "summary": "Five genuine post-freeze switches from independent blind sets. The full-reference expert locks onto the wrong speaker, and the frozen verifier selects a cleaner enrollment view without using the target signal.",
    "columns": 3,
    "metrics": [
      {
        "label": "Mixed-count",
        "value": 12.735,
        "unit": "dB"
      },
      {
        "label": "3-spk expert",
        "value": 13.662,
        "unit": "dB"
      },
      {
        "label": "+ Reranking",
        "value": 13.779,
        "unit": "dB"
      }
    ],
    "tracks": [
      {
        "id": "prompt",
        "role": "enrollment",
        "label": "Speaker prompt",
        "detail": "Target enrollment utterance",
        "file": "prompt.wav"
      },
      {
        "id": "mixture",
        "role": "mixture",
        "label": "Mixture",
        "detail": "Input mixture",
        "file": "mixture.wav"
      },
      {
        "id": "meanflow_mixed",
        "role": "baseline",
        "label": "MeanFlow mixed-count FT",
        "detail": "Mixed-count control",
        "file": "meanflow_mixed.wav"
      },
      {
        "id": "expert",
        "role": "expert",
        "label": "3-spk expert",
        "detail": "Full-reference output",
        "file": "expert.wav"
      },
      {
        "id": "reranked",
        "role": "ours",
        "label": "+ Reference reranking",
        "detail": "Frozen speaker-aware verifier",
        "file": "reranked.wav"
      },
      {
        "id": "target",
        "role": "target",
        "label": "Clean target",
        "detail": "Reference only; never used at inference",
        "file": "target.wav"
      }
    ],
    "cases": [
      {
        "id": "ablation-three-rerank-13778",
        "sample": "pair13778_b2179dee2492",
        "source": "Blind25600-A",
        "title": "Blind25600-A evaluation sample",
        "badge": "Final 14.19 dB SI-SDR",
        "scores": {
          "meanflow_mixed": 14.325606226921082,
          "expert": -23.590615391731262,
          "reranked": 15.332812666893005
        },
        "finalSiSdr": 14.19137716293335,
        "interfererAttenuation": 21.70489477676428,
        "targetToInterferer": 23.842606561463974,
        "status": "middle view selected",
        "trackDetails": {
          "reranked": "Middle view selected by the frozen verifier"
        }
      },
      {
        "id": "ablation-three-rerank-11187",
        "sample": "pair11187_345c375592a2",
        "source": "Blind12800",
        "title": "Blind12800 evaluation sample",
        "badge": "Final 16.81 dB SI-SDR",
        "scores": {
          "meanflow_mixed": 4.3148913979530334,
          "expert": -21.784670650959015,
          "reranked": 16.091985404491425
        },
        "finalSiSdr": 16.814427375793457,
        "interfererAttenuation": 19.603362916401757,
        "targetToInterferer": 23.268444389054114,
        "status": "middle view selected",
        "trackDetails": {
          "reranked": "Middle view selected by the frozen verifier"
        }
      },
      {
        "id": "ablation-three-rerank-06155",
        "sample": "pair6155_fd2052c35058",
        "source": "Blind25600-B",
        "title": "Blind25600-B evaluation sample",
        "badge": "Final 14.33 dB SI-SDR",
        "scores": {
          "meanflow_mixed": 12.770877722650766,
          "expert": -13.6904720030725,
          "reranked": 14.16861379519105
        },
        "finalSiSdr": 14.326685667037964,
        "interfererAttenuation": 19.51661640141032,
        "targetToInterferer": 22.868715050463354,
        "status": "first view selected",
        "trackDetails": {
          "reranked": "First view selected by the frozen verifier"
        }
      },
      {
        "id": "ablation-three-rerank-22207",
        "sample": "pair22207_355da4045754",
        "source": "Blind25600-B",
        "title": "Blind25600-B evaluation sample",
        "badge": "Final 13.34 dB SI-SDR",
        "scores": {
          "meanflow_mixed": -29.434187710285187,
          "expert": -19.783747494220734,
          "reranked": 12.580078542232513
        },
        "finalSiSdr": 13.34318995475769,
        "interfererAttenuation": 17.182300647610433,
        "targetToInterferer": 22.58194164220069,
        "status": "energy view selected",
        "trackDetails": {
          "reranked": "Energy view selected by the frozen verifier"
        }
      },
      {
        "id": "ablation-three-rerank-20944",
        "sample": "pair20944_66a000e742df",
        "source": "Blind25600-B",
        "title": "Blind25600-B evaluation sample",
        "badge": "Final 13.83 dB SI-SDR",
        "scores": {
          "meanflow_mixed": -5.6119634583592415,
          "expert": -23.455845303833485,
          "reranked": 14.304604344069958
        },
        "finalSiSdr": 13.832727670669556,
        "interfererAttenuation": 17.726112806129898,
        "targetToInterferer": 22.052690981967963,
        "status": "75% view selected",
        "trackDetails": {
          "reranked": "75% view selected by the frozen verifier"
        }
      }
    ]
  }
];
