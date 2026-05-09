// Fluxion — Notification + Pending Investment screens
// Three IOSDevice frames: notification banner · pending list · pending detail

const P = {
  bg: '#F4F5F0',
  card: '#FFFFFF',
  ink: '#1A1A1A',
  mute: '#6B7280',
  line: '#E5E7EB',
  accent: '#FBEA3B',
  promo: '#184A3B',
  ok: '#29A745',
  danger: '#D32F2F',
  warm: '#F7F2E6',
  pill: '#EFECE5',
};

function fmt(n) {
  return '€' + n.toLocaleString('lv-LV', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

// ─── Icons ───────────────────────────────────────────────────
const PI = {
  fluxion: (size = 28) => (
    <div style={{
      width: size, height: size, borderRadius: size * 0.28,
      background: P.promo, display: 'grid', placeItems: 'center', flexShrink: 0,
    }}>
      <svg width={size * 0.55} height={size * 0.55} viewBox="0 0 16 16" fill="none">
        <path d="M3 8c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5" stroke={P.accent} strokeWidth="2" strokeLinecap="round"/>
        <circle cx="8" cy="8" r="1.8" fill={P.accent}/>
      </svg>
    </div>
  ),
  chevLeft: (c = P.promo) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M12 5l-5 5 5 5" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  chevRight: (c = P.mute) => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M5 2.5l4.5 4.5-4.5 4.5" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  clock: (c = P.mute) => (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6" stroke={c} strokeWidth="1.4"/>
      <path d="M8 5v3.5l2 1.5" stroke={c} strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  check: (c = P.ok) => (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path d="M3 8.5l3.5 3.5 6.5-7" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  skip: (c = P.mute) => (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path d="M4 4l8 8M12 4l-8 8" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  trend: (c = P.promo) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M2 11l4-4 2.5 2.5L13 4" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.5 4H13v3.5" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  wallet: (c = P.promo) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1.5" y="4" width="13" height="9" rx="2" stroke={c} strokeWidth="1.3"/>
      <path d="M1.5 7h13" stroke={c} strokeWidth="1.3"/>
      <circle cx="11.5" cy="10" r="1" fill={c}/>
    </svg>
  ),
};

// ─── Subpage header ──────────────────────────────────────────
function PSubHeader({ title, onBack, trailing }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '16px 16px 8px', gap: 4 }}>
      <button type="button" onClick={onBack} style={{
        background: 'transparent', border: 0, padding: '4px 6px 4px 0',
        cursor: 'pointer', display: 'flex', alignItems: 'center',
        color: P.promo, fontSize: 14, fontWeight: 500, gap: 2, flexShrink: 0,
      }}>
        {PI.chevLeft()}
        Atpakaļ
      </button>
      <div style={{ flex: 1, fontSize: 16, fontWeight: 700, textAlign: 'center', color: P.ink, paddingRight: trailing ? 0 : 60 }}>
        {title}
      </div>
      {trailing && <div style={{ flexShrink: 0 }}>{trailing}</div>}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// SCREEN 1 — Notification banner (shown over the pension screen)
// ─────────────────────────────────────────────────────────────
function NotificationBanner({ onTap, onDismiss }) {
  const [visible, setVisible] = React.useState(true);

  if (!visible) return null;

  const sharedCard = {
    backdropFilter: 'blur(28px) saturate(180%)',
    WebkitBackdropFilter: 'blur(28px) saturate(180%)',
    boxShadow: '0 6px 28px rgba(0,0,0,0.16), 0 1px 4px rgba(0,0,0,0.07)',
    border: '0.5px solid rgba(0,0,0,0.06)',
  };

  return (
    <>
      {/* notification card */}
      <div style={{
        ...sharedCard,
        position: 'absolute', top: 58, left: 10, right: 10, zIndex: 100,
        background: 'rgba(255,255,255,0.94)',
        borderRadius: 20,
        padding: '12px 14px 14px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5 }}>
          <img src="indexo.png" alt="Indexo" style={{ width: 36, height: 36, borderRadius: 9, flexShrink: 0, display: 'block' }}/>
          <span style={{ flex: 1, fontSize: 13, fontWeight: 700, color: P.ink }}>Indexo</span>
          <span style={{ fontSize: 12, color: P.mute }}>tagad</span>
        </div>
        <div style={{ fontSize: 14.5, color: P.ink, lineHeight: '21px' }}>
          Šomēnes Indexo ieguldīs <strong>€46</strong> tavā trešā līmeņa pensijā.
        </div>
      </div>

      {/* separate action pill below */}
      <button type="button" onClick={onTap} style={{
        ...sharedCard,
        position: 'absolute', top: 178, left: 10, right: 10, zIndex: 100,
        background: 'rgba(210,210,216,0.82)',
        borderRadius: 16,
        border: 0, padding: '14px',
        fontSize: 16, fontWeight: 500, color: P.ink,
        cursor: 'pointer', textAlign: 'center',
        fontFamily: 'inherit',
      }}>Pārskatīt</button>
    </>
  );
}

function NotificationScreen({ onOpenPending }) {
  const [showBanner, setShowBanner] = React.useState(true);

  return (
    <IOSDevice width={402} height={874} dark={true} statusBarTime="">
      {/* homescreen fills the entire device screen area */}
      <div style={{ position: 'relative', height: '100%', overflow: 'hidden' }}>
        <img
          src="phone homescreen.png"
          alt=""
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'top center',
            display: 'block',
          }}
        />

        {/* notification banner */}
        {showBanner ? (
          <NotificationBanner
            onTap={onOpenPending}
            onDismiss={() => setShowBanner(false)}
          />
        ) : (
          <div style={{
            position: 'absolute', top: 58, left: 10, right: 10, zIndex: 100,
            background: 'rgba(255,255,255,0.45)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            borderRadius: 16, padding: '10px 16px',
            textAlign: 'center', fontSize: 12.5, color: 'rgba(0,0,0,0.6)',
          }}>
            Paziņojums noraidīts — to atradīsi paziņojumu centrā
          </div>
        )}
      </div>
    </IOSDevice>
  );
}

function NotificationArrivedScreen() {
  return (
    <IOSDevice width={402} height={874} dark={true} statusBarTime="">
      <div style={{ position: 'relative', height: '100%', overflow: 'hidden' }}>
        <img
          src="phone homescreen.png"
          alt=""
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'top center',
            display: 'block',
          }}
        />
        {/* arrived banner — transparent, no action button */}
        <div style={{
          position: 'absolute', top: 58, left: 10, right: 10, zIndex: 100,
          background: 'rgba(255,255,255,0.72)',
          backdropFilter: 'blur(28px) saturate(180%)',
          WebkitBackdropFilter: 'blur(28px) saturate(180%)',
          borderRadius: 20,
          boxShadow: '0 6px 28px rgba(0,0,0,0.14), 0 1px 4px rgba(0,0,0,0.06)',
          border: '0.5px solid rgba(0,0,0,0.06)',
          padding: '12px 14px 14px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5 }}>
            <img src="indexo.png" alt="Indexo" style={{ width: 36, height: 36, borderRadius: 9, flexShrink: 0, display: 'block' }}/>
            <span style={{ flex: 1, fontSize: 13, fontWeight: 700, color: P.ink }}>Indexo</span>
            <span style={{ fontSize: 12, color: P.mute }}>tagad</span>
          </div>
          <div style={{ fontSize: 14.5, color: P.ink, lineHeight: '21px' }}>
            Šomēnes Indexo ieguldīs <strong>€46</strong> tavā trešā līmeņa pensijā.
          </div>
        </div>
      </div>
    </IOSDevice>
  );
}

// ─────────────────────────────────────────────────────────────
// SCREEN 2 — Pending investments list
// ─────────────────────────────────────────────────────────────
const PAST_ITEMS = [
  { month: 'Aprīlis', amount: 60, status: 'invested', date: '5. apr.' },
  { month: 'Marts', amount: 55, status: 'invested', date: '5. mar.' },
  { month: 'Februāris', amount: 110, status: 'invested', date: '5. feb.' },
  { month: 'Janvāris', amount: 0, status: 'skipped', date: '5. jan.' },
  { month: 'Decembris', amount: 80, status: 'invested', date: '5. dec.' },
];

function StatusBadge({ status }) {
  if (status === 'invested') return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="9" fill={P.promo}/>
      <path d="M5 9.5l2.5 2.5 5.5-5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  if (status === 'skipped') return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="9" fill={P.line}/>
      <path d="M6 6l6 6M12 6l-6 6" stroke={P.mute} strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
  return null;
}

function PendingListScreen({ onOpenDetail, onBack }) {
  const totalSaved = PAST_ITEMS.filter(i => i.status === 'invested').reduce((s, i) => s + i.amount, 0);
  const streak = 4;

  return (
    <IOSDevice width={402} height={874}>
      <div style={{
        background: P.bg, height: '100%', display: 'flex', flexDirection: 'column',
        fontFamily: '"Gibson","IBM Plex Sans","Aptos",system-ui,sans-serif', color: P.ink, overflow: 'hidden',
      }}>
        <div style={{ flex: 1, overflowY: 'auto', paddingTop: 56 }}>
          <PSubHeader title="Iemaksas" onBack={onBack}/>

          {/* summary strip */}
          <div style={{ display: 'flex', gap: 10, margin: '8px 16px 0' }}>
            {[
              { icon: PI.wallet(), label: 'Kopā ieguldīts', value: fmt(totalSaved) },
              { icon: PI.trend(), label: 'Aktīvs investors', value: `${streak} mēnešus pēc kārtas`, small: true },
            ].map(({ icon, label, value, small }) => (
              <div key={label} style={{
                flex: 1, background: P.card, borderRadius: 14, padding: '12px 14px',
                border: `1px solid ${P.line}`,
                boxShadow: '0 1px 2px rgba(30,25,10,0.04)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  {icon}
                  <span style={{ fontSize: 11, color: P.mute, textTransform: 'uppercase', letterSpacing: 0.8, fontWeight: 600 }}>{label}</span>
                </div>
                <div style={{ fontSize: small ? 14 : 20, fontWeight: 700, marginTop: 6, color: P.promo, letterSpacing: 0, whiteSpace: 'nowrap' }}>{value}</div>
              </div>
            ))}
          </div>

          {/* pending card */}
          <div style={{ margin: '16px 16px 0' }}>
            <button type="button" onClick={onOpenDetail} style={{
              width: '100%', border: 0, borderRadius: 16, padding: 0, cursor: 'pointer', textAlign: 'left',
              background: P.promo,
              boxShadow: '0 4px 20px rgba(24,74,59,0.25)',
            }}>
              <div style={{ padding: '18px 18px 16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.2, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase' }}>
                      Maijs 2026
                    </div>
                    <div style={{ fontSize: 38, fontWeight: 800, color: '#fff', letterSpacing: -1, marginTop: 4 }}>
                      €46
                    </div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', marginTop: 2 }}>
                      Iemaksāts 5. maijā · starpkontā
                    </div>
                  </div>
                  <div style={{
                    background: P.accent, borderRadius: 10, padding: '8px 12px', flexShrink: 0,
                    display: 'flex', alignItems: 'baseline', gap: 4, whiteSpace: 'nowrap',
                  }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: P.ink }}>Atlikušas 3 dienas</span>
                  </div>
                </div>

                {/* range bar — static, no thumb */}
                <div style={{ marginTop: 14 }}>
                  <div style={{ position: 'relative', height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.18)' }}>
                    <div style={{
                      position: 'absolute', left: 0, width: '61%', height: '100%',
                      background: P.accent, borderRadius: 3,
                    }}/>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>Minimālais €20</span>
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>Maksimālais €90</span>
                  </div>
                </div>

                <div style={{
                  marginTop: 12, display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
                  gap: 4, color: P.accent, fontSize: 13, fontWeight: 700,
                }}>
                  Pārskatīt un pielāgot {PI.chevRight(P.accent)}
                </div>
              </div>
            </button>
          </div>

          {/* history */}
          <div style={{ margin: '24px 16px 0' }}>
            <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: P.mute, marginBottom: 8 }}>
              Vēsture
            </div>
            <div style={{ background: P.card, borderRadius: 16, border: `1px solid ${P.line}`, overflow: 'hidden' }}>
              {PAST_ITEMS.map((item, i) => (
                <div key={item.month} style={{
                  display: 'flex', alignItems: 'center', padding: '13px 16px',
                  borderBottom: i < PAST_ITEMS.length - 1 ? `1px solid ${P.line}` : 'none',
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 15, fontWeight: 600 }}>{item.month}</div>
                    <div style={{ fontSize: 12, color: P.mute, marginTop: 1 }}>{item.date}</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: item.status === 'invested' ? P.promo : P.mute, textAlign: 'right' }}>
                      {item.status === 'invested' ? fmt(item.amount) : '—'}
                    </div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: item.status === 'invested' ? P.promo : P.mute }}>
                      {item.status === 'invested' ? 'Ieguldīts' : 'Izlaists'}
                    </div>
                    <StatusBadge status={item.status}/>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ height: 32 }}/>
        </div>
      </div>
    </IOSDevice>
  );
}

