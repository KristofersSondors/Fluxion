// Original mobile banking home screen
// Brand: "Lumen" — a fictional European neobank
// Palette: warm cream bg, deep indigo, butter-yellow accent, slate ink

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
  tapTransition: 'background-color 0.18s ease-out, color 0.18s ease-out, transform 0.18s ease-out',
};

const LanguageContext = React.createContext({
  language: 'lv',
  setLanguage: () => {},
  L: (lv, en) => lv,
  monthLabel: (label) => label,
  shortMonthLabel: (label) => label.slice(0, 3),
  scenarioLabel: (key) => key,
  scenarioNote: (key) => key,
});

function useLanguage() {
  return React.useContext(LanguageContext);
}

const MONTH_COPY = {
  Maijs: { lv: 'Maijs', en: 'May' },
  Jūnijs: { lv: 'Jūnijs', en: 'Jun' },
  Jūlijs: { lv: 'Jūlijs', en: 'Jul' },
  Augusts: { lv: 'Augusts', en: 'Aug' },
  Septembris: { lv: 'Septembris', en: 'Sep' },
  Oktobris: { lv: 'Oktobris', en: 'Oct' },
  Novembris: { lv: 'Novembris', en: 'Nov' },
  Decembris: { lv: 'Decembris', en: 'Dec' },
  Janvāris: { lv: 'Janvāris', en: 'Jan' },
  Februāris: { lv: 'Februāris', en: 'Feb' },
  Marts: { lv: 'Marts', en: 'Mar' },
  Aprīlis: { lv: 'Aprīlis', en: 'Apr' },
};

const SCENARIO_COPY = {
  cautious: {
    lv: { label: 'Piesardzīgs', note: '2.8% gada ienesīgums' },
    en: { label: 'Cautious', note: '2.8% annual return' },
  },
  balanced: {
    lv: { label: 'Bāzes', note: '4.1% gada ienesīgums' },
    en: { label: 'Balanced', note: '4.1% annual return' },
  },
  dynamic: {
    lv: { label: 'Dinamiskais', note: '5.3% gada ienesīgums' },
    en: { label: 'Dynamic', note: '5.3% annual return' },
  },
};

function translateMonth(label, language) {
  return MONTH_COPY[label]?.[language] || label;
}

function translateScenarioLabel(key, language) {
  return SCENARIO_COPY[key]?.[language]?.label || FUTURE_SCENARIOS[key]?.label || key;
}

function translateScenarioNote(key, language) {
  return SCENARIO_COPY[key]?.[language]?.note || FUTURE_SCENARIOS[key]?.note || key;
}

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
      <text x="22" y="32" fontFamily="Gibson, IBM Plex Sans, Aptos, system-ui" fontSize="9" fontWeight="700" fill={BRAND.promo} textAnchor="middle">%</text>
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

function QuickAction({ icon, label, ariaLabel, onClick }) {
  return (
    <button type="button" onClick={onClick} aria-label={ariaLabel}
      style={{
        flex: 1, background: 'transparent', border: 0, padding: 0, cursor: 'pointer',
        display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8,
        textAlign: 'left',
      }}>
      <div style={{
        width: BRAND.minTouch, height: BRAND.minTouch, borderRadius: '50%',
        background: BRAND.card, border: `1px solid ${BRAND.line}`,
        display: 'grid', placeItems: 'center', flexShrink: 0,
        boxShadow: '0 1px 2px rgba(30,25,10,0.04), 0 4px 10px rgba(30,25,10,0.04)',
      }}>{icon}</div>
      <div style={{
        fontSize: 12.5, lineHeight: '15px', color: BRAND.ink,
        letterSpacing: 0,
      }}>{label}</div>
    </button>
  );
}

