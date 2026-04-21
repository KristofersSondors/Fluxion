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
  minRate: 0.05,
  maxRate: 0.15,
  safetyBuffer: 300,
  payday: 25,
  fixedContribution: 180,
};

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

function calculateDynamicContribution(month) {
  const afterSalary = month.balanceBefore + month.income;
  const safeToInvest = Math.max(0, afterSalary - month.spending - FLUXION_SETTINGS.safetyBuffer);
  const floor = month.income * FLUXION_SETTINGS.minRate;
  const target = month.income * FLUXION_SETTINGS.targetRate;
  const ceiling = month.income * FLUXION_SETTINGS.maxRate;
  const fixedContribution = month.income > 0 ? FLUXION_SETTINGS.fixedContribution : 0;
  let contribution = 0;
  let reason = 'paused';
  let reasonTitle = 'Pauze bez riska';
  let reasonText = month.income <= 0
    ? 'Šajā mēnesī ienākumu nebija, tāpēc iemaksa netiek veikta un drošības rezerve saglabāta.'
    : `Pēc tēriņiem vairs nepaliktu ${formatMoney(FLUXION_SETTINGS.safetyBuffer)}, tāpēc iemaksa apstājas.`;

  if (month.income > 0 && safeToInvest > 0) {
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
    } else if (safeToInvest > target + 250 && month.balanceBefore > FLUXION_SETTINGS.safetyBuffer * 1.2) {
      contribution = target + Math.min(ceiling - target, (safeToInvest - target) * 0.16);
      reason = 'boosted';
      reasonTitle = 'Pāri mērķim ar pārpalikumu';
      reasonText = 'Kontā paliek pietiekama rezerve, tāpēc iemaksa pacelta tuvāk griestiem.';
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

const FLUXION_HISTORY_RESULTS = FLUXION_HISTORY.map(calculateDynamicContribution);
const FLUXION_LAST_SIX = FLUXION_HISTORY_RESULTS.slice(-6);
const FLUXION_TOTAL_DYNAMIC = FLUXION_HISTORY_RESULTS.reduce((sum, month) => sum + month.contribution, 0);
const FLUXION_TOTAL_FIXED = FLUXION_HISTORY_RESULTS.reduce((sum, month) => sum + month.fixedContribution, 0);
const FLUXION_DYNAMIC_ADVANTAGE = FLUXION_TOTAL_DYNAMIC - FLUXION_TOTAL_FIXED;
const FLUXION_BOOSTED_MONTHS = FLUXION_HISTORY_RESULTS.filter((month) => month.reason === 'boosted').length;
const FLUXION_PAUSED_MONTHS = FLUXION_HISTORY_RESULTS.filter((month) => month.reason === 'paused').length;

let FLUXION_STREAK = 0;
for (let i = FLUXION_HISTORY_RESULTS.length - 1; i >= 0; i -= 1) {
  if (FLUXION_HISTORY_RESULTS[i].contribution > 0) FLUXION_STREAK += 1;
  else break;
}

const FLUXION_PREVIEW = calculateDynamicContribution({
  month: 'Maijs',
  income: 2140,
  spending: 1680,
  balanceBefore: 355,
});

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
            letterSpacing: '-0.2px',
            whiteSpace: 'nowrap',
          }}>{value}</div>
        </div>
      </div>
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
    <div style={{ marginTop: 16, padding: '18px 16px 12px', background: '#F7F3EA', borderRadius: 18 }}>
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
      borderRadius: 18,
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
        letterSpacing: '-2px',
        color: '#6B879D',
        opacity: 0.3,
        pointerEvents: 'none',
      }}>{tier}</div>
      {illustration}
      <div style={{ marginTop: 10, fontSize: 15, fontWeight: 700, letterSpacing: '-0.3px' }}>{title}</div>
      <div style={{ marginTop: 6, fontSize: 22, color: BRAND.promo, fontWeight: 700, letterSpacing: '-0.5px', lineHeight: 1.1 }}>
        {balance}
      </div>
      <div style={{ marginTop: 4, fontSize: 12, color: BRAND.mute, lineHeight: '16px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{monthly}</div>
      <div style={{ marginTop: 8, fontSize: 11.5, color: BRAND.mute, lineHeight: '15px' }}>{note}</div>
    </div>
  );
}


function ComparisonBar({ label, value, max, tone, detail }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: '-0.2px' }}>{label}</div>
        <div style={{ fontSize: 22, fontWeight: 700, color: tone }}>{formatMoney(value)}</div>
      </div>
      <div style={{ marginTop: 10, height: 10, borderRadius: 999, background: '#EFE8D9', overflow: 'hidden' }}>
        <div style={{
          width: `${Math.max(12, Math.round((value / max) * 100))}%`,
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
      <div style={{ marginTop: 6, fontSize: 18, fontWeight: 700, color: BRAND.promo, letterSpacing: '-0.3px' }}>
        {(income / cost).toFixed(1)}x
      </div>
      <div style={{ marginTop: 4, fontSize: 11.5, color: BRAND.mute }}>šodienas naudā</div>
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
        <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: '-0.2px' }}>{title}</div>
        <div style={{ marginTop: 4, fontSize: 13.5, color: BRAND.mute, lineHeight: '18px' }}>{body}</div>
      </div>
    </div>
  );
}

