// conjugation.js
function getConjN(word, stem, stem2, type, ruletype) {
  if (ruletype === "x") {
    return {};
  } else if (ruletype === "na") {
    // 弱 a 基本型 (na)
    let andC = stem + "sa";         
    let anpC = stem + "tas";         
    let adsC = stem + "óla";      // adsCを定義 
    let addC = stem + "óssa";      
    let adpC = stem + "ótta";      
    let ansI = stem + "ika";      // ansIを定義
    let andI = stem + "iksa";
    let anpI = stem + "iktas";
    let adsI = stem + "ikola";    // adsIも定義
    let addI = stem + "ikossa";
    let adpI = stem + "ikotta";

    return {
      ansC: (word.slice(-1) === "a" ? stem + "a" : stem),
      f_ansC: stem + "af",
      e_ansC: stem + "on",
      d_ansC: stem + "e",
      ad_ansC: stem + "ūt",
      g_ansC: stem + "oy",
      v_ansC: stem + "agh",
      in_ansC: stem + "iax",
      // 非限定形可視双数形
      andC: andC,
      f_andC: andC.slice(0, -1) + "af",
      e_andC: andC.slice(0, -1) + "on",
      d_andC: andC.slice(0, -1) + "e",
      ad_andC: andC.slice(0, -1) + "ūt",
      g_andC: andC.slice(0, -1) + "oy",
      v_andC: andC.slice(0, -1) + "agh",
      in_andC: andC.slice(0, -1) + "iax",
      // 非限定形可視複数形
      anpC: anpC,
      f_anpC: anpC.slice(0, -1) + "f",
      e_anpC: anpC.slice(0, -2) + "on",
      d_anpC: anpC.slice(0, -2) + "e",
      ad_anpC: anpC.slice(0, -2) + "ūt",
      g_anpC: anpC.slice(0, -2) + "oy",
      v_anpC: anpC.slice(0, -2) + "agh",
      in_anpC: anpC.slice(0, -2) + "iax",

      // 限定形可視単数形
      adsC: adsC,
      f_adsC: adsC.slice(0, -1) + "af",
      e_adsC: adsC.slice(0, -1) + "on",
      d_adsC: adsC.slice(0, -1) + "e",
      ad_adsC: adsC.slice(0, -1) + "ūt",
      g_adsC: adsC.slice(0, -1) + "oy",
      v_adsC: adsC.slice(0, -1) + "agh",
      in_adsC: adsC.slice(0, -1) + "iax",
      // 限定形可視双数形
      addC: addC,
      f_addC: addC.slice(0, -1) + "af",
      e_addC: addC.slice(0, -1) + "on",
      d_addC: addC.slice(0, -1) + "e",
      ad_addC: addC.slice(0, -1) + "ūt",
      g_addC: addC.slice(0, -1) + "oy",
      v_addC: addC.slice(0, -1) + "agh",
      in_addC: addC.slice(0, -1) + "iax",
      // 限定形可視複数形
      adpC: adpC,
      f_adpC: adpC.slice(0, -1) + "af",
      e_adpC: adpC.slice(0, -1) + "on",
      d_adpC: adpC.slice(0, -1) + "e",
      ad_adpC: adpC.slice(0, -1) + "ūt",
      g_adpC: adpC.slice(0, -1) + "oy",
      v_adpC: adpC.slice(0, -1) + "agh",
      in_adpC: adpC.slice(0, -1) + "iax",

      // 非限定形不可視単数形
      ansI: ansI,  
      f_ansI: ansI.slice(0, -1) + "af",
      e_ansI: ansI.slice(0, -1) + "on",
      d_ansI: ansI.slice(0, -1) + "e",
      ad_ansI: ansI.slice(0, -1) + "ūt",
      g_ansI: ansI.slice(0, -1) + "oy",
      v_ansI: ansI.slice(0, -1) + "agh",
      in_ansI: ansI.slice(0, -1) + "iax", 
      // 非限定形不可視双数形
      andI: andI,
      f_andI: andI.slice(0, -1) + "af",
      e_andI: andI.slice(0, -1) + "on",
      d_andI: andI.slice(0, -1) + "e",
      ad_andI: andI.slice(0, -1) + "ūt",
      g_andI: andI.slice(0, -1) + "oy",
      v_andI: andI.slice(0, -1) + "agh",
      in_andI: andI.slice(0, -1) + "iax",
      // 非限定形不可視複数形
      anpI: anpI,
      f_anpI: anpI.slice(0, -2) + "af",
      e_anpI: anpI.slice(0, -2) + "on",
      d_anpI: anpI.slice(0, -2) + "e",
      ad_anpI: anpI.slice(0, -2) + "ūt",
      g_anpI: anpI.slice(0, -2) + "oy",
      v_anpI: anpI.slice(0, -2) + "agh",
      in_anpI: anpI.slice(0, -2) + "iax",

       // 限定形不可視単数形
      adsI: adsI,
      f_adsI: adsI.slice(0, -1) + "af",
      e_adsI: adsI.slice(0, -1) + "on",
      d_adsI: adsI.slice(0, -1) + "e",
      ad_adsI: adsI.slice(0, -1) + "ūt",
      g_adsI: adsI.slice(0, -1) + "oy",
      v_adsI: adsI.slice(0, -1) + "agh",
      in_adsI: adsI.slice(0, -1) + "iax",
      // 限定形不可視双数形
      addI: addI,
      f_addI: addI.slice(0, -1) + "af",
      e_addI: addI.slice(0, -1) + "on",
      d_addI: addI.slice(0, -1) + "e",
      ad_addI: addI.slice(0, -1) + "ūt",
      g_addI: addI.slice(0, -1) + "oy",
      v_addI: addI.slice(0, -1) + "agh",
      in_addI: addI.slice(0, -1) + "iax",
      // 限定形不可視複数形
      adpI: adpI,
      f_adpI: adpI.slice(0, -1) + "af",
      e_adpI: adpI.slice(0, -1) + "on",
      d_adpI: adpI.slice(0, -1) + "e",
      ad_adpI: adpI.slice(0, -1) + "ūt",
      g_adpI: adpI.slice(0, -1) + "oy",
      v_adpI: adpI.slice(0, -1) + "agh",
      in_adpI: adpI.slice(0, -1) + "iax",
    };
  } else if (ruletype === "nha") {
    // 弱 a 軟型 (nha)
    let andC = stem + "s";
    if (word === "pip") {
      andC = stem.slice(0, -1) + "sp";
    }
    if (word === "dapna") {
      andC = stem.slice(0, -1) + "s";
    }
    let anpC = stem + "tas";
    if (word === "dapna") {
      anpC = stem.slice(0, -1) + "tas";
    }
    let adsC = stem2 + "óla";      // adsCを定義 
    let addC = stem2 + "óssa";      
    let adpC = stem2 + "ótta";      
    let ansI = stem2 + "hiḗva";      // ansIを定義
    let andI = stem2 + "hiḗvsa";
    let anpI = stem2 + "hiḗvtas";
    let adsI = stem2 + "hiḗvolà";    // adsIも定義
    let addI = stem2 + "hiḗvossà";
    let adpI = stem2 + "hiḗvottà";
  
      return {
        ansC: (word.slice(-1) === "a" ? stem + "a" : stem),
        f_ansC: stem + "af",
        e_ansC: stem + "on",
        d_ansC: stem + "e",
        ad_ansC: stem + "ūt",
        g_ansC: stem + "oy",
        v_ansC: stem + "agh",
        in_ansC: stem + "iax",
        // 非限定形可視双数形
        andC: andC + "a",
        f_andC: andC + "af",
        e_andC: andC + "on",
        d_andC: andC + "e",
        ad_andC: andC + "ūt",
        g_andC: andC + "oy",
        v_andC: andC + "agh",
        in_andC: andC + "iax",
        // 非限定形可視複数形
        anpC: anpC,
        f_anpC: anpC.slice(0, -1) + "f",
        e_anpC: anpC.slice(0, -2) + "on",
        d_anpC: anpC.slice(0, -2) + "e",
        ad_anpC: anpC.slice(0, -2) + "ūt",
        g_anpC: anpC.slice(0, -2) + "oy",
        v_anpC: anpC.slice(0, -2) + "agh",
        in_anpC: anpC.slice(0, -2) + "iax",
  
        // 限定形可視単数形
        adsC: adsC,
        f_adsC: adsC.slice(0, -1) + "af",
        e_adsC: adsC.slice(0, -1) + "on",
        d_adsC: adsC.slice(0, -1) + "e",
        ad_adsC: adsC.slice(0, -1) + "ūt",
        g_adsC: adsC.slice(0, -1) + "oy",
        v_adsC: adsC.slice(0, -1) + "agh",
        in_adsC: adsC.slice(0, -1) + "iax",
        // 限定形可視双数形
        addC: addC,
        f_addC: addC.slice(0, -1) + "af",
        e_addC: addC.slice(0, -1) + "on",
        d_addC: addC.slice(0, -1) + "e",
        ad_addC: addC.slice(0, -1) + "ūt",
        g_addC: addC.slice(0, -1) + "oy",
        v_addC: addC.slice(0, -1) + "agh",
        in_addC: addC.slice(0, -1) + "iax",
        // 限定形可視複数形
        adpC: adpC,
        f_adpC: adpC.slice(0, -1) + "af",
        e_adpC: adpC.slice(0, -1) + "on",
        d_adpC: adpC.slice(0, -1) + "e",
        ad_adpC: adpC.slice(0, -1) + "ūt",
        g_adpC: adpC.slice(0, -1) + "oy",
        v_adpC: adpC.slice(0, -1) + "agh",
        in_adpC: adpC.slice(0, -1) + "iax",
  
        // 非限定形不可視単数形
        ansI: ansI,  
        f_ansI: ansI.slice(0, -1) + "af",
        e_ansI: ansI.slice(0, -1) + "on",
        d_ansI: ansI.slice(0, -1) + "e",
        ad_ansI: ansI.slice(0, -1) + "ūt",
        g_ansI: ansI.slice(0, -1) + "oy",
        v_ansI: ansI.slice(0, -1) + "agh",
        in_ansI: ansI.slice(0, -1) + "iax", 
        // 非限定形不可視双数形
        andI: andI,
        f_andI: andI.slice(0, -1) + "af",
        e_andI: andI.slice(0, -1) + "on",
        d_andI: andI.slice(0, -1) + "e",
        ad_andI: andI.slice(0, -1) + "ūt",
        g_andI: andI.slice(0, -1) + "oy",
        v_andI: andI.slice(0, -1) + "agh",
        in_andI: andI.slice(0, -1) + "iax",
        // 非限定形不可視複数形
        anpI: anpI,
        f_anpI: anpI.slice(0, -2) + "af",
        e_anpI: anpI.slice(0, -2) + "on",
        d_anpI: anpI.slice(0, -2) + "e",
        ad_anpI: anpI.slice(0, -2) + "ūt",
        g_anpI: anpI.slice(0, -2) + "oy",
        v_anpI: anpI.slice(0, -2) + "agh",
        in_anpI: anpI.slice(0, -2) + "iax",
  
         // 限定形不可視単数形
        adsI: adsI,
        f_adsI: adsI.slice(0, -1) + "af",
        e_adsI: adsI.slice(0, -1) + "on",
        d_adsI: adsI.slice(0, -1) + "e",
        ad_adsI: adsI.slice(0, -1) + "ūt",
        g_adsI: adsI.slice(0, -1) + "oy",
        v_adsI: adsI.slice(0, -1) + "agh",
        in_adsI: adsI.slice(0, -1) + "iax",
        // 限定形不可視双数形
        addI: addI,
        f_addI: addI.slice(0, -1) + "af",
        e_addI: addI.slice(0, -1) + "on",
        d_addI: addI.slice(0, -1) + "e",
        ad_addI: addI.slice(0, -1) + "ūt",
        g_addI: addI.slice(0, -1) + "oy",
        v_addI: addI.slice(0, -1) + "agh",
        in_addI: addI.slice(0, -1) + "iax",
        // 限定形不可視複数形
        adpI: adpI,
        f_adpI: adpI.slice(0, -1) + "af",
        e_adpI: adpI.slice(0, -1) + "on",
        d_adpI: adpI.slice(0, -1) + "e",
        ad_adpI: adpI.slice(0, -1) + "ūt",
        g_adpI: adpI.slice(0, -1) + "oy",
        v_adpI: adpI.slice(0, -1) + "agh",
        in_adpI: adpI.slice(0, -1) + "iax",
      };
  } else if (ruletype === "nfha") {
      // fa 軟音化型 (nha)
      let andC = stem + "s";
      let anpC = stem + "tas";
      let adsC = stem + "la";      // adsCを定義 
      let addC = stem + "ssa";      
      let adpC = stem + "tta";      
      let ansI = stem + "hjēva";      // ansIを定義
      let andI = stem + "hjēvsa";
      let anpI = stem + "hjēvtas";
      let adsI = stem + "hjēvolà";    // adsIも定義
      let addI = stem + "hjēvossà";
      let adpI = stem + "hjēvottà";
    
        return {
          ansC: (word.slice(-1) === "a" ? stem + "a" : stem),
          f_ansC: stem + "af",
          e_ansC: stem + "on",
          d_ansC: stem + "e",
          ad_ansC: stem + "ūt",
          g_ansC: stem + "oy",
          v_ansC: stem + "agh",
          in_ansC: stem + "iax",
          // 非限定形可視双数形
          andC: andC + "a",
          f_andC: andC + "af",
          e_andC: andC + "on",
          d_andC: andC + "e",
          ad_andC: andC + "ūt",
          g_andC: andC + "oy",
          v_andC: andC + "agh",
          in_andC: andC + "iax",
          // 非限定形可視複数形
          anpC: anpC,
          f_anpC: anpC.slice(0, -1) + "f",
          e_anpC: anpC.slice(0, -2) + "on",
          d_anpC: anpC.slice(0, -2) + "e",
          ad_anpC: anpC.slice(0, -2) + "ūt",
          g_anpC: anpC.slice(0, -2) + "oy",
          v_anpC: anpC.slice(0, -2) + "agh",
          in_anpC: anpC.slice(0, -2) + "iax",
    
          // 限定形可視単数形
          adsC: adsC,
          f_adsC: adsC.slice(0, -1) + "af",
          e_adsC: adsC.slice(0, -1) + "on",
          d_adsC: adsC.slice(0, -1) + "e",
          ad_adsC: adsC.slice(0, -1) + "ūt",
          g_adsC: adsC.slice(0, -1) + "oy",
          v_adsC: adsC.slice(0, -1) + "agh",
          in_adsC: adsC.slice(0, -1) + "iax",
          // 限定形可視双数形
          addC: addC,
          f_addC: addC.slice(0, -1) + "af",
          e_addC: addC.slice(0, -1) + "on",
          d_addC: addC.slice(0, -1) + "e",
          ad_addC: addC.slice(0, -1) + "ūt",
          g_addC: addC.slice(0, -1) + "oy",
          v_addC: addC.slice(0, -1) + "agh",
          in_addC: addC.slice(0, -1) + "iax",
          // 限定形可視複数形
          adpC: adpC,
          f_adpC: adpC.slice(0, -1) + "af",
          e_adpC: adpC.slice(0, -1) + "on",
          d_adpC: adpC.slice(0, -1) + "e",
          ad_adpC: adpC.slice(0, -1) + "ūt",
          g_adpC: adpC.slice(0, -1) + "oy",
          v_adpC: adpC.slice(0, -1) + "agh",
          in_adpC: adpC.slice(0, -1) + "iax",
    
          // 非限定形不可視単数形
          ansI: ansI,  
          f_ansI: ansI.slice(0, -1) + "af",
          e_ansI: ansI.slice(0, -1) + "on",
          d_ansI: ansI.slice(0, -1) + "e",
          ad_ansI: ansI.slice(0, -1) + "ūt",
          g_ansI: ansI.slice(0, -1) + "oy",
          v_ansI: ansI.slice(0, -1) + "agh",
          in_ansI: ansI.slice(0, -1) + "iax", 
          // 非限定形不可視双数形
          andI: andI,
          f_andI: andI.slice(0, -1) + "af",
          e_andI: andI.slice(0, -1) + "on",
          d_andI: andI.slice(0, -1) + "e",
          ad_andI: andI.slice(0, -1) + "ūt",
          g_andI: andI.slice(0, -1) + "oy",
          v_andI: andI.slice(0, -1) + "agh",
          in_andI: andI.slice(0, -1) + "iax",
          // 非限定形不可視複数形
          anpI: anpI,
          f_anpI: anpI.slice(0, -2) + "af",
          e_anpI: anpI.slice(0, -2) + "on",
          d_anpI: anpI.slice(0, -2) + "e",
          ad_anpI: anpI.slice(0, -2) + "ūt",
          g_anpI: anpI.slice(0, -2) + "oy",
          v_anpI: anpI.slice(0, -2) + "agh",
          in_anpI: anpI.slice(0, -2) + "iax",
    
           // 限定形不可視単数形
          adsI: adsI,
          f_adsI: adsI.slice(0, -1) + "af",
          e_adsI: adsI.slice(0, -1) + "on",
          d_adsI: adsI.slice(0, -1) + "e",
          ad_adsI: adsI.slice(0, -1) + "ūt",
          g_adsI: adsI.slice(0, -1) + "oy",
          v_adsI: adsI.slice(0, -1) + "agh",
          in_adsI: adsI.slice(0, -1) + "iax",
          // 限定形不可視双数形
          addI: addI,
          f_addI: addI.slice(0, -1) + "af",
          e_addI: addI.slice(0, -1) + "on",
          d_addI: addI.slice(0, -1) + "e",
          ad_addI: addI.slice(0, -1) + "ūt",
          g_addI: addI.slice(0, -1) + "oy",
          v_addI: addI.slice(0, -1) + "agh",
          in_addI: addI.slice(0, -1) + "iax",
          // 限定形不可視複数形
          adpI: adpI,
          f_adpI: adpI.slice(0, -1) + "af",
          e_adpI: adpI.slice(0, -1) + "on",
          d_adpI: adpI.slice(0, -1) + "e",
          ad_adpI: adpI.slice(0, -1) + "ūt",
          g_adpI: adpI.slice(0, -1) + "oy",
          v_adpI: adpI.slice(0, -1) + "agh",
          in_adpI: adpI.slice(0, -1) + "iax",
        };
  } else if (ruletype === "nsta") {
      // 弱 a 複子音型 (nsta)
      let andC = stem + "s";    
      let anpC = stem + "tas";      
      let adsC = stem + "ola";      // adsCを定義 
      let addC = stem + "ossa";      
      let adpC = stem + "otta";      
      let ansI = stem + "hiēva";      // ansIを定義
      let andI = stem + "hiēvsa";
      let anpI = stem + "hiēvtas";
      let adsI = stem + "hiēvolà";    // adsIも定義
      let addI = stem + "hiēvossà";
      let adpI = stem + "hiēvottà";
  
      return {
        ansC: (word.slice(-1) === "a" ? stem + "a" : stem),
        f_ansC: stem + "af",
        e_ansC: stem + "on",
        d_ansC: stem + "e",
        ad_ansC: stem + "ūt",
        g_ansC: stem + "oy",
        v_ansC: stem + "agh",
        in_ansC: stem + "iax",
        // 非限定形可視双数形
        andC: andC + "a",
        f_andC: andC + "af",
        e_andC: andC + "on",
        d_andC: andC + "e",
        ad_andC: andC + "ūt",
        g_andC: andC + "oy",
        v_andC: andC + "agh",
        in_andC: andC + "iax",
        // 非限定形可視複数形
        anpC: anpC,
        f_anpC: anpC.slice(0, -1) + "f",
        e_anpC: anpC.slice(0, -2) + "on",
        d_anpC: anpC.slice(0, -2) + "e",
        ad_anpC: anpC.slice(0, -2) + "ūt",
        g_anpC: anpC.slice(0, -2) + "oy",
        v_anpC: anpC.slice(0, -2) + "agh",
        in_anpC: anpC.slice(0, -2) + "iax",
  
        // 限定形可視単数形
        adsC: adsC,
        f_adsC: adsC.slice(0, -1) + "af",
        e_adsC: adsC.slice(0, -1) + "on",
        d_adsC: adsC.slice(0, -1) + "e",
        ad_adsC: adsC.slice(0, -1) + "ūt",
        g_adsC: adsC.slice(0, -1) + "oy",
        v_adsC: adsC.slice(0, -1) + "agh",
        in_adsC: adsC.slice(0, -1) + "iax",
        // 限定形可視双数形
        addC: addC,
        f_addC: addC.slice(0, -1) + "af",
        e_addC: addC.slice(0, -1) + "on",
        d_addC: addC.slice(0, -1) + "e",
        ad_addC: addC.slice(0, -1) + "ūt",
        g_addC: addC.slice(0, -1) + "oy",
        v_addC: addC.slice(0, -1) + "agh",
        in_addC: addC.slice(0, -1) + "iax",
        // 限定形可視複数形
        adpC: adpC,
        f_adpC: adpC.slice(0, -1) + "af",
        e_adpC: adpC.slice(0, -1) + "on",
        d_adpC: adpC.slice(0, -1) + "e",
        ad_adpC: adpC.slice(0, -1) + "ūt",
        g_adpC: adpC.slice(0, -1) + "oy",
        v_adpC: adpC.slice(0, -1) + "agh",
        in_adpC: adpC.slice(0, -1) + "iax",
  
        // 非限定形不可視単数形
        ansI: ansI,  
        f_ansI: ansI.slice(0, -1) + "af",
        e_ansI: ansI.slice(0, -1) + "on",
        d_ansI: ansI.slice(0, -1) + "e",
        ad_ansI: ansI.slice(0, -1) + "ūt",
        g_ansI: ansI.slice(0, -1) + "oy",
        v_ansI: ansI.slice(0, -1) + "agh",
        in_ansI: ansI.slice(0, -1) + "iax", 
        // 非限定形不可視双数形
        andI: andI,
        f_andI: andI.slice(0, -1) + "af",
        e_andI: andI.slice(0, -1) + "on",
        d_andI: andI.slice(0, -1) + "e",
        ad_andI: andI.slice(0, -1) + "ūt",
        g_andI: andI.slice(0, -1) + "oy",
        v_andI: andI.slice(0, -1) + "agh",
        in_andI: andI.slice(0, -1) + "iax",
        // 非限定形不可視複数形
        anpI: anpI,
        f_anpI: anpI.slice(0, -2) + "af",
        e_anpI: anpI.slice(0, -2) + "on",
        d_anpI: anpI.slice(0, -2) + "e",
        ad_anpI: anpI.slice(0, -2) + "ūt",
        g_anpI: anpI.slice(0, -2) + "oy",
        v_anpI: anpI.slice(0, -2) + "agh",
        in_anpI: anpI.slice(0, -2) + "iax",
  
         // 限定形不可視単数形
        adsI: adsI,
        f_adsI: adsI.slice(0, -1) + "af",
        e_adsI: adsI.slice(0, -1) + "on",
        d_adsI: adsI.slice(0, -1) + "e",
        ad_adsI: adsI.slice(0, -1) + "ūt",
        g_adsI: adsI.slice(0, -1) + "oy",
        v_adsI: adsI.slice(0, -1) + "agh",
        in_adsI: adsI.slice(0, -1) + "iax",
        // 限定形不可視双数形
        addI: addI,
        f_addI: addI.slice(0, -1) + "af",
        e_addI: addI.slice(0, -1) + "on",
        d_addI: addI.slice(0, -1) + "e",
        ad_addI: addI.slice(0, -1) + "ūt",
        g_addI: addI.slice(0, -1) + "oy",
        v_addI: addI.slice(0, -1) + "agh",
        in_addI: addI.slice(0, -1) + "iax",
        // 限定形不可視複数形
        adpI: adpI,
        f_adpI: adpI.slice(0, -1) + "af",
        e_adpI: adpI.slice(0, -1) + "on",
        d_adpI: adpI.slice(0, -1) + "e",
        ad_adpI: adpI.slice(0, -1) + "ūt",
        g_adpI: adpI.slice(0, -1) + "oy",
        v_adpI: adpI.slice(0, -1) + "agh",
        in_adpI: adpI.slice(0, -1) + "iax",
      };
  
  } else if (ruletype === "nstha") {
    // 弱 a 軟複型 (nstha)
    let andC = stem + "s";    
    if (word === "dapna") {
      andC = stem.slice(0, -1) + "s";
    }
    if (word === "piost") {
      andC = stem.slice(0, -1) + "c";
    }
    let anpC = stem + "tas"; 
    if (word === "dapna") {
      anpC = stem.slice(0, -1) + "tas";
    }        
    let adsC = stem + "ola";      // adsCを定義 
    let addC = stem + "ossa";      
    let adpC = stem + "otta";      
    let ansI = stem + "hiēva";      // ansIを定義
    let andI = stem + "hiēvsa";
    let anpI = stem + "hiēvtas";
    let adsI = stem + "hiēvolà";    // adsIも定義
    let addI = stem + "hiēvossà";
    let adpI = stem + "hiēvottà";

    return {
      ansC: (word.slice(-1) === "a" ? stem + "a" : stem),
      f_ansC: stem + "af",
      e_ansC: stem + "on",
      d_ansC: stem + "e",
      ad_ansC: stem + "ūt",
      g_ansC: stem + "oy",
      v_ansC: stem + "agh",
      in_ansC: stem + "iax",
      // 非限定形可視双数形
      andC: andC + "a",
      f_andC: andC + "af",
      e_andC: andC + "on",
      d_andC: andC + "e",
      ad_andC: andC + "ūt",
      g_andC: andC + "oy",
      v_andC: andC + "agh",
      in_andC: andC + "iax",
      // 非限定形可視複数形
      anpC: anpC,
      f_anpC: anpC.slice(0, -1) + "f",
      e_anpC: anpC.slice(0, -2) + "on",
      d_anpC: anpC.slice(0, -2) + "e",
      ad_anpC: anpC.slice(0, -2) + "ūt",
      g_anpC: anpC.slice(0, -2) + "oy",
      v_anpC: anpC.slice(0, -2) + "agh",
      in_anpC: anpC.slice(0, -2) + "iax",

      // 限定形可視単数形
      adsC: adsC,
      f_adsC: adsC.slice(0, -1) + "af",
      e_adsC: adsC.slice(0, -1) + "on",
      d_adsC: adsC.slice(0, -1) + "e",
      ad_adsC: adsC.slice(0, -1) + "ūt",
      g_adsC: adsC.slice(0, -1) + "oy",
      v_adsC: adsC.slice(0, -1) + "agh",
      in_adsC: adsC.slice(0, -1) + "iax",
      // 限定形可視双数形
      addC: addC,
      f_addC: addC.slice(0, -1) + "af",
      e_addC: addC.slice(0, -1) + "on",
      d_addC: addC.slice(0, -1) + "e",
      ad_addC: addC.slice(0, -1) + "ūt",
      g_addC: addC.slice(0, -1) + "oy",
      v_addC: addC.slice(0, -1) + "agh",
      in_addC: addC.slice(0, -1) + "iax",
      // 限定形可視複数形
      adpC: adpC,
      f_adpC: adpC.slice(0, -1) + "af",
      e_adpC: adpC.slice(0, -1) + "on",
      d_adpC: adpC.slice(0, -1) + "e",
      ad_adpC: adpC.slice(0, -1) + "ūt",
      g_adpC: adpC.slice(0, -1) + "oy",
      v_adpC: adpC.slice(0, -1) + "agh",
      in_adpC: adpC.slice(0, -1) + "iax",

      // 非限定形不可視単数形
      ansI: ansI,  
      f_ansI: ansI.slice(0, -1) + "af",
      e_ansI: ansI.slice(0, -1) + "on",
      d_ansI: ansI.slice(0, -1) + "e",
      ad_ansI: ansI.slice(0, -1) + "ūt",
      g_ansI: ansI.slice(0, -1) + "oy",
      v_ansI: ansI.slice(0, -1) + "agh",
      in_ansI: ansI.slice(0, -1) + "iax", 
      // 非限定形不可視双数形
      andI: andI,
      f_andI: andI.slice(0, -1) + "af",
      e_andI: andI.slice(0, -1) + "on",
      d_andI: andI.slice(0, -1) + "e",
      ad_andI: andI.slice(0, -1) + "ūt",
      g_andI: andI.slice(0, -1) + "oy",
      v_andI: andI.slice(0, -1) + "agh",
      in_andI: andI.slice(0, -1) + "iax",
      // 非限定形不可視複数形
      anpI: anpI,
      f_anpI: anpI.slice(0, -2) + "af",
      e_anpI: anpI.slice(0, -2) + "on",
      d_anpI: anpI.slice(0, -2) + "e",
      ad_anpI: anpI.slice(0, -2) + "ūt",
      g_anpI: anpI.slice(0, -2) + "oy",
      v_anpI: anpI.slice(0, -2) + "agh",
      in_anpI: anpI.slice(0, -2) + "iax",

       // 限定形不可視単数形
      adsI: adsI,
      f_adsI: adsI.slice(0, -1) + "af",
      e_adsI: adsI.slice(0, -1) + "on",
      d_adsI: adsI.slice(0, -1) + "e",
      ad_adsI: adsI.slice(0, -1) + "ūt",
      g_adsI: adsI.slice(0, -1) + "oy",
      v_adsI: adsI.slice(0, -1) + "agh",
      in_adsI: adsI.slice(0, -1) + "iax",
      // 限定形不可視双数形
      addI: addI,
      f_addI: addI.slice(0, -1) + "af",
      e_addI: addI.slice(0, -1) + "on",
      d_addI: addI.slice(0, -1) + "e",
      ad_addI: addI.slice(0, -1) + "ūt",
      g_addI: addI.slice(0, -1) + "oy",
      v_addI: addI.slice(0, -1) + "agh",
      in_addI: addI.slice(0, -1) + "iax",
      // 限定形不可視複数形
      adpI: adpI,
      f_adpI: adpI.slice(0, -1) + "af",
      e_adpI: adpI.slice(0, -1) + "on",
      d_adpI: adpI.slice(0, -1) + "e",
      ad_adpI: adpI.slice(0, -1) + "ūt",
      g_adpI: adpI.slice(0, -1) + "oy",
      v_adpI: adpI.slice(0, -1) + "agh",
      in_adpI: adpI.slice(0, -1) + "iax",
    };
  } else if (ruletype === "nā") {
     // 強 a 基本形
    let andC = stem + "s";
    let anpC = stem + "tas";
    let adsC = stem2 + "óla";      // adsCを定義 
    let addC = stem2 + "óssa";      
    let adpC = stem2 + "ótta";      
    let ansI = stem + "ika";      // ansIを定義
    let andI = stem + "iksa";
    let anpI = stem + "iktas";
    let adsI = stem + "ikola";    // adsIも定義
    let addI = stem + "ikossa";
    let adpI = stem + "ikotta";
  
      return {
        ansC: (word.slice(-1) === "a" ? stem + "a" : stem),
        f_ansC: stem + "af",
        e_ansC: stem + "on",
        d_ansC: stem + "e",
        ad_ansC: stem + "ūt",
        g_ansC: stem + "oy",
        v_ansC: stem + "agh",
        in_ansC: stem + "iax",
        // 非限定形可視双数形
        andC: andC + "a",
        f_andC: andC + "af",
        e_andC: andC + "on",
        d_andC: andC + "e",
        ad_andC: andC + "ūt",
        g_andC: andC + "oy",
        v_andC: andC + "agh",
        in_andC: andC + "iax",
        // 非限定形可視複数形
        anpC: anpC,
        f_anpC: anpC.slice(0, -1) + "f",
        e_anpC: anpC.slice(0, -2) + "on",
        d_anpC: anpC.slice(0, -2) + "e",
        ad_anpC: anpC.slice(0, -2) + "ūt",
        g_anpC: anpC.slice(0, -2) + "oy",
        v_anpC: anpC.slice(0, -2) + "agh",
        in_anpC: anpC.slice(0, -2) + "iax",
  
        // 限定形可視単数形
        adsC: adsC,
        f_adsC: adsC.slice(0, -1) + "af",
        e_adsC: adsC.slice(0, -1) + "on",
        d_adsC: adsC.slice(0, -1) + "e",
        ad_adsC: adsC.slice(0, -1) + "ūt",
        g_adsC: adsC.slice(0, -1) + "oy",
        v_adsC: adsC.slice(0, -1) + "agh",
        in_adsC: adsC.slice(0, -1) + "iax",
        // 限定形可視双数形
        addC: addC,
        f_addC: addC.slice(0, -1) + "af",
        e_addC: addC.slice(0, -1) + "on",
        d_addC: addC.slice(0, -1) + "e",
        ad_addC: addC.slice(0, -1) + "ūt",
        g_addC: addC.slice(0, -1) + "oy",
        v_addC: addC.slice(0, -1) + "agh",
        in_addC: addC.slice(0, -1) + "iax",
        // 限定形可視複数形
        adpC: adpC,
        f_adpC: adpC.slice(0, -1) + "af",
        e_adpC: adpC.slice(0, -1) + "on",
        d_adpC: adpC.slice(0, -1) + "e",
        ad_adpC: adpC.slice(0, -1) + "ūt",
        g_adpC: adpC.slice(0, -1) + "oy",
        v_adpC: adpC.slice(0, -1) + "agh",
        in_adpC: adpC.slice(0, -1) + "iax",
  
        // 非限定形不可視単数形
        ansI: ansI,  
        f_ansI: ansI.slice(0, -1) + "af",
        e_ansI: ansI.slice(0, -1) + "on",
        d_ansI: ansI.slice(0, -1) + "e",
        ad_ansI: ansI.slice(0, -1) + "ūt",
        g_ansI: ansI.slice(0, -1) + "oy",
        v_ansI: ansI.slice(0, -1) + "agh",
        in_ansI: ansI.slice(0, -1) + "iax", 
        // 非限定形不可視双数形
        andI: andI,
        f_andI: andI.slice(0, -1) + "af",
        e_andI: andI.slice(0, -1) + "on",
        d_andI: andI.slice(0, -1) + "e",
        ad_andI: andI.slice(0, -1) + "ūt",
        g_andI: andI.slice(0, -1) + "oy",
        v_andI: andI.slice(0, -1) + "agh",
        in_andI: andI.slice(0, -1) + "iax",
        // 非限定形不可視複数形
        anpI: anpI,
        f_anpI: anpI.slice(0, -2) + "af",
        e_anpI: anpI.slice(0, -2) + "on",
        d_anpI: anpI.slice(0, -2) + "e",
        ad_anpI: anpI.slice(0, -2) + "ūt",
        g_anpI: anpI.slice(0, -2) + "oy",
        v_anpI: anpI.slice(0, -2) + "agh",
        in_anpI: anpI.slice(0, -2) + "iax",
  
         // 限定形不可視単数形
        adsI: adsI,
        f_adsI: adsI.slice(0, -1) + "af",
        e_adsI: adsI.slice(0, -1) + "on",
        d_adsI: adsI.slice(0, -1) + "e",
        ad_adsI: adsI.slice(0, -1) + "ūt",
        g_adsI: adsI.slice(0, -1) + "oy",
        v_adsI: adsI.slice(0, -1) + "agh",
        in_adsI: adsI.slice(0, -1) + "iax",
        // 限定形不可視双数形
        addI: addI,
        f_addI: addI.slice(0, -1) + "af",
        e_addI: addI.slice(0, -1) + "on",
        d_addI: addI.slice(0, -1) + "e",
        ad_addI: addI.slice(0, -1) + "ūt",
        g_addI: addI.slice(0, -1) + "oy",
        v_addI: addI.slice(0, -1) + "agh",
        in_addI: addI.slice(0, -1) + "iax",
        // 限定形不可視複数形
        adpI: adpI,
        f_adpI: adpI.slice(0, -1) + "af",
        e_adpI: adpI.slice(0, -1) + "on",
        d_adpI: adpI.slice(0, -1) + "e",
        ad_adpI: adpI.slice(0, -1) + "ūt",
        g_adpI: adpI.slice(0, -1) + "oy",
        v_adpI: adpI.slice(0, -1) + "agh",
        in_adpI: adpI.slice(0, -1) + "iax",
      };
  } else if (ruletype === "nhā") {
      // 強 a 軟型 (nha)
      let andC = stem + "s";
      let anpC = stem + "tas";
      let adsC = stem2 + "óla";      // adsCを定義 
      let addC = stem2 + "óssa";      
      let adpC = stem2 + "ótta";      
      let ansI = stem2 + "hiḗva";      // ansIを定義
      let andI = stem2 + "hiḗvsa";
      let anpI = stem2 + "hiḗvtas";
      let adsI = stem2 + "hiḗvolà";    // adsIも定義
      let addI = stem2 + "hiḗvossà";
      let adpI = stem2 + "hiḗvottà";
      return {
          ansC: (word.slice(-1) === "a" ? stem + "a" : stem),
          f_ansC: stem + "af",
          e_ansC: stem + "on",
          d_ansC: stem + "e",
          ad_ansC: stem + "ūt",
          g_ansC: stem + "oy",
          v_ansC: stem + "agh",
          in_ansC: stem + "iax",
          // 非限定形可視双数形
          andC: andC + "a",
          f_andC: andC + "af",
          e_andC: andC + "on",
          d_andC: andC + "e",
          ad_andC: andC + "ūt",
          g_andC: andC + "oy",
          v_andC: andC + "agh",
          in_andC: andC + "iax",
          // 非限定形可視複数形
          anpC: anpC,
          f_anpC: anpC.slice(0, -1) + "f",
          e_anpC: anpC.slice(0, -2) + "on",
          d_anpC: anpC.slice(0, -2) + "e",
          ad_anpC: anpC.slice(0, -2) + "ūt",
          g_anpC: anpC.slice(0, -2) + "oy",
          v_anpC: anpC.slice(0, -2) + "agh",
          in_anpC: anpC.slice(0, -2) + "iax",
    
          // 限定形可視単数形
          adsC: adsC,
          f_adsC: adsC.slice(0, -1) + "af",
          e_adsC: adsC.slice(0, -1) + "on",
          d_adsC: adsC.slice(0, -1) + "e",
          ad_adsC: adsC.slice(0, -1) + "ūt",
          g_adsC: adsC.slice(0, -1) + "oy",
          v_adsC: adsC.slice(0, -1) + "agh",
          in_adsC: adsC.slice(0, -1) + "iax",
          // 限定形可視双数形
          addC: addC,
          f_addC: addC.slice(0, -1) + "af",
          e_addC: addC.slice(0, -1) + "on",
          d_addC: addC.slice(0, -1) + "e",
          ad_addC: addC.slice(0, -1) + "ūt",
          g_addC: addC.slice(0, -1) + "oy",
          v_addC: addC.slice(0, -1) + "agh",
          in_addC: addC.slice(0, -1) + "iax",
          // 限定形可視複数形
          adpC: adpC,
          f_adpC: adpC.slice(0, -1) + "af",
          e_adpC: adpC.slice(0, -1) + "on",
          d_adpC: adpC.slice(0, -1) + "e",
          ad_adpC: adpC.slice(0, -1) + "ūt",
          g_adpC: adpC.slice(0, -1) + "oy",
          v_adpC: adpC.slice(0, -1) + "agh",
          in_adpC: adpC.slice(0, -1) + "iax",
    
          // 非限定形不可視単数形
          ansI: ansI,  
          f_ansI: ansI.slice(0, -1) + "af",
          e_ansI: ansI.slice(0, -1) + "on",
          d_ansI: ansI.slice(0, -1) + "e",
          ad_ansI: ansI.slice(0, -1) + "ūt",
          g_ansI: ansI.slice(0, -1) + "oy",
          v_ansI: ansI.slice(0, -1) + "agh",
          in_ansI: ansI.slice(0, -1) + "iax", 
          // 非限定形不可視双数形
          andI: andI,
          f_andI: andI.slice(0, -1) + "af",
          e_andI: andI.slice(0, -1) + "on",
          d_andI: andI.slice(0, -1) + "e",
          ad_andI: andI.slice(0, -1) + "ūt",
          g_andI: andI.slice(0, -1) + "oy",
          v_andI: andI.slice(0, -1) + "agh",
          in_andI: andI.slice(0, -1) + "iax",
          // 非限定形不可視複数形
          anpI: anpI,
          f_anpI: anpI.slice(0, -2) + "af",
          e_anpI: anpI.slice(0, -2) + "on",
          d_anpI: anpI.slice(0, -2) + "e",
          ad_anpI: anpI.slice(0, -2) + "ūt",
          g_anpI: anpI.slice(0, -2) + "oy",
          v_anpI: anpI.slice(0, -2) + "agh",
          in_anpI: anpI.slice(0, -2) + "iax",
    
           // 限定形不可視単数形
          adsI: adsI,
          f_adsI: adsI.slice(0, -1) + "af",
          e_adsI: adsI.slice(0, -1) + "on",
          d_adsI: adsI.slice(0, -1) + "e",
          ad_adsI: adsI.slice(0, -1) + "ūt",
          g_adsI: adsI.slice(0, -1) + "oy",
          v_adsI: adsI.slice(0, -1) + "agh",
          in_adsI: adsI.slice(0, -1) + "iax",
          // 限定形不可視双数形
          addI: addI,
          f_addI: addI.slice(0, -1) + "af",
          e_addI: addI.slice(0, -1) + "on",
          d_addI: addI.slice(0, -1) + "e",
          ad_addI: addI.slice(0, -1) + "ūt",
          g_addI: addI.slice(0, -1) + "oy",
          v_addI: addI.slice(0, -1) + "agh",
          in_addI: addI.slice(0, -1) + "iax",
          // 限定形不可視複数形
          adpI: adpI,
          f_adpI: adpI.slice(0, -1) + "af",
          e_adpI: adpI.slice(0, -1) + "on",
          d_adpI: adpI.slice(0, -1) + "e",
          ad_adpI: adpI.slice(0, -1) + "ūt",
          g_adpI: adpI.slice(0, -1) + "oy",
          v_adpI: adpI.slice(0, -1) + "agh",
          in_adpI: adpI.slice(0, -1) + "iax",
        };
    
  } else if (ruletype === "nstā") {
        // 強 a 複子音型 (nsta)
        let andC = stem + "s";    
        let anpC = stem + "tas";      
        let adsC = stem + "ola";      // adsCを定義 
        let addC = stem + "ossa";      
        let adpC = stem + "otta";      
        let ansI = stem + "hiēva";      // ansIを定義
        let andI = stem + "hiēvsa";
        let anpI = stem + "hiēvtas";
        let adsI = stem + "hiēvolà";    // adsIも定義
        let addI = stem + "hiēvossà";
        let adpI = stem + "hiēvottà";
    
        return {
          ansC: (word.slice(-1) === "a" ? stem + "a" : stem),
          f_ansC: stem + "af",
          e_ansC: stem + "on",
          d_ansC: stem + "e",
          ad_ansC: stem + "ūt",
          g_ansC: stem + "oy",
          v_ansC: stem + "agh",
          in_ansC: stem + "iax",
          // 非限定形可視双数形
          andC: andC + "a",
          f_andC: andC + "af",
          e_andC: andC + "on",
          d_andC: andC + "e",
          ad_andC: andC + "ūt",
          g_andC: andC + "oy",
          v_andC: andC + "agh",
          in_andC: andC + "iax",
          // 非限定形可視複数形
          anpC: anpC,
          f_anpC: anpC.slice(0, -1) + "f",
          e_anpC: anpC.slice(0, -2) + "on",
          d_anpC: anpC.slice(0, -2) + "e",
          ad_anpC: anpC.slice(0, -2) + "ūt",
          g_anpC: anpC.slice(0, -2) + "oy",
          v_anpC: anpC.slice(0, -2) + "agh",
          in_anpC: anpC.slice(0, -2) + "iax",
    
          // 限定形可視単数形
          adsC: adsC,
          f_adsC: adsC.slice(0, -1) + "af",
          e_adsC: adsC.slice(0, -1) + "on",
          d_adsC: adsC.slice(0, -1) + "e",
          ad_adsC: adsC.slice(0, -1) + "ūt",
          g_adsC: adsC.slice(0, -1) + "oy",
          v_adsC: adsC.slice(0, -1) + "agh",
          in_adsC: adsC.slice(0, -1) + "iax",
          // 限定形可視双数形
          addC: addC,
          f_addC: addC.slice(0, -1) + "af",
          e_addC: addC.slice(0, -1) + "on",
          d_addC: addC.slice(0, -1) + "e",
          ad_addC: addC.slice(0, -1) + "ūt",
          g_addC: addC.slice(0, -1) + "oy",
          v_addC: addC.slice(0, -1) + "agh",
          in_addC: addC.slice(0, -1) + "iax",
          // 限定形可視複数形
          adpC: adpC,
          f_adpC: adpC.slice(0, -1) + "af",
          e_adpC: adpC.slice(0, -1) + "on",
          d_adpC: adpC.slice(0, -1) + "e",
          ad_adpC: adpC.slice(0, -1) + "ūt",
          g_adpC: adpC.slice(0, -1) + "oy",
          v_adpC: adpC.slice(0, -1) + "agh",
          in_adpC: adpC.slice(0, -1) + "iax",
    
          // 非限定形不可視単数形
          ansI: ansI,  
          f_ansI: ansI.slice(0, -1) + "af",
          e_ansI: ansI.slice(0, -1) + "on",
          d_ansI: ansI.slice(0, -1) + "e",
          ad_ansI: ansI.slice(0, -1) + "ūt",
          g_ansI: ansI.slice(0, -1) + "oy",
          v_ansI: ansI.slice(0, -1) + "agh",
          in_ansI: ansI.slice(0, -1) + "iax", 
          // 非限定形不可視双数形
          andI: andI,
          f_andI: andI.slice(0, -1) + "af",
          e_andI: andI.slice(0, -1) + "on",
          d_andI: andI.slice(0, -1) + "e",
          ad_andI: andI.slice(0, -1) + "ūt",
          g_andI: andI.slice(0, -1) + "oy",
          v_andI: andI.slice(0, -1) + "agh",
          in_andI: andI.slice(0, -1) + "iax",
          // 非限定形不可視複数形
          anpI: anpI,
          f_anpI: anpI.slice(0, -2) + "af",
          e_anpI: anpI.slice(0, -2) + "on",
          d_anpI: anpI.slice(0, -2) + "e",
          ad_anpI: anpI.slice(0, -2) + "ūt",
          g_anpI: anpI.slice(0, -2) + "oy",
          v_anpI: anpI.slice(0, -2) + "agh",
          in_anpI: anpI.slice(0, -2) + "iax",
    
           // 限定形不可視単数形
          adsI: adsI,
          f_adsI: adsI.slice(0, -1) + "af",
          e_adsI: adsI.slice(0, -1) + "on",
          d_adsI: adsI.slice(0, -1) + "e",
          ad_adsI: adsI.slice(0, -1) + "ūt",
          g_adsI: adsI.slice(0, -1) + "oy",
          v_adsI: adsI.slice(0, -1) + "agh",
          in_adsI: adsI.slice(0, -1) + "iax",
          // 限定形不可視双数形
          addI: addI,
          f_addI: addI.slice(0, -1) + "af",
          e_addI: addI.slice(0, -1) + "on",
          d_addI: addI.slice(0, -1) + "e",
          ad_addI: addI.slice(0, -1) + "ūt",
          g_addI: addI.slice(0, -1) + "oy",
          v_addI: addI.slice(0, -1) + "agh",
          in_addI: addI.slice(0, -1) + "iax",
          // 限定形不可視複数形
          adpI: adpI,
          f_adpI: adpI.slice(0, -1) + "af",
          e_adpI: adpI.slice(0, -1) + "on",
          d_adpI: adpI.slice(0, -1) + "e",
          ad_adpI: adpI.slice(0, -1) + "ūt",
          g_adpI: adpI.slice(0, -1) + "oy",
          v_adpI: adpI.slice(0, -1) + "agh",
          in_adpI: adpI.slice(0, -1) + "iax",
        };
  } else if (ruletype === "nsthā") {
        // 強 a 軟複型 (nsta)
        let andC = stem + "s";    
        let anpC = stem + "tas";      
        let adsC = stem + "ola";      // adsCを定義 
        let addC = stem + "ossa";      
        let adpC = stem + "otta";      
        let ansI = stem + "hiēva";      // ansIを定義
        let andI = stem + "hiēvsa";
        let anpI = stem + "hiēvtas";
        let adsI = stem + "hiēvolà";    // adsIも定義
        let addI = stem + "hiēvossà";
        let adpI = stem + "hiēvottà";
    
        return {
          ansC: (word.slice(-1) === "a" ? stem + "a" : stem),
          f_ansC: stem + "af",
          e_ansC: stem + "on",
          d_ansC: stem + "e",
          ad_ansC: stem + "ūt",
          g_ansC: stem + "oy",
          v_ansC: stem + "agh",
          in_ansC: stem + "iax",
          // 非限定形可視双数形
          andC: andC + "a",
          f_andC: andC + "af",
          e_andC: andC + "on",
          d_andC: andC + "e",
          ad_andC: andC + "ūt",
          g_andC: andC + "oy",
          v_andC: andC + "agh",
          in_andC: andC + "iax",
          // 非限定形可視複数形
          anpC: anpC,
          f_anpC: anpC.slice(0, -1) + "f",
          e_anpC: anpC.slice(0, -2) + "on",
          d_anpC: anpC.slice(0, -2) + "e",
          ad_anpC: anpC.slice(0, -2) + "ūt",
          g_anpC: anpC.slice(0, -2) + "oy",
          v_anpC: anpC.slice(0, -2) + "agh",
          in_anpC: anpC.slice(0, -2) + "iax",
    
          // 限定形可視単数形
          adsC: adsC,
          f_adsC: adsC.slice(0, -1) + "af",
          e_adsC: adsC.slice(0, -1) + "on",
          d_adsC: adsC.slice(0, -1) + "e",
          ad_adsC: adsC.slice(0, -1) + "ūt",
          g_adsC: adsC.slice(0, -1) + "oy",
          v_adsC: adsC.slice(0, -1) + "agh",
          in_adsC: adsC.slice(0, -1) + "iax",
          // 限定形可視双数形
          addC: addC,
          f_addC: addC.slice(0, -1) + "af",
          e_addC: addC.slice(0, -1) + "on",
          d_addC: addC.slice(0, -1) + "e",
          ad_addC: addC.slice(0, -1) + "ūt",
          g_addC: addC.slice(0, -1) + "oy",
          v_addC: addC.slice(0, -1) + "agh",
          in_addC: addC.slice(0, -1) + "iax",
          // 限定形可視複数形
          adpC: adpC,
          f_adpC: adpC.slice(0, -1) + "af",
          e_adpC: adpC.slice(0, -1) + "on",
          d_adpC: adpC.slice(0, -1) + "e",
          ad_adpC: adpC.slice(0, -1) + "ūt",
          g_adpC: adpC.slice(0, -1) + "oy",
          v_adpC: adpC.slice(0, -1) + "agh",
          in_adpC: adpC.slice(0, -1) + "iax",
    
          // 非限定形不可視単数形
          ansI: ansI,  
          f_ansI: ansI.slice(0, -1) + "af",
          e_ansI: ansI.slice(0, -1) + "on",
          d_ansI: ansI.slice(0, -1) + "e",
          ad_ansI: ansI.slice(0, -1) + "ūt",
          g_ansI: ansI.slice(0, -1) + "oy",
          v_ansI: ansI.slice(0, -1) + "agh",
          in_ansI: ansI.slice(0, -1) + "iax", 
          // 非限定形不可視双数形
          andI: andI,
          f_andI: andI.slice(0, -1) + "af",
          e_andI: andI.slice(0, -1) + "on",
          d_andI: andI.slice(0, -1) + "e",
          ad_andI: andI.slice(0, -1) + "ūt",
          g_andI: andI.slice(0, -1) + "oy",
          v_andI: andI.slice(0, -1) + "agh",
          in_andI: andI.slice(0, -1) + "iax",
          // 非限定形不可視複数形
          anpI: anpI,
          f_anpI: anpI.slice(0, -2) + "af",
          e_anpI: anpI.slice(0, -2) + "on",
          d_anpI: anpI.slice(0, -2) + "e",
          ad_anpI: anpI.slice(0, -2) + "ūt",
          g_anpI: anpI.slice(0, -2) + "oy",
          v_anpI: anpI.slice(0, -2) + "agh",
          in_anpI: anpI.slice(0, -2) + "iax",
    
           // 限定形不可視単数形
          adsI: adsI,
          f_adsI: adsI.slice(0, -1) + "af",
          e_adsI: adsI.slice(0, -1) + "on",
          d_adsI: adsI.slice(0, -1) + "e",
          ad_adsI: adsI.slice(0, -1) + "ūt",
          g_adsI: adsI.slice(0, -1) + "oy",
          v_adsI: adsI.slice(0, -1) + "agh",
          in_adsI: adsI.slice(0, -1) + "iax",
          // 限定形不可視双数形
          addI: addI,
          f_addI: addI.slice(0, -1) + "af",
          e_addI: addI.slice(0, -1) + "on",
          d_addI: addI.slice(0, -1) + "e",
          ad_addI: addI.slice(0, -1) + "ūt",
          g_addI: addI.slice(0, -1) + "oy",
          v_addI: addI.slice(0, -1) + "agh",
          in_addI: addI.slice(0, -1) + "iax",
          // 限定形不可視複数形
          adpI: adpI,
          f_adpI: adpI.slice(0, -1) + "af",
          e_adpI: adpI.slice(0, -1) + "on",
          d_adpI: adpI.slice(0, -1) + "e",
          ad_adpI: adpI.slice(0, -1) + "ūt",
          g_adpI: adpI.slice(0, -1) + "oy",
          v_adpI: adpI.slice(0, -1) + "agh",
          in_adpI: adpI.slice(0, -1) + "iax",
        };
       // ma 長母音形
  } else if (ruletype === "nāM") {
    let andC = stem.slice(0, -1) + "v"; 
    let anpC = stem.slice(0, -1) + "tas";         
    let adsC = stem + "ola";      // adsCを定義 
    let addC = stem + "ossa";      
    let adpC = stem + "otta";      
    let ansI = stem + "hiēva";      // ansIを定義
    let andI = stem + "hiēvsa";
    let anpI = stem + "hiēvtas";
    let adsI = stem + "hiēvolà";    // adsIも定義
    let addI = stem + "hiēvossà";
    let adpI = stem + "hiēvottà";

    return {
      ansC: word,
      f_ansC: stem + "af",
      e_ansC: stem + "on",
      d_ansC: stem + "e",
      ad_ansC: stem + "ūt",
      g_ansC: stem + "oy",
      v_ansC: stem + "agh",
      in_ansC: stem + "iax",
      // 非限定形可視双数形
      andC: andC + "a",
      f_andC: andC.slice(0, -1) + "af",
      e_andC: andC.slice(0, -1) + "om",
      d_andC: andC.slice(0, -1) + "e",
      ad_andC: andC.slice(0, -1) + "iūt",
      g_andC: andC.slice(0, -1) + "oy",
      v_andC: andC.slice(0, -1) + "agh",
      in_andC: andC.slice(0, -1) + "iax",
      // 非限定形可視複数形
      anpC: anpC,
      f_anpC: anpC.slice(0, -1) + "f",
      e_anpC: anpC.slice(0, -2) + "om",
      d_anpC: anpC.slice(0, -2) + "e",
      ad_anpC: anpC.slice(0, -2) + "ūt",
      g_anpC: anpC.slice(0, -2) + "oy",
      v_anpC: anpC.slice(0, -2) + "agh",
      in_anpC: anpC.slice(0, -2) + "iax",

      // 限定形可視単数形
      adsC: adsC,
      f_adsC: adsC.slice(0, -1) + "af",
      e_adsC: adsC.slice(0, -1) + "on",
      d_adsC: adsC.slice(0, -1) + "e",
      ad_adsC: adsC.slice(0, -1) + "ūt",
      g_adsC: adsC.slice(0, -1) + "oy",
      v_adsC: adsC.slice(0, -1) + "agh",
      in_adsC: adsC.slice(0, -1) + "iax",
      // 限定形可視双数形
      addC: addC,
      f_addC: addC.slice(0, -1) + "af",
      e_addC: addC.slice(0, -1) + "on",
      d_addC: addC.slice(0, -1) + "e",
      ad_addC: addC.slice(0, -1) + "ūt",
      g_addC: addC.slice(0, -1) + "oy",
      v_addC: addC.slice(0, -1) + "agh",
      in_addC: addC.slice(0, -1) + "iax",
      // 限定形可視複数形
      adpC: adpC,
      f_adpC: adpC.slice(0, -1) + "af",
      e_adpC: adpC.slice(0, -1) + "on",
      d_adpC: adpC.slice(0, -1) + "e",
      ad_adpC: adpC.slice(0, -1) + "ūt",
      g_adpC: adpC.slice(0, -1) + "oy",
      v_adpC: adpC.slice(0, -1) + "agh",
      in_adpC: adpC.slice(0, -1) + "iax",

      // 非限定形不可視単数形
      ansI: ansI,  
      f_ansI: ansI.slice(0, -1) + "af",
      e_ansI: ansI.slice(0, -1) + "on",
      d_ansI: ansI.slice(0, -1) + "e",
      ad_ansI: ansI.slice(0, -1) + "ūt",
      g_ansI: ansI.slice(0, -1) + "oy",
      v_ansI: ansI.slice(0, -1) + "agh",
      in_ansI: ansI.slice(0, -1) + "iax", 
      // 非限定形不可視双数形
      andI: andI,
      f_andI: andI.slice(0, -1) + "af",
      e_andI: andI.slice(0, -1) + "on",
      d_andI: andI.slice(0, -1) + "e",
      ad_andI: andI.slice(0, -1) + "ūt",
      g_andI: andI.slice(0, -1) + "oy",
      v_andI: andI.slice(0, -1) + "agh",
      in_andI: andI.slice(0, -1) + "iax",
      // 非限定形不可視複数形
      anpI: anpI,
      f_anpI: anpI.slice(0, -2) + "af",
      e_anpI: anpI.slice(0, -2) + "on",
      d_anpI: anpI.slice(0, -2) + "e",
      ad_anpI: anpI.slice(0, -2) + "ūt",
      g_anpI: anpI.slice(0, -2) + "oy",
      v_anpI: anpI.slice(0, -2) + "agh",
      in_anpI: anpI.slice(0, -2) + "iax",

       // 限定形不可視単数形
      adsI: adsI,
      f_adsI: adsI.slice(0, -1) + "af",
      e_adsI: adsI.slice(0, -1) + "on",
      d_adsI: adsI.slice(0, -1) + "e",
      ad_adsI: adsI.slice(0, -1) + "ūt",
      g_adsI: adsI.slice(0, -1) + "oy",
      v_adsI: adsI.slice(0, -1) + "agh",
      in_adsI: adsI.slice(0, -1) + "iax",
      // 限定形不可視双数形
      addI: addI,
      f_addI: addI.slice(0, -1) + "af",
      e_addI: addI.slice(0, -1) + "on",
      d_addI: addI.slice(0, -1) + "e",
      ad_addI: addI.slice(0, -1) + "ūt",
      g_addI: addI.slice(0, -1) + "oy",
      v_addI: addI.slice(0, -1) + "agh",
      in_addI: addI.slice(0, -1) + "iax",
      // 限定形不可視複数形
      adpI: adpI,
      f_adpI: adpI.slice(0, -1) + "af",
      e_adpI: adpI.slice(0, -1) + "on",
      d_adpI: adpI.slice(0, -1) + "e",
      ad_adpI: adpI.slice(0, -1) + "ūt",
      g_adpI: adpI.slice(0, -1) + "oy",
      v_adpI: adpI.slice(0, -1) + "agh",
      in_adpI: adpI.slice(0, -1) + "iax",
    };
    
  } else if (ruletype === "no") {
    // 弱 o 基本形
    let andC = stem + "zo";         
    let anpC = stem + "dol";         
    let adsC = stem + "olo";      // adsCを定義 
    let addC = stem + "osso";      
    let adpC = stem + "odrol";      
    let ansI = stem + "iko";      // ansIを定義
    let andI = stem + "ikso";
    let anpI = stem + "ikdol";
    let adsI = stem + "ikolo";    // adsIも定義
    let addI = stem + "ikosso";
    let adpI = stem + "iktrol";

    return {
      ansC: (word.slice(-1) === "o" ? stem + "o" : stem),
      f_ansC: stem + "åf",
      e_ansC: stem + "on",
      d_ansC: stem + "ā",
      ad_ansC: stem + "oit",
      g_ansC: stem + "ūy",
      v_ansC: stem + "ogh",
      in_ansC: stem + "ox",
      // 非限定形可視双数形
      andC: andC,
      f_andC: andC.slice(0, -1) + "åf",
      e_andC: andC.slice(0, -1) + "on",
      d_andC: andC.slice(0, -1) + "ā",
      ad_andC: andC.slice(0, -1) + "oit",
      g_andC: andC.slice(0, -1) + "ūy",
      v_andC: andC.slice(0, -1) + "ogh",
      in_andC: andC.slice(0, -1) + "ox",
      // 非限定形可視複数形
      anpC: anpC,
      f_anpC: anpC.slice(0, -2) + "åf",
      e_anpC: anpC.slice(0, -2) + "on",
      d_anpC: anpC.slice(0, -2) + "ā",
      ad_anpC: anpC.slice(0, -2) + "oit",
      g_anpC: anpC.slice(0, -2) + "ūy",
      v_anpC: anpC.slice(0, -2) + "ogh",
      in_anpC: anpC.slice(0, -1) + "ox",

      // 限定形可視単数形
      adsC: adsC,
      f_adsC: adsC.slice(0, -1) + "åf",
      e_adsC: adsC.slice(0, -1) + "on",
      d_adsC: adsC.slice(0, -1) + "ā",
      ad_adsC: adsC.slice(0, -1) + "oit",
      g_adsC: adsC.slice(0, -1) + "ūy",
      v_adsC: adsC.slice(0, -1) + "ogh",
      in_adsC: adsC.slice(0, -1) + "ox",
      // 限定形可視双数形
      addC: addC,
      f_addC: addC.slice(0, -1) + "åf",
      e_addC: addC.slice(0, -1) + "on",
      d_addC: addC.slice(0, -1) + "ā",
      ad_addC: addC.slice(0, -1) + "oit",
      g_addC: addC.slice(0, -1) + "ūy",
      v_addC: addC.slice(0, -1) + "ogh",
      in_addC: addC.slice(0, -1) + "ox",
      // 限定形可視複数形
      adpC: adpC,
      f_adpC: adpC.slice(0, -2) + "åf",
      e_adpC: adpC.slice(0, -2) + "on",
      d_adpC: adpC.slice(0, -2) + "ā",
      ad_adpC: adpC.slice(0, -2) + "oit",
      g_adpC: adpC.slice(0, -2) + "ūy",
      v_adpC: adpC.slice(0, -2) + "ogh",
      in_adpC: adpC.slice(0, -2) + "ox",

      // 非限定形不可視単数形
      ansI: ansI,  
      f_ansI: ansI.slice(0, -1) + "åf",
      e_ansI: ansI.slice(0, -1) + "on",
      d_ansI: ansI.slice(0, -1) + "ā",
      ad_ansI: ansI.slice(0, -1) + "oit",
      g_ansI: ansI.slice(0, -1) + "ūy",
      v_ansI: ansI.slice(0, -1) + "ogh",
      in_ansI: ansI.slice(0, -1) + "ox", 
      // 非限定形不可視双数形
      andI: andI,
      f_andI: andI.slice(0, -1) + "åf",
      e_andI: andI.slice(0, -1) + "on",
      d_andI: andI.slice(0, -1) + "ā",
      ad_andI: andI.slice(0, -1) + "oit",
      g_andI: andI.slice(0, -1) + "oy",
      v_andI: andI.slice(0, -1) + "ogh",
      in_andI: andI.slice(0, -1) + "ox",
      // 非限定形不可視複数形
      anpI: anpI,
      f_anpI: anpI.slice(0, -2) + "åf",
      e_anpI: anpI.slice(0, -2) + "on",
      d_anpI: anpI.slice(0, -2) + "ā",
      ad_anpI: anpI.slice(0, -2) + "oit",
      g_anpI: anpI.slice(0, -2) + "ūy",
      v_anpI: anpI.slice(0, -2) + "ogh",
      in_anpI: anpI.slice(0, -2) + "ox",

       // 限定形不可視単数形
      adsI: adsI,
      f_adsI: adsI.slice(0, -1) + "åf",
      e_adsI: adsI.slice(0, -1) + "on",
      d_adsI: adsI.slice(0, -1) + "ā",
      ad_adsI: adsI.slice(0, -1) + "oit",
      g_adsI: adsI.slice(0, -1) + "ūy",
      v_adsI: adsI.slice(0, -1) + "ogh",
      in_adsI: adsI.slice(0, -1) + "ox",
      // 限定形不可視双数形
      addI: addI,
      f_addI: addI.slice(0, -1) + "åf",
      e_addI: addI.slice(0, -1) + "on",
      d_addI: addI.slice(0, -1) + "ā",
      ad_addI: addI.slice(0, -1) + "oit",
      g_addI: addI.slice(0, -1) + "ūy",
      v_addI: addI.slice(0, -1) + "ogh",
      in_addI: addI.slice(0, -1) + "ox",
      // 限定形不可視複数形
      adpI: adpI,
      f_adpI: adpI.slice(0, -2) + "åf",
      e_adpI: adpI.slice(0, -2) + "on",
      d_adpI: adpI.slice(0, -2) + "ā",
      ad_adpI: adpI.slice(0, -2) + "oit",
      g_adpI: adpI.slice(0, -2) + "ūy",
      v_adpI: adpI.slice(0, -2) + "ogh",
      in_adpI: adpI.slice(0, -2) + "ox",
    };
  } else if (ruletype === "nho") {
    // 弱 o 軟音形
    let andC = stem + "zo";
    if (word === "lukótt") {
      andC = stem.slice(0, -1) + "co";
    }
    let anpC = stem + "rol";
    let adsC = stem + "olo";      // adsCを定義 
    let addC = stem + "osso";
    let adpC = stem + "odrol";
    let ansI = stem + "hiēvo";      // ansIを定義
    let andI = stem + "hiēvso";
    let anpI = stem + "hiēvdol";
    let adsI = stem + "hiēvolo";    // adsIも定義
    let addI = stem + "hiēvosso";
    let adpI = stem + "hiēvtrol";

    return {
      ansC: (word.slice(-1) === "o" ? stem + "o" : stem),
      f_ansC: stem + "åf",
      e_ansC: stem + "on",
      d_ansC: stem + "ā",
      ad_ansC: stem + "oit",
      g_ansC: stem + "ūy",
      v_ansC: stem + "ogh",
      in_ansC: stem + "ox",
      // 非限定形可視双数形
      andC: andC,
      f_andC: andC.slice(0, -1) + "åf",
      e_andC: andC.slice(0, -1) + "on",
      d_andC: andC.slice(0, -1) + "ā",
      ad_andC: andC.slice(0, -1) + "oit",
      g_andC: andC.slice(0, -1) + "ūy",
      v_andC: andC.slice(0, -1) + "ogh",
      in_andC: andC.slice(0, -1) + "ox",
      // 非限定形可視複数形
      anpC: anpC,
      f_anpC: anpC.slice(0, -2) + "åf",
      e_anpC: anpC.slice(0, -2) + "on",
      d_anpC: anpC.slice(0, -2) + "ā",
      ad_anpC: anpC.slice(0, -2) + "oit",
      g_anpC: anpC.slice(0, -2) + "ūy",
      v_anpC: anpC.slice(0, -2) + "ogh",
      in_anpC: anpC.slice(0, -1) + "ox",

      // 限定形可視単数形
      adsC: adsC,
      f_adsC: adsC.slice(0, -1) + "åf",
      e_adsC: adsC.slice(0, -1) + "on",
      d_adsC: adsC.slice(0, -1) + "ā",
      ad_adsC: adsC.slice(0, -1) + "oit",
      g_adsC: adsC.slice(0, -1) + "ūy",
      v_adsC: adsC.slice(0, -1) + "ogh",
      in_adsC: adsC.slice(0, -1) + "ox",
      // 限定形可視双数形
      addC: addC,
      f_addC: addC.slice(0, -1) + "åf",
      e_addC: addC.slice(0, -1) + "on",
      d_addC: addC.slice(0, -1) + "ā",
      ad_addC: addC.slice(0, -1) + "oit",
      g_addC: addC.slice(0, -1) + "ūy",
      v_addC: addC.slice(0, -1) + "ogh",
      in_addC: addC.slice(0, -1) + "ox",
      // 限定形可視複数形
      adpC: adpC,
      f_adpC: adpC.slice(0, -2) + "åf",
      e_adpC: adpC.slice(0, -2) + "on",
      d_adpC: adpC.slice(0, -2) + "ā",
      ad_adpC: adpC.slice(0, -2) + "oit",
      g_adpC: adpC.slice(0, -2) + "ūy",
      v_adpC: adpC.slice(0, -2) + "ogh",
      in_adpC: adpC.slice(0, -2) + "ox",

      // 非限定形不可視単数形
      ansI: ansI,  
      f_ansI: ansI.slice(0, -1) + "åf",
      e_ansI: ansI.slice(0, -1) + "on",
      d_ansI: ansI.slice(0, -1) + "ā",
      ad_ansI: ansI.slice(0, -1) + "oit",
      g_ansI: ansI.slice(0, -1) + "ūy",
      v_ansI: ansI.slice(0, -1) + "ogh",
      in_ansI: ansI.slice(0, -1) + "ox", 
      // 非限定形不可視双数形
      andI: andI,
      f_andI: andI.slice(0, -1) + "åf",
      e_andI: andI.slice(0, -1) + "on",
      d_andI: andI.slice(0, -1) + "ā",
      ad_andI: andI.slice(0, -1) + "oit",
      g_andI: andI.slice(0, -1) + "ūy",
      v_andI: andI.slice(0, -1) + "ogh",
      in_andI: andI.slice(0, -1) + "ox",
      // 非限定形不可視複数形
      anpI: anpI,
      f_anpI: anpI.slice(0, -2) + "åf",
      e_anpI: anpI.slice(0, -2) + "on",
      d_anpI: anpI.slice(0, -2) + "ā",
      ad_anpI: anpI.slice(0, -2) + "oit",
      g_anpI: anpI.slice(0, -2) + "ūy",
      v_anpI: anpI.slice(0, -2) + "ogh",
      in_anpI: anpI.slice(0, -2) + "ox",

       // 限定形不可視単数形
      adsI: adsI,
      f_adsI: adsI.slice(0, -1) + "åf",
      e_adsI: adsI.slice(0, -1) + "on",
      d_adsI: adsI.slice(0, -1) + "ā",
      ad_adsI: adsI.slice(0, -1) + "oit",
      g_adsI: adsI.slice(0, -1) + "ūy",
      v_adsI: adsI.slice(0, -1) + "ogh",
      in_adsI: adsI.slice(0, -1) + "ox",
      // 限定形不可視双数形
      addI: addI,
      f_addI: addI.slice(0, -1) + "åf",
      e_addI: addI.slice(0, -1) + "on",
      d_addI: addI.slice(0, -1) + "ā",
      ad_addI: addI.slice(0, -1) + "oit",
      g_addI: addI.slice(0, -1) + "ūy",
      v_addI: addI.slice(0, -1) + "ogh",
      in_addI: addI.slice(0, -1) + "ox",
      // 限定形不可視複数形
      adpI: adpI,
      f_adpI: adpI.slice(0, -2) + "åf",
      e_adpI: adpI.slice(0, -2) + "on",
      d_adpI: adpI.slice(0, -2) + "ā",
      ad_adpI: adpI.slice(0, -2) + "oit",
      g_adpI: adpI.slice(0, -2) + "ūy",
      v_adpI: adpI.slice(0, -2) + "ogh",
      in_adpI: adpI.slice(0, -2) + "ox",
    };

  } else if (ruletype === "noL") {
     // 弱 o 基本形（L 変則）
    let andC = stem.slice(0, -1) + "nzo";         
    let anpC = stem.slice(0, -1) + "ddol";         
    let adsC = stem + "lom";      // adsCを定義 
    let addC = stem + "lonzo";      
    let adpC = stem + "londol";      
    let ansI = stem.slice(0, -1) + "kkom";      // ansIを定義
    let andI = stem.slice(0, -1) + "kkonzo";
    let anpI = stem.slice(0, -1) + "kkondol";
    let adsI = stem.slice(0, -1) + "kkollom";    // adsIも定義
    let addI = stem.slice(0, -1) + "kkollonzo";
    let adpI = stem.slice(0, -1) + "kkollondol";

    return {
      ansC: stem + "o",
      f_ansC: stem.slice(0, -1) + "ffå",
      e_ansC: stem + "on",
      d_ansC: stem.slice(0, -1) + "nnos",
      ad_ansC: stem + "oit",
      g_ansC: stem + "ūy",
      v_ansC: stem.slice(0, -1) + "nnos",
      in_ansC: stem + "ox",
      // 非限定形可視双数形
      andC: andC,
      f_andC: andC.slice(0, -2) + "få",
      e_andC: andC.slice(0, -1) + "on",
      d_andC: andC.slice(0, -2) + "os",
      ad_andC: andC.slice(0, -1) + "oit",
      g_andC: andC.slice(0, -1) + "ūy",
      v_andC: andC.slice(0, -2) + "nos",
      in_andC: andC.slice(0, -1) + "ox",
      // 非限定形可視複数形
      anpC: anpC,
      f_anpC: anpC.slice(0, -2) + "åf",
      e_anpC: anpC.slice(0, -2) + "on",
      d_anpC: anpC.slice(0, -2) + "ā",
      ad_anpC: anpC.slice(0, -2) + "oit",
      g_anpC: anpC.slice(0, -2) + "oy",
      v_anpC: anpC.slice(0, -2) + "ogh",
      in_anpC: anpC.slice(0, -1) + "x",

      // 限定形可視単数形
      adsC: adsC,
      f_adsC: adsC.slice(0, -1) + "f",
      e_adsC: adsC.slice(0, -1) + "n",
      d_adsC: adsC.slice(0, -2) + "å",
      ad_adsC: adsC.slice(0, -1) + "it",
      g_adsC: adsC.slice(0, -1) + "y",
      v_adsC: adsC.slice(0, -1) + "gh",
      in_adsC: adsC.slice(0, -1) + "x",
      // 限定形可視双数形
      addC: addC,
      f_addC: addC.slice(0, -1) + "åf",
      e_addC: addC.slice(0, -1) + "on",
      d_addC: addC.slice(0, -1) + "ā",
      ad_addC: addC.slice(0, -1) + "oit",
      g_addC: addC.slice(0, -1) + "oy",
      v_addC: addC.slice(0, -1) + "ogh",
      in_addC: addC.slice(0, -1) + "ox",
      // 限定形可視複数形
      adpC: adpC,
      f_adpC: adpC.slice(0, -2) + "åf",
      e_adpC: adpC.slice(0, -2) + "on",
      d_adpC: adpC.slice(0, -2) + "ā",
      ad_adpC: adpC.slice(0, -2) + "oit",
      g_adpC: adpC.slice(0, -2) + "oy",
      v_adpC: adpC.slice(0, -2) + "ogh",
      in_adpC: adpC.slice(0, -2) + "ox",

      // 非限定形不可視単数形
      ansI: ansI,  
      f_ansI: ansI.slice(0, -1) + "f",
      e_ansI: ansI.slice(0, -1) + "n",
      d_ansI: ansI.slice(0, -2) + "ā",
      ad_ansI: ansI.slice(0, -1) + "it",
      g_ansI: ansI.slice(0, -1) + "y",
      v_ansI: ansI.slice(0, -1) + "gh",
      in_ansI: ansI.slice(0, -1) + "x", 
      // 非限定形不可視双数形
      andI: andI,
      f_andI: andI.slice(0, -1) + "åf",
      e_andI: andI.slice(0, -1) + "on",
      d_andI: andI.slice(0, -1) + "ā",
      ad_andI: andI.slice(0, -1) + "oit",
      g_andI: andI.slice(0, -1) + "oy",
      v_andI: andI.slice(0, -1) + "ogh",
      in_andI: andI.slice(0, -1) + "ox",
      // 非限定形不可視複数形
      anpI: anpI,
      f_anpI: anpI.slice(0, -2) + "åf",
      e_anpI: anpI.slice(0, -2) + "on",
      d_anpI: anpI.slice(0, -2) + "ā",
      ad_anpI: anpI.slice(0, -2) + "oit",
      g_anpI: anpI.slice(0, -2) + "oy",
      v_anpI: anpI.slice(0, -2) + "ogh",
      in_anpI: anpI.slice(0, -2) + "ox",

       // 限定形不可視単数形
      adsI: adsI,
      f_adsI: adsI.slice(0, -1) + "åf",
      e_adsI: adsI.slice(0, -1) + "on",
      d_adsI: adsI.slice(0, -1) + "ā",
      ad_adsI: adsI.slice(0, -1) + "oit",
      g_adsI: adsI.slice(0, -1) + "oy",
      v_adsI: adsI.slice(0, -1) + "ogh",
      in_adsI: adsI.slice(0, -1) + "ox",
      // 限定形不可視双数形
      addI: addI,
      f_addI: addI.slice(0, -1) + "åf",
      e_addI: addI.slice(0, -1) + "on",
      d_addI: addI.slice(0, -1) + "ā",
      ad_addI: addI.slice(0, -1) + "oit",
      g_addI: addI.slice(0, -1) + "oy",
      v_addI: addI.slice(0, -1) + "ogh",
      in_addI: addI.slice(0, -1) + "ox",
      // 限定形不可視複数形
      adpI: adpI,
      f_adpI: adpI.slice(0, -2) + "åf",
      e_adpI: adpI.slice(0, -2) + "on",
      d_adpI: adpI.slice(0, -2) + "ā",
      ad_adpI: adpI.slice(0, -2) + "oit",
      g_adpI: adpI.slice(0, -2) + "oy",
      v_adpI: adpI.slice(0, -2) + "ogh",
      in_adpI: adpI.slice(0, -2) + "ox",
    };
  } else if (ruletype === "naI") {
    // 弱 a 不可視型 (na)
    let andC = stem + "sa";         
    let anpC = stem + "tas";         
    let adsC = stem + "óla";      // adsCを定義 
    let addC = stem + "óssa";      
    let adpC = stem + "ótta";      
    let ansI = stem + "ika";      // ansIを定義
    let andI = stem + "iksa";
    let anpI = stem + "iktas";
    let adsI = stem + "ikola";    // adsIも定義
    let addI = stem + "ikossa";
    let adpI = stem + "ikotta";

    return {
      ansC: (word.slice(-1) === "a" ? stem + "a" : stem),
      f_ansC: stem + "af",
      e_ansC: stem + "on",
      d_ansC: stem + "e",
      ad_ansC: stem + "ūt",
      g_ansC: stem + "oy",
      v_ansC: stem + "agh",
      in_ansC: stem + "iax",
      // 非限定形可視双数形
      andC: andC,
      f_andC: andC.slice(0, -1) + "af",
      e_andC: andC.slice(0, -1) + "on",
      d_andC: andC.slice(0, -1) + "e",
      ad_andC: andC.slice(0, -1) + "ūt",
      g_andC: andC.slice(0, -1) + "oy",
      v_andC: andC.slice(0, -1) + "agh",
      in_andC: andC.slice(0, -1) + "iax",
      // 非限定形可視複数形
      anpC: anpC,
      f_anpC: anpC.slice(0, -1) + "f",
      e_anpC: anpC.slice(0, -2) + "on",
      d_anpC: anpC.slice(0, -2) + "e",
      ad_anpC: anpC.slice(0, -2) + "ūt",
      g_anpC: anpC.slice(0, -2) + "oy",
      v_anpC: anpC.slice(0, -2) + "agh",
      in_anpC: anpC.slice(0, -2) + "iax",

      // 限定形可視単数形
      adsC: adsC,
      f_adsC: adsC.slice(0, -1) + "af",
      e_adsC: adsC.slice(0, -1) + "on",
      d_adsC: adsC.slice(0, -1) + "e",
      ad_adsC: adsC.slice(0, -1) + "ūt",
      g_adsC: adsC.slice(0, -1) + "oy",
      v_adsC: adsC.slice(0, -1) + "agh",
      in_adsC: adsC.slice(0, -1) + "iax",
      // 限定形可視双数形
      addC: addC,
      f_addC: addC.slice(0, -1) + "af",
      e_addC: addC.slice(0, -1) + "on",
      d_addC: addC.slice(0, -1) + "e",
      ad_addC: addC.slice(0, -1) + "ūt",
      g_addC: addC.slice(0, -1) + "oy",
      v_addC: addC.slice(0, -1) + "agh",
      in_addC: addC.slice(0, -1) + "iax",
      // 限定形可視複数形
      adpC: adpC,
      f_adpC: adpC.slice(0, -1) + "af",
      e_adpC: adpC.slice(0, -1) + "on",
      d_adpC: adpC.slice(0, -1) + "e",
      ad_adpC: adpC.slice(0, -1) + "ūt",
      g_adpC: adpC.slice(0, -1) + "oy",
      v_adpC: adpC.slice(0, -1) + "agh",
      in_adpC: adpC.slice(0, -1) + "iax",

      // 非限定形不可視単数形
      ansI: ansI,  
      f_ansI: ansI.slice(0, -1) + "af",
      e_ansI: ansI.slice(0, -1) + "on",
      d_ansI: ansI.slice(0, -1) + "e",
      ad_ansI: ansI.slice(0, -1) + "ūt",
      g_ansI: ansI.slice(0, -1) + "oy",
      v_ansI: ansI.slice(0, -1) + "agh",
      in_ansI: ansI.slice(0, -1) + "iax", 
      // 非限定形不可視双数形
      andI: andI,
      f_andI: andI.slice(0, -1) + "af",
      e_andI: andI.slice(0, -1) + "on",
      d_andI: andI.slice(0, -1) + "e",
      ad_andI: andI.slice(0, -1) + "ūt",
      g_andI: andI.slice(0, -1) + "oy",
      v_andI: andI.slice(0, -1) + "agh",
      in_andI: andI.slice(0, -1) + "iax",
      // 非限定形不可視複数形
      anpI: anpI,
      f_anpI: anpI.slice(0, -2) + "af",
      e_anpI: anpI.slice(0, -2) + "on",
      d_anpI: anpI.slice(0, -2) + "e",
      ad_anpI: anpI.slice(0, -2) + "ūt",
      g_anpI: anpI.slice(0, -2) + "oy",
      v_anpI: anpI.slice(0, -2) + "agh",
      in_anpI: anpI.slice(0, -2) + "iax",

       // 限定形不可視単数形
      adsI: adsI,
      f_adsI: adsI.slice(0, -1) + "af",
      e_adsI: adsI.slice(0, -1) + "on",
      d_adsI: adsI.slice(0, -1) + "e",
      ad_adsI: adsI.slice(0, -1) + "ūt",
      g_adsI: adsI.slice(0, -1) + "oy",
      v_adsI: adsI.slice(0, -1) + "agh",
      in_adsI: adsI.slice(0, -1) + "iax",
      // 限定形不可視双数形
      addI: addI,
      f_addI: addI.slice(0, -1) + "af",
      e_addI: addI.slice(0, -1) + "on",
      d_addI: addI.slice(0, -1) + "e",
      ad_addI: addI.slice(0, -1) + "ūt",
      g_addI: addI.slice(0, -1) + "oy",
      v_addI: addI.slice(0, -1) + "agh",
      in_addI: addI.slice(0, -1) + "iax",
      // 限定形不可視複数形
      adpI: adpI,
      f_adpI: adpI.slice(0, -1) + "af",
      e_adpI: adpI.slice(0, -1) + "on",
      d_adpI: adpI.slice(0, -1) + "e",
      ad_adpI: adpI.slice(0, -1) + "ūt",
      g_adpI: adpI.slice(0, -1) + "oy",
      v_adpI: adpI.slice(0, -1) + "agh",
      in_adpI: adpI.slice(0, -1) + "iax",

    };
  } else if (ruletype === "nhaI") {
    let andC = stem + "s";
    let anpC = stem + "tas";
    let adsC = stem2 + "óla";      // adsCを定義 
    let addC = stem2 + "óssa";      
    let adpC = stem2 + "ótta";      
    let ansI = stem2 + "hiḗva";      // ansIを定義
    let andI = stem2 + "hiḗvsa";
    let anpI = stem2 + "hiḗvtas";
    let adsI = stem2 + "hiḗvolà";    // adsIも定義
    let addI = stem2 + "hiḗvossà";
    let adpI = stem2 + "hiḗvottà";
  
      return {
        ansC: (word.slice(-1) === "a" ? stem + "a" : stem),
        f_ansC: stem + "af",
        e_ansC: stem + "on",
        d_ansC: stem + "e",
        ad_ansC: stem + "ūt",
        g_ansC: stem + "oy",
        v_ansC: stem + "agh",
        in_ansC: stem + "iax",
        // 非限定形可視双数形
        andC: andC + "a",
        f_andC: andC + "af",
        e_andC: andC + "on",
        d_andC: andC + "e",
        ad_andC: andC + "ūt",
        g_andC: andC + "oy",
        v_andC: andC + "agh",
        in_andC: andC + "iax",
        // 非限定形可視複数形
        anpC: anpC,
        f_anpC: anpC.slice(0, -1) + "f",
        e_anpC: anpC.slice(0, -2) + "on",
        d_anpC: anpC.slice(0, -2) + "e",
        ad_anpC: anpC.slice(0, -2) + "ūt",
        g_anpC: anpC.slice(0, -2) + "oy",
        v_anpC: anpC.slice(0, -2) + "agh",
        in_anpC: anpC.slice(0, -2) + "iax",
  
        // 限定形可視単数形
        adsC: adsC,
        f_adsC: adsC.slice(0, -1) + "af",
        e_adsC: adsC.slice(0, -1) + "on",
        d_adsC: adsC.slice(0, -1) + "e",
        ad_adsC: adsC.slice(0, -1) + "ūt",
        g_adsC: adsC.slice(0, -1) + "oy",
        v_adsC: adsC.slice(0, -1) + "agh",
        in_adsC: adsC.slice(0, -1) + "iax",
        // 限定形可視双数形
        addC: addC,
        f_addC: addC.slice(0, -1) + "af",
        e_addC: addC.slice(0, -1) + "on",
        d_addC: addC.slice(0, -1) + "e",
        ad_addC: addC.slice(0, -1) + "ūt",
        g_addC: addC.slice(0, -1) + "oy",
        v_addC: addC.slice(0, -1) + "agh",
        in_addC: addC.slice(0, -1) + "iax",
        // 限定形可視複数形
        adpC: adpC,
        f_adpC: adpC.slice(0, -1) + "af",
        e_adpC: adpC.slice(0, -1) + "on",
        d_adpC: adpC.slice(0, -1) + "e",
        ad_adpC: adpC.slice(0, -1) + "ūt",
        g_adpC: adpC.slice(0, -1) + "oy",
        v_adpC: adpC.slice(0, -1) + "agh",
        in_adpC: adpC.slice(0, -1) + "iax",
  
        // 非限定形不可視単数形
        ansI: ansI,  
        f_ansI: ansI.slice(0, -1) + "af",
        e_ansI: ansI.slice(0, -1) + "on",
        d_ansI: ansI.slice(0, -1) + "e",
        ad_ansI: ansI.slice(0, -1) + "ūt",
        g_ansI: ansI.slice(0, -1) + "oy",
        v_ansI: ansI.slice(0, -1) + "agh",
        in_ansI: ansI.slice(0, -1) + "iax", 
        // 非限定形不可視双数形
        andI: andI,
        f_andI: andI.slice(0, -1) + "af",
        e_andI: andI.slice(0, -1) + "on",
        d_andI: andI.slice(0, -1) + "e",
        ad_andI: andI.slice(0, -1) + "ūt",
        g_andI: andI.slice(0, -1) + "oy",
        v_andI: andI.slice(0, -1) + "agh",
        in_andI: andI.slice(0, -1) + "iax",
        // 非限定形不可視複数形
        anpI: anpI,
        f_anpI: anpI.slice(0, -2) + "af",
        e_anpI: anpI.slice(0, -2) + "on",
        d_anpI: anpI.slice(0, -2) + "e",
        ad_anpI: anpI.slice(0, -2) + "ūt",
        g_anpI: anpI.slice(0, -2) + "oy",
        v_anpI: anpI.slice(0, -2) + "agh",
        in_anpI: anpI.slice(0, -2) + "iax",
  
         // 限定形不可視単数形
        adsI: adsI,
        f_adsI: adsI.slice(0, -1) + "af",
        e_adsI: adsI.slice(0, -1) + "on",
        d_adsI: adsI.slice(0, -1) + "e",
        ad_adsI: adsI.slice(0, -1) + "ūt",
        g_adsI: adsI.slice(0, -1) + "oy",
        v_adsI: adsI.slice(0, -1) + "agh",
        in_adsI: adsI.slice(0, -1) + "iax",
        // 限定形不可視双数形
        addI: addI,
        f_addI: addI.slice(0, -1) + "af",
        e_addI: addI.slice(0, -1) + "on",
        d_addI: addI.slice(0, -1) + "e",
        ad_addI: addI.slice(0, -1) + "ūt",
        g_addI: addI.slice(0, -1) + "oy",
        v_addI: addI.slice(0, -1) + "agh",
        in_addI: addI.slice(0, -1) + "iax",
        // 限定形不可視複数形
        adpI: adpI,
        f_adpI: adpI.slice(0, -1) + "af",
        e_adpI: adpI.slice(0, -1) + "on",
        d_adpI: adpI.slice(0, -1) + "e",
        ad_adpI: adpI.slice(0, -1) + "ūt",
        g_adpI: adpI.slice(0, -1) + "oy",
        v_adpI: adpI.slice(0, -1) + "agh",
        in_adpI: adpI.slice(0, -1) + "iax",
      };
  } else if (ruletype === "nfhaI") {
      let andC = stem + "s";
      let anpC = stem + "tas";
      let adsC = stem2 + "óla";      // adsCを定義 
      let addC = stem2 + "óssa";      
      let adpC = stem2 + "ótta";      
      let ansI = stem2 + "hiḗva";      // ansIを定義
      let andI = stem2 + "hiḗvsa";
      let anpI = stem2 + "hiḗvtas";
      let adsI = stem2 + "hiḗvolà";    // adsIも定義
      let addI = stem2 + "hiḗvossà";
      let adpI = stem2 + "hiḗvottà";
    
        return {
          ansC: (word.slice(-1) === "a" ? stem + "a" : stem),
          f_ansC: stem + "af",
          e_ansC: stem + "on",
          d_ansC: stem + "e",
          ad_ansC: stem + "ūt",
          g_ansC: stem + "oy",
          v_ansC: stem + "agh",
          in_ansC: stem + "iax",
          // 非限定形可視双数形
          andC: andC + "a",
          f_andC: andC + "af",
          e_andC: andC + "on",
          d_andC: andC + "e",
          ad_andC: andC + "ūt",
          g_andC: andC + "oy",
          v_andC: andC + "agh",
          in_andC: andC + "iax",
          // 非限定形可視複数形
          anpC: anpC,
          f_anpC: anpC.slice(0, -1) + "f",
          e_anpC: anpC.slice(0, -2) + "on",
          d_anpC: anpC.slice(0, -2) + "e",
          ad_anpC: anpC.slice(0, -2) + "ūt",
          g_anpC: anpC.slice(0, -2) + "oy",
          v_anpC: anpC.slice(0, -2) + "agh",
          in_anpC: anpC.slice(0, -2) + "iax",
    
          // 限定形可視単数形
          adsC: adsC,
          f_adsC: adsC.slice(0, -1) + "af",
          e_adsC: adsC.slice(0, -1) + "on",
          d_adsC: adsC.slice(0, -1) + "e",
          ad_adsC: adsC.slice(0, -1) + "ūt",
          g_adsC: adsC.slice(0, -1) + "oy",
          v_adsC: adsC.slice(0, -1) + "agh",
          in_adsC: adsC.slice(0, -1) + "iax",
          // 限定形可視双数形
          addC: addC,
          f_addC: addC.slice(0, -1) + "af",
          e_addC: addC.slice(0, -1) + "on",
          d_addC: addC.slice(0, -1) + "e",
          ad_addC: addC.slice(0, -1) + "ūt",
          g_addC: addC.slice(0, -1) + "oy",
          v_addC: addC.slice(0, -1) + "agh",
          in_addC: addC.slice(0, -1) + "iax",
          // 限定形可視複数形
          adpC: adpC,
          f_adpC: adpC.slice(0, -1) + "af",
          e_adpC: adpC.slice(0, -1) + "on",
          d_adpC: adpC.slice(0, -1) + "e",
          ad_adpC: adpC.slice(0, -1) + "ūt",
          g_adpC: adpC.slice(0, -1) + "oy",
          v_adpC: adpC.slice(0, -1) + "agh",
          in_adpC: adpC.slice(0, -1) + "iax",
    
          // 非限定形不可視単数形
          ansI: ansI,  
          f_ansI: ansI.slice(0, -1) + "af",
          e_ansI: ansI.slice(0, -1) + "on",
          d_ansI: ansI.slice(0, -1) + "e",
          ad_ansI: ansI.slice(0, -1) + "ūt",
          g_ansI: ansI.slice(0, -1) + "oy",
          v_ansI: ansI.slice(0, -1) + "agh",
          in_ansI: ansI.slice(0, -1) + "iax", 
          // 非限定形不可視双数形
          andI: andI,
          f_andI: andI.slice(0, -1) + "af",
          e_andI: andI.slice(0, -1) + "on",
          d_andI: andI.slice(0, -1) + "e",
          ad_andI: andI.slice(0, -1) + "ūt",
          g_andI: andI.slice(0, -1) + "oy",
          v_andI: andI.slice(0, -1) + "agh",
          in_andI: andI.slice(0, -1) + "iax",
          // 非限定形不可視複数形
          anpI: anpI,
          f_anpI: anpI.slice(0, -2) + "af",
          e_anpI: anpI.slice(0, -2) + "on",
          d_anpI: anpI.slice(0, -2) + "e",
          ad_anpI: anpI.slice(0, -2) + "ūt",
          g_anpI: anpI.slice(0, -2) + "oy",
          v_anpI: anpI.slice(0, -2) + "agh",
          in_anpI: anpI.slice(0, -2) + "iax",
    
           // 限定形不可視単数形
          adsI: adsI,
          f_adsI: adsI.slice(0, -1) + "af",
          e_adsI: adsI.slice(0, -1) + "on",
          d_adsI: adsI.slice(0, -1) + "e",
          ad_adsI: adsI.slice(0, -1) + "ūt",
          g_adsI: adsI.slice(0, -1) + "oy",
          v_adsI: adsI.slice(0, -1) + "agh",
          in_adsI: adsI.slice(0, -1) + "iax",
          // 限定形不可視双数形
          addI: addI,
          f_addI: addI.slice(0, -1) + "af",
          e_addI: addI.slice(0, -1) + "on",
          d_addI: addI.slice(0, -1) + "e",
          ad_addI: addI.slice(0, -1) + "ūt",
          g_addI: addI.slice(0, -1) + "oy",
          v_addI: addI.slice(0, -1) + "agh",
          in_addI: addI.slice(0, -1) + "iax",
          // 限定形不可視複数形
          adpI: adpI,
          f_adpI: adpI.slice(0, -1) + "af",
          e_adpI: adpI.slice(0, -1) + "on",
          d_adpI: adpI.slice(0, -1) + "e",
          ad_adpI: adpI.slice(0, -1) + "ūt",
          g_adpI: adpI.slice(0, -1) + "oy",
          v_adpI: adpI.slice(0, -1) + "agh",
          in_adpI: adpI.slice(0, -1) + "iax",
        };
    
    } else if (ruletype === "mia") {
    // 人称名象 (mia)
    let andC = stem + "ýt";         
    let anpC = stem + "íyv";    
    let ansI = stem + "iū́l";
    let andI = stem + "iū́z";
    let anpI = stem + "iū́tas";

    return {
      ansC: stem + "ia",
      f_ansC: stem + "al",
      e_ansC: stem + "ol",
      d_ansC: stem + "el",
      ad_ansC: stem + "iū",
      g_ansC: stem + "hō",
      v_ansC: stem + "iagh",
      in_ansC: stem + "iax",
      // 非限定形可視双数形
      andC: andC,
      f_andC: andC + "al",
      e_andC: andC + "ol",
      d_andC: andC + "el",
      ad_andC: andC + "iū",
      g_andC: andC + "oy",
      v_andC: andC + "ygh",
      in_andC: andC + "iax",
      
      anpC: anpC + "a",
      f_anpC: anpC + "al",
      e_anpC: anpC + "on",
      d_anpC: anpC + "e",
      ad_anpC: anpC + "ūt",
      g_anpC: anpC + "oy",
      v_anpC: anpC + "agh",
      in_anpC: anpC + "iax",
      // 非限定形不可視単数形
      ansI: ansI + "a",
      f_ansI: ansI + "al",
      e_ansI: ansI + "ol",
      d_ansI: ansI + "el",
      ad_ansI: ansI + "iū",
      g_ansI: ansI + "oy",
      v_ansI: ansI + "agh",
      in_ansI: ansI + "iax", 
      // 非限定形不可視双数形
      andI: andI + "a",
      f_andI: andI + "al",
      e_andI: andI + "ol",
      d_andI: andI + "el",
      ad_andI: andI + "iū",
      g_andI: andI + "oy",
      v_andI: andI + "agh",
      in_andI: andI + "iax",
      // 非限定形不可視複数形
      anpI: anpI + "a",
      f_anpI: anpI + "al",
      e_anpI: anpI + "ol",
      d_anpI: anpI + "el",
      ad_anpI: anpI + "iū",
      g_anpI: anpI + "oy",
      v_anpI: anpI + "agh",
      in_anpI: anpI + "iax",
    };
      } else if (ruletype === "sia") {
    // 人称名象 (sia)
    let andC = stem + "ýt";         
    let anpC = stem + "íyv";    
    let ansI = stem + "iū́l";
    let andI = stem + "iū́z";
    let anpI = stem + "iū́tas";

    return {
      ansC: stem + "ia",
      f_ansC: stem + "al",
      e_ansC: stem + "ol",
      d_ansC: stem + "el",
      ad_ansC: stem + "iū",
      g_ansC: stem + "oy",
      v_ansC: stem + "iagh",
      in_ansC: stem + "iax",
      // 非限定形可視双数形
      andC: andC,
      f_andC: andC + "al",
      e_andC: andC + "ol",
      d_andC: andC + "el",
      ad_andC: andC + "iū",
      g_andC: andC + "oy",
      v_andC: andC + "ygh",
      in_andC: andC + "iax",
      
      anpC: anpC + "a",
      f_anpC: anpC + "al",
      e_anpC: anpC + "on",
      d_anpC: anpC + "e",
      ad_anpC: anpC + "ūt",
      g_anpC: anpC + "oy",
      v_anpC: anpC + "agh",
      in_anpC: anpC + "iax",
      // 非限定形不可視単数形
      ansI: ansI + "a",
      f_ansI: ansI + "al",
      e_ansI: ansI + "ol",
      d_ansI: ansI + "el",
      ad_ansI: ansI + "iū",
      g_ansI: ansI + "oy",
      v_ansI: ansI + "agh",
      in_ansI: ansI + "iax", 
      // 非限定形不可視双数形
      andI: andI + "a",
      f_andI: andI + "al",
      e_andI: andI + "ol",
      d_andI: andI + "el",
      ad_andI: andI + "iū",
      g_andI: andI + "oy",
      v_andI: andI + "agh",
      in_andI: andI + "iax",
      // 非限定形不可視複数形
      anpI: anpI + "a",
      f_anpI: anpI + "al",
      e_anpI: anpI + "ol",
      d_anpI: anpI + "el",
      ad_anpI: anpI + "iū",
      g_anpI: anpI + "oy",
      v_anpI: anpI + "agh",
      in_anpI: anpI + "iax",
    };
  } 
  {
    // □ naI, nhaI, nfhaI, nsta, nstā, nsto, nstho, (nad, nhad, nstad, nsthad), naL, naI, 
    // ☑ na, nha, nā, nhā,
  }
}