function Tab({ label, active, onClick }) {
  return (
    <button type="button" role="tab" aria-selected={active} onClick={onClick}
      style={{
        background: 'transparent', border: 0, padding: '10px 0',
        cursor: 'pointer', position: 'relative', flex: 1,
        fontSize: 15, color: active ? BRAND.ink : BRAND.mute,
        fontWeight: active ? 500 : 400, letterSpacing: 0,
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
  const { L } = useLanguage();
  return (
    <div style={{
      background: BRAND.promo, borderRadius: 12, padding: '18px 18px 18px 20px',
      position: 'relative', color: '#fff', overflow: 'hidden',
      height: 200, boxSizing: 'border-box',
      boxShadow: '0 1px 2px rgba(30,25,10,0.06), 0 8px 20px rgba(75,63,168,0.18)',
    }}>
      <button type="button" aria-label={L('Aizvērt piedāvājumu', 'Close offer')} onClick={onClose} style={{
        position: 'absolute', top: 12, right: 12, background: 'transparent',
        border: 0, cursor: 'pointer', padding: 4,
      }}>{Icon.close(18)}</button>

      <div style={{ maxWidth: 220 }}>
        <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: 0 }}>
          {L('Ieguldi 50%', 'Invest 50%')}
        </div>
        <div style={{ fontSize: 13, lineHeight: '18px', marginTop: 6, color: 'rgba(255,255,255,0.85)' }}>
          {L('no atgūtās nodokļu atmaksas savā pensiju 3. līmenī', 'of your recovered tax refund into your 3rd pension pillar')}
        </div>
        <button type="button" style={{
          marginTop: 22, background: BRAND.accent, color: BRAND.ink, border: 0,
          borderRadius: 12, padding: '12px 22px', fontWeight: 700, fontSize: 15,
          letterSpacing: 0, cursor: 'pointer', width: '100%', maxWidth: 220,
        }}>{L('Ieguldīt', 'Invest')}</button>
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
  const { L } = useLanguage();
  return (
    <div style={{
      background: '#1B1C22', borderRadius: 12, padding: '18px 20px',
      position: 'relative', color: '#fff', overflow: 'hidden',
      height: 200, boxSizing: 'border-box',
      boxShadow: '0 1px 2px rgba(0,0,0,0.08), 0 8px 20px rgba(0,0,0,0.12)',
    }}>
      <button type="button" aria-label={L('Aizvērt piedāvājumu', 'Close offer')} onClick={onClose} style={{
        position: 'absolute', top: 12, right: 12, background: 'transparent',
        border: 0, cursor: 'pointer', padding: 4,
      }}>{Icon.close(18)}</button>
      <div style={{ fontSize: 11, letterSpacing: 2, color: BRAND.accent, fontWeight: 600 }}>{L('ŠOMĒNES', 'THIS MONTH')}</div>
      <div style={{ fontSize: 22, fontWeight: 600, marginTop: 6, letterSpacing: 0, maxWidth: 220 }}>
        {L('€14.20 atgriezts naudā', '€14.20 cashback')}
      </div>
      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', marginTop: 6 }}>
        {L('Pārtika, transports un straumēšana — izmaksa 30. apr.', 'Groceries, transport and streaming — payout Apr 30')}
      </div>
      <button type="button" style={{
        marginTop: 16, background: BRAND.accent, color: BRAND.ink, border: 0,
        borderRadius: 12, padding: '11px 22px', fontWeight: 600, fontSize: 14,
        cursor: 'pointer',
      }}>{L('Apskatīt sadalījumu', 'View breakdown')}</button>
      <div style={{
        position: 'absolute', right: -40, bottom: -40, width: 160, height: 160,
        borderRadius: '50%', border: `14px solid ${BRAND.accent}`, opacity: 0.15,
      }}/>
    </div>
  );
}

function PromoGoal({ onClose }) {
  const { L } = useLanguage();
  return (
    <div style={{
      background: '#E8E2F7', borderRadius: 12, padding: '18px 20px',
      position: 'relative', color: BRAND.ink, overflow: 'hidden',
      height: 200, boxSizing: 'border-box',
      boxShadow: '0 1px 2px rgba(75,63,168,0.05), 0 8px 20px rgba(75,63,168,0.10)',
    }}>
      <button type="button" aria-label={L('Aizvērt piedāvājumu', 'Close offer')} onClick={onClose} style={{
        position: 'absolute', top: 12, right: 12, background: 'transparent',
        border: 0, cursor: 'pointer', padding: 4,
      }}>{Icon.close(18, BRAND.ink)}</button>
      <div style={{ fontSize: 13, color: BRAND.promo, fontWeight: 600 }}>{L('Vasaras ceļojums · Mērķis', 'Summer trip · Goal')}</div>
      <div style={{ fontSize: 20, fontWeight: 600, marginTop: 4, letterSpacing: 0 }}>
        {L('Esi sasniedzis 62% no mērķa', 'You have reached 62% of the goal')}
      </div>
      <div style={{ marginTop: 14, height: 8, borderRadius: 4, background: '#fff', overflow: 'hidden' }}>
        <div style={{ width: '62%', height: '100%', background: BRAND.promo, borderRadius: 4 }}/>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontSize: 12, color: BRAND.mute }}>
        <span>{L('€930 uzkrāts', '€930 saved')}</span><span>{L('€1,500 mērķis', '€1,500 goal')}</span>
      </div>
      <button type="button" style={{
        marginTop: 14, background: BRAND.promo, color: '#fff', border: 0,
        borderRadius: 12, padding: '10px 20px', fontWeight: 600, fontSize: 13,
        cursor: 'pointer',
      }}>{L('Pievienot mērķim', 'Add to goal')}</button>
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
      flex: 1, background: '#EAE6DB', borderRadius: 12, padding: '14px 14px 16px',
      display: 'flex', flexDirection: 'column', minHeight: 196,
      boxShadow: '0 1px 2px rgba(30,25,10,0.04), 0 4px 12px rgba(30,25,10,0.04)',
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        {illustration}
        <div style={{
          fontSize: 44, fontWeight: 500, color: '#4B5F74', letterSpacing: 0,
          lineHeight: 1, marginTop: -2,
        }}>{tier}</div>
      </div>
      <div style={{ fontSize: 16, fontWeight: 600, marginTop: 10, textAlign: 'center' }}>{label}</div>
      <div style={{ fontSize: 20, textAlign: 'center', marginTop: 6, color: BRAND.ink, letterSpacing: 0 }}>
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
      <button type="button" style={{
        display: 'flex', alignItems: 'center', gap: 12, width: '100%',
        background: 'transparent', border: 0, padding: '16px 4px', cursor: 'pointer',
        textAlign: 'left',
      }}>
        <PigIcon/>
        <span style={{ flex: 1, fontSize: 15, fontWeight: 500, letterSpacing: 0 }}>
          Pārnāc uz INDEXO pensiju 2. līmeni
        </span>
        {Icon.chev(16, BRAND.promo)}
      </button>

      <div style={{ height: 1, background: BRAND.line, margin: '0 0 14px' }}/>

      {/* Wellbeing card */}
      <div style={{
        background: '#EAE6DB', borderRadius: 12, padding: '18px 18px 18px 18px',
        boxShadow: '0 1px 2px rgba(30,25,10,0.04), 0 6px 16px rgba(30,25,10,0.04)',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ flex: 1, paddingRight: 8 }}>
            <div style={{ fontSize: 19, fontWeight: 600, letterSpacing: 0 }}>
              Tava nākotnes labklājība
            </div>
            <div style={{ marginTop: 14, fontSize: 26, color: BRAND.promo, fontWeight: 600, letterSpacing: 0 }}>
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

        <button type="button" style={{
          marginTop: 16, width: '100%', background: BRAND.accent, color: BRAND.ink,
          border: 0, borderRadius: 14, padding: '16px', fontSize: 16, fontWeight: 700,
          letterSpacing: 0, cursor: 'pointer',
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
            <div style={{ flex: 1, fontSize: 14.5, fontWeight: 600, lineHeight: '20px', letterSpacing: 0 }}>
              {t}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const EUR_FORMAT = new Intl.NumberFormat('lv-LV', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
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
};

const RECURRING_OBLIGATIONS = [
  { label: 'Īre', amount: 620 },
  { label: 'Kredīts', amount: 180 },
  { label: 'Abonementi', amount: 42 },
];

const FLUXION_HISTORY = [
  { month: 'Maijs', income: 1820, spending: 1520, balanceBefore: 340 },
  { month: 'Jūnijs', income: 1760, spending: 1580, balanceBefore: 430 },
  { month: 'Jūlijs', income: 1940, spending: 1490, balanceBefore: 520 },
  { month: 'Augusts', income: 0, spending: 390, balanceBefore: 610 },
  { month: 'Septembris', income: 1880, spending: 1710, balanceBefore: 250 },
  { month: 'Oktobris', income: 2050, spending: 1630, balanceBefore: 360 },
  { month: 'Novembris', income: 1790, spending: 1680, balanceBefore: 410 },
  { month: 'Decembris', income: 2140, spending: 1860, balanceBefore: 620 },
  { month: 'Janvāris', income: 1960, spending: 1510, balanceBefore: 300 },
  { month: 'Februāris', income: 2200, spending: 1430, balanceBefore: 470 },
  { month: 'Marts', income: 1840, spending: 1770, balanceBefore: 240 },
  { month: 'Aprīlis', income: 2280, spending: 1480, balanceBefore: 390 },
];

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
    line: [0.18, 0.20, 0.24, 0.31, 0.40, 0.48, 0.58],
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
    line: [0.18, 0.21, 0.27, 0.37, 0.51, 0.67, 0.79],
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
    line: [0.18, 0.23, 0.31, 0.45, 0.63, 0.82, 0.96],
  },
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
  let reasonText = month.income <= 0
    ? 'Šajā mēnesī ienākumu nebija, tāpēc iemaksa netiek veikta un drošības rezerve saglabāta.'
    : `Pēc tēriņiem vairs nepaliktu ${formatMoney(settings.safetyBuffer)}, tāpēc iemaksa apstājas.`;

  if (incomeDrop) {
    reasonText = 'Ienākumi būtiski nokritās pret vidējo līmeni, tāpēc iemaksa uz šo mēnesi tiek apturēta.';
  } else if (settings.paused) {
    reasonText = 'Iemaksas ir pauzētas. Aprēķins paliek redzams, bet izpilde nenotiek.';
  } else if (settings.mode === 'fixed' && month.income > 0 && safeToInvest > 0) {
    contribution = Math.min(fixedContribution, safeToInvest);
    reason = contribution < fixedContribution ? 'reduced' : 'fixed';
    reasonTitle = contribution < fixedContribution ? 'Fiksētā iemaksa samazināta' : 'Fiksētā iemaksa';
    reasonText = contribution < fixedContribution
      ? 'Fiksētā summa tiek samazināta, lai nepārkāptu drošības rezervi.'
      : 'Tiek izpildīta lietotāja izvēlētā fiksētā mēneša iemaksa.';
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
    endBalance: afterSalary - month.spending - contribution,
  };
}

function buildFluxionModel(settings = FLUXION_SETTINGS) {
  const calculationSettings = { ...settings, paused: false };
  const incomeMonths = FLUXION_HISTORY.filter(month => month.income > 0);
  const averageIncome = Math.round(incomeMonths.reduce((sum, month) => sum + month.income, 0) / Math.max(1, incomeMonths.length));
  const averageSpending = Math.round(FLUXION_HISTORY.reduce((sum, month) => sum + month.spending, 0) / FLUXION_HISTORY.length);
  const history = [];
  let previousContribution = null;

  FLUXION_HISTORY.forEach((month) => {
    const result = calculateDynamicContribution(month, calculationSettings, previousContribution, averageIncome);
    history.push(result);
    previousContribution = result.contribution;
  });

  const preview = calculateDynamicContribution({
    month: 'Maijs',
    income: 2140,
    spending: 1680,
    balanceBefore: 355,
  }, calculationSettings, history[history.length - 1]?.contribution || null, averageIncome);

  let streak = 0;
  for (let i = history.length - 1; i >= 0; i -= 1) {
    if (history[i].contribution > 0) streak += 1;
    else break;
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
    boostedMonths: history.filter((month) => month.reason === 'boosted').length,
    pausedMonths: history.filter((month) => month.reason === 'paused').length,
    cappedMonths: history.filter((month) => month.reason === 'capped').length,
    streak,
    preview,
    averageIncome,
    averageSpending,
    obligationsTotal: RECURRING_OBLIGATIONS.reduce((sum, item) => sum + item.amount, 0),
    taxBase,
    taxRefund: settings.taxOptimization ? Math.round(taxBase * settings.taxRefundRate) : 0,
    taxLeft: Math.max(0, settings.annualTaxLimit - taxBase),
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
  return (
    <svg width="118" height="72" viewBox="0 0 118 72" fill="none" style={{ flexShrink: 0 }}>
      <path d="M12 56h52" stroke={BRAND.ink} strokeWidth="1.2" strokeLinecap="round"/>
      <rect x="18" y="26" width="10" height="30" rx="2" fill="#EFE7D5" stroke={BRAND.ink} strokeWidth="1"/>
      <rect x="33" y="20" width="10" height="36" rx="2" fill="#F8F4EA" stroke={BRAND.ink} strokeWidth="1"/>
      <rect x="48" y="30" width="10" height="26" rx="2" fill="#EFE7D5" stroke={BRAND.ink} strokeWidth="1"/>
      <path d="M14 26l24-12 24 12" stroke={BRAND.ink} strokeWidth="1.3" strokeLinejoin="round"/>
      <circle cx="86" cy="26" r="12" fill="#F2D23A" opacity="0.35"/>
      <circle cx="86" cy="26" r="7" fill="#F2D23A" stroke={BRAND.ink} strokeWidth="1"/>
      <path d="M82 26h8M86 22v8" stroke={BRAND.ink} strokeWidth="1.1" strokeLinecap="round"/>
      <path d="M74 50c4-6 9-9 14-9 6 0 10 4 16 4 4 0 7-2 10-5" stroke="#7A8EA1" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

function FluxionIllustration() {
  return (
    <svg width="116" height="92" viewBox="0 0 116 92" fill="none" style={{ flexShrink: 0 }}>
      <rect x="52" y="10" width="50" height="30" rx="8" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.22)"/>
      <path d="M60 31l9-8 9 5 14-12" stroke="#F2D23A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="60" cy="31" r="2.5" fill="#F2D23A"/>
      <circle cx="78" cy="28" r="2.5" fill="#F2D23A"/>
      <circle cx="92" cy="16" r="2.5" fill="#F2D23A"/>
      <path d="M26 24c7 0 12 6 12 14s-5 14-12 14-12-6-12-14 5-14 12-14Z" fill="#F5EBD5"/>
      <path d="M13 39h26" stroke="#1B1C22" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M26 24c5 0 9 3 11 7-2 2-4 3-6 3-5 0-7-2-10-2-3 0-5 1-8 4 0-7 6-12 13-12Z" fill="#F2D23A"/>
      <circle cx="23" cy="38" r="1.1" fill="#1B1C22"/>
      <rect x="18" y="54" width="18" height="8" rx="4" fill="#F2D23A"/>
      <rect x="44" y="56" width="14" height="6" rx="3" fill="rgba(255,255,255,0.18)"/>
      <rect x="60" y="56" width="22" height="6" rx="3" fill="rgba(255,255,255,0.28)"/>
      <rect x="18" y="67" width="66" height="9" rx="4.5" fill="rgba(255,255,255,0.12)"/>
      <rect x="18" y="67" width="44" height="9" rx="4.5" fill="#F2D23A"/>
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 2l5 2v4.4c0 3.1-2.1 5.8-5 6.8-2.9-1-5-3.7-5-6.8V4l5-2Z" stroke={BRAND.ink} strokeWidth="1.3" strokeLinejoin="round"/>
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2.5" y="4" width="13" height="11" rx="2.5" stroke={BRAND.ink} strokeWidth="1.3"/>
      <path d="M5 2.5v3M13 2.5v3M2.5 7.5h13" stroke={BRAND.ink} strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}

function TrendIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3 12.5l3.4-3.6 2.4 2.3L14.5 5" stroke={BRAND.ink} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.8 5h3.7v3.7" stroke={BRAND.ink} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M5 3h8v2c0 2.6-1.8 4.8-4 5.3C6.8 9.8 5 7.6 5 5V3Z" stroke={BRAND.ink} strokeWidth="1.3" strokeLinejoin="round"/>
      <path d="M5 4H3.5A1.5 1.5 0 0 0 2 5.5C2 7.4 3.6 9 5.5 9H6M13 4h1.5A1.5 1.5 0 0 1 16 5.5C16 7.4 14.4 9 12.5 9H12M9 10.5v2.5M6.2 15h5.6" stroke={BRAND.ink} strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}

function CarIcon() {
  return (
    <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
      <path d="M4.2 5.5 6 3h8l1.8 2.5M2.5 7h15a1.5 1.5 0 0 1 1.5 1.5V11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 11V8.5A1.5 1.5 0 0 1 2.5 7Z" stroke={BRAND.ink} strokeWidth="1.3" strokeLinejoin="round"/>
      <circle cx="5.2" cy="12.2" r="1.4" fill={BRAND.accent}/>
      <circle cx="14.8" cy="12.2" r="1.4" fill={BRAND.accent}/>
    </svg>
  );
}

function ConfigPill({ icon, label, value, dark = false }) {
  return (
    <div style={{
      flex: 1,
      minWidth: 0,
      borderRadius: 14,
      padding: '11px 12px',
      background: dark ? 'rgba(255,255,255,0.11)' : '#F1ECDD',
      border: dark ? '1px solid rgba(255,255,255,0.08)' : `1px solid ${BRAND.line}`,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{
          width: 28,
          height: 28,
          borderRadius: 10,
          display: 'grid',
          placeItems: 'center',
          background: dark ? 'rgba(255,255,255,0.14)' : '#fff',
        }}>{icon}</div>
        <div style={{ minWidth: 0 }}>
          <div style={{
            fontSize: 10.5,
            textTransform: 'uppercase',
            letterSpacing: 1.1,
            color: dark ? 'rgba(255,255,255,0.7)' : BRAND.mute,
          }}>{label}</div>
          <div style={{
            marginTop: 3,
            fontSize: 14,
            fontWeight: 700,
            color: dark ? '#fff' : BRAND.ink,
            letterSpacing: 0,
            whiteSpace: 'nowrap',
          }}>{value}</div>
        </div>
      </div>
    </div>
  );
}

function ModeButton({ label, active, onClick }) {
  return (
    <button type="button" aria-pressed={active} onClick={onClick} style={{
      flex: 1,
      minHeight: BRAND.minTouch,
      border: 0,
      borderRadius: 12,
      cursor: 'pointer',
      background: active ? BRAND.accent : '#F1ECDD',
      color: BRAND.ink,
      fontSize: 13,
      fontWeight: active ? 700 : 500,
    }}>{label}</button>
  );
}

function MiniSetting({ label, value }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, minWidth: 0 }}>
      <span style={{ fontSize: 12.5, color: BRAND.mute, minWidth: 0, overflowWrap: 'anywhere' }}>{label}</span>
      <span style={{ fontSize: 13, fontWeight: 700, color: BRAND.ink, textAlign: 'right', overflowWrap: 'anywhere' }}>{value}</span>
    </div>
  );
}

function ProjectionChart({ selectedScenario }) {
  const width = 304;
  const height = 148;
  const bottom = height + 6;
  const pointCount = FUTURE_SCENARIOS.dynamic.line.length;
  const xStep = width / (pointCount - 1);
  const makePath = (line) => line.map((value, index) => {
    const x = index * xStep;
    const y = height - (value * height);
    return `${index === 0 ? 'M' : 'L'}${x} ${y}`;
  }).join(' ');
  const selectedLine = FUTURE_SCENARIOS[selectedScenario].line;
  const areaPath = `${makePath(selectedLine)} L ${width} ${bottom} L 0 ${bottom} Z`;

  return (
    <div style={{ marginTop: 16, padding: '18px 16px 12px', background: '#F7F3EA', borderRadius: 12 }}>
      <svg width="100%" height="190" viewBox={`0 0 ${width} 190`} fill="none">
        <path d={areaPath} fill="rgba(229,201,58,0.12)"/>
        {[0.25, 0.5, 0.75].map((line, index) => (
          <line
            key={index}
            x1="0"
            y1={height - (line * height)}
            x2={width}
            y2={height - (line * height)}
            stroke="rgba(27,28,34,0.08)"
            strokeDasharray="4 5"
          />
        ))}
        {SCENARIO_ORDER.map((scenarioKey) => (
          <path
            key={scenarioKey}
            d={makePath(FUTURE_SCENARIOS[scenarioKey].line)}
            stroke={FUTURE_SCENARIOS[scenarioKey].tone}
            strokeWidth={scenarioKey === selectedScenario ? 4 : 2.5}
            strokeOpacity={scenarioKey === selectedScenario ? 1 : 0.55}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
        <text x="0" y="184" fill={BRAND.mute} fontSize="11">2026</text>
        <text x={width / 2 - 18} y="184" fill={BRAND.mute} fontSize="11">2046</text>
        <text x={width - 38} y="184" fill={BRAND.mute} fontSize="11">2067</text>
      </svg>
    </div>
  );
}

function CompactTierCard({ tier, title, illustration, balance, monthly, note }) {
  return (
    <div style={{
      flex: 1,
      background: BRAND.card,
      borderRadius: 12,
      padding: '14px 14px 16px',
      border: `1px solid ${BRAND.line}`,
      boxShadow: '0 1px 2px rgba(30,25,10,0.04), 0 4px 12px rgba(30,25,10,0.04)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        top: 10,
        right: 12,
        fontSize: 48,
        lineHeight: 1,
        letterSpacing: 0,
        color: '#6B879D',
        opacity: 0.3,
        pointerEvents: 'none',
      }}>{tier}</div>
      {illustration}
      <div style={{ marginTop: 10, fontSize: 15, fontWeight: 700, letterSpacing: 0 }}>{title}</div>
      <div style={{ marginTop: 6, fontSize: 22, color: BRAND.promo, fontWeight: 700, letterSpacing: 0, lineHeight: 1.1 }}>
        {balance}
      </div>
      <div style={{ marginTop: 4, fontSize: 12, color: BRAND.mute, lineHeight: '16px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{monthly}</div>
      <div style={{ marginTop: 8, fontSize: 11.5, color: BRAND.mute, lineHeight: '15px' }}>{note}</div>
    </div>
  );
}


function ComparisonBar({ label, value, max, tone, detail }) {
  const width = max > 0 ? Math.max(12, Math.round((value / max) * 100)) : 0;
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: 0 }}>{label}</div>
        <div style={{ fontSize: 22, fontWeight: 700, color: tone }}>{formatMoney(value)}</div>
      </div>
      <div style={{ marginTop: 10, height: 10, borderRadius: 999, background: '#EFE8D9', overflow: 'hidden' }}>
        <div style={{
          width: `${width}%`,
          height: '100%',
          background: tone,
          borderRadius: 999,
        }}/>
      </div>
      <div style={{ marginTop: 6, fontSize: 12.5, color: BRAND.mute }}>{detail}</div>
    </div>
  );
}

function LifestyleCard({ icon, label, cost, income }) {
  const { L } = useLanguage();
  return (
    <div style={{
      flex: 1,
      minWidth: 0,
      background: '#F6F1E6',
      borderRadius: 16,
      padding: '12px',
      border: `1px solid ${BRAND.line}`,
    }}>
      <div style={{
        width: 32,
        height: 32,
        borderRadius: 11,
        background: '#fff',
        display: 'grid',
        placeItems: 'center',
      }}>{icon}</div>
      <div style={{ marginTop: 10, fontSize: 12.5, fontWeight: 600, lineHeight: '16px' }}>{label}</div>
      <div style={{ marginTop: 6, fontSize: 18, fontWeight: 700, color: BRAND.promo, letterSpacing: 0 }}>
        {(income / cost).toFixed(1)}x
      </div>
      <div style={{ marginTop: 4, fontSize: 11.5, color: BRAND.mute }}>{L('šodienas naudā', 'in today’s money')}</div>
    </div>
  );
}

function StepRow({ number, title, body }) {
  return (
    <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
      <div style={{
        width: 28,
        height: 28,
        borderRadius: '50%',
        background: BRAND.accent,
        display: 'grid',
        placeItems: 'center',
        flexShrink: 0,
        fontSize: 12,
        fontWeight: 700,
      }}>{number}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: 0 }}>{title}</div>
        <div style={{ marginTop: 4, fontSize: 13.5, color: BRAND.mute, lineHeight: '18px' }}>{body}</div>
      </div>
    </div>
  );
}

function SubPageHeader({ title, onBack }) {
  const { L } = useLanguage();
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '16px 16px 8px' }}>
      <button type="button" onClick={onBack} style={{
        background: 'transparent', border: 0, padding: '4px 8px 4px 2px', cursor: 'pointer',
        display: 'flex', alignItems: 'center', color: BRAND.promo, fontSize: 14, fontWeight: 500,
      }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M12 5l-5 5 5 5" stroke={BRAND.promo} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {L('Atpakaļ', 'Back')}
      </button>
      <div style={{ flex: 1, fontSize: 16, fontWeight: 700, letterSpacing: 0, textAlign: 'center', paddingRight: 70 }}>
        {title}
      </div>
    </div>
  );
}

