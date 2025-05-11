function getConjN(word, stem, stem2, type, ruletype) {
  if (ruletype === "x") {
    return {};
  } else if (ruletype === "p") {
    // p 基本形
    let anpC = stem;
    let adsC = stem.slice(0, -1); 
    let adpC = stem .slice(0, -1);

      return {
        // 非限単
        ansC: word,
        f_ansC: stem + "af",
        e_ansC: stem + "am",
        d_ansC: stem + "es",
        ad_ansC: stem + "ut",
        g_ansC: stem + "oy",
        v_ansC: stem + "agh",

        // 非限複
        anpC: anpC + "rol",
        f_anpC: anpC + "ras",
        e_anpC: anpC + "ram",
        d_anpC: anpC + "rös",
        ad_anpC: anpC + "rut",
        g_anpC: anpC + "roy",
        v_anpC: anpC + "ragh",

        // 限単
        adsC: adsC + "fka",
        f_adsC: adsC + "fas",
        e_adsC: adsC + "fram",
        d_adsC: adsC + "hkös",
        ad_adsC: adsC + "hkut",
        g_adsC: adsC + "hkoy",
        v_adsC: adsC + "hkagh",

        // 限複
        adpC: adpC + "prasta",
        f_adpC: adpC + "frastaf",
        e_adpC: adpC + "frastam",
        d_adpC: adpC + "hkatös",
        ad_adpC: adpC + "hkatol",
        g_adpC: adpC + "hkatoy",
        v_adpC: adpC + "prastagh",
      };
    } else if (ruletype === "b") {
      // b 基本形
      let anpC = stem;
      let adsC = stem.slice(0, -1); 
      let adpC = stem .slice(0, -1);
    
        return {
          // 非限単
          ansC: word,
          f_ansC: stem + "af",
          e_ansC: stem + "am",
          d_ansC: stem + "es",
          ad_ansC: stem + "ut",
          g_ansC: stem + "oy",
          v_ansC: stem + "agh",
  
          // 非限複
          anpC: anpC + "rol",
          f_anpC: anpC + "ras",
          e_anpC: anpC + "ram",
          d_anpC: anpC + "rös",
          ad_anpC: anpC + "rut",
          g_anpC: anpC + "roy",
          v_anpC: anpC + "ragh",
  
    
          // 限単
          adsC: adsC + "vka",
          f_adsC: adsC + "vas",
          e_adsC: adsC + "vram",
          d_adsC: adsC + "vkös",
          ad_adsC: adsC + "vkut",
          g_adsC: adsC + "vkoy",
          v_adsC: adsC + "vkagh",
  
          // 限複
          adpC: adpC + "brasta",
          f_adpC: adpC + "vrastaf",
          e_adpC: adpC + "vrastam",
          d_adpC: adpC + "vkatös",
          ad_adpC: adpC + "vkatol",
          g_adpC: adpC + "vkatoy",
          v_adpC: adpC + "brastagh",
    
        };
    } else if (ruletype === "t") {
        // t, s, x, n, q 基本形
        let anpC = stem;
        let adsC = stem; 
        let adpC = stem;
      
          return {
            // 非限単
            ansC: word,
            f_ansC: stem + "af",
            e_ansC: stem + "am",
            d_ansC: stem + "es",
            ad_ansC: stem + "ut",
            g_ansC: stem + "oy",
            v_ansC: stem + "agh",
    
            // 非限複
            anpC: anpC + "dol",
            f_anpC: anpC + "das",
            e_anpC: anpC + "dam",
            d_anpC: anpC + "dös",
            ad_anpC: anpC + "dut",
            g_anpC: anpC + "doy",
            v_anpC: anpC + "dagh",
    
      
            // 限単
            adsC: adsC + "ka",
            f_adsC: adsC + "kaf",
            e_adsC: adsC + "kram",
            d_adsC: adsC + "kös",
            ad_adsC: adsC + "kut",
            g_adsC: adsC + "koy",
            v_adsC: adsC + "kagh",
    
            // 限複
            adpC: adpC + "rasta",
            f_adpC: adpC + "rastaf",
            e_adpC: adpC + "rasdön",
            d_adpC: adpC + "katös",
            ad_adpC: adpC + "katol",
            g_adpC: adpC + "katoy",
            v_adpC: adpC + "rastagh",
          };
        } else if (ruletype === "d") {
        // d 基本形
        let anpC = stem;
        let adsC = stem; 
        let adpC = stem;
      
          return {
            // 非限単
            ansC: word,
            f_ansC: stem + "af",
            e_ansC: stem + "am",
            d_ansC: stem + "es",
            ad_ansC: stem + "ut",
            g_ansC: stem + "oy",
            v_ansC: stem + "agh",
    
            // 非限複
            anpC: anpC + "dol",
            f_anpC: anpC + "das",
            e_anpC: anpC + "dam",
            d_anpC: anpC + "dös",
            ad_anpC: anpC + "dut",
            g_anpC: anpC + "doy",
            v_anpC: anpC + "dagh",
    
      
            // 限単
            adsC: adsC + "ras",
            f_adsC: adsC + "rasfa",
            e_adsC: adsC + "rason",
            d_adsC: adsC + "rös",
            ad_adsC: adsC + "rut",
            g_adsC: adsC + "roy",
            v_adsC: adsC + "rös",
    
            // 限複
            adpC: adpC + "rasta",
            f_adpC: adpC + "rastaf",
            e_adpC: adpC + "rasdön",
            d_adpC: adpC + "rastös",
            ad_adpC: adpC + "rastol",
            g_adpC: adpC + "rastoy",
            v_adpC: adpC + "rastagh",
          };
        } else if (ruletype === "z") {
          // z j 基本形
          let anpC = stem;
          let adsC = stem; 
          let adpC = stem;
        
            return {
              // 非限単
              ansC: word,
              f_ansC: stem + "af",
              e_ansC: stem + "am",
              d_ansC: stem + "es",
              ad_ansC: stem + "ut",
              g_ansC: stem + "oy",
              v_ansC: stem + "agh",
      
              // 非限複
              anpC: anpC + "dol",
              f_anpC: anpC + "das",
              e_anpC: anpC + "dam",
              d_anpC: anpC + "dös",
              ad_anpC: anpC + "dut",
              g_anpC: anpC + "doy",
              v_anpC: anpC + "dagh",
      
        
              // 限単
              adsC: adsC + "na",
              f_adsC: adsC + "naf",
              e_adsC: adsC + "non",
              d_adsC: adsC + "nös",
              ad_adsC: adsC + "nut",
              g_adsC: adsC + "noy",
              v_adsC: adsC + "nös",
      
              // 限複
              adpC: adpC + "nasta",
              f_adpC: adpC + "nastaf",
              e_adpC: adpC + "nasdön",
              d_adpC: adpC + "nastös",
              ad_adpC: adpC + "nastol",
              g_adpC: adpC + "nastoy",
              v_adpC: adpC + "nastagh",
            };
        } else if (ruletype === "f") {
    let anpC = stem;
    let adsC = stem.slice(0, -1); 
    let adpC = stem .slice(0, -1);
    
      return {
        // 非限単
        ansC: word,
        f_ansC: stem + "af",
        e_ansC: stem + "am",
        d_ansC: stem + "es",
        ad_ansC: stem + "ut",
        g_ansC: stem + "oy",
        v_ansC: stem + "agh",

        // 非限複
        anpC: anpC + "rol",
        f_anpC: anpC + "ras",
        e_anpC: anpC + "ram",
        d_anpC: anpC + "rös",
        ad_anpC: anpC + "rut",
        g_anpC: anpC + "roy",
        v_anpC: anpC + "ragh",

        // 限単
        adsC: adsC + "fka",
        f_adsC: adsC + "fas",
        e_adsC: adsC + "fram",
        d_adsC: adsC + "hkös",
        ad_adsC: adsC + "hkut",
        g_adsC: adsC + "hkoy",
        v_adsC: adsC + "hkagh",

        // 限複
        adpC: adpC + "prasta",
        f_adpC: adpC + "frastaf",
        e_adpC: adpC + "frastam",
        d_adpC: adpC + "hkatös",
        ad_adpC: adpC + "hkatol",
        g_adpC: adpC + "hkatoy",
        v_adpC: adpC + "prastagh",
      };
    } else if (ruletype === "v") {
      // v 基本形
      let anpC = stem;
      let adsC = stem.slice(0, -1); 
      let adpC = stem .slice(0, -1);
    
        return {
          // 非限単
          ansC: word,
          f_ansC: stem + "af",
          e_ansC: stem + "am",
          d_ansC: stem + "es",
          ad_ansC: stem + "aut",
          g_ansC: stem + "oy",
          v_ansC: stem + "agh",
  
          // 非限複
          anpC: anpC + "rol",
          f_anpC: anpC + "ras",
          e_anpC: anpC + "ram",
          d_anpC: anpC + "rös",
          ad_anpC: anpC + "rut",
          g_anpC: anpC + "roy",
          v_anpC: anpC + "ragh",
  
    
          // 限単
          adsC: adsC + "vka",
          f_adsC: adsC + "vas",
          e_adsC: adsC + "vram",
          d_adsC: adsC + "vkös",
          ad_adsC: adsC + "vkut",
          g_adsC: adsC + "vkoy",
          v_adsC: adsC + "vkagh",
  
          // 限複
          adpC: adpC + "brasta",
          f_adpC: adpC + "vrastaf",
          e_adpC: adpC + "vrastam",
          d_adpC: adpC + "vkatös",
          ad_adpC: adpC + "vkatol",
          g_adpC: adpC + "vkatoy",
          v_adpC: adpC + "brastagh",
    
        };
    } else if (ruletype === "m") {
      let anpC = stem;
      let adsC = stem.slice(0, -1); 
      let adpC = stem .slice(0, -1);
      
        return {
          // 非限単
          ansC: word,
          f_ansC: stem + "af",
          e_ansC: stem + "am",
          d_ansC: stem + "es",
          ad_ansC: stem + "ut",
          g_ansC: stem + "oy",
          v_ansC: stem + "agh",
  
          // 非限複
          anpC: anpC + "rol",
          f_anpC: anpC + "ras",
          e_anpC: anpC + "ram",
          d_anpC: anpC + "rös",
          ad_anpC: anpC + "rut",
          g_anpC: anpC + "roy",
          v_anpC: anpC + "ragh",
  
          // 限単
          adsC: adsC + "nnia",
          f_adsC: adsC + "nniaf",
          e_adsC: adsC + "nniaqt",
          d_adsC: adsC + "nniös",
          ad_adsC: adsC + "nnyt",
          g_adsC: adsC + "nniay",
          v_adsC: adsC + "nniagh",
  
          // 限複
          adpC: adpC + "nniasta",
          f_adpC: adpC + "nniastaf",
          e_adpC: adpC + "nniastam",
          d_adpC: adpC + "nniastös",
          ad_adpC: adpC + "nniastol",
          g_adpC: adpC + "nniastoy",
          v_adpC: adpC + "nniastagh",
        };
      } else if (ruletype === "i") {
        // 斜音形
        let anpC = stem;
        let adsC = stem; 
        let adpC = stem;
      
          return {
            // 非限単
            ansC: word,
            f_ansC: stem + "af",
            e_ansC: stem + "aqt",
            d_ansC: stem + "ös",
            ad_ansC: stem + "yt",
            g_ansC: stem + "ay",
            v_ansC: stem + "agh",
    
            // 非限複
            anpC: anpC + "ry",
            f_anpC: anpC + "rynt",
            e_anpC: anpC + "ram",
            d_anpC: anpC + "rys",
            ad_anpC: anpC + "rut",
            g_anpC: anpC + "roy",
            v_anpC: anpC + "ragh",
    
      
            // 限単
            adsC: adsC + "ka",
            f_adsC: adsC + "rasfa",
            e_adsC: adsC + "rassaqt",
            d_adsC: adsC + "kös",
            ad_adsC: adsC + "kut",
            g_adsC: adsC + "koy",
            v_adsC: adsC + "kagh",
    
            // 限複
            adpC: adpC + "kras",
            f_adpC: adpC + "rassynt",
            e_adpC: adpC + "rastam",
            d_adpC: adpC + "katös",
            ad_adpC: adpC + "katol",
            g_adpC: adpC + "katoy",
            v_adpC: adpC + "rastagh",
      
          };
  } else if (ruletype === "mia") {
    // 人称名象 (mia)     
    let anpC = stem + "íyv";    

    return {
      ansC: stem + "ia",
      f_ansC: stem + "al",
      e_ansC: stem + "ol",
      d_ansC: stem + "el",
      ad_ansC: stem + "iū",
      g_ansC: stem + "hō",
      v_ansC: stem + "iagh",
      in_ansC: stem + "iax",
      
      anpC: anpC + "a",
      f_anpC: anpC + "al",
      e_anpC: anpC + "on",
      d_anpC: anpC + "e",
      ad_anpC: anpC + "ūt",
      g_anpC: anpC + "oy",
      v_anpC: anpC + "agh",
      in_anpC: anpC + "iax",
    };
  } else if (ruletype === "sia") {
    // 人称名象 (sia)        
    let anpC = stem + "íyv"; 

    return {
      ansC: stem + "ia",
      f_ansC: stem + "al",
      e_ansC: stem + "ol",
      d_ansC: stem + "el",
      ad_ansC: stem + "iū",
      g_ansC: stem + "oy",
      v_ansC: stem + "iagh",
      in_ansC: stem + "iax",

      anpC: anpC + "a",
      f_anpC: anpC + "al",
      e_anpC: anpC + "on",
      d_anpC: anpC + "e",
      ad_anpC: anpC + "ūt",
      g_anpC: anpC + "oy",
      v_anpC: anpC + "agh",
      in_anpC: anpC + "iax",

    };
    }
  }