function SubPageHeader({ title, onBack }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '16px 16px 8px' }}>
      <button onClick={onBack} style={{
        background: 'transparent', border: 0, padding: '4px 8px 4px 2px', cursor: 'pointer',
        display: 'flex', alignItems: 'center', color: BRAND.promo, fontSize: 14, fontWeight: 500,
      }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M12 5l-5 5 5 5" stroke={BRAND.promo} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Atpakaļ
      </button>
      <div style={{ flex: 1, fontSize: 16, fontWeight: 700, letterSpacing: '-0.3px', textAlign: 'center', paddingRight: 70 }}>
        {title}
      </div>
    </div>
  );
}

function PensionNavRow({ icon, title, subtitle, value, onClick }) {
  return (
    <button onClick={onClick} style={{
      width: '100%', background: 'transparent', border: 0, padding: '14px 0',
      cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 14, textAlign: 'left',
    }}>
      <div style={{
        width: 44, height: 44, borderRadius: 14, background: BRAND.card,
        border: `1px solid ${BRAND.line}`, display: 'grid', placeItems: 'center', flexShrink: 0,
        boxShadow: '0 1px 2px rgba(30,25,10,0.04)',
      }}>{icon}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 15, fontWeight: 600, letterSpacing: '-0.2px' }}>{title}</div>
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