function PensionNavRow({ icon, title, subtitle, value, onClick }) {
  return (
    <button type="button" onClick={onClick} style={{
      width: '100%', background: 'transparent', border: 0, padding: '14px 0',
      cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 14, textAlign: 'left',
    }}>
      <div style={{
        width: 44, height: 44, borderRadius: 14, background: BRAND.card,
        border: `1px solid ${BRAND.line}`, display: 'grid', placeItems: 'center', flexShrink: 0,
        boxShadow: '0 1px 2px rgba(30,25,10,0.04)',
      }}>{icon}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 15, fontWeight: 600, letterSpacing: 0 }}>{title}</div>
        {subtitle && (
          <div style={{
            fontSize: 13, color: BRAND.mute, marginTop: 2, lineHeight: '17px',
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
          }}>
            {subtitle}
          </div>
        )}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
        {value && <span style={{ fontSize: 14, fontWeight: 700, color: BRAND.promo }}>{value}</span>}
        {Icon.chev(14, BRAND.mute)}
      </div>
    </button>
  );
}

function PensionMain({ onNav, activated, scenario, config, model, onConfigChange, reversed, onReverse }) {
  const { L, scenarioNote } = useLanguage();
  const selectedScenario = FUTURE_SCENARIOS[scenario];
  const totalMonthly = selectedScenario.tier1Monthly + selectedScenario.tier2Monthly + selectedScenario.tier3Monthly;
  const preview = model.preview;
  const nextContribution = reversed || config.paused ? 0 : preview.contribution;
  const modeLabel = config.mode === 'dynamic' ? L('Dinamiskais', 'Dynamic') : L('Fiksēts', 'Fixed');

  return (
    <div style={{ padding: '4px 16px 24px' }}>
      <div style={{
        marginTop: 12, background: BRAND.card, borderRadius: 12,
        padding: '18px', border: `1px solid ${BRAND.line}`,
        boxShadow: '0 1px 2px rgba(30,25,10,0.04), 0 6px 18px rgba(30,25,10,0.06)',
      }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 12.5, color: BRAND.mute, letterSpacing: 0 }}>
            {activated ? (config.paused ? 'Automātiskā iemaksa pauzēta' : 'Nākamā automātiskā iemaksa') : 'Tiktu uzkrāts pēdējos 12 mēnešos'}
          </div>
          <button type="button" onClick={() => onNav('analysis')} style={{
            background: 'transparent', border: 0, cursor: 'pointer',
            fontSize: 13, color: BRAND.promo, fontWeight: 500, padding: 0, letterSpacing: 0,
          }}>{L('Analīze →', 'Analysis →')}</button>
        </div>

        <div style={{ fontSize: 30, fontWeight: 700, color: BRAND.ink, letterSpacing: 0, marginTop: 6 }}>
          {activated ? formatMoney(nextContribution) : formatMoney(model.totalDynamic)}
        </div>
        <div style={{ fontSize: 13, color: BRAND.mute, marginTop: 4, lineHeight: '18px' }}>
          {activated
            ? reversed
              ? L('Pēdējā iemaksa atgriezta 24h logā · nākamā izpilde netiek dublēta', 'Last contribution reversed in the 24h window · next execution will not be duplicated')
              : config.paused
                ? L('Pauze darbojas līdz brīdim, kad to atjauno', 'Pause remains active until you resume it')
                : L(`${modeLabel} · automātiski ${config.payday}. datumā · droši pieejams ${formatMoney(preview.safeToInvest)}`, `${modeLabel} · automatic on the ${config.payday}th · safely available ${formatMoney(preview.safeToInvest)}`)
            : L(`${formatMoney(model.dynamicAdvantage)} vairāk nekā ar fiksētu ${formatMoney(config.fixedContribution)}/mēn.`, `${formatMoney(model.dynamicAdvantage)} more than a fixed ${formatMoney(config.fixedContribution)}/mo.`)}
        </div>

        {activated ? (
          <>
            <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
              <ConfigPill icon={<TrendIcon/>} label={L('Grīda/griesti', 'Floor/ceiling')} value={`${formatPercent(config.minRate)}-${formatPercent(config.maxRate)}`}/>
              <ConfigPill icon={<ShieldIcon/>} label={L('Buferis', 'Buffer')} value={formatMoney(config.safetyBuffer)}/>
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
              <ModeButton label={L('Fiksēts', 'Fixed')} active={config.mode === 'fixed'} onClick={() => onConfigChange({ mode: 'fixed' })}/>
              <ModeButton label={L('Dinamiskais', 'Dynamic')} active={config.mode === 'dynamic'} onClick={() => onConfigChange({ mode: 'dynamic' })}/>
            </div>
            <div style={{ marginTop: 12, background: '#FAF9F8', borderRadius: 12, padding: '12px', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <MiniSetting label={L('Nodokļu optimizācija', 'Tax optimization')} value={config.taxOptimization ? L(`${formatMoney(model.taxRefund)} atmaksa`, `${formatMoney(model.taxRefund)} refund`) : L('Izslēgta', 'Off')}/>
              <MiniSetting label={L('Paziņojums', 'Notification')} value={L('2 dienas pirms', '2 days before')}/>
              <MiniSetting label={L('Stabilitātes limits', 'Stability cap')} value={`${formatMoney(config.stabilityCap)}/${L('mēn.', 'mo.')}`}/>
              <MiniSetting label={L('Atkārtotie maksājumi', 'Recurring payments')} value={formatMoney(model.obligationsTotal)}/>
              <div style={{ display: 'flex', gap: 8, marginTop: 2 }}>
                <button type="button" aria-pressed={config.paused} onClick={() => onConfigChange({ paused: !config.paused })} style={{
                  flex: 1, border: 0, borderRadius: 10, minHeight: 44, background: config.paused ? BRAND.accent : '#EAE6DB',
                  color: BRAND.promo, fontSize: 13, fontWeight: 700, cursor: 'pointer',
                }}>{config.paused ? L('Atjaunot', 'Resume') : L('Pauzēt', 'Pause')}</button>
                <button type="button" onClick={onReverse} disabled={reversed || config.paused} style={{
                  flex: 1, border: 0, borderRadius: 10, minHeight: 44, background: reversed || config.paused ? BRAND.line : '#EAE6DB',
                  color: reversed || config.paused ? BRAND.mute : BRAND.ink, fontSize: 13, fontWeight: 700, cursor: reversed || config.paused ? 'not-allowed' : 'pointer',
                }}>{reversed ? L('Atgriezta', 'Reversed') : L('Atgriezt 24h', 'Reverse 24h')}</button>
                <button type="button" aria-pressed={config.taxOptimization} onClick={() => onConfigChange({ taxOptimization: !config.taxOptimization })} style={{
                  flex: 1, border: 0, borderRadius: 10, minHeight: 44, background: '#EAE6DB',
                  color: BRAND.ink, fontSize: 13, fontWeight: 700, cursor: 'pointer',
                }}>{config.taxOptimization ? L('Nodokļi', 'Tax') : L('Bez nod.', 'No tax')}</button>
              </div>
            </div>
          </>
        ) : (
          <button type="button" onClick={() => onNav('onboarding3')} style={{
            marginTop: 16, width: '100%', border: 0, borderRadius: 14,
            padding: '14px', background: BRAND.accent, color: BRAND.ink,
            fontSize: 15, fontWeight: 700, cursor: 'pointer', letterSpacing: 0,
          }}>
            {L('Iestatīt pensiju 3. līmeni', 'Set up 3rd pillar pension')}
          </button>
        )}
      </div>

      {/* Section header */}
      <div style={{ marginTop: 24, marginBottom: 12, fontSize: 18, fontWeight: 700, letterSpacing: 0 }}>
        {L('Tavi pensiju līmeņi', 'Your pension pillars')}
      </div>

      {/* Tier 1 — State pension */}
      <div style={{
        background: BRAND.card, borderRadius: 12, padding: '16px',
        border: `1px solid ${BRAND.line}`,
        boxShadow: '0 1px 2px rgba(30,25,10,0.04), 0 4px 12px rgba(30,25,10,0.04)',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{
                width: 28, height: 28, borderRadius: 9, background: '#EAE6DB',
                display: 'grid', placeItems: 'center',
                fontSize: 13, fontWeight: 700, color: '#6B879D',
              }}>1</div>
              <div style={{ fontSize: 15, fontWeight: 600 }}>{L('Valsts pensija', 'State pension')}</div>
            </div>
            <div style={{ marginTop: 10, fontSize: 26, fontWeight: 700, color: BRAND.promo, letterSpacing: 0 }}>
              {formatMoney(selectedScenario.tier1Monthly)}<span style={{ fontSize: 14, fontWeight: 500, color: BRAND.mute }}>/{L('mēn.', 'mo.')}</span>
            </div>
            <div style={{ marginTop: 10, height: 4, borderRadius: 2, background: BRAND.line, overflow: 'hidden', maxWidth: 180 }}>
              <div style={{ width: `${Math.round((TIER1_SERVICE_YEARS / TIER1_TARGET_YEARS) * 100)}%`, height: '100%', background: BRAND.promo, borderRadius: 2 }}/>
            </div>
            <div style={{ marginTop: 5, fontSize: 12, color: BRAND.mute }}>{TIER1_SERVICE_YEARS} / {TIER1_TARGET_YEARS} {L('darba gadi', 'work years')}</div>
          </div>
          <div style={{ flexShrink: 0 }}><TierIllustration1/></div>
        </div>
      </div>

      {/* Tiers 2 & 3 */}
      <div style={{ display: 'flex', gap: 10, marginTop: 10 }}>
        <CompactTierCard
          tier="2"
          illustration={<TierIllustration2/>}
          title={L('2. līmenis', '2nd pillar')}
          balance={formatMoney(TIER2_BALANCE)}
          monthly={`${formatMoney(selectedScenario.tier2Monthly)}/${L('mēn.', 'mo.')}`}
          note={L('Fonda uzkrājums', 'Fund balance')}
        />
        <CompactTierCard
          tier="3"
          illustration={<TierIllustration3/>}
          title={L('3. līmenis', '3rd pillar')}
          balance={formatMoney(TIER3_BALANCE)}
          monthly={`${formatMoney(selectedScenario.tier3Monthly)}/${L('mēn.', 'mo.')}`}
          note={L('Dinamiskais', 'Dynamic')}
        />
      </div>

      {/* Total projected pension summary */}
      <div style={{
        marginTop: 10, background: '#EAE6DB', borderRadius: 12, padding: '16px 18px',
        boxShadow: '0 1px 2px rgba(30,25,10,0.04), 0 4px 12px rgba(30,25,10,0.04)',
      }}>
        <div style={{ fontSize: 12.5, color: BRAND.mute, letterSpacing: 0 }}>{L('Kopā prognozētā pensija', 'Total projected pension')}</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 4 }}>
          <div style={{ fontSize: 30, fontWeight: 700, color: BRAND.promo, letterSpacing: 0 }}>
            {formatMoney(totalMonthly)}
          </div>
          <div style={{ fontSize: 14, color: BRAND.mute }}>{L('/mēnesī šodienas naudā', '/month in today’s money')}</div>
        </div>
        <div style={{ fontSize: 12.5, color: BRAND.mute, marginTop: 2 }}>{scenarioNote(scenario)}</div>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: BRAND.line, margin: '20px 0 4px' }}/>

      {/* Sub-page nav rows */}
      <PensionNavRow
        icon={<TrendIcon/>}
        title={L('Ikmēneša analīze', 'Monthly analysis')}
        subtitle={L('Simulācija un salīdzinājums', 'Simulation and comparison')}
        onClick={() => onNav('analysis')}
      />
      <div style={{ height: 1, background: BRAND.line }}/>
      <PensionNavRow
        icon={Icon.goal()}
        title={L('Nākotnes projekcija', 'Future projection')}
        subtitle={L('Scenāriji un pensijas grafiks', 'Scenarios and pension chart')}
        value={`${formatMoney(selectedScenario.todayMoneyMonthly)}/${L('mēn.', 'mo.')}`}
        onClick={() => onNav('projection')}
      />
      <div style={{ height: 1, background: BRAND.line }}/>
      <PensionNavRow
        icon={<TrophyIcon/>}
        title={L('Mērķi un sasniegumi', 'Goals and milestones')}
        subtitle={L(`Streak: ${model.streak} mēn. · Nākamais milestone: ${formatMoney(NEXT_MILESTONE - TIER3_BALANCE)}`, `Streak: ${model.streak} mo. · Next milestone: ${formatMoney(NEXT_MILESTONE - TIER3_BALANCE)}`)}
        onClick={() => onNav('goals')}
      />
    </div>
  );
}

