// conjugation.js
function getConjot(word, stem, type, ruletype) {
    if (ruletype === "no") {
      return {};
    } else if (ruletype === "pa") {
        const andC = stem + "sa";         
        const anpC = stem + "tas";         
        const adsC = stem + "ola";      // adsCを定義 
        const addC = stem + "ossa";      
        const adpC = stem + "otta";      
        const ansI = stem + "ika";      // ansIを定義
        const andI = stem + "iksa";
        const anpI = stem + "iktas";
        const adsI = stem + "ikola";    // adsIも定義
        const addI = stem + "ikossa";
        const adpI = stem + "ikotta";
    
        return {
          ansC: stem,
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
          
      // 動詞
      vpa0: stem + "a",
      vpr0: stem + "ot",
      vf0: stem + "yst",
      vpa1: stem + "ē",
      vpr1: stem + "oyot",
      vf1: stem + "zȳpr",
      vpa2: stem + "das",
      vpr2: stem + "dot",
      vf2: stem + "dȳf",
    }
  }
}
