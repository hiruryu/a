// conjugation.js
function getConjA(word, stem, type, ruletype) {
    if (ruletype === "no") {
      return {};
    } else if (ruletype === "c0") {        
      return {
        s: stem + "ui",
        s2: stem + "onna",
        s3: stem + "uiska",
        fs: stem + "afi",
        fs2: stem + "afna",
        fs3: stem + "afuiska",
        es: stem + "ol",
        es2: stem + "onna",
        es3: stem + "oluiska",
        ds: stem + "ies",
        ds2: stem + "ienna",
        ds3: stem + "iesska",
        ads: stem + "iup",
        ads2: stem + "iupnui",
        ads3: stem + "iupuiska",
        nar: stem + "irus",
      };
    }
  }