function MonthlyBarChart({ months, selectedIndex, onSelect }) {
  const { L, monthLabel, shortMonthLabel } = useLanguage();
  const maxVal = Math.max(...months.flatMap((m) => [m.income, m.spending])) || 1;
  const H = 80;
  return (
    <div style={{ marginTop: 18 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
        {[['#B8B0A4', L('Ienākumi', 'Income')], ['#DDD7CE', L('Tēriņi', 'Spending')], [BRAND.accent, L('Iemaksa', 'Contribution')]].map(([col, lbl]) => (
          <div key={lbl} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <div style={{ width: 8, height: 8, borderRadius: 2, background: col }}/>
            <span style={{ fontSize: 11, color: BRAND.mute }}>{lbl}</span>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4 }}>
        {months.map((month, index) => {
          const active = index === selectedIndex;
          const incH = Math.round((month.income / maxVal) * H);
          const spH = Math.round((month.spending / maxVal) * H);
          const coH = month.contribution > 0 ? Math.max(4, Math.round((month.contribution / maxVal) * H)) : 0;
          return (
            <button type="button" key={month.month} aria-label={L(`${monthLabel(month.month)}: ienākumi ${formatMoney(month.income)}, tēriņi ${formatMoney(month.spending)}, iemaksa ${formatMoney(month.contribution)}`, `${monthLabel(month.month)}: income ${formatMoney(month.income)}, spending ${formatMoney(month.spending)}, contribution ${formatMoney(month.contribution)}`)} aria-pressed={active} onClick={() => onSelect(index)} style={{
              flex: 1, background: 'transparent', border: 0, padding: 0, cursor: 'pointer',
              display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 44,
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: H }}>
                <div style={{ width: 9, height: incH, borderRadius: '3px 3px 0 0', background: active ? '#8A8480' : '#C8C1B4' }}/>
                <div style={{ width: 9, height: spH, borderRadius: '3px 3px 0 0', background: active ? '#B8B0A4' : '#DDD7CE' }}/>
                <div style={{ width: 9, height: coH, borderRadius: '3px 3px 0 0', background: coH > 0 ? BRAND.accent : 'transparent' }}/>
              </div>
              <div style={{ marginTop: 5, fontSize: 10, color: active ? BRAND.ink : BRAND.mute, fontWeight: active ? 700 : 400 }}>
                {shortMonthLabel(month.month)}
              </div>
              <div style={{ marginTop: 2, width: 14, height: 2, borderRadius: 1, background: active ? BRAND.accent : 'transparent' }}/>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function PensionAnalysis({ onBack, selectedMonthIndex, setSelectedMonthIndex, model, config }) {
  const { L, monthLabel } = useLanguage();
  const selectedMonth = model.lastSix[selectedMonthIndex];
  const diff = selectedMonth.contribution - selectedMonth.fixedContribution;
  return (
    <div>
      <SubPageHeader title={L('Ikmēneša analīze', 'Monthly analysis')} onBack={onBack}/>
      <div style={{ padding: '8px 16px 24px', display: 'flex', flexDirection: 'column', gap: 24 }}>

        <div>
          <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: 0 }}>{L('Pēdējie 6 mēneši', 'Last 6 months')}</div>
          <MonthlyBarChart months={model.lastSix} selectedIndex={selectedMonthIndex} onSelect={setSelectedMonthIndex}/>

          <div style={{ marginTop: 16, background: '#F7F2E6', borderRadius: 16, padding: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: BRAND.ink }}>{monthLabel(selectedMonth.month)}</div>
              <div style={{ fontSize: 26, fontWeight: 700, color: BRAND.promo, letterSpacing: 0 }}>
                {formatMoney(selectedMonth.contribution)}
              </div>
            </div>
            <div style={{ marginTop: 12, display: 'flex', justifyContent: 'space-between' }}>
              {[
                [L('Ienākumi', 'Income'), selectedMonth.income, BRAND.ink],
                [L('Tēriņi', 'Spending'), selectedMonth.spending, BRAND.ink],
                [L('Droši', 'Safe'), selectedMonth.safeToInvest, BRAND.ok],
              ].map(([lbl, val, col]) => (
                <div key={lbl}>
                  <div style={{ fontSize: 10.5, color: BRAND.mute, textTransform: 'uppercase', letterSpacing: 0.7 }}>{lbl}</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: col, marginTop: 3 }}>{formatMoney(val)}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 10, fontSize: 12.5, color: BRAND.mute, lineHeight: '17px' }}>
              {selectedMonth.fixedBreaksBuffer
                ? L('Fiksēta iemaksa aizskartu rezervi — dinamiskā apstājās automātiski', 'A fixed contribution would cut into the buffer — the dynamic one stopped automatically')
                : diff >= 0
                  ? L(`+${formatMoney(diff)} vairāk nekā ar fiksētu iemaksu`, `+${formatMoney(diff)} more than a fixed contribution`)
                  : L(`${formatMoney(Math.abs(diff))} mazāk — mēnesis bija finansiāli stingrs`, `${formatMoney(Math.abs(diff))} less — the month was financially tight`)}
            </div>
          </div>
        </div>

        <div>
          <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: 0 }}>{L('Dinamiskais vs fiksētais', 'Dynamic vs fixed')}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 16 }}>
            <ComparisonBar label={L('Dinamiskais', 'Dynamic')} value={model.totalDynamic} max={model.totalDynamic} tone={BRAND.promo} detail={L(`${model.boostedMonths} mēnešos iemaksa pārsniedza mērķi`, `Contribution exceeded the target in ${model.boostedMonths} months`)}/>
            <ComparisonBar label={L('Fiksēta iemaksa', 'Fixed contribution')} value={model.totalFixed} max={model.totalDynamic} tone="#C8C1B4" detail={`${formatMoney(config.fixedContribution)}/${L('mēn. ar ienākumiem', 'mo. with income')}`}/>
          </div>
          <div style={{ marginTop: 12, fontSize: 13, color: BRAND.mute, lineHeight: '18px' }}>
            {L(`${formatMoney(model.dynamicAdvantage)} papildu · ${model.pausedMonths} mēnesī apstājās automātiski · ${model.cappedMonths} stabilizēti`, `${formatMoney(model.dynamicAdvantage)} extra · auto-stopped in ${model.pausedMonths} months · ${model.cappedMonths} stabilized`)}
          </div>
        </div>

      </div>
    </div>
  );
}

function PensionProjection({ onBack, scenario, setScenario }) {
  const { L, scenarioLabel, scenarioNote } = useLanguage();
  const s = FUTURE_SCENARIOS[scenario];
  const total = s.tier1Monthly + s.tier2Monthly + s.tier3Monthly;
  const t1w = Math.round((s.tier1Monthly / total) * 100);
  const t2w = Math.round((s.tier2Monthly / total) * 100);
  const t3w = 100 - t1w - t2w;

  return (
    <div>
      <SubPageHeader title={L('Nākotnes projekcija', 'Future projection')} onBack={onBack}/>
      <div style={{ padding: '8px 16px 24px', display: 'flex', flexDirection: 'column', gap: 24 }}>

        <div>
          <div style={{ fontSize: 12.5, color: BRAND.mute }}>{L('Prognozētā pensija 67 gados', 'Projected pension at age 67')}</div>
          <div style={{ fontSize: 34, fontWeight: 700, color: BRAND.promo, letterSpacing: 0, marginTop: 4 }}>
            {formatMoney(s.todayMoneyMonthly)}<span style={{ fontSize: 16, fontWeight: 500, color: BRAND.mute }}>/{L('mēn.', 'mo.')}</span>
          </div>
          <div style={{ fontSize: 12.5, color: BRAND.mute, marginTop: 3 }}>{L('šodienas naudā', 'in today’s money')} · {scenarioNote(scenario)}</div>
          <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
            {SCENARIO_ORDER.map((key) => (
              <button type="button" key={key} aria-pressed={key === scenario} onClick={() => setScenario(key)} style={{
                flex: 1, border: 0, borderRadius: 12, padding: '10px 6px', minHeight: 44, cursor: 'pointer',
                background: key === scenario ? BRAND.accent : BRAND.line,
                fontSize: 13, fontWeight: 700, color: BRAND.ink,
              }}>
                {scenarioLabel(key)}
              </button>
            ))}
          </div>
          <ProjectionChart selectedScenario={scenario}/>
        </div>

        <div>
          <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: 0, marginBottom: 14 }}>{L('Sadalījums', 'Breakdown')}</div>
          <div style={{ display: 'flex', height: 8, borderRadius: 4, overflow: 'hidden' }}>
            <div style={{ width: `${t1w}%`, background: '#C8C1B4' }}/>
            <div style={{ width: `${t2w}%`, background: BRAND.promo, opacity: 0.45, marginLeft: 2 }}/>
            <div style={{ width: `${t3w}%`, background: BRAND.promo, marginLeft: 2 }}/>
          </div>
          <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 11 }}>
            {[
              { label: L('1. līmenis · Valsts', '1st pillar · State'), amount: s.tier1Monthly, dot: '#C8C1B4', op: 1 },
              { label: L('2. līmenis · Fonds', '2nd pillar · Fund'), amount: s.tier2Monthly, dot: BRAND.promo, op: 0.45 },
              { label: L('3. līmenis · Dinamiskais', '3rd pillar · Dynamic'), amount: s.tier3Monthly, dot: BRAND.promo, op: 1 },
            ].map(({ label, amount, dot, op }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 8, height: 8, borderRadius: 2, background: dot, opacity: op, flexShrink: 0 }}/>
                <div style={{ flex: 1, fontSize: 13.5, color: BRAND.mute }}>{label}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: BRAND.ink }}>{formatMoney(amount)}<span style={{ fontSize: 12, fontWeight: 400, color: BRAND.mute }}>/{L('mēn.', 'mo.')}</span></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

