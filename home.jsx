// Original mobile banking home screen
// Brand: "Lumen" — a fictional European neobank
// Palette: warm cream bg, deep indigo, butter-yellow accent, slate ink

const BRAND = {
  bg: '#F6F3EC',
  card: '#FFFFFF',
  ink: '#1B1C22',
  mute: '#8A8B93',
  line: '#E6E2D7',
  accent: '#F2D23A',         // butter yellow
  accentDark: '#D4B61F',
  promo: '#4B3FA8',          // deep indigo
  promoSoft: '#6559C9',
  ok: '#2F7D5B',
};

// ——— little inline icons (geometric, no emoji) ———
const Icon = {
  chat: (s = 22, c = BRAND.ink) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v8A2.5 2.5 0 0 1 17.5 17H10l-4 3.5V17H6.5A2.5 2.5 0 0 1 4 14.5v-8Z" stroke={c} strokeWidth="1.4"/>
    </svg>
  ),
  chev: (s = 14, c = BRAND.ink, strokeWidth = 2.4) => (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none">
      <path d="M6 3l5 5-5 5" stroke={c} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  info: (s = 14, c = BRAND.mute) => (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6.4" stroke={c} strokeWidth="1.2"/>
      <path d="M8 7.2v4M8 4.8v.01" stroke={c} strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  close: (s = 18, c = '#fff') => (
    <svg width={s} height={s} viewBox="0 0 20 20" fill="none">
      <path d="M5 5l10 10M15 5L5 15" stroke={c} strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  ),
  dots: (c = BRAND.mute) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill={c}>
      <circle cx="4" cy="10" r="1.5"/><circle cx="10" cy="10" r="1.5"/><circle cx="16" cy="10" r="1.5"/>
    </svg>
  ),
  card: () => (
    <img src="assets/izveidot_karti.svg" width="32" height="20" alt="" style={{ display: 'block' }}/>
  ),
  send: () => (
    <img src="assets/sutit_pieprasit.svg" width="26" height="22" alt="" style={{ display: 'block' }}/>
  ),
  chart: () => (
    <img src="assets/papildinat.svg" width="30" height="22" alt="" style={{ display: 'block' }}/>
  ),
  goal: (c = BRAND.ink) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8" stroke={c} strokeWidth="1.4"/>
      <circle cx="12" cy="12" r="4" stroke={c} strokeWidth="1.4"/>
      <circle cx="12" cy="12" r="1.2" fill={c}/>
    </svg>
  ),
  home: (active = false) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M4 11l8-6 8 6v9a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1v-9Z"
            stroke={BRAND.ink} strokeWidth="1.5" strokeLinejoin="round"
            fill={active ? BRAND.ink : 'none'}/>
    </svg>
  ),
  swap: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M4 9h14l-3-3M20 15H6l3 3" stroke={BRAND.ink} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="20" cy="9" r="1.3" fill={BRAND.accent}/>
    </svg>
  ),
  grid: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="4" width="7" height="7" rx="1" stroke={BRAND.ink} strokeWidth="1.5"/>
      <rect x="13" y="4" width="7" height="7" rx="1" stroke={BRAND.ink} strokeWidth="1.5"/>
      <rect x="4" y="13" width="7" height="7" rx="1" stroke={BRAND.ink} strokeWidth="1.5"/>
      <rect x="13" y="13" width="7" height="7" rx="1" stroke={BRAND.ink} strokeWidth="1.5"/>
      <circle cx="19" cy="6" r="1.6" fill={BRAND.accent}/>
    </svg>
  ),
  sparkle: (c = '#fff') => (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <rect x="12" y="10" width="20" height="24" rx="2" fill="#fff" opacity="0.95"/>
      <path d="M18 20h8M18 24h6" stroke={BRAND.promo} strokeWidth="1.4" strokeLinecap="round"/>
      <text x="22" y="32" fontFamily="Inter" fontSize="9" fontWeight="700" fill={BRAND.promo} textAnchor="middle">%</text>
      <path d="M34 8l1.5 3 3 .5-2.2 2 .5 3L34 15l-2.8 1.5.5-3-2.2-2 3-.5L34 8Z" fill={BRAND.accent}/>
      <path d="M8 20l4 2M6 26l3 .5M10 32l2-2" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" opacity="0.6"/>
    </svg>
  ),
};

