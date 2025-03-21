// conjugation.js
function getConjV(word, stem, type, ruletype) {
  if (ruletype === "no") {
    return {};
    // 以下は動詞の活用
  } else if (ruletype === "vl0") {
    return {
      // 単純相
      vpa0: stem,
      vpr0: stem + "ot",
      vf0: stem + "ist",
      vpa1: stem + "zis",
      vpr1: stem + "siot",
      vf1: stem + "sty",
      vpa2: stem + "dis",
      vpr2: stem + "tiot",
      vf2: stem + "cy",
    };
  } else if (ruletype === "vz0") {
    return {
      vpa0: stem,
      vpr0: stem + "ol",
      vf0: stem + "daj",
      vpa1: stem + "zis",
      vpr1: stem + "ziol",
      vf1: stem + "zdaj",
      vpa2: stem + "dis",
      vpr2: stem + "diol",
      vf2: stem + "diaj",
    };
  }
}