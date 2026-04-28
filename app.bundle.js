function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => React.createElement(IOSGlassPill, {
    dark: dark
  }, React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return React.createElement("div", null, header && React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return React.createElement("div", {
    style: {
      width: `min(${width}px, 100vw)`,
      height: `min(${height}px, 100vh)`,
      maxHeight: height,
      borderRadius: 'clamp(0px, 11vw, 48px)',
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, React.createElement(IOSStatusBar, {
    dark: dark
  })), React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && React.createElement(IOSKeyboard, {
    dark: dark
  })), React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';
  const icons = {
    shift: React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => React.createElement(React.Fragment, {
    key: i
  }, i > 0 && React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
const BRAND = {
  bg: '#F4F5F0',
  card: '#FFFFFF',
  ink: '#1A1A1A',
  mute: '#6B7280',
  line: '#E5E7EB',
  accent: '#FBEA3B',
  accentDark: '#F2E02B',
  promo: '#184A3B',
  promoSoft: '#236B56',
  purple: '#51327B',
  ok: '#29A745',
  danger: '#D32F2F',
  minTouch: 44,
  tapTransition: 'background-color 0.18s ease-out, color 0.18s ease-out, transform 0.18s ease-out'
};
const LanguageContext = React.createContext({
  language: 'lv',
  setLanguage: () => {},
  L: (lv, en) => lv,
  monthLabel: label => label,
  shortMonthLabel: label => label.slice(0, 3),
  scenarioLabel: key => key,
  scenarioNote: key => key
});
function useLanguage() {
  return React.useContext(LanguageContext);
}
const MONTH_COPY = {
  Maijs: {
    lv: 'Maijs',
    en: 'May'
  },
  Jūnijs: {
    lv: 'Jūnijs',
    en: 'Jun'
  },
  Jūlijs: {
    lv: 'Jūlijs',
    en: 'Jul'
  },
  Augusts: {
    lv: 'Augusts',
    en: 'Aug'
  },
  Septembris: {
    lv: 'Septembris',
    en: 'Sep'
  },
  Oktobris: {
    lv: 'Oktobris',
    en: 'Oct'
  },
  Novembris: {
    lv: 'Novembris',
    en: 'Nov'
  },
  Decembris: {
    lv: 'Decembris',
    en: 'Dec'
  },
  Janvāris: {
    lv: 'Janvāris',
    en: 'Jan'
  },
  Februāris: {
    lv: 'Februāris',
    en: 'Feb'
  },
  Marts: {
    lv: 'Marts',
    en: 'Mar'
  },
  Aprīlis: {
    lv: 'Aprīlis',
    en: 'Apr'
  }
};
const SCENARIO_COPY = {
  cautious: {
    lv: {
      label: 'Pesimistiskais',
      note: '2.8% gada ienesīgums'
    },
    en: {
      label: 'Pessimistic',
      note: '2.8% annual return'
    }
  },
  balanced: {
    lv: {
      label: 'Labvēlīgais',
      note: '4.1% gada ienesīgums'
    },
    en: {
      label: 'Favorable',
      note: '4.1% annual return'
    }
  },
  dynamic: {
    lv: {
      label: 'Optimistiskais',
      note: '5.3% gada ienesīgums'
    },
    en: {
      label: 'Optimistic',
      note: '5.3% annual return'
    }
  }
};
const PENSION_PLAN_OPTIONS = [{
  name: 'INDEXO AKCIJAS',
  riskLv: 'Augsts risks',
  riskEn: 'High risk'
}, {
  name: 'INDEXO OBLIGĀCIJAS',
  riskLv: 'Zems risks',
  riskEn: 'Low risk'
}, {
  name: 'SEB Dynamic',
  riskLv: 'Augsts risks',
  riskEn: 'High risk'
}, {
  name: 'SEB Balanced',
  riskLv: 'Vidējs risks',
  riskEn: 'Medium risk'
}, {
  name: 'SEB Conservative',
  riskLv: 'Zems risks',
  riskEn: 'Low risk'
}, {
  name: 'Swedbank Dynamic',
  riskLv: 'Augsts risks',
  riskEn: 'High risk'
}, {
  name: 'Swedbank Balanced',
  riskLv: 'Vidējs risks',
  riskEn: 'Medium risk'
}, {
  name: 'Swedbank Conservative',
  riskLv: 'Zems risks',
  riskEn: 'Low risk'
}];
function translateMonth(label, language) {
  return MONTH_COPY[label]?.[language] || label;
}
function translateScenarioLabel(key, language) {
  return SCENARIO_COPY[key]?.[language]?.label || FUTURE_SCENARIOS[key]?.label || key;
}
function translateScenarioNote(key, language) {
  return SCENARIO_COPY[key]?.[language]?.note || FUTURE_SCENARIOS[key]?.note || key;
}
const Icon = {
  chat: (s = 22, c = BRAND.ink) => React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none"
  }, React.createElement("path", {
    d: "M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v8A2.5 2.5 0 0 1 17.5 17H10l-4 3.5V17H6.5A2.5 2.5 0 0 1 4 14.5v-8Z",
    stroke: c,
    strokeWidth: "1.4"
  })),
  chev: (s = 14, c = BRAND.ink, strokeWidth = 2.4) => React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 16 16",
    fill: "none"
  }, React.createElement("path", {
    d: "M6 3l5 5-5 5",
    stroke: c,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })),
  info: (s = 14, c = BRAND.mute) => React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 16 16",
    fill: "none"
  }, React.createElement("circle", {
    cx: "8",
    cy: "8",
    r: "6.4",
    stroke: c,
    strokeWidth: "1.2"
  }), React.createElement("path", {
    d: "M8 7.2v4M8 4.8v.01",
    stroke: c,
    strokeWidth: "1.4",
    strokeLinecap: "round"
  })),
  close: (s = 18, c = '#fff') => React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 20 20",
    fill: "none"
  }, React.createElement("path", {
    d: "M5 5l10 10M15 5L5 15",
    stroke: c,
    strokeWidth: "1.6",
    strokeLinecap: "round"
  })),
  dots: (c = BRAND.mute) => React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: c
  }, React.createElement("circle", {
    cx: "4",
    cy: "10",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "10",
    cy: "10",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "16",
    cy: "10",
    r: "1.5"
  })),
  card: () => React.createElement("img", {
    src: "assets/izveidot_karti.svg",
    width: "32",
    height: "20",
    alt: "",
    style: {
      display: 'block'
    }
  }),
  send: () => React.createElement("img", {
    src: "assets/sutit_pieprasit.svg",
    width: "26",
    height: "22",
    alt: "",
    style: {
      display: 'block'
    }
  }),
  chart: () => React.createElement("img", {
    src: "assets/papildinat.svg",
    width: "30",
    height: "22",
    alt: "",
    style: {
      display: 'block'
    }
  }),
  goal: (c = BRAND.ink) => React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none"
  }, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "8",
    stroke: c,
    strokeWidth: "1.4"
  }), React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4",
    stroke: c,
    strokeWidth: "1.4"
  }), React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1.2",
    fill: c
  })),
  home: (active = false) => React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none"
  }, React.createElement("path", {
    d: "M4 11l8-6 8 6v9a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1v-9Z",
    stroke: BRAND.ink,
    strokeWidth: "1.5",
    strokeLinejoin: "round",
    fill: active ? BRAND.ink : 'none'
  })),
  swap: React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none"
  }, React.createElement("path", {
    d: "M4 9h14l-3-3M20 15H6l3 3",
    stroke: BRAND.ink,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), React.createElement("circle", {
    cx: "20",
    cy: "9",
    r: "1.3",
    fill: BRAND.accent
  })),
  grid: React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none"
  }, React.createElement("rect", {
    x: "4",
    y: "4",
    width: "7",
    height: "7",
    rx: "1",
    stroke: BRAND.ink,
    strokeWidth: "1.5"
  }), React.createElement("rect", {
    x: "13",
    y: "4",
    width: "7",
    height: "7",
    rx: "1",
    stroke: BRAND.ink,
    strokeWidth: "1.5"
  }), React.createElement("rect", {
    x: "4",
    y: "13",
    width: "7",
    height: "7",
    rx: "1",
    stroke: BRAND.ink,
    strokeWidth: "1.5"
  }), React.createElement("rect", {
    x: "13",
    y: "13",
    width: "7",
    height: "7",
    rx: "1",
    stroke: BRAND.ink,
    strokeWidth: "1.5"
  }), React.createElement("circle", {
    cx: "19",
    cy: "6",
    r: "1.6",
    fill: BRAND.accent
  })),
  sparkle: (c = '#fff') => React.createElement("svg", {
    width: "44",
    height: "44",
    viewBox: "0 0 44 44",
    fill: "none"
  }, React.createElement("rect", {
    x: "12",
    y: "10",
    width: "20",
    height: "24",
    rx: "2",
    fill: "#fff",
    opacity: "0.95"
  }), React.createElement("path", {
    d: "M18 20h8M18 24h6",
    stroke: BRAND.promo,
    strokeWidth: "1.4",
    strokeLinecap: "round"
  }), React.createElement("text", {
    x: "22",
    y: "32",
    fontFamily: "Gibson, IBM Plex Sans, Aptos, system-ui",
    fontSize: "9",
    fontWeight: "700",
    fill: BRAND.promo,
    textAnchor: "middle"
  }, "%"), React.createElement("path", {
    d: "M34 8l1.5 3 3 .5-2.2 2 .5 3L34 15l-2.8 1.5.5-3-2.2-2 3-.5L34 8Z",
    fill: BRAND.accent
  }), React.createElement("path", {
    d: "M8 20l4 2M6 26l3 .5M10 32l2-2",
    stroke: "#fff",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    opacity: "0.6"
  }))
};
function CardImagery() {
  return React.createElement("img", {
    src: "assets/norekinu_konts_pic.PNG",
    alt: "",
    style: {
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      width: 140,
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
      borderRadius: '0 18px 18px 0'
    }
  });
}
function QuickAction({
  icon,
  label,
  ariaLabel,
  onClick
}) {
  return React.createElement("button", {
    type: "button",
    onClick: onClick,
    "aria-label": ariaLabel,
    style: {
      flex: 1,
      background: 'transparent',
      border: 0,
      padding: 0,
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      textAlign: 'left'
    }
  }, React.createElement("div", {
    style: {
      width: BRAND.minTouch,
      height: BRAND.minTouch,
      borderRadius: '50%',
      background: BRAND.card,
      border: `1px solid ${BRAND.line}`,
      display: 'grid',
      placeItems: 'center',
      flexShrink: 0,
      boxShadow: '0 1px 2px rgba(30,25,10,0.04), 0 4px 10px rgba(30,25,10,0.04)'
    }
  }, icon), React.createElement("div", {
    style: {
      fontSize: 12.5,
      lineHeight: '15px',
      color: BRAND.ink,
      letterSpacing: 0
    }
  }, label));
}
function Tab({
  label,
  active,
  onClick
}) {
  return React.createElement("button", {
    type: "button",
    role: "tab",
    "aria-selected": active,
    onClick: onClick,
    style: {
      background: 'transparent',
      border: 0,
      padding: '10px 0',
      cursor: 'pointer',
      position: 'relative',
      flex: 1,
      fontSize: 15,
      color: active ? BRAND.ink : BRAND.mute,
      fontWeight: active ? 500 : 400,
      letterSpacing: 0
    }
  }, label, active && React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      bottom: 2,
      transform: 'translateX(-50%)',
      width: 28,
      height: 3,
      borderRadius: 2,
      background: BRAND.accent
    }
  }));
}
function PromoIndigo({
  onClose
}) {
  const {
    L
  } = useLanguage();
  return React.createElement("div", {
    style: {
      background: BRAND.promo,
      borderRadius: 12,
      padding: '18px 18px 18px 20px',
      position: 'relative',
      color: '#fff',
      overflow: 'hidden',
      height: 200,
      boxSizing: 'border-box',
      boxShadow: '0 1px 2px rgba(30,25,10,0.06), 0 8px 20px rgba(75,63,168,0.18)'
    }
  }, React.createElement("button", {
    type: "button",
    "aria-label": L('Aizvērt piedāvājumu', 'Close offer'),
    onClick: onClose,
    style: {
      position: 'absolute',
      top: 12,
      right: 12,
      background: 'transparent',
      border: 0,
      cursor: 'pointer',
      padding: 4
    }
  }, Icon.close(18)), React.createElement("div", {
    style: {
      maxWidth: 220
    }
  }, React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      letterSpacing: 0
    }
  }, L('Ieguldi 50%', 'Invest 50%')), React.createElement("div", {
    style: {
      fontSize: 13,
      lineHeight: '18px',
      marginTop: 6,
      color: 'rgba(255,255,255,0.85)'
    }
  }, L('no atgūtās nodokļu atmaksas savā pensiju 3. līmenī', 'of your recovered tax refund into your 3rd pension pillar')), React.createElement("button", {
    type: "button",
    style: {
      marginTop: 22,
      background: BRAND.accent,
      color: BRAND.ink,
      border: 0,
      borderRadius: 12,
      padding: '12px 22px',
      fontWeight: 700,
      fontSize: 15,
      letterSpacing: 0,
      cursor: 'pointer',
      width: '100%',
      maxWidth: 220
    }
  }, L('Ieguldīt', 'Invest'))), React.createElement("div", {
    style: {
      position: 'absolute',
      right: 14,
      bottom: 22
    }
  }, Icon.sparkle()), React.createElement("svg", {
    style: {
      position: 'absolute',
      right: 50,
      top: 28
    },
    width: "80",
    height: "30",
    viewBox: "0 0 80 30",
    fill: "none"
  }, React.createElement("path", {
    d: "M4 4l10 6M20 2v10M38 6l8-2",
    stroke: "#fff",
    strokeWidth: "1.2",
    strokeLinecap: "round",
    opacity: "0.6"
  })));
}
function PromoCashback({
  onClose
}) {
  const {
    L
  } = useLanguage();
  return React.createElement("div", {
    style: {
      background: '#1B1C22',
      borderRadius: 12,
      padding: '18px 20px',
      position: 'relative',
      color: '#fff',
      overflow: 'hidden',
      height: 200,
      boxSizing: 'border-box',
      boxShadow: '0 1px 2px rgba(0,0,0,0.08), 0 8px 20px rgba(0,0,0,0.12)'
    }
  }, React.createElement("button", {
    type: "button",
    "aria-label": L('Aizvērt piedāvājumu', 'Close offer'),
    onClick: onClose,
    style: {
      position: 'absolute',
      top: 12,
      right: 12,
      background: 'transparent',
      border: 0,
      cursor: 'pointer',
      padding: 4
    }
  }, Icon.close(18)), React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: 2,
      color: BRAND.accent,
      fontWeight: 600
    }
  }, L('ŠOMĒNES', 'THIS MONTH')), React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 600,
      marginTop: 6,
      letterSpacing: 0,
      maxWidth: 220
    }
  }, L('€14.20 atgriezts naudā', '€14.20 cashback')), React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,0.7)',
      marginTop: 6
    }
  }, L('Pārtika, transports un straumēšana — izmaksa 30. apr.', 'Groceries, transport and streaming — payout Apr 30')), React.createElement("button", {
    type: "button",
    style: {
      marginTop: 16,
      background: BRAND.accent,
      color: BRAND.ink,
      border: 0,
      borderRadius: 12,
      padding: '11px 22px',
      fontWeight: 600,
      fontSize: 14,
      cursor: 'pointer'
    }
  }, L('Apskatīt sadalījumu', 'View breakdown')), React.createElement("div", {
    style: {
      position: 'absolute',
      right: -40,
      bottom: -40,
      width: 160,
      height: 160,
      borderRadius: '50%',
      border: `14px solid ${BRAND.accent}`,
      opacity: 0.15
    }
  }));
}
function PromoGoal({
  onClose
}) {
  const {
    L
  } = useLanguage();
  return React.createElement("div", {
    style: {
      background: '#E8E2F7',
      borderRadius: 12,
      padding: '18px 20px',
      position: 'relative',
      color: BRAND.ink,
      overflow: 'hidden',
      height: 200,
      boxSizing: 'border-box',
      boxShadow: '0 1px 2px rgba(75,63,168,0.05), 0 8px 20px rgba(75,63,168,0.10)'
    }
  }, React.createElement("button", {
    type: "button",
    "aria-label": L('Aizvērt piedāvājumu', 'Close offer'),
    onClick: onClose,
    style: {
      position: 'absolute',
      top: 12,
      right: 12,
      background: 'transparent',
      border: 0,
      cursor: 'pointer',
      padding: 4
    }
  }, Icon.close(18, BRAND.ink)), React.createElement("div", {
    style: {
      fontSize: 13,
      color: BRAND.promo,
      fontWeight: 600
    }
  }, L('Vasaras ceļojums · Mērķis', 'Summer trip · Goal')), React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 600,
      marginTop: 4,
      letterSpacing: 0
    }
  }, L('Esi sasniedzis 62% no mērķa', 'You have reached 62% of the goal')), React.createElement("div", {
    style: {
      marginTop: 14,
      height: 8,
      borderRadius: 4,
      background: '#fff',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    style: {
      width: '62%',
      height: '100%',
      background: BRAND.promo,
      borderRadius: 4
    }
  })), React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 8,
      fontSize: 12,
      color: BRAND.mute
    }
  }, React.createElement("span", null, L('€930 uzkrāts', '€930 saved')), React.createElement("span", null, L('€1,500 mērķis', '€1,500 goal'))), React.createElement("button", {
    type: "button",
    style: {
      marginTop: 14,
      background: BRAND.promo,
      color: '#fff',
      border: 0,
      borderRadius: 12,
      padding: '10px 20px',
      fontWeight: 600,
      fontSize: 13,
      cursor: 'pointer'
    }
  }, L('Pievienot mērķim', 'Add to goal')));
}
function TierIllustration2() {
  return React.createElement("svg", {
    width: "110",
    height: "68",
    viewBox: "0 0 110 68",
    fill: "none",
    style: {
      flexShrink: 0
    }
  }, React.createElement("path", {
    d: "M10 30 Q30 8 50 30 Z",
    fill: "#F5E9B8"
  }), React.createElement("path", {
    d: "M10 30 Q20 22 30 30",
    stroke: BRAND.ink,
    strokeWidth: "1",
    fill: "none",
    opacity: "0.4"
  }), React.createElement("path", {
    d: "M30 30 Q40 22 50 30",
    stroke: BRAND.ink,
    strokeWidth: "1",
    fill: "none",
    opacity: "0.4"
  }), React.createElement("line", {
    x1: "30",
    y1: "30",
    x2: "30",
    y2: "58",
    stroke: BRAND.ink,
    strokeWidth: "1.3"
  }), React.createElement("circle", {
    cx: "22",
    cy: "42",
    r: "3.2",
    fill: "#E7C68A"
  }), React.createElement("path", {
    d: "M14 50 L30 50 L28 58 L16 58 Z",
    fill: "#F2D23A"
  }), React.createElement("path", {
    d: "M18 50 L34 48",
    stroke: BRAND.ink,
    strokeWidth: "1.2"
  }), React.createElement("line", {
    x1: "4",
    y1: "58",
    x2: "52",
    y2: "58",
    stroke: BRAND.ink,
    strokeWidth: "1.2"
  }));
}
function TierIllustration3() {
  return React.createElement("svg", {
    width: "110",
    height: "68",
    viewBox: "0 0 110 68",
    fill: "none",
    style: {
      flexShrink: 0
    }
  }, React.createElement("circle", {
    cx: "14",
    cy: "22",
    r: "3.5",
    fill: "#2E2E2E"
  }), React.createElement("path", {
    d: "M8 28 L20 28 L18 46 L10 46 Z",
    fill: "#F2D23A"
  }), React.createElement("rect", {
    x: "7",
    y: "46",
    width: "5",
    height: "14",
    fill: "#3A3A3A"
  }), React.createElement("rect", {
    x: "16",
    y: "46",
    width: "5",
    height: "14",
    fill: "#3A3A3A"
  }), React.createElement("path", {
    d: "M24 34 h16 a3 3 0 0 1 0 6 v4 a3 3 0 0 0 0 6 h-16 v-16 a3 3 0 0 0 0 -6 z",
    fill: "#E7C68A",
    stroke: BRAND.ink,
    strokeWidth: "1"
  }), React.createElement("circle", {
    cx: "56",
    cy: "26",
    r: "3.5",
    fill: "#E7C68A"
  }), React.createElement("path", {
    d: "M50 32 L62 32 L60 50 L52 50 Z",
    fill: "#4B3FA8"
  }), React.createElement("rect", {
    x: "49",
    y: "50",
    width: "5",
    height: "10",
    fill: "#2E2E2E"
  }), React.createElement("rect", {
    x: "58",
    y: "50",
    width: "5",
    height: "10",
    fill: "#2E2E2E"
  }), React.createElement("line", {
    x1: "4",
    y1: "60",
    x2: "68",
    y2: "60",
    stroke: BRAND.ink,
    strokeWidth: "1.2"
  }));
}
function WellbeingIllustration() {
  return React.createElement("svg", {
    width: "110",
    height: "92",
    viewBox: "0 0 110 92",
    fill: "none",
    style: {
      flexShrink: 0
    }
  }, React.createElement("rect", {
    x: "64",
    y: "10",
    width: "36",
    height: "26",
    rx: "2",
    fill: "#F2D23A",
    stroke: BRAND.ink,
    strokeWidth: "1"
  }), React.createElement("path", {
    d: "M68 30 L76 22 L82 26 L96 14",
    stroke: BRAND.ink,
    strokeWidth: "1.4",
    fill: "none"
  }), React.createElement("text", {
    x: "92",
    y: "32",
    fontSize: "8",
    fill: BRAND.ink,
    fontWeight: "700"
  }, "\u20AC"), React.createElement("circle", {
    cx: "22",
    cy: "34",
    r: "4",
    fill: "#2E2E2E"
  }), React.createElement("path", {
    d: "M14 40 L30 40 L28 60 L16 60 Z",
    fill: "#9A9FE0"
  }), React.createElement("rect", {
    x: "14",
    y: "58",
    width: "16",
    height: "5",
    rx: "1",
    fill: "#2E2E2E"
  }), React.createElement("rect", {
    x: "12",
    y: "62",
    width: "20",
    height: "2",
    fill: BRAND.ink
  }), React.createElement("circle", {
    cx: "52",
    cy: "40",
    r: "4",
    fill: "#E7C68A"
  }), React.createElement("path", {
    d: "M46 46 L58 46 L56 66 L48 66 Z",
    fill: "#F2D23A"
  }), React.createElement("rect", {
    x: "46",
    y: "66",
    width: "4",
    height: "12",
    fill: "#3A3A3A"
  }), React.createElement("rect", {
    x: "54",
    y: "66",
    width: "4",
    height: "12",
    fill: "#3A3A3A"
  }), React.createElement("rect", {
    x: "68",
    y: "64",
    width: "32",
    height: "3",
    fill: BRAND.ink
  }), React.createElement("rect", {
    x: "72",
    y: "56",
    width: "8",
    height: "8",
    rx: "1",
    fill: "#fff",
    stroke: BRAND.ink,
    strokeWidth: "1"
  }), React.createElement("line", {
    x1: "4",
    y1: "80",
    x2: "106",
    y2: "80",
    stroke: BRAND.ink,
    strokeWidth: "1.2"
  }));
}
function PigIcon() {
  return React.createElement("svg", {
    width: "32",
    height: "26",
    viewBox: "0 0 32 26",
    fill: "none"
  }, React.createElement("ellipse", {
    cx: "15",
    cy: "14",
    rx: "11",
    ry: "8.5",
    fill: "#F5EBD5",
    stroke: BRAND.ink,
    strokeWidth: "1.2"
  }), React.createElement("circle", {
    cx: "26",
    cy: "10",
    r: "3",
    fill: BRAND.accent,
    stroke: BRAND.ink,
    strokeWidth: "1"
  }), React.createElement("circle", {
    cx: "11",
    cy: "12",
    r: "0.9",
    fill: BRAND.ink
  }), React.createElement("path", {
    d: "M4 11 L1 9 L2 13 Z",
    fill: "#F5EBD5",
    stroke: BRAND.ink,
    strokeWidth: "1",
    strokeLinejoin: "round"
  }), React.createElement("rect", {
    x: "8",
    y: "21",
    width: "1.5",
    height: "3",
    fill: BRAND.ink
  }), React.createElement("rect", {
    x: "20",
    y: "21",
    width: "1.5",
    height: "3",
    fill: BRAND.ink
  }));
}
function TierCard({
  tier,
  illustration,
  label,
  amount,
  subtitle
}) {
  return React.createElement("div", {
    style: {
      flex: 1,
      background: '#EAE6DB',
      borderRadius: 12,
      padding: '14px 14px 16px',
      display: 'flex',
      flexDirection: 'column',
      minHeight: 196,
      boxShadow: '0 1px 2px rgba(30,25,10,0.04), 0 4px 12px rgba(30,25,10,0.04)'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between'
    }
  }, illustration, React.createElement("div", {
    style: {
      fontSize: 44,
      fontWeight: 500,
      color: '#4B5F74',
      letterSpacing: 0,
      lineHeight: 1,
      marginTop: -2
    }
  }, tier)), React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      marginTop: 10,
      textAlign: 'center'
    }
  }, label), React.createElement("div", {
    style: {
      fontSize: 20,
      textAlign: 'center',
      marginTop: 6,
      color: BRAND.ink,
      letterSpacing: 0
    }
  }, amount), subtitle && React.createElement("div", {
    style: {
      fontSize: 11,
      color: BRAND.mute,
      marginTop: 8,
      textAlign: 'center'
    }
  }, subtitle));
}
function PensijaScreen() {
  const steps = ['Iegūsti savu nākotnes ienākumu aprēķinu tikai 8 minūtēs.', 'Ieraugi konkrētus ciparus par finansiālo situāciju pēc darba gadiem.', 'Pielāgo savu uzkrājumu stratēģiju drošākai nākotnei.', 'Saņem personalizētus ieteikumus sava pensiju plāna stratēģijai.'];
  return React.createElement("div", {
    style: {
      padding: '4px 16px 0'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 12
    }
  }, React.createElement(TierCard, {
    tier: "2",
    illustration: React.createElement(TierIllustration2, null),
    label: "2. l\u012Bmenis",
    amount: React.createElement("span", {
      style: {
        color: BRAND.mute,
        letterSpacing: 3,
        fontSize: 18
      }
    }, "\u20AC \u2731 \u2731 \u2731"),
    subtitle: "Piepras\u012Bt izrakstu no VSAA"
  }), React.createElement(TierCard, {
    tier: "3",
    illustration: React.createElement(TierIllustration3, null),
    label: "3. l\u012Bmenis",
    amount: React.createElement("span", null, React.createElement("span", {
      style: {
        color: BRAND.mute,
        marginRight: 4
      }
    }, "\u20AC"), React.createElement("span", {
      style: {
        fontWeight: 500
      }
    }, "0"), React.createElement("span", {
      style: {
        fontSize: 13,
        color: BRAND.mute
      }
    }, ".00"))
  })), React.createElement("button", {
    type: "button",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      width: '100%',
      background: 'transparent',
      border: 0,
      padding: '16px 4px',
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, React.createElement(PigIcon, null), React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 15,
      fontWeight: 500,
      letterSpacing: 0
    }
  }, "P\u0101rn\u0101c uz INDEXO pensiju 2. l\u012Bmeni"), Icon.chev(16, BRAND.promo)), React.createElement("div", {
    style: {
      height: 1,
      background: BRAND.line,
      margin: '0 0 14px'
    }
  }), React.createElement("div", {
    style: {
      background: '#EAE6DB',
      borderRadius: 12,
      padding: '18px 18px 18px 18px',
      boxShadow: '0 1px 2px rgba(30,25,10,0.04), 0 6px 16px rgba(30,25,10,0.04)'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, React.createElement("div", {
    style: {
      flex: 1,
      paddingRight: 8
    }
  }, React.createElement("div", {
    style: {
      fontSize: 19,
      fontWeight: 600,
      letterSpacing: 0
    }
  }, "Tava n\u0101kotnes labkl\u0101j\u012Bba"), React.createElement("div", {
    style: {
      marginTop: 14,
      fontSize: 26,
      color: BRAND.promo,
      fontWeight: 600,
      letterSpacing: 0
    }
  }, "0 ", React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 500
    }
  }, "\u20AC/m\u0113nes\u012B")), React.createElement("div", {
    style: {
      fontSize: 13,
      color: BRAND.mute,
      marginTop: 10,
      lineHeight: '18px'
    }
  }, "Turpini no vietas, kur apst\u0101jies.", React.createElement("br", null), "Paliku\u0161i v\u0113l tikai da\u017Ei jaut\u0101jumi")), React.createElement(WellbeingIllustration, null)), React.createElement("div", {
    style: {
      marginTop: 14,
      height: 6,
      borderRadius: 3,
      background: '#fff',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    style: {
      width: '24%',
      height: '100%',
      background: BRAND.promo,
      borderRadius: 3
    }
  })), React.createElement("button", {
    type: "button",
    style: {
      marginTop: 16,
      width: '100%',
      background: BRAND.accent,
      color: BRAND.ink,
      border: 0,
      borderRadius: 14,
      padding: '16px',
      fontSize: 16,
      fontWeight: 700,
      letterSpacing: 0,
      cursor: 'pointer'
    }
  }, "Turpin\u0101t ies\u0101kto")), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      padding: '22px 4px 0'
    }
  }, steps.map((t, i) => React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start'
    }
  }, React.createElement("div", {
    style: {
      width: 26,
      height: 26,
      borderRadius: '50%',
      background: BRAND.accent,
      display: 'grid',
      placeItems: 'center',
      flexShrink: 0,
      marginTop: 1,
      fontSize: 12,
      fontWeight: 600,
      color: BRAND.ink
    }
  }, i + 1), React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 14.5,
      fontWeight: 600,
      lineHeight: '20px',
      letterSpacing: 0
    }
  }, t)))));
}
const EUR_FORMAT = new Intl.NumberFormat('lv-LV', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0
});
function formatMoney(value) {
  return EUR_FORMAT.format(Math.round(value));
}
function formatPercent(value) {
  return `${Math.round(value * 100)}%`;
}
function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
const FLUXION_SETTINGS = {
  targetRate: 0.10,
  minRate: 0.06,
  maxRate: 0.15,
  safetyBuffer: 300,
  payday: 25,
  fixedContribution: 180,
  mode: 'dynamic',
  taxOptimization: true,
  paused: false,
  stabilityCap: 160,
  annualTaxLimit: 4000,
  taxRefundRate: 0.20,
  pensionPlan: 'INDEXO AKCIJAS'
};
const RECURRING_OBLIGATIONS = [{
  label: 'Īre',
  amount: 620
}, {
  label: 'Kredīts',
  amount: 180
}, {
  label: 'Abonementi',
  amount: 42
}];
const FLUXION_HISTORY = [{
  month: 'Maijs',
  income: 1820,
  spending: 1520,
  balanceBefore: 340
}, {
  month: 'Jūnijs',
  income: 1760,
  spending: 1580,
  balanceBefore: 430
}, {
  month: 'Jūlijs',
  income: 1940,
  spending: 1490,
  balanceBefore: 520
}, {
  month: 'Augusts',
  income: 0,
  spending: 390,
  balanceBefore: 610
}, {
  month: 'Septembris',
  income: 1880,
  spending: 1710,
  balanceBefore: 250
}, {
  month: 'Oktobris',
  income: 2050,
  spending: 1630,
  balanceBefore: 360
}, {
  month: 'Novembris',
  income: 1790,
  spending: 1680,
  balanceBefore: 410
}, {
  month: 'Decembris',
  income: 2140,
  spending: 1860,
  balanceBefore: 620
}, {
  month: 'Janvāris',
  income: 1960,
  spending: 1510,
  balanceBefore: 300
}, {
  month: 'Februāris',
  income: 2200,
  spending: 1430,
  balanceBefore: 470
}, {
  month: 'Marts',
  income: 1840,
  spending: 1770,
  balanceBefore: 240
}, {
  month: 'Aprīlis',
  income: 2280,
  spending: 1480,
  balanceBefore: 390
}];
const FUTURE_SCENARIOS = {
  cautious: {
    label: 'Pesimistiskais',
    tone: '#90A35F',
    note: '2.8% gada ienesīgums',
    nominalMonthly: 1280,
    todayMoneyMonthly: 890,
    projectedCapital: 186000,
    tier1Monthly: 620,
    tier2Monthly: 180,
    tier3Monthly: 90,
    line: [0.18, 0.20, 0.24, 0.31, 0.40, 0.48, 0.58]
  },
  balanced: {
    label: 'Labvēlīgais',
    tone: '#74618D',
    note: '4.1% gada ienesīgums',
    nominalMonthly: 1510,
    todayMoneyMonthly: 1040,
    projectedCapital: 228000,
    tier1Monthly: 620,
    tier2Monthly: 250,
    tier3Monthly: 170,
    line: [0.18, 0.21, 0.27, 0.37, 0.51, 0.67, 0.79]
  },
  dynamic: {
    label: 'Optimistiskais',
    tone: '#E5C93A',
    note: '5.3% gada ienesīgums',
    nominalMonthly: 1760,
    todayMoneyMonthly: 1190,
    projectedCapital: 276000,
    tier1Monthly: 620,
    tier2Monthly: 315,
    tier3Monthly: 255,
    line: [0.18, 0.23, 0.31, 0.45, 0.63, 0.82, 0.96]
  }
};
const SCENARIO_ORDER = ['cautious', 'balanced', 'dynamic'];
const FUTURE_GOAL = 1500;
const TIER2_BALANCE = 24860;
const TIER3_BALANCE = 4180;
const TIER1_SERVICE_YEARS = 31;
const TIER1_TARGET_YEARS = 40;
const NEXT_MILESTONE = 5000;
function calculateDynamicContribution(month, settings = FLUXION_SETTINGS, previousContribution = null, averageIncome = 0) {
  const afterSalary = month.balanceBefore + month.income;
  const safeToInvest = Math.max(0, afterSalary - month.spending - settings.safetyBuffer);
  const floor = month.income * settings.minRate;
  const target = month.income * settings.targetRate;
  const ceiling = month.income * settings.maxRate;
  const fixedContribution = month.income > 0 ? settings.fixedContribution : 0;
  const incomeDrop = averageIncome > 0 && month.income > 0 && month.income < averageIncome * 0.62;
  let contribution = 0;
  let reason = 'paused';
  let reasonTitle = 'Pauze bez riska';
  let reasonText = month.income <= 0 ? 'Šajā mēnesī ienākumu nebija, tāpēc iemaksa netiek veikta un drošības rezerve saglabāta.' : `Pēc tēriņiem vairs nepaliktu ${formatMoney(settings.safetyBuffer)}, tāpēc iemaksa apstājas.`;
  if (incomeDrop) {
    reasonText = 'Ienākumi būtiski nokritās pret vidējo līmeni, tāpēc iemaksa uz šo mēnesi tiek apturēta.';
  } else if (settings.paused) {
    reasonText = 'Iemaksas ir pauzētas. Aprēķins paliek redzams, bet izpilde nenotiek.';
  } else if (settings.mode === 'fixed' && month.income > 0 && safeToInvest > 0) {
    contribution = Math.min(fixedContribution, safeToInvest);
    reason = contribution < fixedContribution ? 'reduced' : 'fixed';
    reasonTitle = contribution < fixedContribution ? 'Fiksētā iemaksa samazināta' : 'Fiksētā iemaksa';
    reasonText = contribution < fixedContribution ? 'Fiksētā summa tiek samazināta, lai nepārkāptu drošības rezervi.' : 'Tiek izpildīta lietotāja izvēlētā fiksētā mēneša iemaksa.';
  } else if (month.income > 0 && safeToInvest > 0) {
    contribution = target;
    reason = 'target';
    reasonTitle = 'Mērķa iemaksa';
    reasonText = 'Ienākumi un tēriņi ļāva ieturēt tieši mērķa likmi, nepārkāpjot drošības buferi.';
    if (safeToInvest < floor) {
      contribution = safeToInvest;
      reason = 'reduced';
      reasonTitle = 'Samazināts, lai pasargātu likviditāti';
      reasonText = `Droši pieejams bija tikai ${formatMoney(safeToInvest)}, tāpēc iemaksa samazināta zem grīdas.`;
    } else if (safeToInvest < target) {
      contribution = safeToInvest;
      reason = 'reduced';
      reasonTitle = 'Iemaksa zem mērķa';
      reasonText = 'Tēriņi šomēnes bija augstāki, tāpēc sistēma iemaksā tikai droši pieejamo daļu.';
    } else if (safeToInvest > target + 250 && month.balanceBefore > settings.safetyBuffer * 1.2) {
      contribution = target + Math.min(ceiling - target, (safeToInvest - target) * 0.16);
      reason = 'boosted';
      reasonTitle = 'Pāri mērķim ar pārpalikumu';
      reasonText = 'Kontā paliek pietiekama rezerve, tāpēc iemaksa pacelta tuvāk griestiem.';
    }
  }
  if (previousContribution !== null && contribution > 0 && previousContribution > 0) {
    const capped = clamp(contribution, Math.max(0, previousContribution - settings.stabilityCap), previousContribution + settings.stabilityCap);
    if (Math.round(capped) !== Math.round(contribution)) {
      contribution = capped;
      reason = 'capped';
      reasonTitle = 'Stabilitātes limits';
      reasonText = `Mēneša izmaiņa ierobežota līdz ${formatMoney(settings.stabilityCap)}, lai iemaksa nelēkātu pārāk strauji.`;
    }
  }
  contribution = Math.round(Math.min(contribution, safeToInvest, ceiling || 0));
  return {
    ...month,
    afterSalary,
    safeToInvest,
    floor: Math.round(floor),
    target: Math.round(target),
    ceiling: Math.round(ceiling),
    contribution,
    reason,
    reasonTitle,
    reasonText,
    fixedContribution,
    fixedBreaksBuffer: fixedContribution > safeToInvest,
    endBalance: afterSalary - month.spending - contribution
  };
}
function buildFluxionModel(settings = FLUXION_SETTINGS) {
  const calculationSettings = {
    ...settings,
    paused: false
  };
  const incomeMonths = FLUXION_HISTORY.filter(month => month.income > 0);
  const averageIncome = Math.round(incomeMonths.reduce((sum, month) => sum + month.income, 0) / Math.max(1, incomeMonths.length));
  const averageSpending = Math.round(FLUXION_HISTORY.reduce((sum, month) => sum + month.spending, 0) / FLUXION_HISTORY.length);
  const history = [];
  let previousContribution = null;
  FLUXION_HISTORY.forEach(month => {
    const result = calculateDynamicContribution(month, calculationSettings, previousContribution, averageIncome);
    history.push(result);
    previousContribution = result.contribution;
  });
  const preview = calculateDynamicContribution({
    month: 'Maijs',
    income: 2140,
    spending: 1680,
    balanceBefore: 355
  }, calculationSettings, history[history.length - 1]?.contribution || null, averageIncome);
  let streak = 0;
  for (let i = history.length - 1; i >= 0; i -= 1) {
    if (history[i].contribution > 0) streak += 1;else break;
  }
  const totalDynamic = history.reduce((sum, month) => sum + month.contribution, 0);
  const totalFixed = history.reduce((sum, month) => sum + month.fixedContribution, 0);
  const taxBase = Math.min(totalDynamic, settings.annualTaxLimit);
  return {
    settings,
    history,
    lastSix: history.slice(-6),
    totalDynamic,
    totalFixed,
    dynamicAdvantage: totalDynamic - totalFixed,
    boostedMonths: history.filter(month => month.reason === 'boosted').length,
    pausedMonths: history.filter(month => month.reason === 'paused').length,
    cappedMonths: history.filter(month => month.reason === 'capped').length,
    streak,
    preview,
    averageIncome,
    averageSpending,
    obligationsTotal: RECURRING_OBLIGATIONS.reduce((sum, item) => sum + item.amount, 0),
    taxBase,
    taxRefund: settings.taxOptimization ? Math.round(taxBase * settings.taxRefundRate) : 0,
    taxLeft: Math.max(0, settings.annualTaxLimit - taxBase)
  };
}
const FLUXION_MODEL = buildFluxionModel(FLUXION_SETTINGS);
const FLUXION_HISTORY_RESULTS = FLUXION_MODEL.history;
const FLUXION_LAST_SIX = FLUXION_MODEL.lastSix;
const FLUXION_TOTAL_DYNAMIC = FLUXION_MODEL.totalDynamic;
const FLUXION_TOTAL_FIXED = FLUXION_MODEL.totalFixed;
const FLUXION_DYNAMIC_ADVANTAGE = FLUXION_MODEL.dynamicAdvantage;
const FLUXION_BOOSTED_MONTHS = FLUXION_MODEL.boostedMonths;
const FLUXION_PAUSED_MONTHS = FLUXION_MODEL.pausedMonths;
const FLUXION_STREAK = FLUXION_MODEL.streak;
const FLUXION_PREVIEW = FLUXION_MODEL.preview;
function TierIllustration1() {
  return React.createElement("svg", {
    width: "118",
    height: "72",
    viewBox: "0 0 118 72",
    fill: "none",
    style: {
      flexShrink: 0
    }
  }, React.createElement("path", {
    d: "M12 56h52",
    stroke: BRAND.ink,
    strokeWidth: "1.2",
    strokeLinecap: "round"
  }), React.createElement("rect", {
    x: "18",
    y: "26",
    width: "10",
    height: "30",
    rx: "2",
    fill: "#EFE7D5",
    stroke: BRAND.ink,
    strokeWidth: "1"
  }), React.createElement("rect", {
    x: "33",
    y: "20",
    width: "10",
    height: "36",
    rx: "2",
    fill: "#F8F4EA",
    stroke: BRAND.ink,
    strokeWidth: "1"
  }), React.createElement("rect", {
    x: "48",
    y: "30",
    width: "10",
    height: "26",
    rx: "2",
    fill: "#EFE7D5",
    stroke: BRAND.ink,
    strokeWidth: "1"
  }), React.createElement("path", {
    d: "M14 26l24-12 24 12",
    stroke: BRAND.ink,
    strokeWidth: "1.3",
    strokeLinejoin: "round"
  }), React.createElement("circle", {
    cx: "86",
    cy: "26",
    r: "12",
    fill: "#F2D23A",
    opacity: "0.35"
  }), React.createElement("circle", {
    cx: "86",
    cy: "26",
    r: "7",
    fill: "#F2D23A",
    stroke: BRAND.ink,
    strokeWidth: "1"
  }), React.createElement("path", {
    d: "M82 26h8M86 22v8",
    stroke: BRAND.ink,
    strokeWidth: "1.1",
    strokeLinecap: "round"
  }), React.createElement("path", {
    d: "M74 50c4-6 9-9 14-9 6 0 10 4 16 4 4 0 7-2 10-5",
    stroke: "#7A8EA1",
    strokeWidth: "1.4",
    strokeLinecap: "round"
  }));
}
function FluxionIllustration() {
  return React.createElement("svg", {
    width: "116",
    height: "92",
    viewBox: "0 0 116 92",
    fill: "none",
    style: {
      flexShrink: 0
    }
  }, React.createElement("rect", {
    x: "52",
    y: "10",
    width: "50",
    height: "30",
    rx: "8",
    fill: "rgba(255,255,255,0.12)",
    stroke: "rgba(255,255,255,0.22)"
  }), React.createElement("path", {
    d: "M60 31l9-8 9 5 14-12",
    stroke: "#F2D23A",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), React.createElement("circle", {
    cx: "60",
    cy: "31",
    r: "2.5",
    fill: "#F2D23A"
  }), React.createElement("circle", {
    cx: "78",
    cy: "28",
    r: "2.5",
    fill: "#F2D23A"
  }), React.createElement("circle", {
    cx: "92",
    cy: "16",
    r: "2.5",
    fill: "#F2D23A"
  }), React.createElement("path", {
    d: "M26 24c7 0 12 6 12 14s-5 14-12 14-12-6-12-14 5-14 12-14Z",
    fill: "#F5EBD5"
  }), React.createElement("path", {
    d: "M13 39h26",
    stroke: "#1B1C22",
    strokeWidth: "1.4",
    strokeLinecap: "round"
  }), React.createElement("path", {
    d: "M26 24c5 0 9 3 11 7-2 2-4 3-6 3-5 0-7-2-10-2-3 0-5 1-8 4 0-7 6-12 13-12Z",
    fill: "#F2D23A"
  }), React.createElement("circle", {
    cx: "23",
    cy: "38",
    r: "1.1",
    fill: "#1B1C22"
  }), React.createElement("rect", {
    x: "18",
    y: "54",
    width: "18",
    height: "8",
    rx: "4",
    fill: "#F2D23A"
  }), React.createElement("rect", {
    x: "44",
    y: "56",
    width: "14",
    height: "6",
    rx: "3",
    fill: "rgba(255,255,255,0.18)"
  }), React.createElement("rect", {
    x: "60",
    y: "56",
    width: "22",
    height: "6",
    rx: "3",
    fill: "rgba(255,255,255,0.28)"
  }), React.createElement("rect", {
    x: "18",
    y: "67",
    width: "66",
    height: "9",
    rx: "4.5",
    fill: "rgba(255,255,255,0.12)"
  }), React.createElement("rect", {
    x: "18",
    y: "67",
    width: "44",
    height: "9",
    rx: "4.5",
    fill: "#F2D23A"
  }));
}
function ShieldIcon() {
  return React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none"
  }, React.createElement("path", {
    d: "M9 2l5 2v4.4c0 3.1-2.1 5.8-5 6.8-2.9-1-5-3.7-5-6.8V4l5-2Z",
    stroke: BRAND.ink,
    strokeWidth: "1.3",
    strokeLinejoin: "round"
  }));
}
function CalendarIcon() {
  return React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none"
  }, React.createElement("rect", {
    x: "2.5",
    y: "4",
    width: "13",
    height: "11",
    rx: "2.5",
    stroke: BRAND.ink,
    strokeWidth: "1.3"
  }), React.createElement("path", {
    d: "M5 2.5v3M13 2.5v3M2.5 7.5h13",
    stroke: BRAND.ink,
    strokeWidth: "1.3",
    strokeLinecap: "round"
  }));
}
function TrendIcon() {
  return React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none"
  }, React.createElement("path", {
    d: "M3 12.5l3.4-3.6 2.4 2.3L14.5 5",
    stroke: BRAND.ink,
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), React.createElement("path", {
    d: "M10.8 5h3.7v3.7",
    stroke: BRAND.ink,
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
function TrophyIcon() {
  return React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none"
  }, React.createElement("path", {
    d: "M5 3h8v2c0 2.6-1.8 4.8-4 5.3C6.8 9.8 5 7.6 5 5V3Z",
    stroke: BRAND.ink,
    strokeWidth: "1.3",
    strokeLinejoin: "round"
  }), React.createElement("path", {
    d: "M5 4H3.5A1.5 1.5 0 0 0 2 5.5C2 7.4 3.6 9 5.5 9H6M13 4h1.5A1.5 1.5 0 0 1 16 5.5C16 7.4 14.4 9 12.5 9H12M9 10.5v2.5M6.2 15h5.6",
    stroke: BRAND.ink,
    strokeWidth: "1.3",
    strokeLinecap: "round"
  }));
}
function CarIcon() {
  return React.createElement("svg", {
    width: "20",
    height: "16",
    viewBox: "0 0 20 16",
    fill: "none"
  }, React.createElement("path", {
    d: "M4.2 5.5 6 3h8l1.8 2.5M2.5 7h15a1.5 1.5 0 0 1 1.5 1.5V11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 11V8.5A1.5 1.5 0 0 1 2.5 7Z",
    stroke: BRAND.ink,
    strokeWidth: "1.3",
    strokeLinejoin: "round"
  }), React.createElement("circle", {
    cx: "5.2",
    cy: "12.2",
    r: "1.4",
    fill: BRAND.accent
  }), React.createElement("circle", {
    cx: "14.8",
    cy: "12.2",
    r: "1.4",
    fill: BRAND.accent
  }));
}
function ConfigPill({
  icon,
  label,
  value,
  dark = false
}) {
  return React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      borderRadius: 12,
      padding: 12,
      background: dark ? 'rgba(255,255,255,0.11)' : '#EFECE5',
      border: dark ? '1px solid rgba(255,255,255,0.08)' : 0
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      display: 'grid',
      placeItems: 'center',
      background: dark ? 'rgba(255,255,255,0.14)' : '#fff',
      boxShadow: dark ? 'none' : '0 1px 3px rgba(0,0,0,0.05)'
    }
  }, icon), React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, React.createElement("div", {
    style: {
      fontSize: 9,
      textTransform: 'uppercase',
      letterSpacing: 1,
      fontWeight: 700,
      color: dark ? 'rgba(255,255,255,0.7)' : BRAND.mute
    }
  }, label), React.createElement("div", {
    style: {
      marginTop: 2,
      fontSize: 14,
      fontWeight: 700,
      color: dark ? '#fff' : BRAND.ink,
      letterSpacing: 0,
      whiteSpace: 'nowrap'
    }
  }, value))));
}
function ModeButton({
  label,
  active,
  onClick
}) {
  return React.createElement("button", {
    type: "button",
    "aria-pressed": active,
    onClick: onClick,
    style: {
      flex: 1,
      minHeight: 44,
      border: `1px solid ${active ? BRAND.accent : BRAND.line}`,
      borderRadius: 8,
      cursor: 'pointer',
      background: active ? BRAND.accent : BRAND.card,
      color: BRAND.ink,
      fontSize: 14,
      fontWeight: active ? 700 : 600
    }
  }, label);
}
function MiniSetting({
  label,
  value
}) {
  return React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 12,
      minWidth: 0
    }
  }, React.createElement("span", {
    style: {
      fontSize: 13,
      color: BRAND.mute,
      lineHeight: '18px',
      minWidth: 0,
      overflowWrap: 'anywhere'
    }
  }, label), React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: BRAND.ink,
      lineHeight: '18px',
      textAlign: 'right',
      overflowWrap: 'anywhere'
    }
  }, value));
}
function ProjectionChart({
  selectedScenario
}) {
  const width = 304;
  const height = 148;
  const bottom = height + 6;
  const pointCount = FUTURE_SCENARIOS.dynamic.line.length;
  const xStep = width / (pointCount - 1);
  const makePath = line => line.map((value, index) => {
    const x = index * xStep;
    const y = height - value * height;
    return `${index === 0 ? 'M' : 'L'}${x} ${y}`;
  }).join(' ');
  const selectedLine = FUTURE_SCENARIOS[selectedScenario].line;
  const areaPath = `${makePath(selectedLine)} L ${width} ${bottom} L 0 ${bottom} Z`;
  return React.createElement("div", {
    style: {
      marginTop: 16,
      padding: '18px 16px 12px',
      background: '#F7F3EA',
      borderRadius: 12
    }
  }, React.createElement("svg", {
    width: "100%",
    height: "190",
    viewBox: `0 0 ${width} 190`,
    fill: "none"
  }, React.createElement("path", {
    d: areaPath,
    fill: "rgba(229,201,58,0.12)"
  }), [0.25, 0.5, 0.75].map((line, index) => React.createElement("line", {
    key: index,
    x1: "0",
    y1: height - line * height,
    x2: width,
    y2: height - line * height,
    stroke: "rgba(27,28,34,0.08)",
    strokeDasharray: "4 5"
  })), SCENARIO_ORDER.map(scenarioKey => React.createElement("path", {
    key: scenarioKey,
    d: makePath(FUTURE_SCENARIOS[scenarioKey].line),
    stroke: FUTURE_SCENARIOS[scenarioKey].tone,
    strokeWidth: scenarioKey === selectedScenario ? 4 : 2.5,
    strokeOpacity: scenarioKey === selectedScenario ? 1 : 0.55,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), React.createElement("text", {
    x: "0",
    y: "184",
    fill: BRAND.mute,
    fontSize: "11"
  }, "2026"), React.createElement("text", {
    x: width / 2 - 18,
    y: "184",
    fill: BRAND.mute,
    fontSize: "11"
  }, "2046"), React.createElement("text", {
    x: width - 38,
    y: "184",
    fill: BRAND.mute,
    fontSize: "11"
  }, "2067")));
}
function CompactTierCard({
  tier,
  title,
  illustration,
  balance,
  monthly,
  note
}) {
  return React.createElement("div", {
    style: {
      flex: 1,
      background: BRAND.card,
      borderRadius: 12,
      padding: '14px 14px 16px',
      border: `1px solid ${BRAND.line}`,
      boxShadow: '0 1px 2px rgba(30,25,10,0.04), 0 4px 12px rgba(30,25,10,0.04)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      right: 12,
      fontSize: 48,
      lineHeight: 1,
      letterSpacing: 0,
      color: '#6B879D',
      opacity: 0.3,
      pointerEvents: 'none'
    }
  }, tier), illustration, React.createElement("div", {
    style: {
      marginTop: 10,
      fontSize: 15,
      fontWeight: 700,
      letterSpacing: 0
    }
  }, title), React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 22,
      color: BRAND.promo,
      fontWeight: 700,
      letterSpacing: 0,
      lineHeight: 1.1
    }
  }, balance), React.createElement("div", {
    style: {
      marginTop: 4,
      fontSize: 12,
      color: BRAND.mute,
      lineHeight: '16px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, monthly), React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 11.5,
      color: BRAND.mute,
      lineHeight: '15px'
    }
  }, note));
}
function ComparisonBar({
  label,
  value,
  max,
  tone,
  detail
}) {
  const width = max > 0 ? Math.max(12, Math.round(value / max * 100)) : 0;
  return React.createElement("div", null, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: 0
    }
  }, label), React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      color: tone
    }
  }, formatMoney(value))), React.createElement("div", {
    style: {
      marginTop: 10,
      height: 10,
      borderRadius: 999,
      background: '#EFE8D9',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    style: {
      width: `${width}%`,
      height: '100%',
      background: tone,
      borderRadius: 999
    }
  })), React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 12.5,
      color: BRAND.mute
    }
  }, detail));
}
function LifestyleCard({
  icon,
  label,
  cost,
  income
}) {
  const {
    L
  } = useLanguage();
  return React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      background: '#F6F1E6',
      borderRadius: 16,
      padding: '12px',
      border: `1px solid ${BRAND.line}`
    }
  }, React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 11,
      background: '#fff',
      display: 'grid',
      placeItems: 'center'
    }
  }, icon), React.createElement("div", {
    style: {
      marginTop: 10,
      fontSize: 12.5,
      fontWeight: 600,
      lineHeight: '16px'
    }
  }, label), React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 18,
      fontWeight: 700,
      color: BRAND.promo,
      letterSpacing: 0
    }
  }, (income / cost).toFixed(1), "x"), React.createElement("div", {
    style: {
      marginTop: 4,
      fontSize: 11.5,
      color: BRAND.mute
    }
  }, L('šodienas naudā', 'in today’s money')));
}
function StepRow({
  number,
  title,
  body
}) {
  return React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start'
    }
  }, React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      background: BRAND.accent,
      display: 'grid',
      placeItems: 'center',
      flexShrink: 0,
      fontSize: 12,
      fontWeight: 700
    }
  }, number), React.createElement("div", {
    style: {
      flex: 1
    }
  }, React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      letterSpacing: 0
    }
  }, title), React.createElement("div", {
    style: {
      marginTop: 4,
      fontSize: 13.5,
      color: BRAND.mute,
      lineHeight: '18px'
    }
  }, body)));
}
function SubPageHeader({
  title,
  onBack
}) {
  const {
    L
  } = useLanguage();
  return React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      padding: '16px 16px 8px'
    }
  }, React.createElement("button", {
    type: "button",
    onClick: onBack,
    style: {
      background: 'transparent',
      border: 0,
      padding: '4px 8px 4px 2px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      color: BRAND.promo,
      fontSize: 14,
      fontWeight: 500
    }
  }, React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none"
  }, React.createElement("path", {
    d: "M12 5l-5 5 5 5",
    stroke: BRAND.promo,
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), L('Atpakaļ', 'Back')), React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 16,
      fontWeight: 700,
      letterSpacing: 0,
      textAlign: 'center',
      paddingRight: 70
    }
  }, title));
}
function PensionNavRow({
  icon,
  title,
  subtitle,
  value,
  onClick
}) {
  return React.createElement("button", {
    type: "button",
    onClick: onClick,
    style: {
      width: '100%',
      background: 'transparent',
      border: 0,
      padding: '14px 0',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      textAlign: 'left'
    }
  }, React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 14,
      background: BRAND.card,
      border: `1px solid ${BRAND.line}`,
      display: 'grid',
      placeItems: 'center',
      flexShrink: 0,
      boxShadow: '0 1px 2px rgba(30,25,10,0.04)'
    }
  }, icon), React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      letterSpacing: 0
    }
  }, title), subtitle && React.createElement("div", {
    style: {
      fontSize: 13,
      color: BRAND.mute,
      marginTop: 2,
      lineHeight: '17px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, subtitle)), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      flexShrink: 0
    }
  }, value && React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: BRAND.promo
    }
  }, value), Icon.chev(14, BRAND.mute)));
}
function PensionMain({
  onNav,
  activated,
  scenario,
  config,
  model,
  onConfigChange,
  reversed,
  onReverse
}) {
  const {
    L,
    scenarioNote
  } = useLanguage();
  const selectedScenario = FUTURE_SCENARIOS[scenario];
  const totalMonthly = selectedScenario.tier1Monthly + selectedScenario.tier2Monthly + selectedScenario.tier3Monthly;
  const preview = model.preview;
  const nextContribution = reversed || config.paused ? 0 : preview.contribution;
  const modeLabel = config.mode === 'dynamic' ? L('Dinamiskais', 'Dynamic') : L('Fiksēts', 'Fixed');
  const currentPensionPlan = config.pensionPlan || 'INDEXO AKCIJAS';
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [pendingPensionPlan, setPendingPensionPlan] = React.useState(null);
  const [confirmAction, setConfirmAction] = React.useState(null);
  const [successDialog, setSuccessDialog] = React.useState(null);
  const currentPlanMeta = PENSION_PLAN_OPTIONS.find(plan => plan.name === currentPensionPlan) || PENSION_PLAN_OPTIONS[0];
  const confirmDialog = confirmAction === 'plan' ? {
    title: L('Mainīt pensiju 3. līmeņa plānu?', 'Change the 3rd pillar plan?'),
    body: L('Tu tiksi novirzīts atpakaļ uz iestatīšanas ekrānu, lai pārskatītu un apstiprinātu jauno plānu.', 'You will be taken back to the setup flow to review and confirm the new plan.'),
    confirmLabel: L('Jā, mainīt', 'Yes, change'),
    onConfirm: () => onNav('onboarding3')
  } : confirmAction === 'pause' ? {
    title: L('Pauzēt dinamisko plānu?', 'Pause the dynamic plan?'),
    body: L('Automātiskās iemaksas tiks apturētas līdz brīdim, kad plānu atjaunosi.', 'Automatic contributions will be paused until you resume the plan.'),
    confirmLabel: L('Jā, pauzēt', 'Yes, pause'),
    onConfirm: () => onConfigChange({
      paused: true
    })
  } : confirmAction === 'reverse' ? {
    title: L('Atgriezt pēdējo iemaksu?', 'Reverse the last contribution?'),
    body: L('Pēdējā 3. līmeņa iemaksa tiks atgriezta 24 stundu logā.', 'The latest 3rd pillar contribution will be reversed within the 24-hour window.'),
    confirmLabel: L('Jā, atgriezt', 'Yes, reverse'),
    onConfirm: () => onReverse()
  } : confirmAction === 'pensionPlan' ? {
    title: L('Mainīt pensiju plānu?', 'Change pension plan?'),
    body: React.createElement(React.Fragment, null, React.createElement("div", null, L('Vai vēlaties mainīt savu pensiju plānu uz:', 'Do you want to change your pension plan to:')), React.createElement("div", {
      style: {
        marginTop: 10,
        fontSize: 14,
        fontWeight: 700,
        color: BRAND.ink
      }
    }, pendingPensionPlan), React.createElement("div", {
      style: {
        marginTop: 10
      }
    }, L('Plāna maiņa var ietekmēt ieguldījumu risku un sagaidāmo ienesīgumu.', 'Changing the plan can affect investment risk and expected return.'))),
    confirmLabel: L('Apstiprināt', 'Confirm'),
    onConfirm: () => {
      if (!pendingPensionPlan) return;
      onConfigChange({
        pensionPlan: pendingPensionPlan
      });
      setPendingPensionPlan(null);
      setDropdownOpen(false);
      setSuccessDialog({
        body: L('Plāns veiksmīgi nomainīts.\nPlāna maiņa tiks izpildīta 1–3 darba dienu laikā.', 'Plan changed successfully.\nThe change will be processed within 1–3 business days.')
      });
    }
  } : null;
  const handleConfirmAction = () => {
    if (!confirmDialog) return;
    const nextAction = confirmDialog.onConfirm;
    setConfirmAction(null);
    nextAction();
  };
  return React.createElement(React.Fragment, null, React.createElement("div", {
    style: {
      padding: '4px 16px 24px'
    }
  }, React.createElement("div", {
    style: {
      marginTop: 12,
      background: BRAND.card,
      borderRadius: 12,
      padding: '18px',
      border: `1px solid ${BRAND.line}`,
      boxShadow: '0 1px 2px rgba(30,25,10,0.04), 0 6px 18px rgba(30,25,10,0.06)'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between'
    }
  }, React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: BRAND.mute,
      letterSpacing: 0
    }
  }, activated ? L('Nākamā automātiskā iemaksa', 'Next automatic contribution') : L('Tiktu uzkrāts pēdējos 12 mēnešos', 'Would be saved over the last 12 months')), React.createElement("button", {
    type: "button",
    onClick: () => onNav('analysis'),
    style: {
      background: 'transparent',
      border: 0,
      cursor: 'pointer',
      fontSize: 13,
      color: BRAND.promo,
      fontWeight: 600,
      padding: 0,
      letterSpacing: 0
    }
  }, L('Analīze →', 'Analysis →'))), React.createElement("div", {
    style: {
      fontSize: 30,
      fontWeight: 700,
      color: BRAND.ink,
      letterSpacing: 0,
      marginTop: 6
    }
  }, activated ? formatMoney(nextContribution) : formatMoney(model.totalDynamic)), !activated && React.createElement("div", {
    style: {
      fontSize: 13,
      color: BRAND.mute,
      marginTop: 4,
      lineHeight: '18px'
    }
  }, L(`${formatMoney(model.dynamicAdvantage)} vairāk nekā ar fiksētu ${formatMoney(config.fixedContribution)}/mēn.`, `${formatMoney(model.dynamicAdvantage)} more than a fixed ${formatMoney(config.fixedContribution)}/mo.`)), activated ? React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8,
      marginTop: 20
    }
  }, React.createElement("button", {
    type: "button",
    "aria-pressed": config.paused,
    onClick: () => config.paused ? onConfigChange({
      paused: false
    }) : setConfirmAction('pause'),
    style: {
      border: 0,
      borderRadius: 8,
      minHeight: 42,
      background: config.paused ? BRAND.accent : '#EFECE5',
      color: BRAND.ink,
      fontSize: 13,
      fontWeight: 700,
      cursor: 'pointer'
    }
  }, config.paused ? L('Atjaunot', 'Resume') : L('Pauzēt', 'Pause')), React.createElement("button", {
    type: "button",
    onClick: () => setConfirmAction('reverse'),
    disabled: reversed || config.paused,
    style: {
      border: 0,
      borderRadius: 8,
      minHeight: 42,
      background: reversed || config.paused ? BRAND.line : '#EFECE5',
      color: BRAND.ink,
      opacity: reversed || config.paused ? 0.45 : 1,
      fontSize: 13,
      fontWeight: 700,
      cursor: reversed || config.paused ? 'not-allowed' : 'pointer'
    }
  }, reversed ? L('Atgriezta', 'Reversed') : L('Atgriezt (24h)', 'Reverse (24h)'))) : React.createElement("button", {
    type: "button",
    onClick: () => onNav('onboarding3'),
    style: {
      marginTop: 16,
      width: '100%',
      border: 0,
      borderRadius: 14,
      padding: '14px',
      background: BRAND.accent,
      color: BRAND.ink,
      fontSize: 15,
      fontWeight: 700,
      cursor: 'pointer',
      letterSpacing: 0
    }
  }, L('Iestatīt pensiju 3. līmeni', 'Set up 3rd pillar pension'))), React.createElement("div", {
    style: {
      marginTop: 24,
      marginBottom: 12,
      fontSize: 18,
      fontWeight: 700,
      letterSpacing: 0
    }
  }, L('Tavi pensiju līmeņi', 'Your pension pillars')), React.createElement("div", {
    style: {
      background: BRAND.card,
      borderRadius: 12,
      padding: '16px',
      border: `1px solid ${BRAND.line}`,
      boxShadow: '0 1px 2px rgba(30,25,10,0.04), 0 4px 12px rgba(30,25,10,0.04)'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 9,
      background: '#EAE6DB',
      display: 'grid',
      placeItems: 'center',
      fontSize: 13,
      fontWeight: 700,
      color: '#6B879D'
    }
  }, "1"), React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600
    }
  }, L('Valsts pensija', 'State pension'))), React.createElement("div", {
    style: {
      marginTop: 10,
      fontSize: 26,
      fontWeight: 700,
      color: BRAND.promo,
      letterSpacing: 0
    }
  }, formatMoney(selectedScenario.tier1Monthly), React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: BRAND.mute
    }
  }, "/", L('mēn.', 'mo.'))), React.createElement("div", {
    style: {
      marginTop: 10,
      height: 4,
      borderRadius: 2,
      background: BRAND.line,
      overflow: 'hidden',
      maxWidth: 180
    }
  }, React.createElement("div", {
    style: {
      width: `${Math.round(TIER1_SERVICE_YEARS / TIER1_TARGET_YEARS * 100)}%`,
      height: '100%',
      background: BRAND.promo,
      borderRadius: 2
    }
  })), React.createElement("div", {
    style: {
      marginTop: 5,
      fontSize: 12,
      color: BRAND.mute
    }
  }, TIER1_SERVICE_YEARS, " / ", TIER1_TARGET_YEARS, " ", L('darba gadi', 'work years'))), React.createElement("div", {
    style: {
      flexShrink: 0
    }
  }, React.createElement(TierIllustration1, null)))), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 10
    }
  }, React.createElement(CompactTierCard, {
    tier: "2",
    illustration: React.createElement(TierIllustration2, null),
    title: L('2. līmenis', '2nd pillar'),
    balance: formatMoney(TIER2_BALANCE),
    monthly: `${formatMoney(selectedScenario.tier2Monthly)}/${L('mēn.', 'mo.')}`,
    note: L('Fonda uzkrājums', 'Fund balance')
  }), React.createElement(CompactTierCard, {
    tier: "3",
    illustration: React.createElement(TierIllustration3, null),
    title: L('3. līmenis', '3rd pillar'),
    balance: formatMoney(TIER3_BALANCE),
    monthly: `${formatMoney(selectedScenario.tier3Monthly)}/${L('mēn.', 'mo.')}`,
    note: L('Dinamiskais', 'Dynamic')
  })), React.createElement("div", {
    style: {
      marginTop: 10,
      background: '#EAE6DB',
      borderRadius: 12,
      padding: '16px 18px',
      boxShadow: '0 1px 2px rgba(30,25,10,0.04), 0 4px 12px rgba(30,25,10,0.04)'
    }
  }, React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: BRAND.mute,
      letterSpacing: 0
    }
  }, L('Kopā prognozētā pensija', 'Total projected pension')), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6,
      marginTop: 4
    }
  }, React.createElement("div", {
    style: {
      fontSize: 30,
      fontWeight: 700,
      color: BRAND.promo,
      letterSpacing: 0
    }
  }, formatMoney(totalMonthly)), React.createElement("div", {
    style: {
      fontSize: 14,
      color: BRAND.mute
    }
  }, L('/mēnesī šodienas naudā', '/month in today’s money'))), React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: BRAND.mute,
      marginTop: 2
    }
  }, scenarioNote(scenario))), React.createElement("div", {
    style: {
      height: 1,
      background: BRAND.line,
      margin: '20px 0 4px'
    }
  }), React.createElement(PensionNavRow, {
    icon: React.createElement(TrendIcon, null),
    title: L('Ikmēneša analīze', 'Monthly analysis'),
    subtitle: L('Simulācija un salīdzinājums', 'Simulation and comparison'),
    onClick: () => onNav('analysis')
  }), React.createElement("div", {
    style: {
      height: 1,
      background: BRAND.line
    }
  }), React.createElement(PensionNavRow, {
    icon: Icon.goal(),
    title: L('Nākotnes projekcija', 'Future projection'),
    subtitle: L('Scenāriji un pensijas grafiks', 'Scenarios and pension chart'),
    value: `${formatMoney(selectedScenario.todayMoneyMonthly)}/${L('mēn.', 'mo.')}`,
    onClick: () => onNav('projection')
  }), React.createElement("div", {
    style: {
      height: 1,
      background: BRAND.line
    }
  }), React.createElement(PensionNavRow, {
    icon: React.createElement(TrophyIcon, null),
    title: L('Mērķi un sasniegumi', 'Goals and milestones'),
    subtitle: L(`Streak: ${model.streak} mēn. · Nākamais milestone: ${formatMoney(NEXT_MILESTONE - TIER3_BALANCE)}`, `Streak: ${model.streak} mo. · Next milestone: ${formatMoney(NEXT_MILESTONE - TIER3_BALANCE)}`),
    onClick: () => onNav('goals')
  })), confirmDialog && React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(17, 23, 19, 0.28)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      zIndex: 1000
    }
  }, React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 320,
      background: BRAND.card,
      borderRadius: 16,
      padding: '18px 16px 16px',
      boxShadow: '0 16px 40px rgba(17,23,19,0.18)',
      border: `1px solid ${BRAND.line}`
    }
  }, React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      color: BRAND.ink,
      lineHeight: '22px'
    }
  }, confirmDialog.title), React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 13,
      lineHeight: '18px',
      color: BRAND.mute
    }
  }, confirmDialog.body), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 16
    }
  }, React.createElement("button", {
    type: "button",
    onClick: () => setConfirmAction(null),
    style: {
      flex: 1,
      minHeight: 44,
      borderRadius: 12,
      border: 0,
      background: '#EAE6DB',
      color: BRAND.ink,
      fontSize: 14,
      fontWeight: 700,
      cursor: 'pointer'
    }
  }, L('Atcelt', 'Cancel')), React.createElement("button", {
    type: "button",
    onClick: handleConfirmAction,
    style: {
      flex: 1,
      minHeight: 44,
      borderRadius: 12,
      border: 0,
      background: BRAND.accent,
      color: BRAND.ink,
      fontSize: 14,
      fontWeight: 700,
      cursor: 'pointer'
    }
  }, confirmDialog.confirmLabel)))), successDialog && React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(17, 23, 19, 0.28)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      zIndex: 1001
    }
  }, React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 320,
      background: BRAND.card,
      borderRadius: 16,
      padding: '18px 16px 16px',
      boxShadow: '0 16px 40px rgba(17,23,19,0.18)',
      border: `1px solid ${BRAND.line}`
    }
  }, React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: BRAND.ink,
      lineHeight: '22px',
      whiteSpace: 'pre-line'
    }
  }, successDialog.body), React.createElement("button", {
    type: "button",
    onClick: () => setSuccessDialog(null),
    style: {
      width: '100%',
      marginTop: 16,
      minHeight: 44,
      borderRadius: 12,
      border: 0,
      background: BRAND.accent,
      color: BRAND.ink,
      fontSize: 14,
      fontWeight: 700,
      cursor: 'pointer'
    }
  }, L('Labi', 'OK')))));
}
function MonthlyBarChart({
  months,
  selectedIndex,
  onSelect
}) {
  const {
    L,
    monthLabel,
    shortMonthLabel
  } = useLanguage();
  const maxVal = Math.max(...months.flatMap(m => [m.income, m.spending])) || 1;
  const H = 80;
  return React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 12
    }
  }, [['#B8B0A4', L('Ienākumi', 'Income')], ['#DDD7CE', L('Tēriņi', 'Spending')], [BRAND.accent, L('Iemaksa', 'Contribution')]].map(([col, lbl]) => React.createElement("div", {
    key: lbl,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5
    }
  }, React.createElement("div", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 2,
      background: col
    }
  }), React.createElement("span", {
    style: {
      fontSize: 11,
      color: BRAND.mute
    }
  }, lbl)))), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 4
    }
  }, months.map((month, index) => {
    const active = index === selectedIndex;
    const incH = Math.round(month.income / maxVal * H);
    const spH = Math.round(month.spending / maxVal * H);
    const coH = month.contribution > 0 ? Math.max(4, Math.round(month.contribution / maxVal * H)) : 0;
    return React.createElement("button", {
      type: "button",
      key: month.month,
      "aria-label": L(`${monthLabel(month.month)}: ienākumi ${formatMoney(month.income)}, tēriņi ${formatMoney(month.spending)}, iemaksa ${formatMoney(month.contribution)}`, `${monthLabel(month.month)}: income ${formatMoney(month.income)}, spending ${formatMoney(month.spending)}, contribution ${formatMoney(month.contribution)}`),
      "aria-pressed": active,
      onClick: () => onSelect(index),
      style: {
        flex: 1,
        background: 'transparent',
        border: 0,
        padding: 0,
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: 44
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        gap: 2,
        height: H
      }
    }, React.createElement("div", {
      style: {
        width: 9,
        height: incH,
        borderRadius: '3px 3px 0 0',
        background: active ? '#8A8480' : '#C8C1B4'
      }
    }), React.createElement("div", {
      style: {
        width: 9,
        height: spH,
        borderRadius: '3px 3px 0 0',
        background: active ? '#B8B0A4' : '#DDD7CE'
      }
    }), React.createElement("div", {
      style: {
        width: 9,
        height: coH,
        borderRadius: '3px 3px 0 0',
        background: coH > 0 ? BRAND.accent : 'transparent'
      }
    })), React.createElement("div", {
      style: {
        marginTop: 5,
        fontSize: 10,
        color: active ? BRAND.ink : BRAND.mute,
        fontWeight: active ? 700 : 400
      }
    }, shortMonthLabel(month.month)), React.createElement("div", {
      style: {
        marginTop: 2,
        width: 14,
        height: 2,
        borderRadius: 1,
        background: active ? BRAND.accent : 'transparent'
      }
    }));
  })));
}
function PensionAnalysis({
  onBack,
  selectedMonthIndex,
  setSelectedMonthIndex,
  model,
  config
}) {
  const {
    L,
    monthLabel
  } = useLanguage();
  const selectedMonth = model.lastSix[selectedMonthIndex];
  const diff = selectedMonth.contribution - selectedMonth.fixedContribution;
  return React.createElement("div", null, React.createElement(SubPageHeader, {
    title: L('Ikmēneša analīze', 'Monthly analysis'),
    onBack: onBack
  }), React.createElement("div", {
    style: {
      padding: '8px 16px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      letterSpacing: 0
    }
  }, L('Pēdējie 6 mēneši', 'Last 6 months')), React.createElement(MonthlyBarChart, {
    months: model.lastSix,
    selectedIndex: selectedMonthIndex,
    onSelect: setSelectedMonthIndex
  }), React.createElement("div", {
    style: {
      marginTop: 16,
      background: '#F7F2E6',
      borderRadius: 16,
      padding: '16px'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: BRAND.ink
    }
  }, monthLabel(selectedMonth.month)), React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 700,
      color: BRAND.promo,
      letterSpacing: 0
    }
  }, formatMoney(selectedMonth.contribution))), React.createElement("div", {
    style: {
      marginTop: 12,
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, [[L('Ienākumi', 'Income'), selectedMonth.income, BRAND.ink], [L('Tēriņi', 'Spending'), selectedMonth.spending, BRAND.ink], [L('Droši', 'Safe'), selectedMonth.safeToInvest, BRAND.ok]].map(([lbl, val, col]) => React.createElement("div", {
    key: lbl
  }, React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: BRAND.mute,
      textTransform: 'uppercase',
      letterSpacing: 0.7
    }
  }, lbl), React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: col,
      marginTop: 3
    }
  }, formatMoney(val))))), React.createElement("div", {
    style: {
      marginTop: 10,
      fontSize: 12.5,
      color: BRAND.mute,
      lineHeight: '17px'
    }
  }, selectedMonth.fixedBreaksBuffer ? L('Fiksēta iemaksa aizskartu rezervi — dinamiskā apstājās automātiski', 'A fixed contribution would cut into the buffer — the dynamic one stopped automatically') : diff >= 0 ? L(`+${formatMoney(diff)} vairāk nekā ar fiksētu iemaksu`, `+${formatMoney(diff)} more than a fixed contribution`) : L(`${formatMoney(Math.abs(diff))} mazāk — mēnesis bija finansiāli stingrs`, `${formatMoney(Math.abs(diff))} less — the month was financially tight`)))), React.createElement("div", null, React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      letterSpacing: 0
    }
  }, L('Dinamiskais vs fiksētais', 'Dynamic vs fixed')), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      marginTop: 16
    }
  }, React.createElement(ComparisonBar, {
    label: L('Dinamiskais', 'Dynamic'),
    value: model.totalDynamic,
    max: model.totalDynamic,
    tone: BRAND.promo,
    detail: L(`${model.boostedMonths} mēnešos iemaksa pārsniedza mērķi`, `Contribution exceeded the target in ${model.boostedMonths} months`)
  }), React.createElement(ComparisonBar, {
    label: L('Fiksēta iemaksa', 'Fixed contribution'),
    value: model.totalFixed,
    max: model.totalDynamic,
    tone: "#C8C1B4",
    detail: `${formatMoney(config.fixedContribution)}/${L('mēn. ar ienākumiem', 'mo. with income')}`
  })), React.createElement("div", {
    style: {
      marginTop: 12,
      fontSize: 13,
      color: BRAND.mute,
      lineHeight: '18px'
    }
  }, L(`${formatMoney(model.dynamicAdvantage)} papildu · ${model.pausedMonths} mēnesī apstājās automātiski · ${model.cappedMonths} stabilizēti`, `${formatMoney(model.dynamicAdvantage)} extra · auto-stopped in ${model.pausedMonths} months · ${model.cappedMonths} stabilized`)))));
}
function PensionProjection({
  onBack,
  scenario,
  setScenario
}) {
  const {
    L,
    scenarioLabel,
    scenarioNote
  } = useLanguage();
  const s = FUTURE_SCENARIOS[scenario];
  const total = s.tier1Monthly + s.tier2Monthly + s.tier3Monthly;
  const t1w = Math.round(s.tier1Monthly / total * 100);
  const t2w = Math.round(s.tier2Monthly / total * 100);
  const t3w = 100 - t1w - t2w;
  return React.createElement("div", null, React.createElement(SubPageHeader, {
    title: L('Nākotnes projekcija', 'Future projection'),
    onBack: onBack
  }), React.createElement("div", {
    style: {
      padding: '8px 16px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: BRAND.mute
    }
  }, L('Prognozētā pensija 67 gados', 'Projected pension at age 67')), React.createElement("div", {
    style: {
      fontSize: 34,
      fontWeight: 700,
      color: BRAND.promo,
      letterSpacing: 0,
      marginTop: 4
    }
  }, formatMoney(s.todayMoneyMonthly), React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      color: BRAND.mute
    }
  }, "/", L('mēn.', 'mo.'))), React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: BRAND.mute,
      marginTop: 3
    }
  }, L('šodienas naudā', 'in today’s money'), " \xB7 ", scenarioNote(scenario)), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 16
    }
  }, SCENARIO_ORDER.map(key => React.createElement("button", {
    type: "button",
    key: key,
    "aria-pressed": key === scenario,
    onClick: () => setScenario(key),
    style: {
      flex: 1,
      border: 0,
      borderRadius: 12,
      padding: '10px 6px',
      minHeight: 44,
      cursor: 'pointer',
      background: key === scenario ? BRAND.accent : BRAND.line,
      fontSize: 13,
      fontWeight: 700,
      color: BRAND.ink
    }
  }, scenarioLabel(key)))), React.createElement(ProjectionChart, {
    selectedScenario: scenario
  })), React.createElement("div", null, React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      letterSpacing: 0,
      marginBottom: 14
    }
  }, L('Sadalījums', 'Breakdown')), React.createElement("div", {
    style: {
      display: 'flex',
      height: 8,
      borderRadius: 4,
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    style: {
      width: `${t1w}%`,
      background: '#C8C1B4'
    }
  }), React.createElement("div", {
    style: {
      width: `${t2w}%`,
      background: BRAND.promo,
      opacity: 0.45,
      marginLeft: 2
    }
  }), React.createElement("div", {
    style: {
      width: `${t3w}%`,
      background: BRAND.promo,
      marginLeft: 2
    }
  })), React.createElement("div", {
    style: {
      marginTop: 14,
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, [{
    label: L('1. līmenis · Valsts', '1st pillar · State'),
    amount: s.tier1Monthly,
    dot: '#C8C1B4',
    op: 1
  }, {
    label: L('2. līmenis · Fonds', '2nd pillar · Fund'),
    amount: s.tier2Monthly,
    dot: BRAND.promo,
    op: 0.45
  }, {
    label: L('3. līmenis · Dinamiskais', '3rd pillar · Dynamic'),
    amount: s.tier3Monthly,
    dot: BRAND.promo,
    op: 1
  }].map(({
    label,
    amount,
    dot,
    op
  }) => React.createElement("div", {
    key: label,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, React.createElement("div", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 2,
      background: dot,
      opacity: op,
      flexShrink: 0
    }
  }), React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 13.5,
      color: BRAND.mute
    }
  }, label), React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: BRAND.ink
    }
  }, formatMoney(amount), React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 400,
      color: BRAND.mute
    }
  }, "/", L('mēn.', 'mo.')))))))));
}
function PensionGoals({
  onBack,
  scenario,
  model,
  config
}) {
  const {
    L
  } = useLanguage();
  const selectedScenario = FUTURE_SCENARIOS[scenario];
  const goalProgress = clamp(selectedScenario.todayMoneyMonthly / FUTURE_GOAL, 0, 1);
  const gapToGoal = Math.max(0, FUTURE_GOAL - selectedScenario.todayMoneyMonthly);
  const extraMonthlyNeeded = Math.round(gapToGoal * 0.18);
  const milestoneLeft = NEXT_MILESTONE - TIER3_BALANCE;
  return React.createElement("div", null, React.createElement(SubPageHeader, {
    title: L('Mērķi un sasniegumi', 'Goals and milestones'),
    onBack: onBack
  }), React.createElement("div", {
    style: {
      padding: '8px 16px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, React.createElement("div", {
    style: {
      background: BRAND.card,
      borderRadius: 12,
      padding: '18px',
      border: `1px solid ${BRAND.line}`
    }
  }, React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: BRAND.mute
    }
  }, L('Pensijas mērķis', 'Pension goal')), React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, React.createElement("span", {
    style: {
      fontSize: 28,
      fontWeight: 700,
      color: BRAND.promo,
      letterSpacing: 0
    }
  }, formatMoney(selectedScenario.todayMoneyMonthly)), React.createElement("span", {
    style: {
      fontSize: 15,
      color: BRAND.mute,
      fontWeight: 500
    }
  }, " / ", formatMoney(FUTURE_GOAL), " ", L('mēnesī', 'per month'))), React.createElement("div", {
    style: {
      marginTop: 12,
      height: 8,
      borderRadius: 4,
      background: BRAND.line,
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    style: {
      width: `${Math.round(goalProgress * 100)}%`,
      height: '100%',
      background: BRAND.promo,
      borderRadius: 4
    }
  })), React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 13,
      color: BRAND.mute,
      lineHeight: '17px'
    }
  }, L(`Pietrūkst ${formatMoney(gapToGoal)} · apmēram ${formatMoney(extraMonthlyNeeded)} papildu mēnesī.`, `${formatMoney(gapToGoal)} short · around ${formatMoney(extraMonthlyNeeded)} extra per month.`))), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, React.createElement(ConfigPill, {
    icon: React.createElement(TrophyIcon, null),
    label: L('Streak', 'Streak'),
    value: L(`${model.streak} mēneši`, `${model.streak} months`)
  }), React.createElement(ConfigPill, {
    icon: React.createElement(PigIcon, null),
    label: L('Nākamais €5000', 'Next €5000'),
    value: formatMoney(milestoneLeft)
  })), React.createElement("div", {
    style: {
      background: BRAND.card,
      borderRadius: 12,
      padding: '18px',
      border: `1px solid ${BRAND.line}`
    }
  }, React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      letterSpacing: 0
    }
  }, L('Ko varēsi atļauties', 'What you could afford')), React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: BRAND.mute,
      marginTop: 3
    }
  }, L('Pensija pret reālajām izmaksām šodien', 'Pension against real costs today')), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 14
    }
  }, React.createElement(LifestyleCard, {
    icon: React.createElement(CarIcon, null),
    label: L('BMW 3 līzings', 'BMW 3 lease'),
    cost: 790,
    income: selectedScenario.todayMoneyMonthly
  }), React.createElement(LifestyleCard, {
    icon: React.createElement(PigIcon, null),
    label: L('Pārtika', 'Groceries'),
    cost: 320,
    income: selectedScenario.todayMoneyMonthly
  }), React.createElement(LifestyleCard, {
    icon: Icon.goal(BRAND.ink),
    label: L('Komunālie', 'Utilities'),
    cost: 160,
    income: selectedScenario.todayMoneyMonthly
  }))), React.createElement("div", {
    style: {
      background: BRAND.card,
      borderRadius: 12,
      padding: '18px',
      border: `1px solid ${BRAND.line}`
    }
  }, React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      letterSpacing: 0
    }
  }, L('Kā darbojas dinamiskā iemaksa', 'How the dynamic contribution works')), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      marginTop: 16
    }
  }, React.createElement(StepRow, {
    number: 1,
    title: L('Atklāj', 'Discover'),
    body: L(`"Tu jau būtu uzkrājis ${formatMoney(model.totalDynamic)}" — parādās sākumlapā.`, `"You would already have saved ${formatMoney(model.totalDynamic)}" — shown on the home screen.`)
  }), React.createElement(StepRow, {
    number: 2,
    title: L('Pielāgo', 'Adjust'),
    body: L('Nosaki mērķa procentu, drošības buferi, diapazonu un iemaksas datumu.', 'Set the target percentage, safety buffer, range and contribution date.')
  }), React.createElement(StepRow, {
    number: 3,
    title: L('Automatizē', 'Automate'),
    body: L('Katru mēnesi sistēma aprēķina drošo iemaksu pēc ienākumiem un tēriņiem.', 'Each month the system calculates a safe contribution from income and spending.')
  }), React.createElement(StepRow, {
    number: 4,
    title: L('Saņem atskaiti', 'Get a report'),
    body: L('Pēc katras iemaksas redzi summu, iemeslu un ietekmi uz nākotnes pensiju.', 'After each contribution you see the amount, the reason and the impact on your future pension.')
  })), React.createElement("div", {
    style: {
      marginTop: 16,
      borderRadius: 12,
      background: '#F7F2E6',
      border: `1px solid ${BRAND.line}`,
      padding: '14px 16px'
    }
  }, React.createElement("div", {
    style: {
      fontSize: 11.5,
      textTransform: 'uppercase',
      letterSpacing: 1,
      color: BRAND.mute
    }
  }, L('Ikmēneša atskaite', 'Monthly report')), React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: 0,
      lineHeight: '20px',
      color: BRAND.ink
    }
  }, L(`Šomēnes tiktu novirzīti ${formatMoney(model.preview.contribution)}, jo pēc algas un tēriņiem paliek ${formatMoney(model.preview.safeToInvest)} droši ieguldāmas naudas. Nodokļu optimizācija prognozē ${formatMoney(model.taxRefund)} atmaksu.`, `This month ${formatMoney(model.preview.contribution)} would be set aside because ${formatMoney(model.preview.safeToInvest)} remains safely investable after salary and spending. Tax optimization forecasts a ${formatMoney(model.taxRefund)} refund.`))))));
}
function BackChev({
  onClick
}) {
  const {
    L
  } = useLanguage();
  return React.createElement("button", {
    type: "button",
    onClick: onClick,
    style: {
      background: 'transparent',
      border: 0,
      padding: '4px 8px 4px 0',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      color: BRAND.promo,
      fontSize: 14,
      fontWeight: 500
    }
  }, React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none"
  }, React.createElement("path", {
    d: "M12 5l-5 5 5 5",
    stroke: BRAND.promo,
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), L('Atpakaļ', 'Back'));
}
function OnboardingShell({
  step,
  total,
  eyebrow,
  title,
  subtitle,
  onBack,
  children,
  onNext,
  nextLabel,
  hideNav = false
}) {
  const {
    L
  } = useLanguage();
  return React.createElement("div", {
    style: {
      height: '100%',
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      background: BRAND.card,
      position: 'relative',
      overflow: 'hidden'
    }
  }, !hideNav && React.createElement("div", {
    style: {
      padding: '14px 24px 14px',
      backgroundColor: BRAND.card,
      zIndex: 10,
      flexShrink: 0
    }
  }, React.createElement("button", {
    type: "button",
    onClick: onBack,
    style: {
      alignItems: 'center',
      color: BRAND.promo,
      fontWeight: 500,
      fontSize: 14,
      textDecoration: 'none',
      cursor: 'pointer',
      border: 'none',
      background: 'none',
      padding: 0,
      marginBottom: 12,
      display: step === 0 ? 'none' : 'inline-flex'
    }
  }, React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      width: 16,
      height: 16,
      marginRight: 4
    }
  }, React.createElement("polyline", {
    points: "15 18 9 12 15 6"
  })), L('Atpakaļ', 'Back')), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, Array.from({
    length: total
  }).map((_, i) => React.createElement("div", {
    key: i,
    style: {
      height: 2,
      flex: 1,
      borderRadius: 2,
      background: i <= step ? BRAND.ink : BRAND.line,
      transition: 'background-color 0.3s ease'
    },
    "aria-hidden": "true"
  })))), React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      overflowX: 'hidden',
      padding: hideNav ? '24px 24px 82px' : '0 24px 82px',
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0
    }
  }, (eyebrow || title || subtitle) && React.createElement("div", {
    style: {
      marginBottom: 18,
      flexShrink: 0
    }
  }, eyebrow && React.createElement("div", {
    style: {
      fontSize: 11,
      textTransform: 'uppercase',
      fontWeight: 700,
      color: BRAND.mute,
      letterSpacing: 0.5,
      marginBottom: 8
    }
  }, eyebrow), title && React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      lineHeight: 1.2,
      color: BRAND.ink,
      marginBottom: subtitle ? 12 : 0
    }
  }, title), subtitle && React.createElement("div", {
    style: {
      fontSize: 14,
      color: BRAND.mute,
      lineHeight: 1.5
    }
  }, subtitle)), React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, children)), React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      padding: '10px 24px 14px',
      background: 'linear-gradient(to top, rgba(255,255,255,1) 86%, rgba(255,255,255,0))',
      zIndex: 10
    }
  }, React.createElement("button", {
    type: "button",
    onClick: onNext,
    style: {
      width: '100%',
      minHeight: 52,
      padding: '14px 16px',
      borderRadius: 12,
      background: BRAND.accent,
      color: BRAND.ink,
      fontSize: 16,
      fontWeight: 700,
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
      transition: 'all 0.2s'
    }
  }, nextLabel || L('Turpināt', 'Continue'))));
}
function DynamicPensionOnboarding({
  onBack,
  onComplete,
  initialConfig = FLUXION_SETTINGS,
  model = FLUXION_MODEL
}) {
  const {
    L
  } = useLanguage();
  const GROSS_ESTIMATE_RATIO = 0.75;
  const [step, setStep] = React.useState(1);
  const [mode, setMode] = React.useState(initialConfig.mode || 'dynamic');
  const [salary] = React.useState(model.averageIncome || 2000);
  const [accountBalance] = React.useState(2300);
  const [targetPct, setTargetPct] = React.useState(10);
  const [buffer, setBuffer] = React.useState(initialConfig.safetyBuffer || 300);
  const [customBuffer, setCustomBuffer] = React.useState(initialConfig.safetyBuffer || 300);
  const [useCustomBuffer, setUseCustomBuffer] = React.useState(![300, 500, 1000].includes(initialConfig.safetyBuffer || 300));
  const [maxContribution, setMaxContribution] = React.useState(150);
  const [skipBelow, setSkipBelow] = React.useState(10);
  const [pensionPlan, setPensionPlan] = React.useState(initialConfig.pensionPlan || 'INDEXO AKCIJAS');
  const [planPickerOpen, setPlanPickerOpen] = React.useState(false);
  const [notifyBefore, setNotifyBefore] = React.useState(true);
  const [allowReversal, setAllowReversal] = React.useState(true);
  const [monthlySummary, setMonthlySummary] = React.useState(true);
  const [taxReminders, setTaxReminders] = React.useState(true);
  const STEPS = 7;
  const progressStep = {
    1: 0,
    3: 1,
    4: 2,
    5: 3,
    8: 4,
    9: 5,
    10: 6
  }[step] ?? 0;
  const estimatedGrossSalary = Math.round(salary / GROSS_ESTIMATE_RATIO);
  const contributionFromGrossPct = pct => Math.round(estimatedGrossSalary * (pct / 100));
  const netRateFromGrossPct = pct => Math.min(1, contributionFromGrossPct(pct) / Math.max(1, salary));
  const baseContribution = contributionFromGrossPct(targetPct);
  const expectedSpending = model.averageSpending;
  const recurringPayments = model.obligationsTotal;
  const balanceAfterPlannedOutflows = accountBalance - expectedSpending - recurringPayments;
  const safeAvailable = Math.max(0, balanceAfterPlannedOutflows - buffer);
  const estimatedContribution = Math.min(baseContribution, maxContribution, safeAvailable);
  const finalContribution = Math.max(0, estimatedContribution < skipBelow ? 0 : estimatedContribution);
  const selectedPlanMeta = PENSION_PLAN_OPTIONS.find(plan => plan.name === pensionPlan) || PENSION_PLAN_OPTIONS[0];
  const OptionCard = ({
    title,
    body,
    active,
    onClick,
    recommended
  }) => React.createElement("button", {
    type: "button",
    "aria-pressed": active,
    onClick: onClick,
    style: {
      width: '100%',
      textAlign: 'left',
      border: `1px solid ${active ? BRAND.promo : BRAND.line}`,
      background: active ? '#F8FAFA' : BRAND.card,
      borderRadius: 12,
      padding: 16,
      cursor: 'pointer',
      marginBottom: 12,
      boxShadow: active ? '0 4px 12px rgba(24,74,59,0.05)' : 'none',
      transition: 'all 0.2s'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8
    }
  }, React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: BRAND.ink
    }
  }, title), recommended && React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: BRAND.promo,
      background: '#E8F0EE',
      padding: '4px 8px',
      borderRadius: 4
    }
  }, L('Populārākais', 'Most popular'))), React.createElement("div", {
    style: {
      fontSize: 13,
      color: BRAND.mute,
      lineHeight: 1.4
    }
  }, body));
  const Chip = ({
    label,
    active,
    onClick
  }) => React.createElement("div", {
    onClick: onClick,
    style: {
      border: `1px solid ${active ? BRAND.accent : BRAND.line}`,
      borderRadius: 8,
      padding: '12px 0',
      textAlign: 'center',
      fontWeight: 600,
      fontSize: 14,
      cursor: 'pointer',
      backgroundColor: active ? BRAND.accent : BRAND.card,
      color: BRAND.ink,
      transition: 'all 0.2s'
    }
  }, label);
  const AmountDisplay = ({
    label,
    amount
  }) => React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#F8F9FA',
      padding: 16,
      borderRadius: 12,
      marginBottom: 24
    }
  }, React.createElement("span", {
    style: {
      fontSize: 14,
      color: BRAND.mute
    }
  }, label), React.createElement("strong", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: BRAND.ink
    }
  }, amount));
  const InfoBox = ({
    title,
    text,
    green = false,
    children
  }) => React.createElement("div", {
    style: {
      backgroundColor: green ? '#F8FAFA' : '#F8F6EF',
      borderRadius: 12,
      padding: 16,
      marginBottom: 24
    }
  }, title && React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: BRAND.promo,
      textTransform: 'uppercase',
      marginBottom: 8
    }
  }, title), text && React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: BRAND.ink
    }
  }, text), children);
  function finish() {
    onComplete({
      targetRate: netRateFromGrossPct(targetPct),
      minRate: Math.max(0.01, netRateFromGrossPct(Math.max(1, targetPct - 2))),
      maxRate: Math.min(1, netRateFromGrossPct(Math.min(100, targetPct + 2))),
      safetyBuffer: buffer,
      fixedContribution: maxContribution,
      mode: mode === 'fixed' ? 'fixed' : 'dynamic',
      taxOptimization: true,
      maxMonthlyContribution: maxContribution,
      skipContributionBelow: skipBelow,
      notifyBefore,
      allowReversal,
      monthlySummary,
      taxReminders,
      pensionPlan,
      paused: false
    });
  }
  if (step === 1) return React.createElement(OnboardingShell, {
    step: progressStep,
    total: STEPS,
    eyebrow: L('Iemaksu režīms', 'Contribution mode'),
    title: L('Izvēlies, kā vēlies veikt iemaksas', 'Choose how you want to contribute'),
    onBack: onBack,
    onNext: () => setStep(3)
  }, React.createElement(OptionCard, {
    title: L('Fiksēts', 'Fixed'),
    body: L('Katru mēnesi viena un tā pati summa.', 'Same amount every month.'),
    active: mode === 'fixed',
    onClick: () => setMode('fixed')
  }), React.createElement(OptionCard, {
    title: L('Dinamisks', 'Dynamic'),
    body: L('Iegulda procentu no algas un pielāgojas tavai finanšu situācijai.', 'Contributes a percentage of your salary and adjusts based on your financial situation.'),
    active: mode === 'dynamic',
    onClick: () => setMode('dynamic'),
    recommended: true
  }), React.createElement(OptionCard, {
    title: L('Nodokļu mērķis', 'Tax target'),
    body: L('Palīdz sasniegt gada summu maksimālajam nodokļu ieguvumam.', 'Helps you reach the yearly amount needed for the maximum eligible tax benefit.'),
    active: mode === 'tax',
    onClick: () => setMode('tax')
  }));
  if (step === 3) return React.createElement(OnboardingShell, {
    step: progressStep,
    total: STEPS,
    title: L('Cik lielu daļu ieguldīt?', 'How much do you want to invest?'),
    onBack: () => setStep(1),
    onNext: () => setStep(4)
  }, React.createElement(AmountDisplay, {
    label: L('Šomēnes paredzamā iemaksa', 'Expected contribution this month'),
    amount: `~${formatMoney(finalContribution)}`
  }), React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12,
      fontWeight: 700,
      fontSize: 14
    }
  }, React.createElement("span", null, L('Mērķa procents no bruto algas', 'Target percent of gross salary')), React.createElement("span", {
    style: {
      color: BRAND.promo,
      fontSize: 18
    }
  }, targetPct, "%")), React.createElement("input", {
    className: "fluxion-range",
    type: "range",
    min: "1",
    max: "20",
    step: "1",
    value: Math.min(targetPct, 20),
    onChange: e => setTargetPct(Number(e.target.value)),
    style: {
      '--range-fill': `${(Math.min(targetPct, 20) - 1) / 19 * 100}%`,
      marginBottom: 24
    }
  }), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 12,
      marginBottom: 24
    }
  }, [5, 7, 10].map(pct => React.createElement(Chip, {
    key: pct,
    label: `${pct}%`,
    active: targetPct === pct,
    onClick: () => setTargetPct(pct)
  }))), React.createElement(InfoBox, {
    title: L('Ieteikums', 'Suggestion'),
    text: L('INDEXO iesaka līdz 10% no bruto algas.', 'INDEXO suggests up to 10% of gross salary.')
  }));
  if (step === 4) return React.createElement(OnboardingShell, {
    step: progressStep,
    total: STEPS,
    title: L('Iestati savu minimālo atlikumu', 'Set your minimum balance'),
    subtitle: L('Lietotne neieguldīs, ja konta atlikums pēc tam būtu zem šīs summas.', 'The app will not invest if your account would fall below this amount.'),
    onBack: () => setStep(3),
    onNext: () => setStep(5)
  }, React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 12,
      marginBottom: 24
    }
  }, [300, 500, 1000].map(amount => React.createElement(Chip, {
    key: amount,
    label: formatMoney(amount),
    active: !useCustomBuffer && buffer === amount,
    onClick: () => {
      setUseCustomBuffer(false);
      setBuffer(amount);
    }
  })), React.createElement(Chip, {
    label: L('Cita summa', 'Custom amount'),
    active: useCustomBuffer,
    onClick: () => {
      setUseCustomBuffer(true);
      setBuffer(customBuffer);
    }
  })), useCustomBuffer && React.createElement("label", {
    style: {
      display: 'block',
      marginBottom: 24,
      fontSize: 13,
      color: BRAND.mute
    }
  }, L('Cita summa', 'Custom amount'), React.createElement("input", {
    type: "number",
    min: 0,
    value: customBuffer,
    onChange: e => {
      const next = Number(e.target.value);
      setCustomBuffer(next);
      setBuffer(next);
      setUseCustomBuffer(true);
    },
    style: {
      width: '100%',
      marginTop: 6,
      minHeight: 44,
      border: `1px solid ${BRAND.line}`,
      borderRadius: 10,
      padding: '0 12px',
      font: 'inherit',
      color: BRAND.ink
    }
  })), React.createElement(InfoBox, {
    green: true
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8
    }
  }, React.createElement("span", {
    style: {
      fontSize: 13,
      color: BRAND.mute
    }
  }, L('Minimālais atlikums', 'Minimum balance')), React.createElement("strong", {
    style: {
      fontSize: 14,
      color: BRAND.ink
    }
  }, formatMoney(buffer))), React.createElement("div", {
    style: {
      fontSize: 13,
      color: BRAND.mute
    }
  }, L('Ja atlikums nokristu zem šīs summas, iemaksa tiks izlaista.', 'If your balance would drop below this amount, the contribution is skipped.'))));
  if (step === 5) return React.createElement(OnboardingShell, {
    step: progressStep,
    total: STEPS,
    title: L('Nosaki mēneša limitu', 'Set a monthly limit'),
    subtitle: L('Iemaksa nekad nepārsniegs šo summu.', 'Your contribution will never exceed this amount.'),
    onBack: () => setStep(4),
    onNext: () => setStep(8)
  }, React.createElement(AmountDisplay, {
    label: L('Maksimālā mēneša iemaksa', 'Maximum monthly contribution'),
    amount: formatMoney(maxContribution)
  }), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 12,
      marginBottom: 24
    }
  }, [100, 150, 250].map(amount => React.createElement(Chip, {
    key: amount,
    label: formatMoney(amount),
    active: maxContribution === amount,
    onClick: () => setMaxContribution(amount)
  }))), React.createElement(InfoBox, {
    title: L('Papildu iestatījums', 'Extra setting')
  }, React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 13,
      color: BRAND.mute,
      lineHeight: '18px',
      marginTop: 4
    }
  }, L('Izlaist, ja aprēķinātā iemaksa ir zem', 'Skip if calculated contribution is below'), React.createElement("input", {
    type: "number",
    min: 0,
    value: skipBelow,
    onChange: e => setSkipBelow(Number(e.target.value)),
    style: {
      width: '100%',
      marginTop: 8,
      minHeight: 44,
      border: `1px solid ${BRAND.line}`,
      borderRadius: 8,
      padding: '0 12px',
      font: 'inherit',
      fontWeight: 600,
      color: BRAND.ink
    }
  }))));
  if (step === 8) return React.createElement(OnboardingShell, {
    step: progressStep,
    total: STEPS,
    title: L('Saglabā kontroli', 'Stay in control'),
    subtitle: L('Pirms katras iemaksas saņemsi paziņojumu ar plānoto summu.', 'Before each contribution, you will receive a notification with the planned amount.'),
    onBack: () => setStep(5),
    onNext: () => setStep(9)
  }, React.createElement("div", {
    style: {
      backgroundColor: '#F8F9FA',
      borderRadius: 12,
      padding: '8px 16px',
      marginBottom: 24
    }
  }, [{
    label: L('Paziņot man 2 dienas pirms algas dienas', 'Notify me 2 days before salary day'),
    state: notifyBefore,
    setter: setNotifyBefore
  }, {
    label: L('Atļaut atsaukšanu 24h logā', 'Allow 24-hour reversal'),
    state: allowReversal,
    setter: setAllowReversal
  }, {
    label: L('Sūtīt ikmēneša pensijas kopsavilkumu', 'Send monthly pension summary'),
    state: monthlySummary,
    setter: setMonthlySummary
  }, {
    label: L('Sūtīt atgādinājumus par nodokļiem', 'Send tax benefit reminders'),
    state: taxReminders,
    setter: setTaxReminders
  }].map((item, i, arr) => React.createElement("label", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 0',
      borderBottom: i === arr.length - 1 ? 'none' : `1px solid ${BRAND.line}`,
      cursor: 'pointer'
    }
  }, React.createElement("span", {
    style: {
      fontSize: 14,
      color: BRAND.ink,
      paddingRight: 16,
      lineHeight: 1.4
    }
  }, item.label), React.createElement("input", {
    type: "checkbox",
    checked: item.state,
    onChange: e => item.setter(e.target.checked),
    style: {
      width: 20,
      height: 20,
      accentColor: BRAND.promo,
      flexShrink: 0
    }
  })))));
  if (step === 9) return React.createElement(OnboardingShell, {
    step: progressStep,
    total: STEPS,
    title: L('Pārskati savu iestatījumu', 'Review your setup'),
    onBack: () => setStep(8),
    onNext: () => setStep(10),
    nextLabel: L('Aktivizēt dinamiskās iemaksas', 'Activate dynamic contributions')
  }, React.createElement("div", {
    style: {
      backgroundColor: '#F8F9FA',
      borderRadius: 12,
      padding: 16,
      marginBottom: 16
    }
  }, [{
    label: L('Režīms', 'Mode'),
    value: mode === 'fixed' ? L('Fiksēts', 'Fixed') : mode === 'tax' ? L('Nodokļu mērķis', 'Tax target') : L('Dinamisks', 'Dynamic')
  }, {
    label: L('Algas konts', 'Salary account'),
    value: L('Galvenais konts', 'Main account')
  }, {
    label: L('Mērķa iemaksa', 'Target contribution'),
    value: L(`${targetPct}% no bruto algas`, `${targetPct}% of gross salary`)
  }, {
    label: L('Minimālais atlikums', 'Minimum balance'),
    value: formatMoney(buffer)
  }, {
    label: L('Maksimālā iemaksa', 'Maximum contribution'),
    value: formatMoney(maxContribution)
  }, {
    label: L('Nodokļu optimizācija', 'Tax optimization'),
    value: L('Ieslēgta', 'Enabled')
  }].map((item, i, arr) => React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '12px 0',
      borderBottom: i === arr.length - 1 ? 'none' : `1px solid ${BRAND.line}`,
      fontSize: 14
    }
  }, React.createElement("span", {
    style: {
      color: BRAND.mute
    }
  }, item.label), React.createElement("strong", {
    style: {
      color: BRAND.ink,
      fontWeight: 600
    }
  }, item.value))), React.createElement("button", {
    type: "button",
    onClick: () => setPlanPickerOpen(open => !open),
    style: {
      width: '100%',
      border: 0,
      borderTop: `1px solid ${BRAND.line}`,
      background: 'transparent',
      padding: '12px 0 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      cursor: 'pointer',
      textAlign: 'left',
      font: 'inherit'
    }
  }, React.createElement("span", {
    style: {
      color: BRAND.mute,
      fontSize: 14
    }
  }, L('Pensiju plāns', 'Pension plan')), React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      minWidth: 0
    }
  }, React.createElement("strong", {
    style: {
      color: BRAND.ink,
      fontSize: 14,
      fontWeight: 700,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: 160
    }
  }, pensionPlan), React.createElement("span", {
    style: {
      transform: planPickerOpen ? 'rotate(90deg)' : 'rotate(0deg)',
      transition: 'transform 0.16s ease',
      flexShrink: 0
    }
  }, Icon.chev(14, BRAND.mute)))), planPickerOpen && React.createElement("div", {
    style: {
      marginTop: 10,
      border: `1px solid ${BRAND.line}`,
      borderRadius: 10,
      overflow: 'hidden',
      background: BRAND.card
    }
  }, PENSION_PLAN_OPTIONS.map((plan, index) => React.createElement("button", {
    key: plan.name,
    type: "button",
    onClick: () => {
      setPensionPlan(plan.name);
      setPlanPickerOpen(false);
    },
    style: {
      width: '100%',
      border: 0,
      borderTop: index === 0 ? 0 : `1px solid ${BRAND.line}`,
      background: plan.name === pensionPlan ? '#F7F2E6' : BRAND.card,
      color: BRAND.ink,
      padding: '10px 12px',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12,
      textAlign: 'left',
      fontSize: 13,
      fontWeight: plan.name === pensionPlan ? 700 : 500,
      cursor: 'pointer'
    }
  }, React.createElement("span", null, plan.name), React.createElement("span", {
    style: {
      color: BRAND.mute,
      fontSize: 12,
      fontWeight: 500
    }
  }, L(plan.riskLv, plan.riskEn))))), React.createElement("div", {
    style: {
      marginTop: planPickerOpen ? 8 : 4,
      fontSize: 11,
      lineHeight: '16px',
      color: BRAND.mute
    }
  }, L('Riska līmenis', 'Risk level'), ": ", L(selectedPlanMeta.riskLv, selectedPlanMeta.riskEn))), React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      setStep(1);
    },
    style: {
      display: 'block',
      textAlign: 'center',
      color: BRAND.ink,
      textDecoration: 'none',
      fontWeight: 600,
      fontSize: 14,
      padding: 16,
      border: `1px solid ${BRAND.line}`,
      borderRadius: 12,
      backgroundColor: BRAND.card
    }
  }, L('Rediģēt iestatījumus', 'Edit settings')));
  return React.createElement(OnboardingShell, {
    step: progressStep,
    total: STEPS,
    onBack: () => setStep(9),
    onNext: finish,
    nextLabel: L('Skatīt pensijas paneli', 'View pension dashboard'),
    hideNav: true
  }, React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      backgroundColor: BRAND.accent,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 24px'
    }
  }, React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      width: 32,
      height: 32,
      color: BRAND.ink
    }
  }, React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), React.createElement("h1", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      marginBottom: 8,
      color: BRAND.ink
    }
  }, L('Dinamiskās iemaksas ir aktīvas', 'Dynamic contributions are active')), React.createElement("p", {
    style: {
      fontSize: 14,
      color: BRAND.mute,
      marginBottom: 32
    }
  }, L('Pirms pirmās iemaksas saņemsi paziņojumu ar aprēķināto summu.', 'Before the first contribution you will receive the calculated amount.')), React.createElement(InfoBox, {
    title: L('Aktivizēts', 'Activated'),
    green: true
  }, React.createElement("div", {
    style: {
      fontSize: 13,
      color: BRAND.mute,
      marginBottom: 16,
      textAlign: 'left'
    }
  }, L('Algas dienā sistēma pārbaudīs atlikumu un tēriņus.', 'On payday, the system will check the balance and expenses.')), React.createElement("div", {
    style: {
      margin: '24px 0',
      height: 80,
      position: 'relative'
    }
  }, React.createElement("svg", {
    viewBox: "0 0 300 80",
    preserveAspectRatio: "none",
    style: {
      width: '100%',
      height: '100%'
    }
  }, React.createElement("path", {
    d: "M0,60 Q40,60 70,45 T140,30 T210,40 T280,10",
    fill: "none",
    stroke: "#B4C5B0",
    strokeWidth: "4",
    strokeLinecap: "round"
  }), React.createElement("path", {
    d: "M0,60 Q40,60 70,45 T140,30 T210,40 T280,10",
    fill: "none",
    stroke: "#A3C38B",
    strokeWidth: "4",
    strokeLinecap: "round",
    strokeDasharray: "300",
    strokeDashoffset: "0"
  }), React.createElement("circle", {
    cx: "70",
    cy: "45",
    r: "4",
    fill: "#1A1A1A"
  }), React.createElement("circle", {
    cx: "140",
    cy: "30",
    r: "4",
    fill: "#1A1A1A"
  }), React.createElement("circle", {
    cx: "210",
    cy: "40",
    r: "4",
    fill: "#1A1A1A"
  }), React.createElement("circle", {
    cx: "280",
    cy: "10",
    r: "5",
    fill: "#FBEA3B",
    stroke: "#1A1A1A",
    strokeWidth: "2"
  })))), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
      marginBottom: 16,
      textAlign: 'left'
    }
  }, React.createElement("div", {
    style: {
      border: `1px solid ${BRAND.line}`,
      borderRadius: 12,
      padding: 16,
      backgroundColor: BRAND.card
    }
  }, React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 12,
      color: BRAND.mute,
      marginBottom: 8
    }
  }, L('Nākamais datums', 'Next date')), React.createElement("strong", {
    style: {
      fontSize: 16,
      color: BRAND.ink
    }
  }, L('25. datums', '25th'))), React.createElement("div", {
    style: {
      border: `1px solid ${BRAND.line}`,
      borderRadius: 12,
      padding: 16,
      backgroundColor: BRAND.card
    }
  }, React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 12,
      color: BRAND.mute,
      marginBottom: 8
    }
  }, L('Diapazons', 'Range')), React.createElement("strong", {
    style: {
      fontSize: 16,
      color: BRAND.ink
    }
  }, formatMoney(0), " - ", formatMoney(Math.min(baseContribution, maxContribution))))), React.createElement("div", {
    style: {
      border: `1px solid ${BRAND.line}`,
      borderRadius: 12,
      padding: 16,
      textAlign: 'left',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: BRAND.card
    }
  }, React.createElement("span", {
    style: {
      margin: 0,
      fontSize: 13,
      color: BRAND.mute
    }
  }, L('Pašreizējā pensijas prognoze', 'Current pension projection')), React.createElement("strong", {
    style: {
      fontSize: 16,
      color: BRAND.ink
    }
  }, formatMoney(FUTURE_SCENARIOS.balanced.todayMoneyMonthly), "/", L('mēn.', 'mo.')))));
}
function FluxionPensijaScreen() {
  const [pensionView, setPensionView] = React.useState('main');
  const [activated, setActivated] = React.useState(false);
  const [scenario, setScenario] = React.useState('balanced');
  const [selectedMonthIndex, setSelectedMonthIndex] = React.useState(FLUXION_LAST_SIX.length - 1);
  const [config, setConfig] = React.useState(FLUXION_SETTINGS);
  const [reversed, setReversed] = React.useState(false);
  const model = React.useMemo(() => buildFluxionModel(config), [config]);
  React.useEffect(() => {
    const scrollParent = document.querySelector('[data-app-scroll="true"]');
    if (scrollParent) scrollParent.scrollTop = 0;
  }, [pensionView]);
  function updateConfig(patch) {
    setConfig(current => ({
      ...current,
      ...patch
    }));
    if ('mode' in patch || 'paused' in patch) setReversed(false);
  }
  if (pensionView === 'onboarding3') {
    return React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        display: 'flex',
        flexDirection: 'column'
      }
    }, React.createElement(DynamicPensionOnboarding, {
      initialConfig: config,
      model: model,
      onBack: () => setPensionView('main'),
      onComplete: nextConfig => {
        setConfig(current => ({
          ...current,
          ...nextConfig
        }));
        setActivated(true);
        setReversed(false);
        setPensionView('main');
      }
    }));
  }
  if (pensionView === 'analysis') {
    return React.createElement(PensionAnalysis, {
      onBack: () => setPensionView('main'),
      selectedMonthIndex: selectedMonthIndex,
      setSelectedMonthIndex: setSelectedMonthIndex,
      model: model,
      config: config
    });
  }
  if (pensionView === 'projection') {
    return React.createElement(PensionProjection, {
      onBack: () => setPensionView('main'),
      scenario: scenario,
      setScenario: setScenario
    });
  }
  if (pensionView === 'goals') {
    return React.createElement(PensionGoals, {
      onBack: () => setPensionView('main'),
      scenario: scenario,
      model: model,
      config: config
    });
  }
  return React.createElement(PensionMain, {
    onNav: setPensionView,
    activated: activated,
    scenario: scenario,
    config: config,
    model: model,
    onConfigChange: updateConfig,
    reversed: reversed,
    onReverse: () => setReversed(true)
  });
}
function NavItem({
  icon,
  label,
  active,
  onClick
}) {
  return React.createElement("button", {
    type: "button",
    "aria-current": active ? 'page' : undefined,
    onClick: onClick,
    style: {
      flex: 1,
      background: 'transparent',
      border: 0,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '6px 10px',
      minHeight: 48
    }
  }, React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: active ? BRAND.accent : 'transparent',
      display: 'grid',
      placeItems: 'center',
      flexShrink: 0
    }
  }, icon), React.createElement("span", {
    style: {
      fontSize: 13.5,
      color: BRAND.ink,
      fontWeight: 400
    }
  }, label));
}
function Home({
  tweaks
}) {
  const [tab, setTab] = React.useState('Pensija');
  const [promo, setPromo] = React.useState(0);
  const [nav, setNav] = React.useState('Home');
  const [dismissed, setDismissed] = React.useState(false);
  const [language, setLanguage] = React.useState('lv');
  const [profileMenuOpen, setProfileMenuOpen] = React.useState(false);
  const profileMenuRef = React.useRef(null);
  const L = (lv, en) => language === 'lv' ? lv : en;
  const languageValue = React.useMemo(() => ({
    language,
    setLanguage,
    L: (lv, en) => language === 'lv' ? lv : en,
    monthLabel: label => translateMonth(label, language),
    shortMonthLabel: label => translateMonth(label, language).slice(0, 3),
    scenarioLabel: key => translateScenarioLabel(key, language),
    scenarioNote: key => translateScenarioNote(key, language)
  }), [language]);
  React.useEffect(() => {
    const onPointerDown = event => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setProfileMenuOpen(false);
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, []);
  const tabs = [{
    key: 'Konti',
    label: L('Konti', 'Accounts')
  }, {
    key: 'Pensija',
    label: L('Pensija', 'Pension')
  }, {
    key: 'Uzkrājumi',
    label: L('Uzkrājumi', 'Savings')
  }, {
    key: 'Aizdevumi',
    label: L('Aizdevumi', 'Loans')
  }];
  const promos = ['indigo', 'cashback', 'goal'];
  const currentPromo = tweaks.promo === 'auto' ? promos[promo] : tweaks.promo;
  return React.createElement(LanguageContext.Provider, {
    value: languageValue
  }, React.createElement("div", {
    style: {
      background: BRAND.bg,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      fontFamily: '"Gibson", "IBM Plex Sans", "Aptos", system-ui, sans-serif',
      color: BRAND.ink
    }
  }, React.createElement("div", {
    "data-app-scroll": "true",
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: 'auto',
      paddingTop: 60,
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement("div", {
    style: {
      padding: '12px 20px 4px',
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, React.createElement("div", {
    ref: profileMenuRef,
    style: {
      flex: 1,
      position: 'relative'
    }
  }, React.createElement("button", {
    type: "button",
    "aria-label": L('Mainīt valodu', 'Change language'),
    onClick: () => setProfileMenuOpen(current => !current),
    style: {
      width: '100%',
      background: 'transparent',
      border: 0,
      padding: 0,
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      textAlign: 'left',
      cursor: 'pointer'
    }
  }, React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 10,
      background: '#9A968A',
      color: '#fff',
      fontWeight: 600,
      fontSize: 14,
      letterSpacing: 0.5,
      display: 'grid',
      placeItems: 'center',
      flexShrink: 0
    }
  }, "ES"), React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 17,
      fontWeight: 600,
      letterSpacing: 0
    }
  }, "Edvards Markuss Selikovs")), profileMenuOpen && React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'calc(100% + 8px)',
      left: 0,
      zIndex: 40,
      background: BRAND.card,
      border: `1px solid ${BRAND.line}`,
      borderRadius: 12,
      padding: 6,
      boxShadow: '0 8px 18px rgba(17,23,19,0.12)'
    }
  }, [['lv', 'Latviski'], ['en', 'English']].map(([value, label]) => React.createElement("button", {
    key: value,
    type: "button",
    onClick: () => {
      setLanguage(value);
      setProfileMenuOpen(false);
    },
    style: {
      display: 'block',
      width: '100%',
      border: 0,
      borderRadius: 8,
      padding: '8px 10px',
      background: language === value ? '#F1ECDD' : 'transparent',
      color: BRAND.ink,
      fontSize: 12.5,
      fontWeight: language === value ? 700 : 500,
      textAlign: 'left',
      cursor: 'pointer'
    }
  }, label)))), React.createElement("button", {
    type: "button",
    "aria-label": L('Atvērt ziņojumus', 'Open messages'),
    style: {
      background: 'transparent',
      border: 0,
      padding: 4,
      cursor: 'pointer',
      minWidth: BRAND.minTouch,
      minHeight: BRAND.minTouch
    }
  }, Icon.chat(24))), React.createElement("div", {
    role: "tablist",
    "aria-label": L('Sadaļas', 'Sections'),
    style: {
      display: 'flex',
      padding: '12px 16px 0',
      borderBottom: `1px solid ${BRAND.line}`
    }
  }, tabs.map(({
    key,
    label
  }) => React.createElement(Tab, {
    key: key,
    label: label,
    active: tab === key,
    onClick: () => setTab(key)
  }))), React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, tab === 'Pensija' ? React.createElement(FluxionPensijaScreen, null) : tab === 'Konti' ? React.createElement(React.Fragment, null, React.createElement("div", {
    style: {
      padding: '16px 16px 0'
    }
  }, React.createElement("div", {
    style: {
      background: '#EAE6DB',
      borderRadius: 12,
      padding: '16px 20px',
      position: 'relative',
      overflow: 'hidden',
      minHeight: 150,
      boxShadow: '0 1px 2px rgba(30,25,10,0.04), 0 6px 16px rgba(30,25,10,0.05)'
    }
  }, React.createElement(CardImagery, null), React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: 200
    }
  }, React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600
    }
  }, L('Norēķinu konts', 'Current account')), React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: BRAND.mute,
      marginTop: 2,
      display: 'flex',
      alignItems: 'center',
      gap: 3,
      letterSpacing: 0,
      whiteSpace: 'nowrap'
    }
  }, "LV82 LMNX 1001 0100 6535 1", React.createElement("span", {
    style: {
      marginLeft: 2,
      display: 'inline-flex'
    }
  }, Icon.chev(10, BRAND.mute, 2.9))), React.createElement("div", {
    style: {
      marginTop: 14,
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 2,
      borderBottom: `3px solid ${BRAND.accent}`,
      paddingBottom: 2
    }
  }, React.createElement("span", {
    style: {
      fontSize: 30,
      fontWeight: 500,
      letterSpacing: 0
    }
  }, "\u20AC"), React.createElement("span", {
    style: {
      fontSize: 46,
      fontWeight: 500,
      lineHeight: '46px',
      letterSpacing: 0
    }
  }, "0"), React.createElement("span", {
    style: {
      fontSize: 22,
      fontWeight: 500,
      letterSpacing: 0,
      marginLeft: 2
    }
  }, ".00")), React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 13,
      color: BRAND.promo,
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, L('Nopelnītie procenti', 'Earned interest'), " ", Icon.info(13, BRAND.promo))))), React.createElement("div", {
    style: {
      display: 'flex',
      padding: '20px 20px 6px',
      gap: 8
    }
  }, React.createElement(QuickAction, {
    icon: Icon.card(),
    label: L('Izveidot karti', 'Create card'),
    ariaLabel: L('Izveidot karti', 'Create card')
  }), React.createElement(QuickAction, {
    icon: Icon.send(),
    label: language === 'lv' ? React.createElement(React.Fragment, null, "S\u016Bt\u012Bt,", React.createElement("br", null), "piepras\u012Bt") : React.createElement(React.Fragment, null, "Send,", React.createElement("br", null), "request"),
    ariaLabel: L('Sūtīt vai pieprasīt', 'Send or request')
  }), React.createElement(QuickAction, {
    icon: Icon.chart(),
    label: L('Papildināt', 'Add funds'),
    ariaLabel: L('Papildināt', 'Add funds')
  })), !dismissed && React.createElement("div", {
    style: {
      padding: '16px 16px 0'
    }
  }, currentPromo === 'indigo' && React.createElement(PromoIndigo, {
    onClose: () => setDismissed(true)
  }), currentPromo === 'cashback' && React.createElement(PromoCashback, {
    onClose: () => setDismissed(true)
  }), currentPromo === 'goal' && React.createElement(PromoGoal, {
    onClose: () => setDismissed(true)
  }), tweaks.promo === 'auto' && React.createElement("div", {
    role: "group",
    "aria-label": L('Piedāvājumu karuselis', 'Offer carousel'),
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 6,
      marginTop: 14
    }
  }, promos.map((_, i) => React.createElement("button", {
    type: "button",
    key: i,
    "aria-label": L(`Rādīt ${i + 1}. piedāvājumu`, `Show offer ${i + 1}`),
    "aria-pressed": i === promo,
    onClick: () => setPromo(i),
    style: {
      width: 18,
      height: 18,
      borderRadius: 9,
      padding: 0,
      background: 'transparent',
      border: 0,
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center'
    }
  }, React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 6,
      height: 6,
      borderRadius: 3,
      background: i === promo ? BRAND.ink : '#CFCABD',
      transform: i === promo ? 'scaleX(3)' : 'scaleX(1)',
      transition: 'transform 0.25s'
    }
  }))))), React.createElement("div", {
    style: {
      padding: '28px 20px 0'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: 0
    }
  }, L('Darījumi', 'Transactions')), Icon.dots()), React.createElement("div", {
    style: {
      fontSize: 14,
      color: BRAND.mute,
      marginTop: 8
    }
  }, L('Tavi darījumi parādīsies šeit', 'Your transactions will appear here'))), React.createElement("div", {
    style: {
      height: 1,
      background: BRAND.line,
      margin: '20px 20px 0'
    }
  }), React.createElement("div", {
    style: {
      padding: '20px 20px 0'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: 0
    }
  }, L('Ātrie kontakti', 'Quick contacts')), Icon.dots()))) : React.createElement("div", {
    style: {
      padding: '40px 24px',
      textAlign: 'center',
      color: BRAND.mute,
      fontSize: 14
    }
  }, L(`${tab} — drīzumā`, `${tabs.find(item => item.key === tab)?.label || tab} — coming soon`))), React.createElement("div", {
    style: {
      height: 0,
      flexShrink: 0
    }
  })), React.createElement("div", {
    style: {
      flexShrink: 0,
      padding: '10px 12px 18px'
    }
  }, React.createElement("div", {
    style: {
      background: BRAND.card,
      borderRadius: 16,
      padding: '7px 8px',
      display: 'flex',
      gap: 0,
      alignItems: 'center',
      boxShadow: '0 2px 8px rgba(17,23,19,0.10)'
    }
  }, React.createElement(NavItem, {
    icon: Icon.home(nav === 'Home'),
    label: L('Sākums', 'Home'),
    active: nav === 'Home',
    onClick: () => setNav('Home')
  }), React.createElement(NavItem, {
    icon: Icon.swap,
    label: L('Maksājumi', 'Payments'),
    active: nav === 'Pay',
    onClick: () => setNav('Pay')
  }), React.createElement(NavItem, {
    icon: Icon.grid,
    label: L('Viss', 'More'),
    active: nav === 'More',
    onClick: () => setNav('More')
  })))));
}
window.Home = Home;
const TWEAK_DEFAULTS = {
  "promo": "auto",
  "accent": "#F2D23A"
};
function App() {
  const [tweaks, setTweaks] = React.useState(TWEAK_DEFAULTS);
  React.useEffect(() => {
    document.documentElement.style.setProperty('--brand-accent', tweaks.accent);
  }, [tweaks.accent]);
  React.useEffect(() => {
    const onMsg = e => {
      const d = e.data || {};
      if (d.type === '__activate_edit_mode') {
        document.getElementById('tweaksPanel').classList.add('open');
      } else if (d.type === '__deactivate_edit_mode') {
        document.getElementById('tweaksPanel').classList.remove('open');
      }
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    const promoSel = document.getElementById('tw-promo');
    const accentIn = document.getElementById('tw-accent');
    promoSel.value = tweaks.promo;
    accentIn.value = tweaks.accent;
    const onPromo = () => {
      setTweaks(t => ({
        ...t,
        promo: promoSel.value
      }));
      window.parent.postMessage({
        type: '__edit_mode_set_keys',
        edits: {
          promo: promoSel.value
        }
      }, '*');
    };
    const onAccent = () => {
      setTweaks(t => ({
        ...t,
        accent: accentIn.value
      }));
      window.parent.postMessage({
        type: '__edit_mode_set_keys',
        edits: {
          accent: accentIn.value
        }
      }, '*');
    };
    promoSel.addEventListener('change', onPromo);
    accentIn.addEventListener('change', onAccent);
    return () => {
      window.removeEventListener('message', onMsg);
      promoSel.removeEventListener('change', onPromo);
      accentIn.removeEventListener('change', onAccent);
    };
  }, []);
  return React.createElement("div", {
    "data-screen-label": "Home",
    style: {
      '--brand-accent': tweaks.accent
    }
  }, React.createElement(IOSDevice, {
    width: 402,
    height: 874
  }, React.createElement(Home, {
    tweaks: tweaks
  })));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
