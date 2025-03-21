// conjugation.js
function getConjA(word, stem, type, ruletype) {
    if (ruletype === "no") {
      return {};
    } else if (ruletype === "c0") {        
      return {
        s: stem + "ui",
        p: stem + "tia",
        s2: stem + "onna",
        p2: stem + "ontia",
        s3: stem + "uiska",
        p3: stem + "uistia",
        fs: stem + "afi",
        fp: stem + "aftia",
        fs2: stem + "afna",
        fp2: stem + "afniati",
        fs3: stem + "afuiska",
        fp3: stem + "afuistia",
        es: stem + "ol",
        ep: stem + "ottia",
        es2: stem + "onna",
        ep2: stem + "onnuiy",
        es3: stem + "oluiska",
        ep3: stem + "oluistia",
        ds: stem + "ies",
        dp: stem + "iestia",
        ds2: stem + "ienna",
        dp2: stem + "iestia",
        ds3: stem + "iesska",
        dp3: stem + "iesstia",
        ads: stem + "iup",
        adp: stem + "iuptia",
        ads2: stem + "iupnui",
        adp2: stem + "iuptia",
        ads3: stem + "iupuiska",
        adp3: stem + "iupuista",
        nar: stem + "irus",
      };
    }
  }