// ─────────────────────────────────────────────────────────────
// SCREEN 3 — Pending detail + adjustment
// ─────────────────────────────────────────────────────────────
function RangeInput({ value, min, max, onChange, accent = P.accent }) {
  const pct = Math.round(((value - min) / (max - min)) * 100);
  return (
    <input
      type="range" min={min} max={max} step={5} value={value}
      onChange={e => onChange(Number(e.target.value))}
      className="fluxion-range"
      style={{ '--range-fill': `${pct}%` }}
    />
  );
}

function BreakdownRow({ label, value, highlight }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 0' }}>
      <span style={{ fontSize: 12, color: P.mute }}>{label}</span>
      <span style={{ fontSize: 12.5, fontWeight: highlight ? 700 : 600, color: P.ink }}>
        {value}
      </span>
    </div>
  );
}

function PendingDetailScreen({ onBack }) {
  const FLOOR = 20, TARGET = 46, CEILING = 90;
  const [amount, setAmount] = React.useState(TARGET);
  const [action, setAction] = React.useState(null); // null | 'confirmed' | 'skipped'
  const [showSkipConfirm, setShowSkipConfirm] = React.useState(false);

  const safeToInvest = 460;
  const afterContrib = safeToInvest - amount;

  if (action === 'confirmed') {
    return (
      <IOSDevice width={402} height={874}>
        <div style={{
          background: P.bg, height: '100%', display: 'flex', flexDirection: 'column',
          fontFamily: '"Gibson","IBM Plex Sans","Aptos",system-ui,sans-serif',
          alignItems: 'center', justifyContent: 'center', padding: '0 32px',
        }}>
          <div style={{
            width: 72, height: 72, borderRadius: '50%', background: 'rgba(24,74,59,0.10)',
            display: 'grid', placeItems: 'center', marginBottom: 20,
          }}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M6 17l6 6 14-13" stroke={P.promo} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div style={{ fontSize: 26, fontWeight: 800, color: P.ink, textAlign: 'center', letterSpacing: -0.5 }}>
            {fmt(amount)} ieguldīts!
          </div>
          <div style={{ fontSize: 14, color: P.mute, textAlign: 'center', marginTop: 8, lineHeight: '20px' }}>
            Nauda tiek pārskaitīta uz 3. pensiju līmeņa kontu. Pārskaitījums pabeigts 1–2 darba dienu laikā.
          </div>
          <div style={{
            marginTop: 28, background: P.warm, borderRadius: 16, padding: '16px 18px', width: '100%',
          }}>
            <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: 1, color: P.mute, fontWeight: 700 }}>Šī mēneša iemaksa</div>
            <div style={{ fontSize: 32, fontWeight: 800, color: P.promo, marginTop: 4 }}>{fmt(amount)}</div>
            <div style={{ fontSize: 13, color: P.mute, marginTop: 4 }}>INDEXO Akcijas · Maijs 2026</div>
          </div>
          <button type="button" onClick={onBack} style={{
            marginTop: 24, width: '100%', border: 0, borderRadius: 14,
            padding: '15px', background: P.promo, color: '#fff',
            fontSize: 16, fontWeight: 700, cursor: 'pointer',
          }}>
            Atpakaļ uz pensijām
          </button>
        </div>
      </IOSDevice>
    );
  }

  if (action === 'skipped') {
    return (
      <IOSDevice width={402} height={874}>
        <div style={{
          background: P.bg, height: '100%', display: 'flex', flexDirection: 'column',
          fontFamily: '"Gibson","IBM Plex Sans","Aptos",system-ui,sans-serif',
          alignItems: 'center', justifyContent: 'center', padding: '0 32px',
        }}>
          <div style={{
            width: 72, height: 72, borderRadius: '50%', background: '#F3F4F6',
            display: 'grid', placeItems: 'center', marginBottom: 20,
          }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M8 14h12M14 8v12" stroke={P.mute} strokeWidth="2" strokeLinecap="round" transform="rotate(45 14 14)"/>
            </svg>
          </div>
          <div style={{ fontSize: 24, fontWeight: 800, color: P.ink, textAlign: 'center', letterSpacing: -0.5 }}>
            Maijs izlaists
          </div>
          <div style={{ fontSize: 14, color: P.mute, textAlign: 'center', marginTop: 8, lineHeight: '20px' }}>
            Tu paliec plānā. Jūnijā saņemsi jaunu ieteikumu, kad ienāks alga.
          </div>
          <button type="button" onClick={onBack} style={{
            marginTop: 28, width: '100%', border: 0, borderRadius: 14,
            padding: '15px', background: P.pill, color: P.ink,
            fontSize: 15, fontWeight: 700, cursor: 'pointer',
          }}>
            Atpakaļ uz pensijām
          </button>
        </div>
      </IOSDevice>
    );
  }

  const diffFromTarget = amount - TARGET;

  return (
    <IOSDevice width={402} height={874}>
      <div style={{
        background: P.bg, height: '100%', display: 'flex', flexDirection: 'column',
        fontFamily: '"Gibson","IBM Plex Sans","Aptos",system-ui,sans-serif', color: P.ink, overflow: 'hidden',
      }}>
        <div style={{ flex: 1, overflowY: 'auto', paddingTop: 56 }}>
          <PSubHeader
            title="Maija iemaksa"
            onBack={onBack}
            trailing={
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#92690A', fontSize: 12, fontWeight: 700 }}>
                {PI.clock('#92690A')}
                <span>3 dienas</span>
              </div>
            }
          />

          <div style={{ padding: '4px 16px 10px', display: 'flex', flexDirection: 'column', gap: 10 }}>

            {/* hero amount */}
            <div style={{
              background: P.promo, borderRadius: 18, padding: '14px 18px 12px',
              boxShadow: '0 4px 20px rgba(24,74,59,0.22)',
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.2, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase' }}>
                Iemaksa · Maijs 2026
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10, marginTop: 4 }}>
                <div style={{ fontSize: 40, fontWeight: 800, color: '#fff', letterSpacing: -1.5, lineHeight: 1 }}>
                  {fmt(amount)}
                </div>
                {diffFromTarget !== 0 && (
                  <div style={{
                    fontSize: 13, fontWeight: 700, marginBottom: 4,
                    color: diffFromTarget > 0 ? P.accent : 'rgba(255,255,255,0.6)',
                  }}>
                    {diffFromTarget > 0 ? '+' : ''}{fmt(diffFromTarget)} no ieteikuma
                  </div>
                )}
              </div>
              <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.65)', marginTop: 3 }}>
                INDEXO Akcijas · Augsts risks
              </div>

              {/* range track */}
              <div style={{ marginTop: 12 }}>
                <div style={{ position: 'relative', height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.18)' }}>
                  <div style={{
                    position: 'absolute', left: 0,
                    width: `${Math.round(((amount - FLOOR) / (CEILING - FLOOR)) * 100)}%`,
                    height: '100%', background: P.accent, borderRadius: 3,
                  }}/>
                  <div style={{
                    position: 'absolute',
                    left: `${Math.round(((TARGET - FLOOR) / (CEILING - FLOOR)) * 100)}%`,
                    top: '50%', transform: 'translate(-50%, -50%)',
                    width: 2, height: 12, borderRadius: 1, background: 'rgba(255,255,255,0.4)',
                  }}/>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
                  <span style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.45)' }}>Min {fmt(FLOOR)}</span>
                  <span style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.45)' }}>Ieteikts {fmt(TARGET)}</span>
                  <span style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.45)' }}>Maks {fmt(CEILING)}</span>
                </div>
              </div>
            </div>

            {/* adjustment slider */}
            <div style={{ background: P.card, borderRadius: 16, padding: '12px 16px 10px', border: `1px solid ${P.line}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                <span style={{ fontSize: 14, fontWeight: 700 }}>Pielāgot summu</span>
                <span style={{ fontSize: 20, fontWeight: 800, color: P.promo, letterSpacing: -0.5 }}>{fmt(amount)}</span>
              </div>
              <RangeInput value={amount} min={FLOOR} max={CEILING} onChange={setAmount}/>
              <div style={{ display: 'flex', gap: 6, marginTop: 2 }}>
                {[FLOOR, TARGET, CEILING].map((v) => (
                  <button key={v} type="button" onClick={() => setAmount(v)} style={{
                    flex: 1, border: `1px solid ${amount === v ? P.promo : P.line}`,
                    borderRadius: 8, padding: '5px 4px',
                    background: amount === v ? '#E8F5ED' : 'transparent',
                    color: amount === v ? P.promo : P.mute,
                    fontSize: 12, fontWeight: 700, cursor: 'pointer',
                  }}>
                    {v === FLOOR ? 'Minimālais' : v === TARGET ? 'Ieteikts' : 'Drosmīgais'}
                    <div style={{ fontSize: 10.5, fontWeight: 600, marginTop: 1 }}>{fmt(v)}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* breakdown */}
            <div style={{ background: P.warm, borderRadius: 16, padding: '10px 14px' }}>
              <div style={{ fontSize: 12.5, fontWeight: 700, marginBottom: 2 }}>Kā tika aprēķināts</div>
              <div style={{ borderBottom: `1px solid ${P.line}` }}>
                <BreakdownRow label="Algas saņemta" value="€2,140"/>
                <BreakdownRow label="Tēriņi (pēdējais mēn.)" value="€1,680"/>
                <BreakdownRow label="Drošais atlikums" value={fmt(safeToInvest)}/>
                <BreakdownRow label="Mērķis 10%" value={fmt(TARGET)}/>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10 }}>
                <span style={{ fontSize: 13.5, fontWeight: 700, color: P.ink }}>Pēc iemaksas atlikums</span>
                <span style={{ fontSize: 13, fontWeight: 800, color: afterContrib < 100 ? P.danger : P.promo }}>
                  {fmt(afterContrib)}
                </span>
              </div>
              {afterContrib < 100 && (
                <div style={{ fontSize: 12, color: P.danger, marginTop: 6, lineHeight: '16px' }}>
                  Mazāk par €100 rezervē — apsveri samazināt iemaksu.
                </div>
              )}
            </div>

            {/* tax note */}
            <div style={{
              background: '#F0F4FF', borderRadius: 10, padding: '7px 10px',
              display: 'flex', gap: 7, alignItems: 'flex-start',
              border: '1px solid rgba(79,107,209,0.15)',
            }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
                <circle cx="8" cy="8" r="6.5" stroke="#4F6BD1" strokeWidth="1.3"/>
                <path d="M8 7v4M8 5v.01" stroke="#4F6BD1" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <div style={{ fontSize: 11.5, color: '#3A4E9E', lineHeight: '15px' }}>
                Ieguldot <strong>{fmt(amount)}</strong>, tu vari atgūt līdz <strong>{fmt(Math.round(amount * 0.2))}</strong> nodokļu atmaksā (IIN 20%).
              </div>
            </div>

            {/* primary CTA */}
            <button type="button" onClick={() => setAction('confirmed')} style={{
              width: '100%', border: 0, borderRadius: 14, padding: '15px',
              background: P.accent, color: P.ink, fontSize: 16, fontWeight: 800,
              cursor: 'pointer', letterSpacing: 0,
              boxShadow: '0 2px 12px rgba(242,210,58,0.35)',
            }}>
              Ieguldīt {fmt(amount)}
            </button>

            {!showSkipConfirm ? (
              <button type="button" onClick={() => setShowSkipConfirm(true)} style={{
                width: '100%', border: `1px solid ${P.line}`, borderRadius: 14, padding: '13px',
                background: 'transparent', color: P.mute, fontSize: 14, fontWeight: 600,
                cursor: 'pointer',
              }}>
                Izlaist šo mēnesi
              </button>
            ) : (
              <div style={{
                background: P.card, borderRadius: 14, padding: '12px 14px',
                border: `1px solid ${P.line}`,
                boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
              }}>
                <div style={{ fontSize: 14, fontWeight: 700 }}>Izlaist maiju?</div>
                <div style={{ fontSize: 12.5, color: P.mute, marginTop: 4, lineHeight: '17px' }}>
                  Tu paliec plānā. Nākamā iemaksa tiks aprēķināta jūnijā pēc algas saņemšanas.
                </div>
                <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
                  <button type="button" onClick={() => setShowSkipConfirm(false)} style={{
                    flex: 1, border: `1px solid ${P.line}`, borderRadius: 9, padding: '9px',
                    background: 'transparent', color: P.ink, fontSize: 13.5, fontWeight: 700, cursor: 'pointer',
                  }}>Atcelt</button>
                  <button type="button" onClick={() => { setShowSkipConfirm(false); setAction('skipped'); }} style={{
                    flex: 1, border: 0, borderRadius: 9, padding: '9px',
                    background: '#F3F4F6', color: P.mute, fontSize: 13.5, fontWeight: 700, cursor: 'pointer',
                  }}>Izlaist</button>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </IOSDevice>
  );
}

Object.assign(window, { NotificationScreen, NotificationArrivedScreen, PendingListScreen, PendingDetailScreen });