function PensionMain({ onNav, activated, scenario }) {
  const selectedScenario = FUTURE_SCENARIOS[scenario];
  const totalMonthly = selectedScenario.tier1Monthly + selectedScenario.tier2Monthly + selectedScenario.tier3Monthly;

  return (
    <div style={{ padding: '4px 16px 24px' }}>
      <div style={{
        marginTop: 12, background: BRAND.card, borderRadius: 20,
        padding: '18px', border: `1px solid ${BRAND.line}`,
        boxShadow: '0 1px 2px rgba(30,25,10,0.04), 0 6px 18px rgba(30,25,10,0.06)',
      }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 12.5, color: BRAND.mute, letterSpacing: '-0.1px' }}>
            {activated ? 'Nākamā automātiskā iemaksa' : 'Tiktu uzkrāts pēdējos 12 mēnešos'}
          </div>
          <button onClick={() => onNav('analysis')} style={{
            background: 'transparent', border: 0, cursor: 'pointer',
            fontSize: 13, color: BRAND.promo, fontWeight: 500, padding: 0, letterSpacing: '-0.1px',
          }}>Analīze →</button>
        </div>

        <div style={{ fontSize: 30, fontWeight: 700, color: BRAND.ink, letterSpacing: '-0.8px', marginTop: 6 }}>
          {activated ? formatMoney(FLUXION_PREVIEW.contribution) : formatMoney(FLUXION_TOTAL_DYNAMIC)}
        </div>
        <div style={{ fontSize: 13, color: BRAND.mute, marginTop: 4, lineHeight: '18px' }}>
          {activated
            ? `Automātiski ${FLUXION_SETTINGS.payday}. datumā · droši pieejams ${formatMoney(FLUXION_PREVIEW.safeToInvest)}`
            : `${formatMoney(FLUXION_DYNAMIC_ADVANTAGE)} vairāk nekā ar fiksētu ${formatMoney(FLUXION_SETTINGS.fixedContribution)}/mēn.`}
        </div>

        {activated ? (
          <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
            <ConfigPill icon={<TrendIcon/>} label="Mērķis" value={formatPercent(FLUXION_SETTINGS.targetRate)}/>
            <ConfigPill icon={<ShieldIcon/>} label="Buferis" value={formatMoney(FLUXION_SETTINGS.safetyBuffer)}/>
          </div>
        ) : (
          <button onClick={() => onNav('onboarding3')} style={{
            marginTop: 16, width: '100%', border: 0, borderRadius: 14,
            padding: '14px', background: BRAND.accent, color: BRAND.ink,
            fontSize: 15, fontWeight: 700, cursor: 'pointer', letterSpacing: '-0.1px',
          }}>
            Iestatīt 3. pensiju
          </button>
        )}
      </div>

      {/* Section header */}
      <div style={{ marginTop: 24, marginBottom: 12, fontSize: 18, fontWeight: 700, letterSpacing: '-0.3px' }}>
        Tavi pensiju līmeņi
      </div>

      {/* Tier 1 — State pension */}
      <div style={{
        background: BRAND.card, borderRadius: 18, padding: '16px',
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
              <div style={{ fontSize: 15, fontWeight: 600 }}>Valsts pensija</div>
            </div>
            <div style={{ marginTop: 10, fontSize: 26, fontWeight: 700, color: BRAND.promo, letterSpacing: '-0.6px' }}>
              {formatMoney(selectedScenario.tier1Monthly)}<span style={{ fontSize: 14, fontWeight: 500, color: BRAND.mute }}>/mēn.</span>
            </div>
            <div style={{ marginTop: 10, height: 4, borderRadius: 2, background: BRAND.line, overflow: 'hidden', maxWidth: 180 }}>
              <div style={{ width: `${Math.round((TIER1_SERVICE_YEARS / TIER1_TARGET_YEARS) * 100)}%`, height: '100%', background: BRAND.promo, borderRadius: 2 }}/>
            </div>
            <div style={{ marginTop: 5, fontSize: 12, color: BRAND.mute }}>{TIER1_SERVICE_YEARS} / {TIER1_TARGET_YEARS} darba gadi</div>
          </div>
          <div style={{ flexShrink: 0 }}><TierIllustration1/></div>
        </div>
      </div>

      {/* Tiers 2 & 3 */}
      <div style={{ display: 'flex', gap: 10, marginTop: 10 }}>
        <CompactTierCard
          tier="2"
          illustration={<TierIllustration2/>}
          title="2. līmenis"
          balance={formatMoney(TIER2_BALANCE)}
          monthly={`${formatMoney(selectedScenario.tier2Monthly)}/mēn.`}
          note="Fonda uzkrājums"
        />
        <CompactTierCard
          tier="3"
          illustration={<TierIllustration3/>}
          title="3. līmenis"
          balance={formatMoney(TIER3_BALANCE)}
          monthly={`${formatMoney(selectedScenario.tier3Monthly)}/mēn.`}
          note="Dinamiskais"
        />
      </div>

      {/* Total projected pension summary */}
      <div style={{
        marginTop: 10, background: '#EAE6DB', borderRadius: 18, padding: '16px 18px',
        boxShadow: '0 1px 2px rgba(30,25,10,0.04), 0 4px 12px rgba(30,25,10,0.04)',
      }}>
        <div style={{ fontSize: 12.5, color: BRAND.mute, letterSpacing: '-0.1px' }}>Kopā prognozētā pensija</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 4 }}>
          <div style={{ fontSize: 30, fontWeight: 700, color: BRAND.promo, letterSpacing: '-0.8px' }}>
            {formatMoney(totalMonthly)}
          </div>
          <div style={{ fontSize: 14, color: BRAND.mute }}>/mēnesī šodienas naudā</div>
        </div>
        <div style={{ fontSize: 12.5, color: BRAND.mute, marginTop: 2 }}>{selectedScenario.note}</div>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: BRAND.line, margin: '20px 0 4px' }}/>

      {/* Sub-page nav rows */}
      <PensionNavRow
        icon={<TrendIcon/>}
        title="Ikmēneša analīze"
        subtitle="Simulācija un salīdzinājums"
        onClick={() => onNav('analysis')}
      />
      <div style={{ height: 1, background: BRAND.line }}/>
      <PensionNavRow
        icon={Icon.goal()}
        title="Nākotnes projekcija"
        subtitle="Scenāriji un pensijas grafiks"
        value={`${formatMoney(selectedScenario.todayMoneyMonthly)}/mēn.`}
        onClick={() => onNav('projection')}
      />
      <div style={{ height: 1, background: BRAND.line }}/>
      <PensionNavRow
        icon={<TrophyIcon/>}
        title="Mērķi un sasniegumi"
        subtitle={`Streak: ${FLUXION_STREAK} mēn. · Nākamais milestone: ${formatMoney(NEXT_MILESTONE - TIER3_BALANCE)}`}
        onClick={() => onNav('goals')}
      />
    </div>
  );
}