function PensionGoals({ onBack, scenario, model, config }) {
  const { L } = useLanguage();
  const selectedScenario = FUTURE_SCENARIOS[scenario];
  const goalProgress = clamp(selectedScenario.todayMoneyMonthly / FUTURE_GOAL, 0, 1);
  const gapToGoal = Math.max(0, FUTURE_GOAL - selectedScenario.todayMoneyMonthly);
  const extraMonthlyNeeded = Math.round(gapToGoal * 0.18);
  const milestoneLeft = NEXT_MILESTONE - TIER3_BALANCE;

  return (
    <div>
      <SubPageHeader title={L('Mērķi un sasniegumi', 'Goals and milestones')} onBack={onBack}/>
      <div style={{ padding: '8px 16px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ background: BRAND.card, borderRadius: 12, padding: '18px', border: `1px solid ${BRAND.line}` }}>
          <div style={{ fontSize: 12.5, color: BRAND.mute }}>{L('Pensijas mērķis', 'Pension goal')}</div>
          <div style={{ marginTop: 6 }}>
            <span style={{ fontSize: 28, fontWeight: 700, color: BRAND.promo, letterSpacing: 0 }}>
              {formatMoney(selectedScenario.todayMoneyMonthly)}
            </span>
            <span style={{ fontSize: 15, color: BRAND.mute, fontWeight: 500 }}> / {formatMoney(FUTURE_GOAL)} {L('mēnesī', 'per month')}</span>
          </div>
          <div style={{ marginTop: 12, height: 8, borderRadius: 4, background: BRAND.line, overflow: 'hidden' }}>
            <div style={{ width: `${Math.round(goalProgress * 100)}%`, height: '100%', background: BRAND.promo, borderRadius: 4 }}/>
          </div>
          <div style={{ marginTop: 8, fontSize: 13, color: BRAND.mute, lineHeight: '17px' }}>
            {L(`Pietrūkst ${formatMoney(gapToGoal)} · apmēram ${formatMoney(extraMonthlyNeeded)} papildu mēnesī.`, `${formatMoney(gapToGoal)} short · around ${formatMoney(extraMonthlyNeeded)} extra per month.`)}
          </div>
        </div>

        <div style={{ display: 'flex', gap: 10 }}>
          <ConfigPill icon={<TrophyIcon/>} label={L('Streak', 'Streak')} value={L(`${model.streak} mēneši`, `${model.streak} months`)}/>
          <ConfigPill icon={<PigIcon/>} label={L('Nākamais €5000', 'Next €5000')} value={formatMoney(milestoneLeft)}/>
        </div>

        <div style={{ background: BRAND.card, borderRadius: 12, padding: '18px', border: `1px solid ${BRAND.line}` }}>
          <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: 0 }}>{L('Ko varēsi atļauties', 'What you could afford')}</div>
          <div style={{ fontSize: 12.5, color: BRAND.mute, marginTop: 3 }}>{L('Pensija pret reālajām izmaksām šodien', 'Pension against real costs today')}</div>
          <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
            <LifestyleCard icon={<CarIcon/>} label={L('BMW 3 līzings', 'BMW 3 lease')} cost={790} income={selectedScenario.todayMoneyMonthly}/>
            <LifestyleCard icon={<PigIcon/>} label={L('Pārtika', 'Groceries')} cost={320} income={selectedScenario.todayMoneyMonthly}/>
            <LifestyleCard icon={Icon.goal(BRAND.ink)} label={L('Komunālie', 'Utilities')} cost={160} income={selectedScenario.todayMoneyMonthly}/>
          </div>
        </div>

        <div style={{ background: BRAND.card, borderRadius: 12, padding: '18px', border: `1px solid ${BRAND.line}` }}>
          <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: 0 }}>{L('Kā darbojas dinamiskā iemaksa', 'How the dynamic contribution works')}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 16 }}>
            <StepRow number={1} title={L('Atklāj', 'Discover')} body={L(`"Tu jau būtu uzkrājis ${formatMoney(model.totalDynamic)}" — parādās sākumlapā.`, `"You would already have saved ${formatMoney(model.totalDynamic)}" — shown on the home screen.`)}/>
            <StepRow number={2} title={L('Pielāgo', 'Adjust')} body={L('Nosaki mērķa procentu, drošības buferi, diapazonu un iemaksas datumu.', 'Set the target percentage, safety buffer, range and contribution date.')}/>
            <StepRow number={3} title={L('Automatizē', 'Automate')} body={L('Katru mēnesi sistēma aprēķina drošo iemaksu pēc ienākumiem un tēriņiem.', 'Each month the system calculates a safe contribution from income and spending.')}/>
            <StepRow number={4} title={L('Saņem atskaiti', 'Get a report')} body={L('Pēc katras iemaksas redzi summu, iemeslu un ietekmi uz nākotnes pensiju.', 'After each contribution you see the amount, the reason and the impact on your future pension.')}/>
          </div>
          <div style={{
            marginTop: 16, borderRadius: 12, background: '#F7F2E6',
            border: `1px solid ${BRAND.line}`, padding: '14px 16px',
          }}>
            <div style={{ fontSize: 11.5, textTransform: 'uppercase', letterSpacing: 1, color: BRAND.mute }}>{L('Ikmēneša atskaite', 'Monthly report')}</div>
            <div style={{ marginTop: 6, fontSize: 14, fontWeight: 600, letterSpacing: 0, lineHeight: '20px', color: BRAND.ink }}>
              {L(`Šomēnes tiktu novirzīti ${formatMoney(model.preview.contribution)}, jo pēc algas un tēriņiem paliek ${formatMoney(model.preview.safeToInvest)} droši ieguldāmas naudas. Nodokļu optimizācija prognozē ${formatMoney(model.taxRefund)} atmaksu.`, `This month ${formatMoney(model.preview.contribution)} would be set aside because ${formatMoney(model.preview.safeToInvest)} remains safely investable after salary and spending. Tax optimization forecasts a ${formatMoney(model.taxRefund)} refund.`)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackChev({ onClick }) {
  const { L } = useLanguage();
  return (
    <button type="button" onClick={onClick} style={{
      background: 'transparent', border: 0, padding: '4px 8px 4px 0', cursor: 'pointer',
      display: 'flex', alignItems: 'center', color: BRAND.promo, fontSize: 14, fontWeight: 500,
    }}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M12 5l-5 5 5 5" stroke={BRAND.promo} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      {L('Atpakaļ', 'Back')}
    </button>
  );
}

function OnboardingShell({ step, total, eyebrow, title, subtitle, onBack, children, onNext, nextLabel }) {
  const { L } = useLanguage();
  return (
    <div style={{
      minHeight: 600,
      boxSizing: 'border-box',
      padding: '12px 16px 14px',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'visible',
    }}>
      <div style={{ height: 30, display: 'flex', alignItems: 'center' }}>
        <BackChev onClick={onBack}/>
      </div>
      <div style={{ display: 'flex', gap: 5, marginTop: 8 }}>
        {Array.from({ length: total }).map((_, i) => (
          <div key={i} style={{
            flex: 1,
            height: 3,
            borderRadius: 2,
            background: i <= step ? BRAND.ink : BRAND.line,
          }} aria-hidden="true"/>
        ))}
      </div>
      <div style={{ marginTop: 18 }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, color: BRAND.mute, textTransform: 'uppercase' }}>{eyebrow}</div>
        <div style={{ fontSize: 24, fontWeight: 700, lineHeight: '29px', marginTop: 6 }}>{title}</div>
        {subtitle && <div style={{ fontSize: 13, color: BRAND.mute, lineHeight: '18px', marginTop: 6 }}>{subtitle}</div>}
      </div>
      <div style={{ flex: 1, minHeight: 0, marginTop: 16 }}>
        {children}
      </div>
      <button type="button" onClick={onNext} style={{
        width: '100%',
        minHeight: 50,
        border: 0,
        borderRadius: 15,
        background: BRAND.accent,
        color: BRAND.ink,
        fontSize: 15,
        fontWeight: 700,
        cursor: 'pointer',
        flexShrink: 0,
      }}>{nextLabel || L('Turpināt', 'Continue')}</button>
    </div>
  );
}

function OnboardingCard({ children, style = {} }) {
  return (
    <div style={{
      background: BRAND.card,
      borderRadius: 12,
      padding: '16px',
      boxShadow: '0 2px 8px rgba(17,23,19,0.08)',
      ...style,
    }}>{children}</div>
  );
}