// ——— reusable: right-side imagery for the account card ———
function CardImagery() {
  return (
    <img
      src="assets/norekinu_konts_pic.PNG"
      alt=""
      style={{
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        width: 140,
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
        borderRadius: '0 18px 18px 0',
      }}
    />
  );
}

function QuickAction({ icon, label, onClick }) {
  return (
    <button onClick={onClick}
      style={{
        flex: 1, background: 'transparent', border: 0, padding: 0, cursor: 'pointer',
        display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8,
        textAlign: 'left',
      }}>
      <div style={{
        width: 44, height: 44, borderRadius: '50%',
        background: BRAND.card, border: `1px solid ${BRAND.line}`,
        display: 'grid', placeItems: 'center', flexShrink: 0,
        boxShadow: '0 1px 2px rgba(30,25,10,0.04), 0 4px 10px rgba(30,25,10,0.04)',
      }}>{icon}</div>
      <div style={{
        fontSize: 12.5, lineHeight: '15px', color: BRAND.ink,
        letterSpacing: '-0.1px',
      }}>{label}</div>
    </button>
  );
}

function Tab({ label, active, onClick }) {
  return (
    <button onClick={onClick}
      style={{
        background: 'transparent', border: 0, padding: '10px 0',
        cursor: 'pointer', position: 'relative', flex: 1,
        fontSize: 15, color: active ? BRAND.ink : BRAND.mute,
        fontWeight: active ? 500 : 400, letterSpacing: '-0.1px',
      }}>
      {label}
      {active && (
        <div style={{
          position: 'absolute', left: '50%', bottom: 2, transform: 'translateX(-50%)',
          width: 28, height: 3, borderRadius: 2, background: BRAND.accent,
        }}/>
      )}
    </button>
  );
}

function PromoIndigo({ onClose }) {
  return (
    <div style={{
      background: BRAND.promo, borderRadius: 18, padding: '18px 18px 18px 20px',
      position: 'relative', color: '#fff', overflow: 'hidden',
      height: 200, boxSizing: 'border-box',
      boxShadow: '0 1px 2px rgba(30,25,10,0.06), 0 8px 20px rgba(75,63,168,0.18)',
    }}>
      <button onClick={onClose} style={{
        position: 'absolute', top: 12, right: 12, background: 'transparent',
        border: 0, cursor: 'pointer', padding: 4,
      }}>{Icon.close(18)}</button>

      <div style={{ maxWidth: 220 }}>
        <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.3px' }}>
          Ieguldi 50%
        </div>
        <div style={{ fontSize: 13, lineHeight: '18px', marginTop: 6, color: 'rgba(255,255,255,0.85)' }}>
          no atgūtās nodokļu atmaksas savā pensiju 3. līmenī
        </div>
        <button style={{
          marginTop: 22, background: BRAND.accent, color: BRAND.ink, border: 0,
          borderRadius: 999, padding: '12px 22px', fontWeight: 700, fontSize: 15,
          letterSpacing: '-0.1px', cursor: 'pointer', width: '100%', maxWidth: 220,
        }}>Ieguldīt</button>
      </div>

      {/* decorative sparkle graphic */}
      <div style={{ position: 'absolute', right: 14, bottom: 22 }}>
        {Icon.sparkle()}
      </div>
      <svg style={{ position: 'absolute', right: 50, top: 28 }} width="80" height="30" viewBox="0 0 80 30" fill="none">
        <path d="M4 4l10 6M20 2v10M38 6l8-2" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
      </svg>
    </div>
  );
}