function MonthlyBarChart({ months, selectedIndex, onSelect }) {
  const maxVal = Math.max(...months.flatMap((m) => [m.income, m.spending])) || 1;
  const H = 80;
  return (
    <div style={{ marginTop: 18 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
        {[['#B8B0A4', 'Ienākumi'], ['#DDD7CE', 'Tēriņi'], [BRAND.accent, 'Iemaksa']].map(([col, lbl]) => (
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
            <button key={month.month} onClick={() => onSelect(index)} style={{
              flex: 1, background: 'transparent', border: 0, padding: 0, cursor: 'pointer',
              display: 'flex', flexDirection: 'column', alignItems: 'center',
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: H }}>
                <div style={{ width: 9, height: incH, borderRadius: '3px 3px 0 0', background: active ? '#8A8480' : '#C8C1B4' }}/>
                <div style={{ width: 9, height: spH, borderRadius: '3px 3px 0 0', background: active ? '#B8B0A4' : '#DDD7CE' }}/>
                <div style={{ width: 9, height: coH, borderRadius: '3px 3px 0 0', background: coH > 0 ? BRAND.accent : 'transparent' }}/>
              </div>
              <div style={{ marginTop: 5, fontSize: 10, color: active ? BRAND.ink : BRAND.mute, fontWeight: active ? 700 : 400 }}>
                {month.month.slice(0, 3)}
              </div>
              <div style={{ marginTop: 2, width: 14, height: 2, borderRadius: 1, background: active ? BRAND.accent : 'transparent' }}/>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function PensionAnalysis({ onBack, selectedMonthIndex, setSelectedMonthIndex }) {
  const selectedMonth = FLUXION_LAST_SIX[selectedMonthIndex];
  const diff = selectedMonth.contribution - selectedMonth.fixedContribution;
  return (
    <div>
      <SubPageHeader title="Ikmēneša analīze" onBack={onBack}/>
      <div style={{ padding: '8px 16px 24px', display: 'flex', flexDirection: 'column', gap: 24 }}>

        <div>
          <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.3px' }}>Pēdējie 6 mēneši</div>
          <MonthlyBarChart months={FLUXION_LAST_SIX} selectedIndex={selectedMonthIndex} onSelect={setSelectedMonthIndex}/>

          <div style={{ marginTop: 16, background: '#F7F2E6', borderRadius: 16, padding: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: BRAND.ink }}>{selectedMonth.month}</div>
              <div style={{ fontSize: 26, fontWeight: 700, color: BRAND.promo, letterSpacing: '-0.5px' }}>
                {formatMoney(selectedMonth.contribution)}
              </div>
            </div>
            <div style={{ marginTop: 12, display: 'flex', justifyContent: 'space-between' }}>
              {[
                ['Ienākumi', selectedMonth.income, BRAND.ink],
                ['Tēriņi', selectedMonth.spending, BRAND.ink],
                ['Droši', selectedMonth.safeToInvest, BRAND.ok],
              ].map(([lbl, val, col]) => (
                <div key={lbl}>
                  <div style={{ fontSize: 10.5, color: BRAND.mute, textTransform: 'uppercase', letterSpacing: 0.7 }}>{lbl}</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: col, marginTop: 3 }}>{formatMoney(val)}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 10, fontSize: 12.5, color: BRAND.mute, lineHeight: '17px' }}>
              {selectedMonth.fixedBreaksBuffer
                ? 'Fiksēta iemaksa aizskartu rezervi — dinamiskā apstājās automātiski'
                : diff >= 0
                  ? `+${formatMoney(diff)} vairāk nekā ar fiksētu iemaksu`
                  : `${formatMoney(Math.abs(diff))} mazāk — mēnesis bija finansiāli stingrs`}
            </div>
          </div>
        </div>

        <div>
          <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.3px' }}>Dinamiskais vs fiksētais</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 16 }}>
            <ComparisonBar label="Dinamiskais" value={FLUXION_TOTAL_DYNAMIC} max={FLUXION_TOTAL_DYNAMIC} tone={BRAND.promo} detail={`${FLUXION_BOOSTED_MONTHS} mēnešos iemaksa pārsniedza mērķi`}/>
            <ComparisonBar label="Fiksēta iemaksa" value={FLUXION_TOTAL_FIXED} max={FLUXION_TOTAL_DYNAMIC} tone="#C8C1B4" detail={`${formatMoney(FLUXION_SETTINGS.fixedContribution)}/mēn. ar ienākumiem`}/>
          </div>
          <div style={{ marginTop: 12, fontSize: 13, color: BRAND.mute, lineHeight: '18px' }}>
            {formatMoney(FLUXION_DYNAMIC_ADVANTAGE)} papildu · {FLUXION_PAUSED_MONTHS} mēnesī apstājās automātiski
          </div>
        </div>

      </div>
    </div>
  );
}

function PensionProjection({ onBack, scenario, setScenario }) {
  const s = FUTURE_SCENARIOS[scenario];
  const total = s.tier1Monthly + s.tier2Monthly + s.tier3Monthly;
  const t1w = Math.round((s.tier1Monthly / total) * 100);
  const t2w = Math.round((s.tier2Monthly / total) * 100);
  const t3w = 100 - t1w - t2w;

  return (
    <div>
      <SubPageHeader title="Nākotnes projekcija" onBack={onBack}/>
      <div style={{ padding: '8px 16px 24px', display: 'flex', flexDirection: 'column', gap: 24 }}>

        <div>
          <div style={{ fontSize: 12.5, color: BRAND.mute }}>Prognozētā pensija 67 gados</div>
          <div style={{ fontSize: 34, fontWeight: 700, color: BRAND.promo, letterSpacing: '-0.8px', marginTop: 4 }}>
            {formatMoney(s.todayMoneyMonthly)}<span style={{ fontSize: 16, fontWeight: 500, color: BRAND.mute }}>/mēn.</span>
          </div>
          <div style={{ fontSize: 12.5, color: BRAND.mute, marginTop: 3 }}>šodienas naudā · {s.note}</div>
          <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
            {SCENARIO_ORDER.map((key) => (
              <button key={key} onClick={() => setScenario(key)} style={{
                flex: 1, border: 0, borderRadius: 12, padding: '10px 6px', cursor: 'pointer',
                background: key === scenario ? BRAND.accent : BRAND.line,
                fontSize: 13, fontWeight: 700, color: BRAND.ink,
              }}>
                {FUTURE_SCENARIOS[key].label}
              </button>
            ))}
          </div>
          <ProjectionChart selectedScenario={scenario}/>
        </div>

        <div>
          <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.3px', marginBottom: 14 }}>Sadalījums</div>
          <div style={{ display: 'flex', height: 8, borderRadius: 4, overflow: 'hidden' }}>
            <div style={{ width: `${t1w}%`, background: '#C8C1B4' }}/>
            <div style={{ width: `${t2w}%`, background: BRAND.promo, opacity: 0.45, marginLeft: 2 }}/>
            <div style={{ width: `${t3w}%`, background: BRAND.promo, marginLeft: 2 }}/>
          </div>
          <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 11 }}>
            {[
              { label: '1. līmenis · Valsts', amount: s.tier1Monthly, dot: '#C8C1B4', op: 1 },
              { label: '2. līmenis · Fonds', amount: s.tier2Monthly, dot: BRAND.promo, op: 0.45 },
              { label: '3. līmenis · Dinamiskais', amount: s.tier3Monthly, dot: BRAND.promo, op: 1 },
            ].map(({ label, amount, dot, op }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 8, height: 8, borderRadius: 2, background: dot, opacity: op, flexShrink: 0 }}/>
                <div style={{ flex: 1, fontSize: 13.5, color: BRAND.mute }}>{label}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: BRAND.ink }}>{formatMoney(amount)}<span style={{ fontSize: 12, fontWeight: 400, color: BRAND.mute }}>/mēn.</span></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

function PensionGoals({ onBack, scenario }) {
  const selectedScenario = FUTURE_SCENARIOS[scenario];
  const goalProgress = clamp(selectedScenario.todayMoneyMonthly / FUTURE_GOAL, 0, 1);
  const gapToGoal = Math.max(0, FUTURE_GOAL - selectedScenario.todayMoneyMonthly);
  const extraMonthlyNeeded = Math.round(gapToGoal * 0.18);
  const milestoneLeft = NEXT_MILESTONE - TIER3_BALANCE;

  return (
    <div>
      <SubPageHeader title="Mērķi un sasniegumi" onBack={onBack}/>
      <div style={{ padding: '8px 16px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ background: BRAND.card, borderRadius: 20, padding: '18px', border: `1px solid ${BRAND.line}` }}>
          <div style={{ fontSize: 12.5, color: BRAND.mute }}>Pensijas mērķis</div>
          <div style={{ marginTop: 6 }}>
            <span style={{ fontSize: 28, fontWeight: 700, color: BRAND.promo, letterSpacing: '-0.7px' }}>
              {formatMoney(selectedScenario.todayMoneyMonthly)}
            </span>
            <span style={{ fontSize: 15, color: BRAND.mute, fontWeight: 500 }}> / {formatMoney(FUTURE_GOAL)} mēnesī</span>
          </div>
          <div style={{ marginTop: 12, height: 8, borderRadius: 4, background: BRAND.line, overflow: 'hidden' }}>
            <div style={{ width: `${Math.round(goalProgress * 100)}%`, height: '100%', background: BRAND.promo, borderRadius: 4 }}/>
          </div>
          <div style={{ marginTop: 8, fontSize: 13, color: BRAND.mute, lineHeight: '17px' }}>
            Pietrūkst {formatMoney(gapToGoal)} · apmēram {formatMoney(extraMonthlyNeeded)} papildu mēnesī.
          </div>
        </div>

        <div style={{ display: 'flex', gap: 10 }}>
          <ConfigPill icon={<TrophyIcon/>} label="Streak" value={`${FLUXION_STREAK} mēneši`}/>
          <ConfigPill icon={<PigIcon/>} label="Nākamais €5000" value={formatMoney(milestoneLeft)}/>
        </div>

        <div style={{ background: BRAND.card, borderRadius: 20, padding: '18px', border: `1px solid ${BRAND.line}` }}>
          <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-0.2px' }}>Ko varēsi atļauties</div>
          <div style={{ fontSize: 12.5, color: BRAND.mute, marginTop: 3 }}>Pensija pret reālajām izmaksām šodien</div>
          <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
            <LifestyleCard icon={<CarIcon/>} label="BMW 3 līzings" cost={790} income={selectedScenario.todayMoneyMonthly}/>
            <LifestyleCard icon={<PigIcon/>} label="Pārtika" cost={320} income={selectedScenario.todayMoneyMonthly}/>
            <LifestyleCard icon={Icon.goal(BRAND.ink)} label="Komunālie" cost={160} income={selectedScenario.todayMoneyMonthly}/>
          </div>
        </div>

        <div style={{ background: BRAND.card, borderRadius: 20, padding: '18px', border: `1px solid ${BRAND.line}` }}>
          <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-0.2px' }}>Kā darbojas dinamiskā iemaksa</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 16 }}>
            <StepRow number={1} title="Atklāj" body={`"Tu jau būtu uzkrājis ${formatMoney(FLUXION_TOTAL_DYNAMIC)}" — parādās sākumlapā.`}/>
            <StepRow number={2} title="Pielāgo" body="Nosaki mērķa procentu, drošības buferi, diapazonu un iemaksas datumu."/>
            <StepRow number={3} title="Automatizē" body="Katru mēnesi sistēma aprēķina drošo iemaksu pēc ienākumiem un tēriņiem."/>
            <StepRow number={4} title="Saņem atskaiti" body="Pēc katras iemaksas redzi summu, iemeslu un ietekmi uz nākotnes pensiju."/>
          </div>
          <div style={{
            marginTop: 16, borderRadius: 12, background: '#F7F2E6',
            border: `1px solid ${BRAND.line}`, padding: '14px 16px',
          }}>
            <div style={{ fontSize: 11.5, textTransform: 'uppercase', letterSpacing: 1, color: BRAND.mute }}>Ikmēneša atskaite</div>
            <div style={{ marginTop: 6, fontSize: 14, fontWeight: 600, letterSpacing: '-0.2px', lineHeight: '20px', color: BRAND.ink }}>
              Šomēnes tiktu novirzīti {formatMoney(FLUXION_PREVIEW.contribution)}, jo pēc algas un tēriņiem paliek {formatMoney(FLUXION_PREVIEW.safeToInvest)} droši ieguldāmas naudas.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackChev({ onClick }) {
  return (
    <button onClick={onClick} style={{
      background: 'transparent', border: 0, padding: '4px 8px 4px 0', cursor: 'pointer',
      display: 'flex', alignItems: 'center', color: BRAND.promo, fontSize: 14, fontWeight: 500,
    }}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M12 5l-5 5 5 5" stroke={BRAND.promo} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      Atpakaļ
    </button>
  );
}

function PensionOnboarding({ onBack, onComplete }) {
  const [step, setStep] = React.useState(0);
  const [goalMonthly, setGoalMonthly] = React.useState(1200);
  const [targetPct, setTargetPct] = React.useState(10);
  const [buffer, setBuffer] = React.useState(300);
  const [payday, setPayday] = React.useState(25);

  const STEPS = 4;
  const tier1Est = 620;
  const tier2Est = 250;
  const tier3Needed = Math.max(0, goalMonthly - tier1Est - tier2Est);

  function StepBar() {
    return (
      <div style={{ display: 'flex', gap: 5, padding: '10px 16px 0' }}>
        {Array.from({ length: STEPS }).map((_, i) => (
          <div key={i} style={{
            flex: 1, height: 3, borderRadius: 2,
            background: i <= step ? BRAND.ink : BRAND.line,
          }}/>
        ))}
      </div>
    );
  }

  function PrimaryBtn({ label, onPress }) {
    return (
      <button onClick={onPress || (() => setStep(s => s + 1))} style={{
        width: '100%', border: 0, borderRadius: 14, padding: '15px',
        background: BRAND.accent, color: BRAND.ink,
        fontSize: 15, fontWeight: 700, cursor: 'pointer', letterSpacing: '-0.1px', marginTop: 28,
      }}>{label || 'Tālāk'}</button>
    );
  }

  /* ── Step 0: Hook ── */
  if (step === 0) return (
    <div>
      <div style={{ padding: '16px 16px 0' }}><BackChev onClick={onBack}/></div>
      <StepBar/>
      <div style={{ padding: '24px 16px 32px' }}>
        <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: 1.2, color: BRAND.mute, textTransform: 'uppercase' }}>3. pensija</div>
        <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.6px', lineHeight: '32px', marginTop: 8 }}>
          Tu nekad nevajadzēs<br/>mainīt iemaksu pats
        </div>
        <div style={{ marginTop: 12, fontSize: 14, color: BRAND.mute, lineHeight: '21px' }}>
          Dinamiskā iemaksa analizē tavus ienākumus katru mēnesi — vairāk labos, mazāk sarežģītajos, un pauze ja nav ienākumu.
        </div>

        <div style={{ marginTop: 28, background: '#EAE6DB', borderRadius: 20, padding: '20px' }}>
          <div style={{ fontSize: 12.5, color: BRAND.mute }}>Pamatojoties uz pēdējiem 12 mēnešiem</div>
          <div style={{ fontSize: 32, fontWeight: 700, color: BRAND.promo, letterSpacing: '-0.8px', marginTop: 6 }}>
            {formatMoney(FLUXION_TOTAL_DYNAMIC)}
          </div>
          <div style={{ fontSize: 13, color: BRAND.mute, marginTop: 3 }}>jau varētu būt uzkrāts tavā 3. pensijā</div>

          <div style={{ marginTop: 18, height: 1, background: BRAND.line }}/>

          <div style={{ marginTop: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <div style={{ fontSize: 11, color: BRAND.mute, textTransform: 'uppercase', letterSpacing: 0.8 }}>Dinamiskais</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: BRAND.ink, marginTop: 4 }}>{formatMoney(FLUXION_TOTAL_DYNAMIC)}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 11, color: BRAND.mute, textTransform: 'uppercase', letterSpacing: 0.8 }}>Fiksēts</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: BRAND.mute, marginTop: 4 }}>{formatMoney(FLUXION_TOTAL_FIXED)}</div>
            </div>
          </div>

          <div style={{ marginTop: 14, height: 6, borderRadius: 3, background: BRAND.line, overflow: 'hidden' }}>
            <div style={{ width: `${Math.round((FLUXION_TOTAL_DYNAMIC / (FLUXION_TOTAL_DYNAMIC * 1.15)) * 100)}%`, height: '100%', background: BRAND.promo, borderRadius: 3 }}/>
          </div>
          <div style={{ marginTop: 6, fontSize: 12.5, color: BRAND.mute }}>
            {formatMoney(FLUXION_DYNAMIC_ADVANTAGE)} vairāk nekā ar fiksētu iemaksu
          </div>
        </div>

        <PrimaryBtn label="Sākt iestatīšanu"/>
      </div>
    </div>
  );

  /* ── Step 1: Goal ── */
  if (step === 1) return (
    <div>
      <div style={{ padding: '16px 16px 0' }}><BackChev onClick={() => setStep(0)}/></div>
      <StepBar/>
      <div style={{ padding: '24px 16px 32px' }}>
        <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: 1.2, color: BRAND.mute, textTransform: 'uppercase' }}>Mērķis</div>
        <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.5px', marginTop: 8 }}>Kādu pensiju tu vēlies?</div>
        <div style={{ fontSize: 14, color: BRAND.mute, marginTop: 8, lineHeight: '20px' }}>
          Nosaki mērķi — mēs parādīsim, cik daudz 3. pensijā vēl vajag.
        </div>

        <div style={{ marginTop: 32, textAlign: 'center' }}>
          <div style={{ fontSize: 52, fontWeight: 700, color: BRAND.promo, letterSpacing: '-2px', lineHeight: 1 }}>
            {formatMoney(goalMonthly)}
          </div>
          <div style={{ fontSize: 14, color: BRAND.mute, marginTop: 6 }}>mēnesī pensijā</div>
        </div>

        <div style={{ marginTop: 24 }}>
          <input type="range" min={500} max={3000} step={50} value={goalMonthly}
            onChange={e => setGoalMonthly(Number(e.target.value))}
            style={{ width: '100%', accentColor: BRAND.ink, cursor: 'pointer' }}/>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
            <span style={{ fontSize: 12, color: BRAND.mute }}>€500</span>
            <span style={{ fontSize: 12, color: BRAND.mute }}>€3 000</span>
          </div>
        </div>

        <div style={{ marginTop: 24, background: '#EAE6DB', borderRadius: 18, padding: '16px 18px' }}>
          <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 12 }}>Kā tas tiek segts</div>
          {[
            { label: '1. līmenis · Valsts', amount: tier1Est, dot: '#C8C1B4', op: 1 },
            { label: '2. līmenis · Fonds', amount: tier2Est, dot: BRAND.promo, op: 0.4 },
            { label: '3. līmenis · Tu ieguldi', amount: tier3Needed, dot: BRAND.promo, op: 1 },
          ].map(({ label, amount, dot, op }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
              <div style={{ width: 8, height: 8, borderRadius: 2, background: dot, opacity: op, flexShrink: 0 }}/>
              <div style={{ flex: 1, fontSize: 13, color: BRAND.mute }}>{label}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: BRAND.ink }}>{formatMoney(amount)}/mēn.</div>
            </div>
          ))}
        </div>

        <PrimaryBtn label="Tālāk"/>
      </div>
    </div>
  );

  /* ── Step 2: Dynamic settings ── */
  if (step === 2) return (
    <div>
      <div style={{ padding: '16px 16px 0' }}><BackChev onClick={() => setStep(1)}/></div>
      <StepBar/>
      <div style={{ padding: '24px 16px 32px' }}>
        <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: 1.2, color: BRAND.mute, textTransform: 'uppercase' }}>Iestatīšana</div>
        <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.5px', marginTop: 8 }}>Dinamiskā iemaksa</div>

        <div style={{ marginTop: 14, background: '#EAE6DB', borderRadius: 14, padding: '14px 16px' }}>
          <div style={{ fontSize: 13.5, lineHeight: '20px', color: BRAND.ink }}>
            Pēc iestatīšanas sistēma pati aprēķina drošo iemaksu katru mēnesi.{' '}
            <strong>Tev to nekad nevajadzēs mainīt pašam.</strong>
          </div>
        </div>

        <div style={{ marginTop: 28 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <div style={{ fontSize: 14, fontWeight: 600 }}>Mērķa iemaksa</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: BRAND.promo }}>{targetPct}%</div>
          </div>
          <div style={{ fontSize: 12.5, color: BRAND.mute, marginTop: 2 }}>no ienākumiem katru mēnesi</div>
          <input type="range" min={3} max={20} step={1} value={targetPct}
            onChange={e => setTargetPct(Number(e.target.value))}
            style={{ width: '100%', marginTop: 12, accentColor: BRAND.ink, cursor: 'pointer' }}/>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
            <span style={{ fontSize: 11, color: BRAND.mute }}>3%</span>
            <span style={{ fontSize: 11, color: BRAND.mute }}>Diapazons: {Math.max(1, targetPct - 4)}%–{Math.min(25, targetPct + 5)}%</span>
            <span style={{ fontSize: 11, color: BRAND.mute }}>20%</span>
          </div>
        </div>

        <div style={{ marginTop: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <div style={{ fontSize: 14, fontWeight: 600 }}>Drošības rezerve</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: BRAND.promo }}>{formatMoney(buffer)}</div>
          </div>
          <div style={{ fontSize: 12.5, color: BRAND.mute, marginTop: 2 }}>minimums kontā pirms iemaksas</div>
          <input type="range" min={100} max={1000} step={50} value={buffer}
            onChange={e => setBuffer(Number(e.target.value))}
            style={{ width: '100%', marginTop: 12, accentColor: BRAND.ink, cursor: 'pointer' }}/>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
            <span style={{ fontSize: 11, color: BRAND.mute }}>€100</span>
            <span style={{ fontSize: 11, color: BRAND.mute }}>€1 000</span>
          </div>
        </div>

        <div style={{ marginTop: 24 }}>
          <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>Iemaksas datums</div>
          <div style={{ display: 'flex', gap: 8 }}>
            {[1, 5, 10, 15, 20, 25, 28].map(d => (
              <button key={d} onClick={() => setPayday(d)} style={{
                flex: 1, height: 40, borderRadius: 10, border: 0, cursor: 'pointer',
                background: payday === d ? BRAND.accent : BRAND.line,
                fontSize: 13, fontWeight: payday === d ? 700 : 400, color: BRAND.ink,
              }}>{d}.</button>
            ))}
          </div>
        </div>

        <PrimaryBtn label="Tālāk"/>
      </div>
    </div>
  );

  /* ── Step 3: Confirm ── */
  return (
    <div>
      <div style={{ padding: '16px 16px 0' }}><BackChev onClick={() => setStep(2)}/></div>
      <StepBar/>
      <div style={{ padding: '24px 16px 32px' }}>
        <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: 1.2, color: BRAND.mute, textTransform: 'uppercase' }}>Gatavs</div>
        <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.5px', marginTop: 8 }}>Apstiprini iestatījumus</div>

        <div style={{ marginTop: 24, background: '#EAE6DB', borderRadius: 20, padding: '20px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {[
            { label: 'Pensijas mērķis', value: `${formatMoney(goalMonthly)}/mēn.` },
            { label: 'Mērķa iemaksa', value: `${targetPct}% no ienākumiem` },
            { label: 'Diapazons', value: `${Math.max(1, targetPct - 4)}%–${Math.min(25, targetPct + 5)}%` },
            { label: 'Drošības rezerve', value: formatMoney(buffer) },
            { label: 'Iemaksas datums', value: `${payday}. katru mēnesi` },
          ].map(({ label, value }) => (
            <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: 13.5, color: BRAND.mute }}>{label}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: BRAND.ink }}>{value}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 16, fontSize: 13, color: BRAND.mute, lineHeight: '18px', textAlign: 'center' }}>
          Iestatījumus var mainīt jebkurā laikā sadaļā "Ikmēneša analīze".
        </div>

        <PrimaryBtn label="Aktivizēt 3. pensiju" onPress={onComplete}/>
      </div>
    </div>
  );
}