function DynamicPensionOnboarding({ onBack, onComplete, initialConfig = FLUXION_SETTINGS, model = FLUXION_MODEL }) {
  const { L } = useLanguage();
  const GROSS_ESTIMATE_RATIO = 0.75;
  const RECOMMENDED_GROSS_RATE = 10;
  const [step, setStep] = React.useState(0);
  const [mode, setMode] = React.useState(initialConfig.mode || 'dynamic');
  const [salaryAccount] = React.useState('Main account');
  const [salary] = React.useState(model.averageIncome || 2000);
  const [salaryDate] = React.useState('25th of each month');
  const [accountBalance] = React.useState(2300);
  const [targetPct, setTargetPct] = React.useState(10);
  const [buffer, setBuffer] = React.useState(initialConfig.safetyBuffer || 500);
  const [customBuffer, setCustomBuffer] = React.useState(initialConfig.safetyBuffer || 500);
  const [useCustomBuffer, setUseCustomBuffer] = React.useState(![300, 500, 1000].includes(initialConfig.safetyBuffer || 500));
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
  const estimatedGrossSalary = Math.round(salary / GROSS_ESTIMATE_RATIO);
  const contributionFromGrossPct = pct => Math.round(estimatedGrossSalary * (pct / 100));
  const netRateFromGrossPct = pct => Math.min(1, contributionFromGrossPct(pct) / Math.max(1, salary));
  const baseContribution = contributionFromGrossPct(targetPct);
  const expectedSpending = model.averageSpending;
  const recurringPayments = model.obligationsTotal;
  const balanceAfterPlannedOutflows = accountBalance - expectedSpending - recurringPayments;
  const safeAvailable = Math.max(0, balanceAfterPlannedOutflows - buffer - balanceRiskAdjustment);
  const estimatedContribution = Math.min(baseContribution, maxContribution, safeAvailable);
  const finalContribution = Math.max(0, estimatedContribution < skipBelow ? 0 : estimatedContribution);
  const recommendedContribution = contributionFromGrossPct(RECOMMENDED_GROSS_RATE);
  const maxEligibleContribution = Math.round(Math.min(4000, estimatedGrossSalary * 12 * 0.1));
  const alreadyContributed = model.totalDynamic;
  const remainingThisYear = Math.max(0, maxEligibleContribution - alreadyContributed);
  const suggestedMonthly = Math.round(remainingThisYear / 12);
  const taxOptimization = taxOption !== 'keep';
  const SectionLabel = ({ children }) => (
    <div style={{ fontSize: 13, fontWeight: 700, color: BRAND.ink, marginBottom: 8 }}>{children}</div>
  );

  const Option = ({ title, body, active, onClick, recommended }) => (
    <button type="button" aria-pressed={active} onClick={onClick} style={{
      width: '100%', textAlign: 'left', border: `1px solid ${active ? BRAND.promo : BRAND.line}`,
      background: active ? '#F1ECDD' : BRAND.card, borderRadius: 12, padding: '14px 16px',
      cursor: 'pointer', minHeight: 74, marginTop: 8,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
        <span style={{ fontSize: 15, fontWeight: 700, color: BRAND.ink }}>{title}</span>
        {recommended && <span style={{ fontSize: 12, fontWeight: 700, color: BRAND.promo }}>{L('Ieteicams', 'Recommended')}</span>}
      </div>
      <div style={{ fontSize: 13, color: BRAND.mute, lineHeight: '18px', marginTop: 4 }}>{body}</div>
    </button>
  );

  const ToggleRow = ({ label, checked, onChange }) => (
    <label style={{ minHeight: BRAND.minTouch, display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: BRAND.ink, cursor: 'pointer' }}>
      <input type="checkbox" checked={checked} onChange={e => onChange(e.target.checked)} style={{ width: 18, height: 18, accentColor: BRAND.promo }}/>
      <span>{label}</span>
    </label>
  );

  function finish() {
    onComplete({
      goalMonthly: 1200,
      targetRate: netRateFromGrossPct(targetPct),
      minRate: Math.max(0.01, netRateFromGrossPct(Math.max(1, targetPct - 2))),
      maxRate: Math.min(1, netRateFromGrossPct(Math.min(100, targetPct + 2))),
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
      paused: false,
    });
  }

  if (step === 0) return (
    <OnboardingShell step={step} total={STEPS} eyebrow={L('Dinamisks pensiju 3. līmenis', 'Dynamic 3rd pillar pension')} title={L('Iestati savu pensiju 3. līmeni', 'Set up your 3rd pillar pension')} subtitle={L('Izvēlies, kādu daļu no algas vēlies ieguldīt. Lietotne pielāgo vai izlaiž iemaksas, balstoties uz algu, konta atlikumu, tēriņiem un drošības buferi.', 'Choose what percentage of your salary you want to invest. The app adjusts or skips contributions based on your salary, account balance, spending, and safety buffer.')} onBack={onBack} onNext={() => setStep(1)} nextLabel={L('Sākt', 'Get started')}>
      <OnboardingCard>
        <MiniSetting label={L('Iemaksu veids', 'Contribution type')} value={L('Dinamisks 3. līmenis', 'Dynamic 3rd pillar')}/>
        <MiniSetting label={L('Pārbaudes pirms ieguldīšanas', 'Checks before investing')} value={L('Alga, atlikums, tēriņi', 'Salary, balance, spending')}/>
        <MiniSetting label={L('Kontrole', 'Control')} value={L('Paziņojums pirms ieguldīšanas', 'Notification before investing')}/>
      </OnboardingCard>
    </OnboardingShell>
  );

  if (step === 1) return (
    <OnboardingShell step={step} total={STEPS} eyebrow={L('Iemaksu režīms', 'Contribution mode')} title={L('Izvēlies, kā vēlies veikt iemaksas', 'Choose how you want to contribute')} onBack={() => setStep(0)} onNext={() => setStep(2)}>
      <Option title={L('Fiksēts', 'Fixed')} body={L('Katru mēnesi viena un tā pati summa.', 'Same amount every month.')} active={mode === 'fixed'} onClick={() => setMode('fixed')}/>
      <Option title={L('Dinamisks', 'Dynamic')} body={L('Iegulda procentu no algas un pielāgojas tavai finanšu situācijai.', 'Contributes a percentage of your salary and adjusts based on your financial situation.')} active={mode === 'dynamic'} onClick={() => setMode('dynamic')} recommended/>
      <Option title={L('Nodokļu mērķis', 'Tax target')} body={L('Palīdz sasniegt gada summu maksimālajam nodokļu ieguvumam.', 'Helps you reach the yearly amount needed for the maximum eligible tax benefit.')} active={mode === 'tax'} onClick={() => { setMode('tax'); setTaxOption('adjust'); }}/>
    </OnboardingShell>
  );

  if (step === 2) return (
    <OnboardingShell step={step} total={STEPS} eyebrow={L('Algas konts', 'Salary account')} title={L('Izvēlies savu algas kontu', 'Choose your salary account')} subtitle={L('Šis konts tiks izmantots, lai noteiktu algu, tēriņus, regulāros maksājumus un pieejamo atlikumu.', 'This account will be used to detect your salary, spending, recurring payments, and available balance.')} onBack={() => setStep(1)} onNext={() => setStep(3)}>
      <OnboardingCard>
        <MiniSetting label={L('Konts', 'Account')} value={L('Galvenais konts', 'Main account')}/>
        <MiniSetting label={L('Atpazītie neto ienākumi', 'Detected net income')} value={formatMoney(salary)}/>
        <MiniSetting label={L('Atpazītais algas datums', 'Detected salary date')} value={L('Katra mēneša 25. datums', '25th of each month')}/>
        <MiniSetting label={L('Konta atlikums', 'Account balance')} value={formatMoney(accountBalance)}/>
      </OnboardingCard>
      <div style={{ marginTop: 12, fontSize: 13, lineHeight: '18px', color: BRAND.mute }}>{L('Ja alga netiek atpazīta, iemaksa netiek veikta.', 'If no salary is detected, no contribution is made.')}</div>
    </OnboardingShell>
  );

  if (step === 3) return (
    <OnboardingShell step={step} total={STEPS} eyebrow={L('Algas procents', 'Salary percentage')} title={L('Izvēlies savu iemaksas procentu', 'Choose your contribution percentage')} subtitle={L('Aprēķins balstās uz jūsu ienākumiem un izdevumiem. Pirms ieguldīšanas tiek pārbaudīts drošs konta atlikums.', 'The calculation is based on your income and expenses. Before investing, a safe account balance is checked.')} onBack={() => setStep(2)} onNext={() => setStep(4)}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, paddingBottom: 18 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <label htmlFor="target-percent" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, fontSize: 14, fontWeight: 700 }}>
            <span>{L('No savas algas vēlos ieguldīt', 'From my salary I want to invest')}</span>
            <span style={{ fontSize: 20, fontWeight: 700, color: BRAND.promo, flexShrink: 0 }}>{targetPct}%</span>
          </label>
          <input id="target-percent" type="range" min={1} max={100} step={1} value={targetPct} aria-valuetext={L(`${targetPct}% no algas`, `${targetPct}% of salary`)} onChange={e => setTargetPct(Number(e.target.value))} style={{ width: '100%', accentColor: BRAND.promo, cursor: 'pointer' }}/>
        </div>
        <OnboardingCard>
          <MiniSetting label={L('Bruto alga (novērtēta)', 'Estimated gross salary')} value={formatMoney(estimatedGrossSalary)}/>
          <MiniSetting label={L('Izvēlētā likme', 'Selected rate')} value={`${targetPct}%`}/>
          <MiniSetting label={L('Sākuma iemaksa', 'Starting contribution')} value={formatMoney(baseContribution)}/>
        </OnboardingCard>
        <OnboardingCard style={{ background: '#F7F2E6', boxShadow: 'none', border: `1px solid ${BRAND.line}`, padding: '18px 16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: BRAND.promo }}>
              {L('INDEXO ieteikums', 'INDEXO suggestion')}
            </div>
            <div style={{ fontSize: 14, fontWeight: 700, lineHeight: '20px', color: BRAND.ink }}>
              {L('Ieteicamais līmenis: līdz 10% no bruto algas.', 'Recommended level: up to 10% of gross salary.')}
            </div>
            <div style={{ fontSize: 13, lineHeight: '19px', color: BRAND.mute }}>
              {L('Šis līmenis ļauj pilnvērtīgi izmantot nodokļu atmaksas priekšrocības un veidot stabilus ilgtermiņa uzkrājumus. Bruto alga tiek novērtēta, balstoties uz jūsu neto ienākumiem.', 'This level helps you make full practical use of tax refund benefits while building stable long-term savings. Gross salary is estimated based on your net income.')}
            </div>
          </div>
        </OnboardingCard>
        <OnboardingCard style={{ boxShadow: 'none', background: '#F1ECDD' }}>
          <MiniSetting label={L('Pašreizējais konta atlikums', 'Current account balance')} value={formatMoney(accountBalance)}/>
          <MiniSetting label={L('Vidējie iepriekšējie tēriņi', 'Avg. past spending')} value={formatMoney(expectedSpending)}/>
          <MiniSetting label={L('Gaidāmie regulārie maksājumi', 'Upcoming recurring payments')} value={formatMoney(recurringPayments)}/>
          <MiniSetting label={L('Vidējais nesenais atlikums', 'Average recent balance')} value={formatMoney(averageRecentBalance)}/>
          <MiniSetting label={L('Zemākais nesenais atlikums', 'Lowest recent balance')} value={formatMoney(lowestRecentBalance)}/>
          <MiniSetting label={L('Aprēķinātā drošā iemaksa', 'Estimated safe contribution')} value={formatMoney(finalContribution)}/>
          {finalContribution === 0 && (
            <div style={{ marginTop: 8, fontSize: 13, lineHeight: '18px', color: BRAND.mute }}>
              {L('Pašlaik iemaksa nav ieteicama, lai saglabātu minimālo drošības rezervi.', 'A contribution is currently not recommended in order to preserve the minimum safety reserve.')}
            </div>
          )}
        </OnboardingCard>
      </div>
    </OnboardingShell>
  );

  if (step === 4) return (
    <OnboardingShell step={step} total={STEPS} eyebrow={L('Drošības atlikums', 'Safety balance')} title={L('Iestati savu minimālo atlikumu', 'Set your minimum balance')} subtitle={L('Lietotne neieguldīs, ja konta atlikums pēc tam būtu zem šīs summas.', 'The app will not invest if your account would fall below this amount.')} onBack={() => setStep(3)} onNext={() => setStep(5)}>
      <div role="group" aria-label={L('Minimālā atlikuma izvēles', 'Minimum balance options')} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        {[300, 500, 1000].map(amount => <ModeButton key={amount} label={formatMoney(amount)} active={!useCustomBuffer && buffer === amount} onClick={() => { setUseCustomBuffer(false); setBuffer(amount); }}/>)}
        <ModeButton label={L('Cita summa', 'Custom amount')} active={useCustomBuffer} onClick={() => { setUseCustomBuffer(true); setBuffer(customBuffer); }}/>
      </div>
      {useCustomBuffer && (
      <label style={{ display: 'block', marginTop: 14, fontSize: 13, color: BRAND.mute }}>
        {L('Cita summa', 'Custom amount')}
        <input type="number" min={0} value={customBuffer} onChange={e => { const next = Number(e.target.value); setCustomBuffer(next); setBuffer(next); setUseCustomBuffer(true); }} style={{ width: '100%', marginTop: 6, minHeight: 44, border: `1px solid ${BRAND.line}`, borderRadius: 10, padding: '0 12px', font: 'inherit' }}/>
      </label>
      )}
      <OnboardingCard style={{ marginTop: 14, boxShadow: 'none', background: '#F1ECDD' }}>
        <MiniSetting label={L('Minimālais atlikums', 'Minimum balance')} value={formatMoney(buffer)}/>
        <div style={{ marginTop: 8, fontSize: 13, color: BRAND.mute, lineHeight: '18px' }}>{L(`Ja atlikums nokristu zem ${formatMoney(buffer)}, iemaksa tiks izlaista.`, `If your balance would drop below ${formatMoney(buffer)}, the contribution is skipped.`)}</div>
      </OnboardingCard>
    </OnboardingShell>
  );

  if (step === 5) return (
    <OnboardingShell step={step} total={STEPS} eyebrow={L('Iemaksas limits', 'Contribution limit')} title={L('Iestati savu maksimālo mēneša iemaksu', 'Set your maximum monthly contribution')} subtitle={L('Tas pasargā no pārāk lielām iemaksām pat tad, ja alga palielinās.', 'This protects you from contributing more than you are comfortable with, even if your salary increases.')} onBack={() => setStep(4)} onNext={() => setStep(6)}>
      <label style={{ display: 'block', fontSize: 14, fontWeight: 700 }}>{L('Nekad neiemaksāt vairāk par šo summu mēnesī', 'Never contribute more than per month')}
        <input type="number" min={0} value={maxContribution} onChange={e => setMaxContribution(Number(e.target.value))} style={{ width: '100%', marginTop: 8, minHeight: 44, border: `1px solid ${BRAND.line}`, borderRadius: 10, padding: '0 12px', font: 'inherit' }}/>
      </label>
      <label style={{ display: 'block', marginTop: 14, fontSize: 13, color: BRAND.mute }}>{L('Izlaist iemaksu, ja aprēķinātā summa ir zem', 'Skip contribution if calculated amount is below')}
        <input type="number" min={0} value={skipBelow} onChange={e => setSkipBelow(Number(e.target.value))} style={{ width: '100%', marginTop: 6, minHeight: 44, border: `1px solid ${BRAND.line}`, borderRadius: 10, padding: '0 12px', font: 'inherit' }}/>
      </label>
      <OnboardingCard style={{ marginTop: 14 }}>
        <MiniSetting label={L('Alga', 'Salary')} value={formatMoney(5000)}/>
        <MiniSetting label={L('Izvēlētā likme', 'Selected rate')} value="5%"/>
        <MiniSetting label={L('Bāzes iemaksa', 'Base contribution')} value={formatMoney(250)}/>
        <MiniSetting label={L('Maksimālais limits', 'Maximum limit')} value={formatMoney(maxContribution)}/>
        <MiniSetting label={L('Galīgā iemaksa', 'Final contribution')} value={formatMoney(Math.min(250, maxContribution))}/>
      </OnboardingCard>
    </OnboardingShell>
  );

  if (step === 6) return (
    <OnboardingShell step={step} total={STEPS} eyebrow={L('Nodokļu ieguvums', 'Tax benefit')} title={L('Optimizē savu nodokļu ieguvumu', 'Optimize your tax benefit')} subtitle={L('Balstoties uz taviem ienākumiem, lietotne aprēķina, cik vari iemaksāt šogad, lai sasniegtu maksimālo nodokļu ieguvumu.', 'Based on your income, the app estimates how much you can contribute this year to reach the maximum eligible tax benefit.')} onBack={() => setStep(5)} onNext={() => setStep(7)}>
      <OnboardingCard>
        <MiniSetting label={L('Aprēķinātie gada bruto ienākumi', 'Estimated yearly gross income')} value={formatMoney(estimatedGrossSalary * 12)}/>
        <MiniSetting label={L('Maksimālā atbilstošā iemaksa', 'Maximum eligible contribution')} value={formatMoney(maxEligibleContribution)}/>
        <MiniSetting label={L('Jau iemaksāts', 'Already contributed')} value={formatMoney(alreadyContributed)}/>
        <MiniSetting label={L('Atlikums šim gadam', 'Remaining this year')} value={formatMoney(remainingThisYear)}/>
        <MiniSetting label={L('Ieteicamā mēneša summa', 'Suggested monthly amount')} value={formatMoney(suggestedMonthly)}/>
      </OnboardingCard>
      <Option title={L('Saglabāt izvēlēto procentu', 'Keep my selected percentage')} body={L('Izmantot izvēlēto algas procentu bez automātiskām nodokļu mērķa korekcijām.', 'Use the selected salary percentage without automatic tax-target changes.')} active={taxOption === 'keep'} onClick={() => setTaxOption('keep')}/>
      <Option title={L('Pielāgot iemaksas nodokļu mērķim', 'Adjust contributions to reach tax target')} body={L('Palielināt vai samazināt mēneša iemaksas, lai sasniegtu atbilstošo gada summu.', 'Increase or reduce monthly contributions to aim for the eligible yearly amount.')} active={taxOption === 'adjust'} onClick={() => setTaxOption('adjust')}/>
      <Option title={L('Jautāt pirms iemaksu palielināšanas', 'Ask me before increasing contributions')} body={L('Nosūtīt apstiprinājumu pirms tiek piemērots ar nodokļiem saistīts pieaugums.', 'Send a confirmation before any tax-driven increase is applied.')} active={taxOption === 'ask'} onClick={() => setTaxOption('ask')}/>
    </OnboardingShell>
  );

  if (step === 7) return (
    <OnboardingShell step={step} total={STEPS} eyebrow={L('Priekšskatījums', 'Preview')} title={L('Tavas nākamās iemaksas aprēķins', 'Your next contribution estimate')} onBack={() => setStep(6)} onNext={() => setStep(8)}>
      <OnboardingCard>
        <MiniSetting label={L('Atpazītie neto ienākumi', 'Detected net income')} value={formatMoney(salary)}/>
        <MiniSetting label={L('Novērtētā bruto alga', 'Estimated gross salary')} value={formatMoney(estimatedGrossSalary)}/>
        <MiniSetting label={L('Izvēlētā likme', 'Selected rate')} value={`${targetPct}%`}/>
        <MiniSetting label={L('Bāzes iemaksa', 'Base contribution')} value={formatMoney(baseContribution)}/>
      </OnboardingCard>
      <OnboardingCard style={{ marginTop: 12 }}>
        <MiniSetting label={L('Pašreizējais atlikums', 'Current balance')} value={formatMoney(accountBalance)}/>
        <MiniSetting label={L('Prognozētie tēriņi', 'Expected spending')} value={L(`${formatMoney(expectedSpending)} vidēji`, `${formatMoney(expectedSpending)} avg.`)}/>
        <MiniSetting label={L('Gaidāmie regulārie maksājumi', 'Upcoming recurring payments')} value={formatMoney(recurringPayments)}/>
        <MiniSetting label={L('Drošības atlikums', 'Safety balance')} value={formatMoney(buffer)}/>
        <MiniSetting label={L('Vidējais nesenais atlikums', 'Average recent balance')} value={formatMoney(averageRecentBalance)}/>
        <MiniSetting label={L('Zemākais nesenais atlikums', 'Lowest recent balance')} value={formatMoney(lowestRecentBalance)}/>
        <MiniSetting label={L('Atlikuma tendence', 'Balance trend')} value={balanceTrend >= 0 ? `+${formatMoney(balanceTrend)}` : formatMoney(balanceTrend)}/>
        <MiniSetting label={L('Vēsturiskā atlikuma korekcija', 'Past-balance adjustment')} value={formatMoney(balanceRiskAdjustment)}/>
        <MiniSetting label={L('Droši pieejamā summa', 'Safe available amount')} value={formatMoney(safeAvailable)}/>
        <MiniSetting label={L('Aprēķinātā iemaksa', 'Estimated contribution')} value={formatMoney(finalContribution)}/>
      </OnboardingCard>
      <OnboardingCard style={{ marginTop: 12, boxShadow: 'none', background: '#F1ECDD' }}>
        <MiniSetting label={L('Alga nav atpazīta', 'No salary detected')} value={formatMoney(0)}/>
        <MiniSetting label={L('Atlikums zem drošības limita', 'Balance below safety limit')} value={formatMoney(0)}/>
        <MiniSetting label={L('Liela vienreizēja iemaksa', 'Large one-time inflow')} value={L('Bez automātiska palielinājuma', 'No auto-increase')}/>
      </OnboardingCard>
    </OnboardingShell>
  );

  if (step === 8) return (
    <OnboardingShell step={step} total={STEPS} eyebrow={L('Paziņojumi', 'Notifications')} title={L('Saglabā kontroli', 'Stay in control')} subtitle={L('Pirms katras iemaksas saņemsi paziņojumu ar plānoto summu.', 'Before each contribution, you will receive a notification with the planned amount.')} onBack={() => setStep(7)} onNext={() => setStep(9)}>
      <OnboardingCard>
        <SectionLabel>{L('Iestatījumi', 'Settings')}</SectionLabel>
        <ToggleRow label={L('Paziņot man 2 dienas pirms algas dienas', 'Notify me 2 days before salary day')} checked={notifyBefore} onChange={setNotifyBefore}/>
        <ToggleRow label={L('Atļaut atsaukšanu 24 stundu laikā pēc iemaksas', 'Allow 24-hour reversal after contribution')} checked={allowReversal} onChange={setAllowReversal}/>
        <ToggleRow label={L('Sūtīt ikmēneša pensijas kopsavilkumu', 'Send monthly pension summary')} checked={monthlySummary} onChange={setMonthlySummary}/>
        <ToggleRow label={L('Sūtīt atgādinājumus par nodokļu ieguvumu', 'Send occasional tax benefit reminders')} checked={taxReminders} onChange={setTaxReminders}/>
      </OnboardingCard>
    </OnboardingShell>
  );

  if (step === 9) return (
    <OnboardingShell step={step} total={STEPS} eyebrow={L('Pārskats', 'Review')} title={L('Pārskati savu iestatījumu', 'Review your setup')} onBack={() => setStep(8)} onNext={() => setStep(10)} nextLabel={L('Aktivizēt dinamiskās iemaksas', 'Activate dynamic contributions')}>
      <OnboardingCard>
        <MiniSetting label={L('Režīms', 'Mode')} value={mode === 'fixed' ? L('Fiksēts', 'Fixed') : mode === 'tax' ? L('Nodokļu mērķis', 'Tax target') : L('Dinamisks', 'Dynamic')}/>
        <MiniSetting label={L('Algas konts', 'Salary account')} value={L('Galvenais konts', 'Main account')}/>
        <MiniSetting label={L('Mērķa iemaksa', 'Target contribution')} value={L(`${targetPct}% no bruto algas`, `${targetPct}% of gross salary`)}/>
        <MiniSetting label={L('Minimālais atlikums', 'Minimum balance')} value={formatMoney(buffer)}/>
        <MiniSetting label={L('Maksimālā mēneša iemaksa', 'Maximum monthly contribution')} value={formatMoney(maxContribution)}/>
        <MiniSetting label={L('Nodokļu optimizācija', 'Tax optimization')} value={taxOptimization ? L('Ieslēgta', 'Enabled') : L('Izslēgta', 'Disabled')}/>
        <MiniSetting label={L('Paziņojums', 'Notification')} value={notifyBefore ? L('2 dienas pirms algas dienas', '2 days before salary day') : L('Izslēgts', 'Disabled')}/>
        <MiniSetting label={L('24 stundu atsaukšana', '24-hour reversal')} value={allowReversal ? L('Ieslēgta', 'Enabled') : L('Izslēgta', 'Disabled')}/>
      </OnboardingCard>
      <button type="button" onClick={() => setStep(1)} style={{ width: '100%', minHeight: 48, marginTop: 12, border: `1px solid ${BRAND.line}`, borderRadius: 12, background: BRAND.card, color: BRAND.ink, fontWeight: 700, cursor: 'pointer' }}>
        {L('Rediģēt iestatījumus', 'Edit settings')}
      </button>
    </OnboardingShell>
  );

  return (
    <OnboardingShell step={step} total={STEPS} eyebrow={L('Aktīvs', 'Active')} title={L('Tavs dinamiskais pensiju 3. līmenis ir aktīvs', 'Your dynamic 3rd pillar plan is active')} subtitle={L('Tava pirmā iemaksa tiks aprēķināta pirms nākamās algas dienas. Pirms jebkāda ieguldījuma saņemsi paziņojumu.', 'Your first contribution will be calculated before your next salary date. You will be notified before anything is invested.')} onBack={() => setStep(9)} onNext={finish} nextLabel={L('Skatīt pensijas paneli', 'View pension dashboard')}>
      <OnboardingCard>
        <MiniSetting label={L('Nākamais algas datums', 'Next salary date')} value={L('Katra mēneša 25. datums', '25th of each month')}/>
        <MiniSetting label={L('Sagaidāmais iemaksu diapazons', 'Expected contribution range')} value={L(`${formatMoney(0)} līdz ${formatMoney(Math.min(baseContribution, maxContribution))}`, `${formatMoney(0)} to ${formatMoney(Math.min(baseContribution, maxContribution))}`)}/>
        <MiniSetting label={L('Pašreizējā pensijas prognoze', 'Current pension projection')} value={`${formatMoney(FUTURE_SCENARIOS.balanced.todayMoneyMonthly)}/${L('mēn.', 'month')}`}/>
      </OnboardingCard>
    </OnboardingShell>
  );
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
    setConfig(current => ({ ...current, ...patch }));
    if ('mode' in patch || 'paused' in patch) setReversed(false);
  }

  if (pensionView === 'onboarding3') {
    return (
      <DynamicPensionOnboarding
        initialConfig={config}
        model={model}
        onBack={() => setPensionView('main')}
        onComplete={(nextConfig) => {
          setConfig(current => ({ ...current, ...nextConfig }));
          setActivated(true);
          setReversed(false);
          setPensionView('main');
        }}
      />
    );
  }
  if (pensionView === 'analysis') {
    return <PensionAnalysis onBack={() => setPensionView('main')} selectedMonthIndex={selectedMonthIndex} setSelectedMonthIndex={setSelectedMonthIndex} model={model} config={config}/>;
  }
  if (pensionView === 'projection') {
    return <PensionProjection onBack={() => setPensionView('main')} scenario={scenario} setScenario={setScenario}/>;
  }
  if (pensionView === 'goals') {
    return <PensionGoals onBack={() => setPensionView('main')} scenario={scenario} model={model} config={config}/>;
  }
  return <PensionMain onNav={setPensionView} activated={activated} scenario={scenario} config={config} model={model} onConfigChange={updateConfig} reversed={reversed} onReverse={() => setReversed(true)}/>;
}


function NavItem({ icon, label, active, onClick }) {
  return (
    <button type="button" aria-current={active ? 'page' : undefined} onClick={onClick} style={{
      flex: 1, background: 'transparent', border: 0, cursor: 'pointer',
      display: 'flex', alignItems: 'center', gap: 10, padding: '6px 10px', minHeight: 48,
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
  const [tab, setTab] = React.useState('Pensija');
  const [promo, setPromo] = React.useState(0);
  const [nav, setNav] = React.useState('Home');
  const [dismissed, setDismissed] = React.useState(false);
  const [language, setLanguage] = React.useState('lv');
  const [profileMenuOpen, setProfileMenuOpen] = React.useState(false);
  const profileMenuRef = React.useRef(null);

  const L = (lv, en) => (language === 'lv' ? lv : en);
  const languageValue = React.useMemo(() => ({
    language,
    setLanguage,
    L: (lv, en) => (language === 'lv' ? lv : en),
    monthLabel: (label) => translateMonth(label, language),
    shortMonthLabel: (label) => translateMonth(label, language).slice(0, 3),
    scenarioLabel: (key) => translateScenarioLabel(key, language),
    scenarioNote: (key) => translateScenarioNote(key, language),
  }), [language]);

  React.useEffect(() => {
    const onPointerDown = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setProfileMenuOpen(false);
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, []);

  const tabs = [
    { key: 'Konti', label: L('Konti', 'Accounts') },
    { key: 'Pensija', label: L('Pensija', 'Pension') },
    { key: 'Uzkrājumi', label: L('Uzkrājumi', 'Savings') },
    { key: 'Aizdevumi', label: L('Aizdevumi', 'Loans') },
  ];
  const promos = ['indigo', 'cashback', 'goal'];
  const currentPromo = tweaks.promo === 'auto' ? promos[promo] : tweaks.promo;

  return (
    <LanguageContext.Provider value={languageValue}>
    <div style={{
      background: BRAND.bg, height: '100%', display: 'flex', flexDirection: 'column',
      overflow: 'hidden', fontFamily: '"Gibson", "IBM Plex Sans", "Aptos", system-ui, sans-serif', color: BRAND.ink,
    }}>
      <div data-app-scroll="true" style={{ flex: 1, overflowY: 'auto', paddingTop: 60 }}>
      {/* ——— Header ——— */}
      <div style={{ padding: '12px 20px 4px', display: 'flex', alignItems: 'center', gap: 14 }}>
        <div ref={profileMenuRef} style={{ flex: 1, position: 'relative' }}>
          <button type="button" aria-label={L('Mainīt valodu', 'Change language')} onClick={() => setProfileMenuOpen(current => !current)} style={{
            width: '100%', background: 'transparent', border: 0, padding: 0,
            display: 'flex', alignItems: 'center', gap: 14, textAlign: 'left', cursor: 'pointer',
          }}>
            <div style={{
              width: 40, height: 40, borderRadius: 10, background: '#9A968A',
              color: '#fff', fontWeight: 600, fontSize: 14, letterSpacing: 0.5,
              display: 'grid', placeItems: 'center', flexShrink: 0,
            }}>ES</div>
            <div style={{ flex: 1, fontSize: 17, fontWeight: 600, letterSpacing: 0 }}>
              Edvards Markuss Selikovs
            </div>
          </button>
          {profileMenuOpen && (
            <div style={{
              position: 'absolute', top: 'calc(100% + 8px)', left: 0, zIndex: 40,
              background: BRAND.card, border: `1px solid ${BRAND.line}`, borderRadius: 12,
              padding: 6, boxShadow: '0 8px 18px rgba(17,23,19,0.12)',
            }}>
              {[
                ['lv', 'Latviski'],
                ['en', 'English'],
              ].map(([value, label]) => (
                <button key={value} type="button" onClick={() => { setLanguage(value); setProfileMenuOpen(false); }} style={{
                  display: 'block', width: '100%', border: 0, borderRadius: 8, padding: '8px 10px',
                  background: language === value ? '#F1ECDD' : 'transparent',
                  color: BRAND.ink, fontSize: 12.5, fontWeight: language === value ? 700 : 500, textAlign: 'left', cursor: 'pointer',
                }}>
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>
        <button type="button" aria-label={L('Atvērt ziņojumus', 'Open messages')} style={{ background: 'transparent', border: 0, padding: 4, cursor: 'pointer', minWidth: BRAND.minTouch, minHeight: BRAND.minTouch }}>
          {Icon.chat(24)}
        </button>
      </div>

      {/* ——— Tabs ——— */}
      <div role="tablist" aria-label={L('Sadaļas', 'Sections')} style={{ display: 'flex', padding: '12px 16px 0', borderBottom: `1px solid ${BRAND.line}` }}>
        {tabs.map(({ key, label }) => (
          <Tab key={key} label={label} active={tab === key} onClick={() => setTab(key)} />
        ))}
      </div>

      {tab === 'Pensija' ? <FluxionPensijaScreen/> : tab === 'Konti' ? (
      <>
      {/* ——— Account card ——— */}
      <div style={{ padding: '16px 16px 0' }}>
        <div style={{
          background: '#EAE6DB', borderRadius: 12, padding: '16px 20px',
          position: 'relative', overflow: 'hidden', minHeight: 150,
          boxShadow: '0 1px 2px rgba(30,25,10,0.04), 0 6px 16px rgba(30,25,10,0.05)',
        }}>
          <CardImagery/>
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 200 }}>
            <div style={{ fontSize: 15, fontWeight: 600 }}>{L('Norēķinu konts', 'Current account')}</div>
            <div style={{
              fontSize: 11.5, color: BRAND.mute, marginTop: 2, display: 'flex', alignItems: 'center', gap: 3,
              letterSpacing: 0, whiteSpace: 'nowrap',
            }}>
              LV82 LMNX 1001 0100 6535 1
              <span style={{ marginLeft: 2, display: 'inline-flex' }}>{Icon.chev(10, BRAND.mute, 2.9)}</span>
            </div>

            <div style={{
              marginTop: 14, display: 'inline-flex', alignItems: 'baseline', gap: 2,
              borderBottom: `3px solid ${BRAND.accent}`, paddingBottom: 2,
            }}>
              <span style={{ fontSize: 30, fontWeight: 500, letterSpacing: 0 }}>€</span>
              <span style={{
                fontSize: 46, fontWeight: 500, lineHeight: '46px', letterSpacing: 0,
              }}>0</span>
              <span style={{ fontSize: 22, fontWeight: 500, letterSpacing: 0, marginLeft: 2 }}>.00</span>
            </div>

            <div style={{
              marginTop: 8, fontSize: 13, color: BRAND.promo, display: 'flex',
              alignItems: 'center', gap: 6,
            }}>
              {L('Nopelnītie procenti', 'Earned interest')} {Icon.info(13, BRAND.promo)}
            </div>
          </div>
        </div>
      </div>

      {/* ——— Quick actions ——— */}
      <div style={{ display: 'flex', padding: '20px 20px 6px', gap: 8 }}>
        <QuickAction icon={Icon.card()} label={L('Izveidot karti', 'Create card')} ariaLabel={L('Izveidot karti', 'Create card')}/>
        <QuickAction icon={Icon.send()} label={language === 'lv' ? <>Sūtīt,<br/>pieprasīt</> : <>Send,<br/>request</>} ariaLabel={L('Sūtīt vai pieprasīt', 'Send or request')}/>
        <QuickAction icon={Icon.chart()} label={L('Papildināt', 'Add funds')} ariaLabel={L('Papildināt', 'Add funds')}/>
      </div>

      {/* ——— Promo carousel ——— */}
      {!dismissed && (
        <div style={{ padding: '16px 16px 0' }}>
          {currentPromo === 'indigo' && <PromoIndigo onClose={() => setDismissed(true)}/>}
          {currentPromo === 'cashback' && <PromoCashback onClose={() => setDismissed(true)}/>}
          {currentPromo === 'goal' && <PromoGoal onClose={() => setDismissed(true)}/>}

          {tweaks.promo === 'auto' && (
            <div role="group" aria-label={L('Piedāvājumu karuselis', 'Offer carousel')} style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 14 }}>
              {promos.map((_, i) => (
                <button type="button" key={i} aria-label={L(`Rādīt ${i + 1}. piedāvājumu`, `Show offer ${i + 1}`)} aria-pressed={i === promo} onClick={() => setPromo(i)} style={{
                  width: 18, height: 18, borderRadius: 9, padding: 0,
                  background: 'transparent', border: 0, cursor: 'pointer',
                  display: 'grid', placeItems: 'center',
                }}>
                  <span aria-hidden="true" style={{
                    width: 6, height: 6, borderRadius: 3,
                    background: i === promo ? BRAND.ink : '#CFCABD',
                    transform: i === promo ? 'scaleX(3)' : 'scaleX(1)',
                    transition: 'transform 0.25s',
                  }}/>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ——— Transactions ——— */}
      <div style={{ padding: '28px 20px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: 0 }}>{L('Darījumi', 'Transactions')}</div>
          {Icon.dots()}
        </div>
        <div style={{ fontSize: 14, color: BRAND.mute, marginTop: 8 }}>
          {L('Tavi darījumi parādīsies šeit', 'Your transactions will appear here')}
        </div>
      </div>

      <div style={{ height: 1, background: BRAND.line, margin: '20px 20px 0' }}/>

      {/* ——— Quick contacts ——— */}
      <div style={{ padding: '20px 20px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: 0 }}>{L('Ātrie kontakti', 'Quick contacts')}</div>
          {Icon.dots()}
        </div>
      </div>
      </>
      ) : (
        <div style={{ padding: '40px 24px', textAlign: 'center', color: BRAND.mute, fontSize: 14 }}>
          {L(`${tab} — drīzumā`, `${tabs.find(item => item.key === tab)?.label || tab} — coming soon`)}
        </div>
      )}
      <div style={{ height: 16 }}/>
      </div>

      {/* ——— Bottom nav ——— */}
      <div style={{ flexShrink: 0, padding: '10px 12px 18px' }}>
        <div style={{
          background: BRAND.card, borderRadius: 16,
          padding: '7px 8px', display: 'flex', gap: 0, alignItems: 'center',
          boxShadow: '0 2px 8px rgba(17,23,19,0.10)',
        }}>
          <NavItem icon={Icon.home(nav === 'Home')} label={L('Sākums', 'Home')}
                   active={nav === 'Home'} onClick={() => setNav('Home')}/>
          <NavItem icon={Icon.swap} label={L('Maksājumi', 'Payments')} active={nav === 'Pay'} onClick={() => setNav('Pay')}/>
          <NavItem icon={Icon.grid} label={L('Viss', 'More')} active={nav === 'More'} onClick={() => setNav('More')}/>
        </div>
      </div>
    </div>
    </LanguageContext.Provider>
  );
}

window.Home = Home;