function PromoCashback({ onClose }) {
  return (
    <div style={{
      background: '#1B1C22', borderRadius: 18, padding: '18px 20px',
      position: 'relative', color: '#fff', overflow: 'hidden',
      height: 200, boxSizing: 'border-box',
      boxShadow: '0 1px 2px rgba(0,0,0,0.08), 0 8px 20px rgba(0,0,0,0.12)',
    }}>
      <button onClick={onClose} style={{
        position: 'absolute', top: 12, right: 12, background: 'transparent',
        border: 0, cursor: 'pointer', padding: 4,
      }}>{Icon.close(18)}</button>
      <div style={{ fontSize: 11, letterSpacing: 2, color: BRAND.accent, fontWeight: 600 }}>ŠOMĒNES</div>
      <div style={{ fontSize: 22, fontWeight: 600, marginTop: 6, letterSpacing: '-0.4px', maxWidth: 220 }}>
        €14.20 atgriezts naudā
      </div>
      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', marginTop: 6 }}>
        Pārtika, transports un straumēšana — izmaksa 30.&nbsp;apr.
      </div>
      <button style={{
        marginTop: 16, background: BRAND.accent, color: BRAND.ink, border: 0,
        borderRadius: 999, padding: '11px 22px', fontWeight: 600, fontSize: 14,
        cursor: 'pointer',
      }}>Apskatīt sadalījumu</button>
      <div style={{
        position: 'absolute', right: -40, bottom: -40, width: 160, height: 160,
        borderRadius: '50%', border: `14px solid ${BRAND.accent}`, opacity: 0.15,
      }}/>
    </div>
  );
}

function PromoGoal({ onClose }) {
  return (
    <div style={{
      background: '#E8E2F7', borderRadius: 18, padding: '18px 20px',
      position: 'relative', color: BRAND.ink, overflow: 'hidden',
      height: 200, boxSizing: 'border-box',
      boxShadow: '0 1px 2px rgba(75,63,168,0.05), 0 8px 20px rgba(75,63,168,0.10)',
    }}>
      <button onClick={onClose} style={{
        position: 'absolute', top: 12, right: 12, background: 'transparent',
        border: 0, cursor: 'pointer', padding: 4,
      }}>{Icon.close(18, BRAND.ink)}</button>
      <div style={{ fontSize: 13, color: BRAND.promo, fontWeight: 600 }}>Vasaras ceļojums · Mērķis</div>
      <div style={{ fontSize: 20, fontWeight: 600, marginTop: 4, letterSpacing: '-0.3px' }}>
        Esi sasniedzis 62% no mērķa
      </div>
      <div style={{ marginTop: 14, height: 8, borderRadius: 4, background: '#fff', overflow: 'hidden' }}>
        <div style={{ width: '62%', height: '100%', background: BRAND.promo, borderRadius: 4 }}/>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontSize: 12, color: BRAND.mute }}>
        <span>€930 uzkrāts</span><span>€1,500 mērķis</span>
      </div>
      <button style={{
        marginTop: 14, background: BRAND.promo, color: '#fff', border: 0,
        borderRadius: 999, padding: '10px 20px', fontWeight: 600, fontSize: 13,
        cursor: 'pointer',
      }}>Pievienot mērķim</button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Pensija screen — illustrated tier cards + future wellbeing
// ─────────────────────────────────────────────────────────────
function TierIllustration2() {
  // Beach / umbrella scene — abstract placeholder
  return (
    <svg width="110" height="68" viewBox="0 0 110 68" fill="none" style={{ flexShrink: 0 }}>
      {/* umbrella */}
      <path d="M10 30 Q30 8 50 30 Z" fill="#F5E9B8"/>
      <path d="M10 30 Q20 22 30 30" stroke={BRAND.ink} strokeWidth="1" fill="none" opacity="0.4"/>
      <path d="M30 30 Q40 22 50 30" stroke={BRAND.ink} strokeWidth="1" fill="none" opacity="0.4"/>
      <line x1="30" y1="30" x2="30" y2="58" stroke={BRAND.ink} strokeWidth="1.3"/>
      {/* chair + figure */}
      <circle cx="22" cy="42" r="3.2" fill="#E7C68A"/>
      <path d="M14 50 L30 50 L28 58 L16 58 Z" fill="#F2D23A"/>
      <path d="M18 50 L34 48" stroke={BRAND.ink} strokeWidth="1.2"/>
      {/* ground line */}
      <line x1="4" y1="58" x2="52" y2="58" stroke={BRAND.ink} strokeWidth="1.2"/>
    </svg>
  );
}