function FluxionPensijaScreen() {
  const [pensionView, setPensionView] = React.useState('main');
  const [activated, setActivated] = React.useState(false);
  const [scenario, setScenario] = React.useState('balanced');
  const [selectedMonthIndex, setSelectedMonthIndex] = React.useState(FLUXION_LAST_SIX.length - 1);

  if (pensionView === 'onboarding3') {
    return (
      <PensionOnboarding
        onBack={() => setPensionView('main')}
        onComplete={() => { setActivated(true); setPensionView('main'); }}
      />
    );
  }
  if (pensionView === 'analysis') {
    return <PensionAnalysis onBack={() => setPensionView('main')} selectedMonthIndex={selectedMonthIndex} setSelectedMonthIndex={setSelectedMonthIndex}/>;
  }
  if (pensionView === 'projection') {
    return <PensionProjection onBack={() => setPensionView('main')} scenario={scenario} setScenario={setScenario}/>;
  }
  if (pensionView === 'goals') {
    return <PensionGoals onBack={() => setPensionView('main')} scenario={scenario}/>;
  }
  return <PensionMain onNav={setPensionView} activated={activated} scenario={scenario}/>;
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
  const [tab, setTab] = React.useState('Pensija');
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

      {tab === 'Pensija' ? <FluxionPensijaScreen/> : tab === 'Konti' ? (
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
