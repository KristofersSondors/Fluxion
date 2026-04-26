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
  bg: '#FAF9F8',
  card: '#FDFDFC',
  ink: '#111713',
  mute: '#808080',
  line: '#DDDEDF',
  accent: '#F7EA48',
  accentDark: '#F7E948',
  promo: '#0F584F',
  promoSoft: '#5B99A6',
  purple: '#51327B',
  ok: '#29A745',
  danger: '#D32F2F',
  minTouch: 44,
  tapTransition: 'background-color 0.18s ease-out, color 0.18s ease-out, transform 0.18s ease-out'
};
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
    "aria-label": "Aizv\u0113rt pied\u0101v\u0101jumu",
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
  }, "Ieguldi 50%"), React.createElement("div", {
    style: {
      fontSize: 13,
      lineHeight: '18px',
      marginTop: 6,
      color: 'rgba(255,255,255,0.85)'
    }
  }, "no atg\u016Bt\u0101s nodok\u013Cu atmaksas sav\u0101 pensiju 3. l\u012Bmen\u012B"), React.createElement("button", {
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
  }, "Ieguld\u012Bt")), React.createElement("div", {
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
    "aria-label": "Aizv\u0113rt pied\u0101v\u0101jumu",
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
  }, "\u0160OM\u0112NES"), React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 600,
      marginTop: 6,
      letterSpacing: 0,
      maxWidth: 220
    }
  }, "\u20AC14.20 atgriezts naud\u0101"), React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,0.7)',
      marginTop: 6
    }
  }, "P\u0101rtika, transports un straum\u0113\u0161ana \u2014 izmaksa 30.\xA0apr."), React.createElement("button", {
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
  }, "Apskat\u012Bt sadal\u012Bjumu"), React.createElement("div", {
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
    "aria-label": "Aizv\u0113rt pied\u0101v\u0101jumu",
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
  }, "Vasaras ce\u013Cojums \xB7 M\u0113r\u0137is"), React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 600,
      marginTop: 4,
      letterSpacing: 0
    }
  }, "Esi sasniedzis 62% no m\u0113r\u0137a"), React.createElement("div", {
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
  }, React.createElement("span", null, "\u20AC930 uzkr\u0101ts"), React.createElement("span", null, "\u20AC1,500 m\u0113r\u0137is")), React.createElement("button", {
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
  }, "Pievienot m\u0113r\u0137im"));
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
  taxRefundRate: 0.20
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
    label: 'Piesardzīgs',
    tone: '#74618D',
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
    label: 'Bāzes',
    tone: '#90A35F',
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
    label: 'Dinamiskais',
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
      borderRadius: 14,
      padding: '11px 12px',
      background: dark ? 'rgba(255,255,255,0.11)' : '#F1ECDD',
      border: dark ? '1px solid rgba(255,255,255,0.08)' : `1px solid ${BRAND.line}`
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
      borderRadius: 10,
      display: 'grid',
      placeItems: 'center',
      background: dark ? 'rgba(255,255,255,0.14)' : '#fff'
    }
  }, icon), React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, React.createElement("div", {
    style: {
      fontSize: 10.5,
      textTransform: 'uppercase',
      letterSpacing: 1.1,
      color: dark ? 'rgba(255,255,255,0.7)' : BRAND.mute
    }
  }, label), React.createElement("div", {
    style: {
      marginTop: 3,
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
      minHeight: BRAND.minTouch,
      border: 0,
      borderRadius: 12,
      cursor: 'pointer',
      background: active ? BRAND.accent : '#F1ECDD',
      color: active ? BRAND.promo : BRAND.ink,
      fontSize: 13,
      fontWeight: active ? 700 : 500
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
      gap: 12,
      minWidth: 0
    }
  }, React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: BRAND.mute,
      minWidth: 0,
      overflowWrap: 'anywhere'
    }
  }, label), React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: BRAND.ink,
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
  }, "\u0161odienas naud\u0101"));
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
  })), "Atpaka\u013C"), React.createElement("div", {
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
  const selectedScenario = FUTURE_SCENARIOS[scenario];
  const totalMonthly = selectedScenario.tier1Monthly + selectedScenario.tier2Monthly + selectedScenario.tier3Monthly;
  const preview = model.preview;
  const nextContribution = reversed || config.paused ? 0 : preview.contribution;
  const modeLabel = config.mode === 'dynamic' ? 'Dinamiskais' : 'Fiksēts';
  return React.createElement("div", {
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
  }, activated ? config.paused ? 'Automātiskā iemaksa pauzēta' : 'Nākamā automātiskā iemaksa' : 'Tiktu uzkrāts pēdējos 12 mēnešos'), React.createElement("button", {
    type: "button",
    onClick: () => onNav('analysis'),
    style: {
      background: 'transparent',
      border: 0,
      cursor: 'pointer',
      fontSize: 13,
      color: BRAND.promo,
      fontWeight: 500,
      padding: 0,
      letterSpacing: 0
    }
  }, "Anal\u012Bze \u2192")), React.createElement("div", {
    style: {
      fontSize: 30,
      fontWeight: 700,
      color: BRAND.ink,
      letterSpacing: 0,
      marginTop: 6
    }
  }, activated ? formatMoney(nextContribution) : formatMoney(model.totalDynamic)), React.createElement("div", {
    style: {
      fontSize: 13,
      color: BRAND.mute,
      marginTop: 4,
      lineHeight: '18px'
    }
  }, activated ? reversed ? 'Pēdējā iemaksa atgriezta 24h logā · nākamā izpilde netiek dublēta' : config.paused ? 'Pauze darbojas līdz brīdim, kad to atjauno' : `${modeLabel} · automātiski ${config.payday}. datumā · droši pieejams ${formatMoney(preview.safeToInvest)}` : `${formatMoney(model.dynamicAdvantage)} vairāk nekā ar fiksētu ${formatMoney(config.fixedContribution)}/mēn.`), activated ? React.createElement(React.Fragment, null, React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 14
    }
  }, React.createElement(ConfigPill, {
    icon: React.createElement(TrendIcon, null),
    label: "Gr\u012Bda/griesti",
    value: `${formatPercent(config.minRate)}-${formatPercent(config.maxRate)}`
  }), React.createElement(ConfigPill, {
    icon: React.createElement(ShieldIcon, null),
    label: "Buferis",
    value: formatMoney(config.safetyBuffer)
  })), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 12
    }
  }, React.createElement(ModeButton, {
    label: "Fiks\u0113ts",
    active: config.mode === 'fixed',
    onClick: () => onConfigChange({
      mode: 'fixed'
    })
  }), React.createElement(ModeButton, {
    label: "Dinamiskais",
    active: config.mode === 'dynamic',
    onClick: () => onConfigChange({
      mode: 'dynamic'
    })
  })), React.createElement("div", {
    style: {
      marginTop: 12,
      background: '#FAF9F8',
      borderRadius: 12,
      padding: '12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, React.createElement(MiniSetting, {
    label: "Nodok\u013Cu optimiz\u0101cija",
    value: config.taxOptimization ? `${formatMoney(model.taxRefund)} atmaksa` : 'Izslēgta'
  }), React.createElement(MiniSetting, {
    label: "Pazi\u0146ojums",
    value: "2 dienas pirms"
  }), React.createElement(MiniSetting, {
    label: "Stabilit\u0101tes limits",
    value: `${formatMoney(config.stabilityCap)}/mēn.`
  }), React.createElement(MiniSetting, {
    label: "Atk\u0101rtotie maks\u0101jumi",
    value: formatMoney(model.obligationsTotal)
  }), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 2
    }
  }, React.createElement("button", {
    type: "button",
    "aria-pressed": config.paused,
    onClick: () => onConfigChange({
      paused: !config.paused
    }),
    style: {
      flex: 1,
      border: 0,
      borderRadius: 10,
      minHeight: 44,
      background: config.paused ? BRAND.accent : '#EAE6DB',
      color: BRAND.promo,
      fontSize: 13,
      fontWeight: 700,
      cursor: 'pointer'
    }
  }, config.paused ? 'Atjaunot' : 'Pauzēt'), React.createElement("button", {
    type: "button",
    onClick: onReverse,
    disabled: reversed || config.paused,
    style: {
      flex: 1,
      border: 0,
      borderRadius: 10,
      minHeight: 44,
      background: reversed || config.paused ? BRAND.line : '#EAE6DB',
      color: reversed || config.paused ? BRAND.mute : BRAND.ink,
      fontSize: 13,
      fontWeight: 700,
      cursor: reversed || config.paused ? 'not-allowed' : 'pointer'
    }
  }, reversed ? 'Atgriezta' : 'Atgriezt 24h'), React.createElement("button", {
    type: "button",
    "aria-pressed": config.taxOptimization,
    onClick: () => onConfigChange({
      taxOptimization: !config.taxOptimization
    }),
    style: {
      flex: 1,
      border: 0,
      borderRadius: 10,
      minHeight: 44,
      background: '#EAE6DB',
      color: BRAND.ink,
      fontSize: 13,
      fontWeight: 700,
      cursor: 'pointer'
    }
  }, config.taxOptimization ? 'Nodokļi' : 'Bez nod.')))) : React.createElement("button", {
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
  }, "Set up 3rd pillar pension")), React.createElement("div", {
    style: {
      marginTop: 24,
      marginBottom: 12,
      fontSize: 18,
      fontWeight: 700,
      letterSpacing: 0
    }
  }, "Tavi pensiju l\u012Bme\u0146i"), React.createElement("div", {
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
  }, "Valsts pensija")), React.createElement("div", {
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
  }, "/m\u0113n.")), React.createElement("div", {
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
  }, TIER1_SERVICE_YEARS, " / ", TIER1_TARGET_YEARS, " darba gadi")), React.createElement("div", {
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
    title: "2. l\u012Bmenis",
    balance: formatMoney(TIER2_BALANCE),
    monthly: `${formatMoney(selectedScenario.tier2Monthly)}/mēn.`,
    note: "Fonda uzkr\u0101jums"
  }), React.createElement(CompactTierCard, {
    tier: "3",
    illustration: React.createElement(TierIllustration3, null),
    title: "3. l\u012Bmenis",
    balance: formatMoney(TIER3_BALANCE),
    monthly: `${formatMoney(selectedScenario.tier3Monthly)}/mēn.`,
    note: "Dinamiskais"
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
  }, "Kop\u0101 prognoz\u0113t\u0101 pensija"), React.createElement("div", {
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
  }, "/m\u0113nes\u012B \u0161odienas naud\u0101")), React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: BRAND.mute,
      marginTop: 2
    }
  }, selectedScenario.note)), React.createElement("div", {
    style: {
      height: 1,
      background: BRAND.line,
      margin: '20px 0 4px'
    }
  }), React.createElement(PensionNavRow, {
    icon: React.createElement(TrendIcon, null),
    title: "Ikm\u0113ne\u0161a anal\u012Bze",
    subtitle: "Simul\u0101cija un sal\u012Bdzin\u0101jums",
    onClick: () => onNav('analysis')
  }), React.createElement("div", {
    style: {
      height: 1,
      background: BRAND.line
    }
  }), React.createElement(PensionNavRow, {
    icon: Icon.goal(),
    title: "N\u0101kotnes projekcija",
    subtitle: "Scen\u0101riji un pensijas grafiks",
    value: `${formatMoney(selectedScenario.todayMoneyMonthly)}/mēn.`,
    onClick: () => onNav('projection')
  }), React.createElement("div", {
    style: {
      height: 1,
      background: BRAND.line
    }
  }), React.createElement(PensionNavRow, {
    icon: React.createElement(TrophyIcon, null),
    title: "M\u0113r\u0137i un sasniegumi",
    subtitle: `Streak: ${model.streak} mēn. · Nākamais milestone: ${formatMoney(NEXT_MILESTONE - TIER3_BALANCE)}`,
    onClick: () => onNav('goals')
  }));
}
function MonthlyBarChart({
  months,
  selectedIndex,
  onSelect
}) {
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
  }, [['#B8B0A4', 'Ienākumi'], ['#DDD7CE', 'Tēriņi'], [BRAND.accent, 'Iemaksa']].map(([col, lbl]) => React.createElement("div", {
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
      "aria-label": `${month.month}: ienākumi ${formatMoney(month.income)}, tēriņi ${formatMoney(month.spending)}, iemaksa ${formatMoney(month.contribution)}`,
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
    }, month.month.slice(0, 3)), React.createElement("div", {
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
  const selectedMonth = model.lastSix[selectedMonthIndex];
  const diff = selectedMonth.contribution - selectedMonth.fixedContribution;
  return React.createElement("div", null, React.createElement(SubPageHeader, {
    title: "Ikm\u0113ne\u0161a anal\u012Bze",
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
  }, "P\u0113d\u0113jie 6 m\u0113ne\u0161i"), React.createElement(MonthlyBarChart, {
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
  }, selectedMonth.month), React.createElement("div", {
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
  }, [['Ienākumi', selectedMonth.income, BRAND.ink], ['Tēriņi', selectedMonth.spending, BRAND.ink], ['Droši', selectedMonth.safeToInvest, BRAND.ok]].map(([lbl, val, col]) => React.createElement("div", {
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
  }, selectedMonth.fixedBreaksBuffer ? 'Fiksēta iemaksa aizskartu rezervi — dinamiskā apstājās automātiski' : diff >= 0 ? `+${formatMoney(diff)} vairāk nekā ar fiksētu iemaksu` : `${formatMoney(Math.abs(diff))} mazāk — mēnesis bija finansiāli stingrs`))), React.createElement("div", null, React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      letterSpacing: 0
    }
  }, "Dinamiskais vs fiks\u0113tais"), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      marginTop: 16
    }
  }, React.createElement(ComparisonBar, {
    label: "Dinamiskais",
    value: model.totalDynamic,
    max: model.totalDynamic,
    tone: BRAND.promo,
    detail: `${model.boostedMonths} mēnešos iemaksa pārsniedza mērķi`
  }), React.createElement(ComparisonBar, {
    label: "Fiks\u0113ta iemaksa",
    value: model.totalFixed,
    max: model.totalDynamic,
    tone: "#C8C1B4",
    detail: `${formatMoney(config.fixedContribution)}/mēn. ar ienākumiem`
  })), React.createElement("div", {
    style: {
      marginTop: 12,
      fontSize: 13,
      color: BRAND.mute,
      lineHeight: '18px'
    }
  }, formatMoney(model.dynamicAdvantage), " papildu \xB7 ", model.pausedMonths, " m\u0113nes\u012B apst\u0101j\u0101s autom\u0101tiski \xB7 ", model.cappedMonths, " stabiliz\u0113ti"))));
}
function PensionProjection({
  onBack,
  scenario,
  setScenario
}) {
  const s = FUTURE_SCENARIOS[scenario];
  const total = s.tier1Monthly + s.tier2Monthly + s.tier3Monthly;
  const t1w = Math.round(s.tier1Monthly / total * 100);
  const t2w = Math.round(s.tier2Monthly / total * 100);
  const t3w = 100 - t1w - t2w;
  return React.createElement("div", null, React.createElement(SubPageHeader, {
    title: "N\u0101kotnes projekcija",
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
  }, "Prognoz\u0113t\u0101 pensija 67 gados"), React.createElement("div", {
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
  }, "/m\u0113n.")), React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: BRAND.mute,
      marginTop: 3
    }
  }, "\u0161odienas naud\u0101 \xB7 ", s.note), React.createElement("div", {
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
  }, FUTURE_SCENARIOS[key].label))), React.createElement(ProjectionChart, {
    selectedScenario: scenario
  })), React.createElement("div", null, React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      letterSpacing: 0,
      marginBottom: 14
    }
  }, "Sadal\u012Bjums"), React.createElement("div", {
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
    label: '1. līmenis · Valsts',
    amount: s.tier1Monthly,
    dot: '#C8C1B4',
    op: 1
  }, {
    label: '2. līmenis · Fonds',
    amount: s.tier2Monthly,
    dot: BRAND.promo,
    op: 0.45
  }, {
    label: '3. līmenis · Dinamiskais',
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
  }, "/m\u0113n."))))))));
}
function PensionGoals({
  onBack,
  scenario,
  model,
  config
}) {
  const selectedScenario = FUTURE_SCENARIOS[scenario];
  const goalProgress = clamp(selectedScenario.todayMoneyMonthly / FUTURE_GOAL, 0, 1);
  const gapToGoal = Math.max(0, FUTURE_GOAL - selectedScenario.todayMoneyMonthly);
  const extraMonthlyNeeded = Math.round(gapToGoal * 0.18);
  const milestoneLeft = NEXT_MILESTONE - TIER3_BALANCE;
  return React.createElement("div", null, React.createElement(SubPageHeader, {
    title: "M\u0113r\u0137i un sasniegumi",
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
  }, "Pensijas m\u0113r\u0137is"), React.createElement("div", {
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
  }, " / ", formatMoney(FUTURE_GOAL), " m\u0113nes\u012B")), React.createElement("div", {
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
  }, "Pietr\u016Bkst ", formatMoney(gapToGoal), " \xB7 apm\u0113ram ", formatMoney(extraMonthlyNeeded), " papildu m\u0113nes\u012B.")), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, React.createElement(ConfigPill, {
    icon: React.createElement(TrophyIcon, null),
    label: "Streak",
    value: `${model.streak} mēneši`
  }), React.createElement(ConfigPill, {
    icon: React.createElement(PigIcon, null),
    label: "N\u0101kamais \u20AC5000",
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
  }, "Ko var\u0113si at\u013Cauties"), React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: BRAND.mute,
      marginTop: 3
    }
  }, "Pensija pret re\u0101laj\u0101m izmaks\u0101m \u0161odien"), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 14
    }
  }, React.createElement(LifestyleCard, {
    icon: React.createElement(CarIcon, null),
    label: "BMW 3 l\u012Bzings",
    cost: 790,
    income: selectedScenario.todayMoneyMonthly
  }), React.createElement(LifestyleCard, {
    icon: React.createElement(PigIcon, null),
    label: "P\u0101rtika",
    cost: 320,
    income: selectedScenario.todayMoneyMonthly
  }), React.createElement(LifestyleCard, {
    icon: Icon.goal(BRAND.ink),
    label: "Komun\u0101lie",
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
  }, "K\u0101 darbojas dinamisk\u0101 iemaksa"), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      marginTop: 16
    }
  }, React.createElement(StepRow, {
    number: 1,
    title: "Atkl\u0101j",
    body: `"Tu jau būtu uzkrājis ${formatMoney(model.totalDynamic)}" — parādās sākumlapā.`
  }), React.createElement(StepRow, {
    number: 2,
    title: "Piel\u0101go",
    body: "Nosaki m\u0113r\u0137a procentu, dro\u0161\u012Bbas buferi, diapazonu un iemaksas datumu."
  }), React.createElement(StepRow, {
    number: 3,
    title: "Automatiz\u0113",
    body: "Katru m\u0113nesi sist\u0113ma apr\u0113\u0137ina dro\u0161o iemaksu p\u0113c ien\u0101kumiem un t\u0113ri\u0146iem."
  }), React.createElement(StepRow, {
    number: 4,
    title: "Sa\u0146em atskaiti",
    body: "P\u0113c katras iemaksas redzi summu, iemeslu un ietekmi uz n\u0101kotnes pensiju."
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
  }, "Ikm\u0113ne\u0161a atskaite"), React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: 0,
      lineHeight: '20px',
      color: BRAND.ink
    }
  }, "\u0160om\u0113nes tiktu novirz\u012Bti ", formatMoney(model.preview.contribution), ", jo p\u0113c algas un t\u0113ri\u0146iem paliek ", formatMoney(model.preview.safeToInvest), " dro\u0161i ieguld\u0101mas naudas. Nodok\u013Cu optimiz\u0101cija prognoz\u0113 ", formatMoney(model.taxRefund), " atmaksu.")))));
}
function BackChev({
  onClick
}) {
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
  })), "Back");
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
  nextLabel
}) {
  return React.createElement("div", {
    style: {
      minHeight: 600,
      boxSizing: 'border-box',
      padding: '12px 16px 14px',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'visible'
    }
  }, React.createElement("div", {
    style: {
      height: 30,
      display: 'flex',
      alignItems: 'center'
    }
  }, React.createElement(BackChev, {
    onClick: onBack
  })), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 5,
      marginTop: 8
    }
  }, Array.from({
    length: total
  }).map((_, i) => React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: 3,
      borderRadius: 2,
      background: i <= step ? BRAND.ink : BRAND.line
    },
    "aria-hidden": "true"
  }))), React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: 1,
      color: BRAND.mute,
      textTransform: 'uppercase'
    }
  }, eyebrow), React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      lineHeight: '29px',
      marginTop: 6
    }
  }, title), subtitle && React.createElement("div", {
    style: {
      fontSize: 13,
      color: BRAND.mute,
      lineHeight: '18px',
      marginTop: 6
    }
  }, subtitle)), React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      marginTop: 16
    }
  }, children), React.createElement("button", {
    type: "button",
    onClick: onNext,
    style: {
      width: '100%',
      minHeight: 50,
      border: 0,
      borderRadius: 15,
      background: BRAND.accent,
      color: BRAND.promo,
      fontSize: 15,
      fontWeight: 700,
      cursor: 'pointer',
      flexShrink: 0
    }
  }, nextLabel || 'Continue'));
}
function OnboardingCard({
  children,
  style = {}
}) {
  return React.createElement("div", {
    style: {
      background: BRAND.card,
      borderRadius: 12,
      padding: '16px',
      boxShadow: '0 2px 8px rgba(17,23,19,0.08)',
      ...style
    }
  }, children);
}
function DynamicPensionOnboarding({
  onBack,
  onComplete,
  initialConfig = FLUXION_SETTINGS,
  model = FLUXION_MODEL
}) {
  const [step, setStep] = React.useState(0);
  const [mode, setMode] = React.useState(initialConfig.mode || 'dynamic');
  const [salaryAccount] = React.useState('Main account');
  const [salary] = React.useState(model.averageIncome || 2000);
  const [salaryDate] = React.useState('25th of each month');
  const [accountBalance] = React.useState(2300);
  const [targetPct, setTargetPct] = React.useState(Math.min(10, Math.max(1, Math.round((initialConfig.targetRate || 0.03) * 100))));
  const [buffer, setBuffer] = React.useState(initialConfig.safetyBuffer || 500);
  const [customBuffer, setCustomBuffer] = React.useState(initialConfig.safetyBuffer || 500);
  const [maxContribution, setMaxContribution] = React.useState(150);
  const [skipBelow, setSkipBelow] = React.useState(10);
  const [taxOption, setTaxOption] = React.useState('ask');
  const [notifyBefore, setNotifyBefore] = React.useState(true);
  const [allowReversal, setAllowReversal] = React.useState(true);
  const [monthlySummary, setMonthlySummary] = React.useState(true);
  const [taxReminders, setTaxReminders] = React.useState(true);
  const STEPS = 11;
  const recentMonths = model.history.slice(-6);
  const recentBalances = recentMonths.map(month => month.endBalance);
  const lowestRecentBalance = Math.min(...recentBalances);
  const averageRecentBalance = Math.round(recentBalances.reduce((sum, value) => sum + value, 0) / Math.max(1, recentBalances.length));
  const balanceTrend = recentBalances.length > 1 ? recentBalances[recentBalances.length - 1] - recentBalances[0] : 0;
  const balanceRiskAdjustment = lowestRecentBalance < buffer ? Math.max(0, buffer - lowestRecentBalance) : 0;
  const baseContribution = Math.round(salary * (targetPct / 100));
  const expectedSpending = model.averageSpending;
  const recurringPayments = model.obligationsTotal;
  const balanceAfterPlannedOutflows = accountBalance - expectedSpending - recurringPayments;
  const safeAvailable = Math.max(0, balanceAfterPlannedOutflows - buffer - balanceRiskAdjustment);
  const estimatedContribution = Math.min(baseContribution, maxContribution, safeAvailable);
  const finalContribution = Math.max(0, estimatedContribution < skipBelow ? 0 : estimatedContribution);
  const maxEligibleContribution = Math.round(Math.min(4000, salary * 12 * 0.1));
  const alreadyContributed = model.totalDynamic;
  const remainingThisYear = Math.max(0, maxEligibleContribution - alreadyContributed);
  const suggestedMonthly = Math.round(remainingThisYear / 12);
  const taxOptimization = taxOption !== 'keep';
  const SectionLabel = ({
    children
  }) => React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: BRAND.ink,
      marginBottom: 8
    }
  }, children);
  const Option = ({
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
      background: active ? '#F1ECDD' : BRAND.card,
      borderRadius: 12,
      padding: '14px 16px',
      cursor: 'pointer',
      minHeight: 74,
      marginTop: 8
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 10
    }
  }, React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: BRAND.ink
    }
  }, title), recommended && React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: BRAND.promo
    }
  }, "Recommended")), React.createElement("div", {
    style: {
      fontSize: 13,
      color: BRAND.mute,
      lineHeight: '18px',
      marginTop: 4
    }
  }, body));
  const ToggleRow = ({
    label,
    checked,
    onChange
  }) => React.createElement("label", {
    style: {
      minHeight: BRAND.minTouch,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 14,
      color: BRAND.ink,
      cursor: 'pointer'
    }
  }, React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: e => onChange(e.target.checked),
    style: {
      width: 18,
      height: 18,
      accentColor: BRAND.promo
    }
  }), React.createElement("span", null, label));
  function finish() {
    onComplete({
      goalMonthly: 1200,
      targetRate: targetPct / 100,
      minRate: Math.max(0.01, (targetPct - 2) / 100),
      maxRate: Math.min(0.15, (targetPct + 2) / 100),
      safetyBuffer: buffer,
      payday: 25,
      fixedContribution: maxContribution,
      mode: mode === 'fixed' ? 'fixed' : 'dynamic',
      taxOptimization,
      maxMonthlyContribution: maxContribution,
      skipContributionBelow: skipBelow,
      notifyBefore,
      allowReversal,
      monthlySummary,
      taxReminders,
      paused: false
    });
  }
  if (step === 0) return React.createElement(OnboardingShell, {
    step: step,
    total: STEPS,
    eyebrow: "Dynamic 3rd pillar pension",
    title: "Set up your 3rd pillar pension",
    subtitle: "Choose what percentage of your salary you want to invest. The app adjusts or skips contributions based on your salary, account balance, spending, and safety buffer.",
    onBack: onBack,
    onNext: () => setStep(1),
    nextLabel: "Get started"
  }, React.createElement(OnboardingCard, null, React.createElement(MiniSetting, {
    label: "Contribution type",
    value: "Dynamic 3rd pillar"
  }), React.createElement(MiniSetting, {
    label: "Checks before investing",
    value: "Salary, balance, spending"
  }), React.createElement(MiniSetting, {
    label: "Control",
    value: "Notification before investing"
  })));
  if (step === 1) return React.createElement(OnboardingShell, {
    step: step,
    total: STEPS,
    eyebrow: "Contribution mode",
    title: "Choose how you want to contribute",
    onBack: () => setStep(0),
    onNext: () => setStep(2)
  }, React.createElement(Option, {
    title: "Fixed",
    body: "Same amount every month.",
    active: mode === 'fixed',
    onClick: () => setMode('fixed')
  }), React.createElement(Option, {
    title: "Dynamic",
    body: "Contributes a percentage of your salary and adjusts based on your financial situation.",
    active: mode === 'dynamic',
    onClick: () => setMode('dynamic'),
    recommended: true
  }), React.createElement(Option, {
    title: "Tax target",
    body: "Helps you reach the yearly amount needed for the maximum eligible tax benefit.",
    active: mode === 'tax',
    onClick: () => {
      setMode('tax');
      setTaxOption('adjust');
    }
  }));
  if (step === 2) return React.createElement(OnboardingShell, {
    step: step,
    total: STEPS,
    eyebrow: "Salary account",
    title: "Choose your salary account",
    subtitle: "This account will be used to detect your salary, spending, recurring payments, and available balance.",
    onBack: () => setStep(1),
    onNext: () => setStep(3)
  }, React.createElement(OnboardingCard, null, React.createElement(MiniSetting, {
    label: "Account",
    value: salaryAccount
  }), React.createElement(MiniSetting, {
    label: "Detected salary",
    value: formatMoney(salary)
  }), React.createElement(MiniSetting, {
    label: "Detected salary date",
    value: salaryDate
  }), React.createElement(MiniSetting, {
    label: "Account balance",
    value: formatMoney(accountBalance)
  })), React.createElement("div", {
    style: {
      marginTop: 12,
      fontSize: 13,
      lineHeight: '18px',
      color: BRAND.mute
    }
  }, "If no salary is detected, no contribution is made."));
  if (step === 3) return React.createElement(OnboardingShell, {
    step: step,
    total: STEPS,
    eyebrow: "Salary percentage",
    title: "Choose your contribution percentage",
    subtitle: "This starts from salary, then checks current balance, expected spending, recurring payments, and recent balance history before investing.",
    onBack: () => setStep(2),
    onNext: () => setStep(4)
  }, React.createElement("label", {
    htmlFor: "target-percent",
    style: {
      display: 'block',
      fontSize: 14,
      fontWeight: 700
    }
  }, "Slider from 1% to 10% of salary"), React.createElement("input", {
    id: "target-percent",
    type: "range",
    min: 1,
    max: 10,
    step: 1,
    value: targetPct,
    "aria-valuetext": `${targetPct}% of salary`,
    onChange: e => setTargetPct(Number(e.target.value)),
    style: {
      width: '100%',
      marginTop: 12,
      accentColor: BRAND.promo,
      cursor: 'pointer'
    }
  }), React.createElement(OnboardingCard, {
    style: {
      marginTop: 16
    }
  }, React.createElement(MiniSetting, {
    label: "Salary",
    value: formatMoney(salary)
  }), React.createElement(MiniSetting, {
    label: "Selected rate",
    value: `${targetPct}%`
  }), React.createElement(MiniSetting, {
    label: "Starting contribution",
    value: formatMoney(baseContribution)
  })), React.createElement(OnboardingCard, {
    style: {
      marginTop: 12,
      boxShadow: 'none',
      background: '#F1ECDD'
    }
  }, React.createElement(MiniSetting, {
    label: "Current account balance",
    value: formatMoney(accountBalance)
  }), React.createElement(MiniSetting, {
    label: "Avg. past spending",
    value: formatMoney(expectedSpending)
  }), React.createElement(MiniSetting, {
    label: "Upcoming recurring payments",
    value: formatMoney(recurringPayments)
  }), React.createElement(MiniSetting, {
    label: "Average recent balance",
    value: formatMoney(averageRecentBalance)
  }), React.createElement(MiniSetting, {
    label: "Lowest recent balance",
    value: formatMoney(lowestRecentBalance)
  }), React.createElement(MiniSetting, {
    label: "Estimated safe contribution",
    value: formatMoney(finalContribution)
  })));
  if (step === 4) return React.createElement(OnboardingShell, {
    step: step,
    total: STEPS,
    eyebrow: "Safety balance",
    title: "Set your minimum balance",
    subtitle: "The app will not invest if your account would fall below this amount.",
    onBack: () => setStep(3),
    onNext: () => setStep(5)
  }, React.createElement("div", {
    role: "group",
    "aria-label": "Minimum balance options",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8
    }
  }, [300, 500, 1000].map(amount => React.createElement(ModeButton, {
    key: amount,
    label: formatMoney(amount),
    active: buffer === amount,
    onClick: () => setBuffer(amount)
  })), React.createElement(ModeButton, {
    label: "Custom amount",
    active: buffer === customBuffer && ![300, 500, 1000].includes(buffer),
    onClick: () => setBuffer(customBuffer)
  })), React.createElement("label", {
    style: {
      display: 'block',
      marginTop: 14,
      fontSize: 13,
      color: BRAND.mute
    }
  }, "Custom amount", React.createElement("input", {
    type: "number",
    min: 0,
    value: customBuffer,
    onChange: e => {
      const next = Number(e.target.value);
      setCustomBuffer(next);
      setBuffer(next);
    },
    style: {
      width: '100%',
      marginTop: 6,
      minHeight: 44,
      border: `1px solid ${BRAND.line}`,
      borderRadius: 10,
      padding: '0 12px',
      font: 'inherit'
    }
  })), React.createElement(OnboardingCard, {
    style: {
      marginTop: 14,
      boxShadow: 'none',
      background: '#F1ECDD'
    }
  }, React.createElement(MiniSetting, {
    label: "Minimum balance",
    value: formatMoney(buffer)
  }), React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 13,
      color: BRAND.mute,
      lineHeight: '18px'
    }
  }, "If your balance would drop below ", formatMoney(buffer), ", the contribution is skipped.")));
  if (step === 5) return React.createElement(OnboardingShell, {
    step: step,
    total: STEPS,
    eyebrow: "Contribution limit",
    title: "Set your maximum monthly contribution",
    subtitle: "This protects you from contributing more than you are comfortable with, even if your salary increases.",
    onBack: () => setStep(4),
    onNext: () => setStep(6)
  }, React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 14,
      fontWeight: 700
    }
  }, "Never contribute more than per month", React.createElement("input", {
    type: "number",
    min: 0,
    value: maxContribution,
    onChange: e => setMaxContribution(Number(e.target.value)),
    style: {
      width: '100%',
      marginTop: 8,
      minHeight: 44,
      border: `1px solid ${BRAND.line}`,
      borderRadius: 10,
      padding: '0 12px',
      font: 'inherit'
    }
  })), React.createElement("label", {
    style: {
      display: 'block',
      marginTop: 14,
      fontSize: 13,
      color: BRAND.mute
    }
  }, "Skip contribution if calculated amount is below", React.createElement("input", {
    type: "number",
    min: 0,
    value: skipBelow,
    onChange: e => setSkipBelow(Number(e.target.value)),
    style: {
      width: '100%',
      marginTop: 6,
      minHeight: 44,
      border: `1px solid ${BRAND.line}`,
      borderRadius: 10,
      padding: '0 12px',
      font: 'inherit'
    }
  })), React.createElement(OnboardingCard, {
    style: {
      marginTop: 14
    }
  }, React.createElement(MiniSetting, {
    label: "Salary",
    value: formatMoney(5000)
  }), React.createElement(MiniSetting, {
    label: "Selected rate",
    value: "5%"
  }), React.createElement(MiniSetting, {
    label: "Base contribution",
    value: formatMoney(250)
  }), React.createElement(MiniSetting, {
    label: "Maximum limit",
    value: formatMoney(maxContribution)
  }), React.createElement(MiniSetting, {
    label: "Final contribution",
    value: formatMoney(Math.min(250, maxContribution))
  })));
  if (step === 6) return React.createElement(OnboardingShell, {
    step: step,
    total: STEPS,
    eyebrow: "Tax benefit",
    title: "Optimize your tax benefit",
    subtitle: "Based on your income, the app estimates how much you can contribute this year to reach the maximum eligible tax benefit.",
    onBack: () => setStep(5),
    onNext: () => setStep(7)
  }, React.createElement(OnboardingCard, null, React.createElement(MiniSetting, {
    label: "Estimated yearly income",
    value: formatMoney(salary * 12)
  }), React.createElement(MiniSetting, {
    label: "Maximum eligible contribution",
    value: formatMoney(maxEligibleContribution)
  }), React.createElement(MiniSetting, {
    label: "Already contributed",
    value: formatMoney(alreadyContributed)
  }), React.createElement(MiniSetting, {
    label: "Remaining this year",
    value: formatMoney(remainingThisYear)
  }), React.createElement(MiniSetting, {
    label: "Suggested monthly amount",
    value: formatMoney(suggestedMonthly)
  })), React.createElement(Option, {
    title: "Keep my selected percentage",
    body: "Use the selected salary percentage without automatic tax-target changes.",
    active: taxOption === 'keep',
    onClick: () => setTaxOption('keep')
  }), React.createElement(Option, {
    title: "Adjust contributions to reach tax target",
    body: "Increase or reduce monthly contributions to aim for the eligible yearly amount.",
    active: taxOption === 'adjust',
    onClick: () => setTaxOption('adjust')
  }), React.createElement(Option, {
    title: "Ask me before increasing contributions",
    body: "Send a confirmation before any tax-driven increase is applied.",
    active: taxOption === 'ask',
    onClick: () => setTaxOption('ask')
  }));
  if (step === 7) return React.createElement(OnboardingShell, {
    step: step,
    total: STEPS,
    eyebrow: "Preview",
    title: "Your next contribution estimate",
    onBack: () => setStep(6),
    onNext: () => setStep(8)
  }, React.createElement(OnboardingCard, null, React.createElement(MiniSetting, {
    label: "Detected salary",
    value: formatMoney(salary)
  }), React.createElement(MiniSetting, {
    label: "Selected rate",
    value: `${targetPct}%`
  }), React.createElement(MiniSetting, {
    label: "Base contribution",
    value: formatMoney(baseContribution)
  })), React.createElement(OnboardingCard, {
    style: {
      marginTop: 12
    }
  }, React.createElement(MiniSetting, {
    label: "Current balance",
    value: formatMoney(accountBalance)
  }), React.createElement(MiniSetting, {
    label: "Expected spending",
    value: `${formatMoney(expectedSpending)} avg.`
  }), React.createElement(MiniSetting, {
    label: "Upcoming recurring payments",
    value: formatMoney(recurringPayments)
  }), React.createElement(MiniSetting, {
    label: "Safety balance",
    value: formatMoney(buffer)
  }), React.createElement(MiniSetting, {
    label: "Average recent balance",
    value: formatMoney(averageRecentBalance)
  }), React.createElement(MiniSetting, {
    label: "Lowest recent balance",
    value: formatMoney(lowestRecentBalance)
  }), React.createElement(MiniSetting, {
    label: "Balance trend",
    value: balanceTrend >= 0 ? `+${formatMoney(balanceTrend)}` : formatMoney(balanceTrend)
  }), React.createElement(MiniSetting, {
    label: "Past-balance adjustment",
    value: formatMoney(balanceRiskAdjustment)
  }), React.createElement(MiniSetting, {
    label: "Safe available amount",
    value: formatMoney(safeAvailable)
  }), React.createElement(MiniSetting, {
    label: "Estimated contribution",
    value: formatMoney(finalContribution)
  })), React.createElement(OnboardingCard, {
    style: {
      marginTop: 12,
      boxShadow: 'none',
      background: '#F1ECDD'
    }
  }, React.createElement(MiniSetting, {
    label: "No salary detected",
    value: formatMoney(0)
  }), React.createElement(MiniSetting, {
    label: "Balance below safety limit",
    value: formatMoney(0)
  }), React.createElement(MiniSetting, {
    label: "Large one-time inflow",
    value: "No auto-increase"
  })));
  if (step === 8) return React.createElement(OnboardingShell, {
    step: step,
    total: STEPS,
    eyebrow: "Notifications",
    title: "Stay in control",
    subtitle: "Before each contribution, you will receive a notification with the planned amount.",
    onBack: () => setStep(7),
    onNext: () => setStep(9)
  }, React.createElement(OnboardingCard, null, React.createElement(SectionLabel, null, "Settings"), React.createElement(ToggleRow, {
    label: "Notify me 2 days before salary day",
    checked: notifyBefore,
    onChange: setNotifyBefore
  }), React.createElement(ToggleRow, {
    label: "Allow 24-hour reversal after contribution",
    checked: allowReversal,
    onChange: setAllowReversal
  }), React.createElement(ToggleRow, {
    label: "Send monthly pension summary",
    checked: monthlySummary,
    onChange: setMonthlySummary
  }), React.createElement(ToggleRow, {
    label: "Send occasional tax benefit reminders",
    checked: taxReminders,
    onChange: setTaxReminders
  })));
  if (step === 9) return React.createElement(OnboardingShell, {
    step: step,
    total: STEPS,
    eyebrow: "Review",
    title: "Review your setup",
    onBack: () => setStep(8),
    onNext: () => setStep(10),
    nextLabel: "Activate dynamic contributions"
  }, React.createElement(OnboardingCard, null, React.createElement(MiniSetting, {
    label: "Mode",
    value: mode === 'fixed' ? 'Fixed' : mode === 'tax' ? 'Tax target' : 'Dynamic'
  }), React.createElement(MiniSetting, {
    label: "Salary account",
    value: salaryAccount
  }), React.createElement(MiniSetting, {
    label: "Target contribution",
    value: `${targetPct}% of salary`
  }), React.createElement(MiniSetting, {
    label: "Minimum balance",
    value: formatMoney(buffer)
  }), React.createElement(MiniSetting, {
    label: "Maximum monthly contribution",
    value: formatMoney(maxContribution)
  }), React.createElement(MiniSetting, {
    label: "Tax optimization",
    value: taxOptimization ? 'Enabled' : 'Disabled'
  }), React.createElement(MiniSetting, {
    label: "Notification",
    value: notifyBefore ? '2 days before salary day' : 'Disabled'
  }), React.createElement(MiniSetting, {
    label: "24-hour reversal",
    value: allowReversal ? 'Enabled' : 'Disabled'
  })), React.createElement("button", {
    type: "button",
    onClick: () => setStep(1),
    style: {
      width: '100%',
      minHeight: 48,
      marginTop: 12,
      border: `1px solid ${BRAND.line}`,
      borderRadius: 12,
      background: BRAND.card,
      color: BRAND.ink,
      fontWeight: 700,
      cursor: 'pointer'
    }
  }, "Edit settings"));
  return React.createElement(OnboardingShell, {
    step: step,
    total: STEPS,
    eyebrow: "Active",
    title: "Your dynamic 3rd pillar plan is active",
    subtitle: "Your first contribution will be calculated before your next salary date. You will be notified before anything is invested.",
    onBack: () => setStep(9),
    onNext: finish,
    nextLabel: "View pension dashboard"
  }, React.createElement(OnboardingCard, null, React.createElement(MiniSetting, {
    label: "Next salary date",
    value: salaryDate
  }), React.createElement(MiniSetting, {
    label: "Expected contribution range",
    value: `${formatMoney(0)} to ${formatMoney(Math.min(baseContribution, maxContribution))}`
  }), React.createElement(MiniSetting, {
    label: "Current pension projection",
    value: `${formatMoney(FUTURE_SCENARIOS.balanced.todayMoneyMonthly)}/month`
  })));
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
    return React.createElement(DynamicPensionOnboarding, {
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
    });
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
  const tabs = ['Konti', 'Pensija', 'Uzkrājumi', 'Aizdevumi'];
  const promos = ['indigo', 'cashback', 'goal'];
  const currentPromo = tweaks.promo === 'auto' ? promos[promo] : tweaks.promo;
  return React.createElement("div", {
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
      overflowY: 'auto',
      paddingTop: 60
    }
  }, React.createElement("div", {
    style: {
      padding: '12px 20px 4px',
      display: 'flex',
      alignItems: 'center',
      gap: 14
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
  }, "Edvards Markuss Selikovs"), React.createElement("button", {
    type: "button",
    "aria-label": "Atv\u0113rt zi\u0146ojumus",
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
    "aria-label": "Sada\u013Cas",
    style: {
      display: 'flex',
      padding: '12px 16px 0',
      borderBottom: `1px solid ${BRAND.line}`
    }
  }, tabs.map(t => React.createElement(Tab, {
    key: t,
    label: t,
    active: tab === t,
    onClick: () => setTab(t)
  }))), tab === 'Pensija' ? React.createElement(FluxionPensijaScreen, null) : tab === 'Konti' ? React.createElement(React.Fragment, null, React.createElement("div", {
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
  }, "Nor\u0113\u0137inu konts"), React.createElement("div", {
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
  }, "Nopeln\u012Btie procenti ", Icon.info(13, BRAND.promo))))), React.createElement("div", {
    style: {
      display: 'flex',
      padding: '20px 20px 6px',
      gap: 8
    }
  }, React.createElement(QuickAction, {
    icon: Icon.card(),
    label: "Izveidot karti",
    ariaLabel: "Izveidot karti"
  }), React.createElement(QuickAction, {
    icon: Icon.send(),
    label: React.createElement(React.Fragment, null, "S\u016Bt\u012Bt,", React.createElement("br", null), "piepras\u012Bt"),
    ariaLabel: "S\u016Bt\u012Bt vai piepras\u012Bt"
  }), React.createElement(QuickAction, {
    icon: Icon.chart(),
    label: "Papildin\u0101t",
    ariaLabel: "Papildin\u0101t"
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
    "aria-label": "Pied\u0101v\u0101jumu karuselis",
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 6,
      marginTop: 14
    }
  }, promos.map((_, i) => React.createElement("button", {
    type: "button",
    key: i,
    "aria-label": `Rādīt ${i + 1}. piedāvājumu`,
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
  }, "Dar\u012Bjumi"), Icon.dots()), React.createElement("div", {
    style: {
      fontSize: 14,
      color: BRAND.mute,
      marginTop: 8
    }
  }, "Tavi dar\u012Bjumi par\u0101d\u012Bsies \u0161eit")), React.createElement("div", {
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
  }, "\u0100trie kontakti"), Icon.dots()))) : React.createElement("div", {
    style: {
      padding: '40px 24px',
      textAlign: 'center',
      color: BRAND.mute,
      fontSize: 14
    }
  }, tab, " \u2014 dr\u012Bzum\u0101"), React.createElement("div", {
    style: {
      height: 16
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
    label: "S\u0101kums",
    active: nav === 'Home',
    onClick: () => setNav('Home')
  }), React.createElement(NavItem, {
    icon: Icon.swap,
    label: "Maks\u0101jumi",
    active: nav === 'Pay',
    onClick: () => setNav('Pay')
  }), React.createElement(NavItem, {
    icon: Icon.grid,
    label: "Viss",
    active: nav === 'More',
    onClick: () => setNav('More')
  }))));
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