function TierIllustration3() {
  // Two figures with puzzle piece — abstract placeholder
  return (
    <svg width="110" height="68" viewBox="0 0 110 68" fill="none" style={{ flexShrink: 0 }}>
      {/* figure 1 */}
      <circle cx="14" cy="22" r="3.5" fill="#2E2E2E"/>
      <path d="M8 28 L20 28 L18 46 L10 46 Z" fill="#F2D23A"/>
      <rect x="7" y="46" width="5" height="14" fill="#3A3A3A"/>
      <rect x="16" y="46" width="5" height="14" fill="#3A3A3A"/>
      {/* puzzle piece */}
      <path d="M24 34 h16 a3 3 0 0 1 0 6 v4 a3 3 0 0 0 0 6 h-16 v-16 a3 3 0 0 0 0 -6 z"
            fill="#E7C68A" stroke={BRAND.ink} strokeWidth="1"/>
      {/* figure 2 */}
      <circle cx="56" cy="26" r="3.5" fill="#E7C68A"/>
      <path d="M50 32 L62 32 L60 50 L52 50 Z" fill="#4B3FA8"/>
      <rect x="49" y="50" width="5" height="10" fill="#2E2E2E"/>
      <rect x="58" y="50" width="5" height="10" fill="#2E2E2E"/>
      {/* ground line */}
      <line x1="4" y1="60" x2="68" y2="60" stroke={BRAND.ink} strokeWidth="1.2"/>
    </svg>
  );
}

function WellbeingIllustration() {
  return (
    <svg width="110" height="92" viewBox="0 0 110 92" fill="none" style={{ flexShrink: 0 }}>
      {/* chart frame */}
      <rect x="64" y="10" width="36" height="26" rx="2" fill="#F2D23A" stroke={BRAND.ink} strokeWidth="1"/>
      <path d="M68 30 L76 22 L82 26 L96 14" stroke={BRAND.ink} strokeWidth="1.4" fill="none"/>
      <text x="92" y="32" fontSize="8" fill={BRAND.ink} fontWeight="700">€</text>
      {/* figure left w/ laptop */}
      <circle cx="22" cy="34" r="4" fill="#2E2E2E"/>
      <path d="M14 40 L30 40 L28 60 L16 60 Z" fill="#9A9FE0"/>
      <rect x="14" y="58" width="16" height="5" rx="1" fill="#2E2E2E"/>
      <rect x="12" y="62" width="20" height="2" fill={BRAND.ink}/>
      {/* figure right */}
      <circle cx="52" cy="40" r="4" fill="#E7C68A"/>
      <path d="M46 46 L58 46 L56 66 L48 66 Z" fill="#F2D23A"/>
      <rect x="46" y="66" width="4" height="12" fill="#3A3A3A"/>
      <rect x="54" y="66" width="4" height="12" fill="#3A3A3A"/>
      {/* table + cup */}
      <rect x="68" y="64" width="32" height="3" fill={BRAND.ink}/>
      <rect x="72" y="56" width="8" height="8" rx="1" fill="#fff" stroke={BRAND.ink} strokeWidth="1"/>
      <line x1="4" y1="80" x2="106" y2="80" stroke={BRAND.ink} strokeWidth="1.2"/>
    </svg>
  );
}

function PigIcon() {
  return (
    <svg width="32" height="26" viewBox="0 0 32 26" fill="none">
      <ellipse cx="15" cy="14" rx="11" ry="8.5" fill="#F5EBD5" stroke={BRAND.ink} strokeWidth="1.2"/>
      <circle cx="26" cy="10" r="3" fill={BRAND.accent} stroke={BRAND.ink} strokeWidth="1"/>
      <circle cx="11" cy="12" r="0.9" fill={BRAND.ink}/>
      <path d="M4 11 L1 9 L2 13 Z" fill="#F5EBD5" stroke={BRAND.ink} strokeWidth="1" strokeLinejoin="round"/>
      <rect x="8" y="21" width="1.5" height="3" fill={BRAND.ink}/>
      <rect x="20" y="21" width="1.5" height="3" fill={BRAND.ink}/>
    </svg>
  );
}

function TierCard({ tier, illustration, label, amount, subtitle }) {
  return (
    <div style={{
      flex: 1, background: '#EAE6DB', borderRadius: 18, padding: '14px 14px 16px',
      display: 'flex', flexDirection: 'column', minHeight: 196,
      boxShadow: '0 1px 2px rgba(30,25,10,0.04), 0 4px 12px rgba(30,25,10,0.04)',
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        {illustration}
        <div style={{
          fontSize: 44, fontWeight: 500, color: '#4B5F74', letterSpacing: '-1.5px',
          lineHeight: 1, marginTop: -2,
        }}>{tier}</div>
      </div>
      <div style={{ fontSize: 16, fontWeight: 600, marginTop: 10, textAlign: 'center' }}>{label}</div>
      <div style={{ fontSize: 20, textAlign: 'center', marginTop: 6, color: BRAND.ink, letterSpacing: '-0.3px' }}>
        {amount}
      </div>
      {subtitle && (
        <div style={{ fontSize: 11, color: BRAND.mute, marginTop: 8, textAlign: 'center' }}>
          {subtitle}
        </div>
      )}
    </div>
  );
}

function PensijaScreen() {
  const steps = [
    'Iegūsti savu nākotnes ienākumu aprēķinu tikai 8 minūtēs.',
    'Ieraugi konkrētus ciparus par finansiālo situāciju pēc darba gadiem.',
    'Pielāgo savu uzkrājumu stratēģiju drošākai nākotnei.',
    'Saņem personalizētus ieteikumus sava pensiju plāna stratēģijai.',
  ];
  return (
    <div style={{ padding: '4px 16px 0' }}>
      {/* Tier cards */}
      <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
        <TierCard
          tier="2"
          illustration={<TierIllustration2/>}
          label="2. līmenis"
          amount={<span style={{ color: BRAND.mute, letterSpacing: 3, fontSize: 18 }}>€ ✱ ✱ ✱</span>}
          subtitle="Pieprasīt izrakstu no VSAA"
        />
        <TierCard
          tier="3"
          illustration={<TierIllustration3/>}
          label="3. līmenis"
          amount={
            <span>
              <span style={{ color: BRAND.mute, marginRight: 4 }}>€</span>
              <span style={{ fontWeight: 500 }}>0</span>
              <span style={{ fontSize: 13, color: BRAND.mute }}>.00</span>
            </span>
          }
        />
      </div>

      {/* Transfer CTA row */}
      <button style={{
        display: 'flex', alignItems: 'center', gap: 12, width: '100%',
        background: 'transparent', border: 0, padding: '16px 4px', cursor: 'pointer',
        textAlign: 'left',
      }}>
        <PigIcon/>
        <span style={{ flex: 1, fontSize: 15, fontWeight: 500, letterSpacing: '-0.2px' }}>
          Pārnāc uz INDEXO pensiju 2. līmeni
        </span>
        {Icon.chev(16, BRAND.promo)}
      </button>

      <div style={{ height: 1, background: BRAND.line, margin: '0 0 14px' }}/>

      {/* Wellbeing card */}
      <div style={{
        background: '#EAE6DB', borderRadius: 18, padding: '18px 18px 18px 18px',
        boxShadow: '0 1px 2px rgba(30,25,10,0.04), 0 6px 16px rgba(30,25,10,0.04)',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ flex: 1, paddingRight: 8 }}>
            <div style={{ fontSize: 19, fontWeight: 600, letterSpacing: '-0.3px' }}>
              Tava nākotnes labklājība
            </div>
            <div style={{ marginTop: 14, fontSize: 26, color: BRAND.promo, fontWeight: 600, letterSpacing: '-0.5px' }}>
              0 <span style={{ fontSize: 18, fontWeight: 500 }}>€/mēnesī</span>
            </div>
            <div style={{ fontSize: 13, color: BRAND.mute, marginTop: 10, lineHeight: '18px' }}>
              Turpini no vietas, kur apstājies.<br/>
              Palikuši vēl tikai daži jautājumi
            </div>
          </div>
          <WellbeingIllustration/>
        </div>

        {/* progress */}
        <div style={{ marginTop: 14, height: 6, borderRadius: 3, background: '#fff', overflow: 'hidden' }}>
          <div style={{ width: '24%', height: '100%', background: BRAND.promo, borderRadius: 3 }}/>
        </div>

        <button style={{
          marginTop: 16, width: '100%', background: BRAND.accent, color: BRAND.ink,
          border: 0, borderRadius: 14, padding: '16px', fontSize: 16, fontWeight: 700,
          letterSpacing: '-0.1px', cursor: 'pointer',
        }}>Turpināt iesākto</button>
      </div>

      {/* Numbered steps */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: '22px 4px 0' }}>
        {steps.map((t, i) => (
          <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <div style={{
              width: 26, height: 26, borderRadius: '50%', background: BRAND.accent,
              display: 'grid', placeItems: 'center', flexShrink: 0, marginTop: 1,
              fontSize: 12, fontWeight: 600, color: BRAND.ink,
            }}>{i + 1}</div>
            <div style={{ flex: 1, fontSize: 14.5, fontWeight: 600, lineHeight: '20px', letterSpacing: '-0.2px' }}>
              {t}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function NavItem({ icon, label, active, onClick }) {
  return (
    <button onClick={onClick} style={{
      flex: 1, background: 'transparent', border: 0, cursor: 'pointer',
      display: 'flex', alignItems: 'center', gap: 10, padding: '6px 10px',
    }}>
      <div style={{
        width: 34, height: 34, borderRadius: '50%',
        background: active ? BRAND.accent : 'transparent',
        display: 'grid', placeItems: 'center', flexShrink: 0,
      }}>
        {icon}
      </div>
      <span style={{ fontSize: 13.5, color: BRAND.ink, fontWeight: 400 }}>{label}</span>
    </button>
  );
}

// ─────────────────────────────────────────────────────────────
// Home screen
// ─────────────────────────────────────────────────────────────
function Home({ tweaks }) {
  const [tab, setTab] = React.useState('Konti');
  const [promo, setPromo] = React.useState(0);
  const [nav, setNav] = React.useState('Home');
  const [dismissed, setDismissed] = React.useState(false);

  const tabs = ['Konti', 'Pensija', 'Uzkrājumi', 'Aizdevumi'];
  const promos = ['indigo', 'cashback', 'goal'];
  const currentPromo = tweaks.promo === 'auto' ? promos[promo] : tweaks.promo;

  return (
    <div style={{
      background: BRAND.bg, height: '100%', display: 'flex', flexDirection: 'column',
      overflow: 'hidden', fontFamily: '"Inter", system-ui, sans-serif', color: BRAND.ink,
    }}>
      <div style={{ flex: 1, overflowY: 'auto', paddingTop: 60 }}>
      {/* ——— Header ——— */}
      <div style={{ padding: '12px 20px 4px', display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{
          width: 40, height: 40, borderRadius: 10, background: '#9A968A',
          color: '#fff', fontWeight: 600, fontSize: 14, letterSpacing: 0.5,
          display: 'grid', placeItems: 'center', flexShrink: 0,
        }}>ES</div>
        <div style={{ flex: 1, fontSize: 17, fontWeight: 600, letterSpacing: '-0.3px' }}>
          Edvards Markuss Selikovs
        </div>
        <button style={{ background: 'transparent', border: 0, padding: 4, cursor: 'pointer' }}>
          {Icon.chat(24)}
        </button>
      </div>

      {/* ——— Tabs ——— */}
      <div style={{ display: 'flex', padding: '12px 16px 0', borderBottom: `1px solid ${BRAND.line}` }}>
        {tabs.map(t => (
          <Tab key={t} label={t} active={tab === t} onClick={() => setTab(t)} />
        ))}
      </div>

      {tab === 'Pensija' ? <PensijaScreen/> : tab === 'Konti' ? (
      <>
      {/* ——— Account card ——— */}
      <div style={{ padding: '16px 16px 0' }}>
        <div style={{
          background: '#EAE6DB', borderRadius: 18, padding: '16px 20px',
          position: 'relative', overflow: 'hidden', minHeight: 150,
          boxShadow: '0 1px 2px rgba(30,25,10,0.04), 0 6px 16px rgba(30,25,10,0.05)',
        }}>
          <CardImagery/>
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 200 }}>
            <div style={{ fontSize: 15, fontWeight: 600 }}>Norēķinu konts</div>
            <div style={{
              fontSize: 11.5, color: BRAND.mute, marginTop: 2, display: 'flex', alignItems: 'center', gap: 3,
              letterSpacing: '-0.1px', whiteSpace: 'nowrap',
            }}>
              LV82 LMNX 1001 0100 6535 1
              <span style={{ marginLeft: 2, display: 'inline-flex' }}>{Icon.chev(10, BRAND.mute, 2.9)}</span>
            </div>

            <div style={{
              marginTop: 14, display: 'inline-flex', alignItems: 'baseline', gap: 2,
              borderBottom: `3px solid ${BRAND.accent}`, paddingBottom: 2,
            }}>
              <span style={{ fontSize: 30, fontWeight: 500, letterSpacing: '-0.8px' }}>€</span>
              <span style={{
                fontSize: 46, fontWeight: 500, lineHeight: '46px', letterSpacing: '-1.2px',
              }}>0</span>
              <span style={{ fontSize: 22, fontWeight: 500, letterSpacing: '-0.4px', marginLeft: 2 }}>.00</span>
            </div>

            <div style={{
              marginTop: 8, fontSize: 13, color: BRAND.promo, display: 'flex',
              alignItems: 'center', gap: 6,
            }}>
              Nopelnītie procenti {Icon.info(13, BRAND.promo)}
            </div>
          </div>
        </div>
      </div>

      {/* ——— Quick actions ——— */}
      <div style={{ display: 'flex', padding: '20px 20px 6px', gap: 8 }}>
        <QuickAction icon={Icon.card()} label="Izveidot karti"/>
        <QuickAction icon={Icon.send()} label={<>Sūtīt,<br/>pieprasīt</>}/>
        <QuickAction icon={Icon.chart()} label="Papildināt"/>
      </div>

      {/* ——— Promo carousel ——— */}
      {!dismissed && (
        <div style={{ padding: '16px 16px 0' }}>
          {currentPromo === 'indigo' && <PromoIndigo onClose={() => setDismissed(true)}/>}
          {currentPromo === 'cashback' && <PromoCashback onClose={() => setDismissed(true)}/>}
          {currentPromo === 'goal' && <PromoGoal onClose={() => setDismissed(true)}/>}

          {tweaks.promo === 'auto' && (
            <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 14 }}>
              {promos.map((_, i) => (
                <button key={i} onClick={() => setPromo(i)} style={{
                  width: i === promo ? 18 : 6, height: 6, borderRadius: 3,
                  background: i === promo ? BRAND.ink : '#CFCABD', border: 0, cursor: 'pointer',
                  transition: 'width 0.25s',
                }}/>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ——— Transactions ——— */}
      <div style={{ padding: '28px 20px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.3px' }}>Darījumi</div>
          {Icon.dots()}
        </div>
        <div style={{ fontSize: 14, color: BRAND.mute, marginTop: 8 }}>
          Tavi darījumi parādīsies šeit
        </div>
      </div>

      <div style={{ height: 1, background: BRAND.line, margin: '20px 20px 0' }}/>

      {/* ——— Quick contacts ——— */}
      <div style={{ padding: '20px 20px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.3px' }}>Ātrie kontakti</div>
          {Icon.dots()}
        </div>
      </div>
      </>
      ) : (
        <div style={{ padding: '40px 24px', textAlign: 'center', color: BRAND.mute, fontSize: 14 }}>
          {tab} — drīzumā
        </div>
      )}
      <div style={{ height: 16 }}/>
      </div>

      {/* ——— Bottom nav ——— */}
      <div style={{ flexShrink: 0, padding: '10px 12px 18px' }}>
        <div style={{
          background: BRAND.card, borderRadius: 34,
          padding: '7px 8px', display: 'flex', gap: 0, alignItems: 'center',
          boxShadow: '0 2px 3px rgba(30,25,10,0.05), 0 12px 18px rgba(30,25,10,0.18), 0 1px 0 rgba(255,255,255,0.75) inset',
        }}>
          <NavItem icon={Icon.home(nav === 'Home')} label="Sākums"
                   active={nav === 'Home'} onClick={() => setNav('Home')}/>
          <NavItem icon={Icon.swap} label="Maksājumi" active={nav === 'Pay'} onClick={() => setNav('Pay')}/>
          <NavItem icon={Icon.grid} label="Viss" active={nav === 'More'} onClick={() => setNav('More')}/>
        </div>
      </div>
    </div>
  );
}

window.Home = Home;
