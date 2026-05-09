const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "promo": "auto",
  "accent": "#F2D23A"
}/*EDITMODE-END*/;

const SCREEN_DEFS = [
  { key: 'home',          label: 'Sākums' },
  { key: 'notif-arrived', label: 'Paz. ieradies' },
  { key: 'notif',         label: 'Paz. atvērts' },
  { key: 'list',          label: 'Iemaksas' },
  { key: 'detail',        label: 'Detaļas' },
];

function App() {
  const [tweaks, setTweaks] = React.useState(TWEAK_DEFAULTS);
  const [activeScreen, setActiveScreen] = React.useState('notif-arrived');

  React.useEffect(() => {
    document.documentElement.style.setProperty('--brand-accent', tweaks.accent);
  }, [tweaks.accent]);

  React.useEffect(() => {
    const onMsg = (e) => {
      const d = e.data || {};
      if (d.type === '__activate_edit_mode') {
        document.getElementById('tweaksPanel').classList.add('open');
      } else if (d.type === '__deactivate_edit_mode') {
        document.getElementById('tweaksPanel').classList.remove('open');
      }
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');

    const promoSel = document.getElementById('tw-promo');
    const accentIn = document.getElementById('tw-accent');
    promoSel.value = tweaks.promo;
    accentIn.value = tweaks.accent;
    const onPromo = () => {
      setTweaks(t => ({ ...t, promo: promoSel.value }));
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { promo: promoSel.value }}, '*');
    };
    const onAccent = () => {
      setTweaks(t => ({ ...t, accent: accentIn.value }));
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { accent: accentIn.value }}, '*');
    };
    promoSel.addEventListener('change', onPromo);
    accentIn.addEventListener('change', onAccent);
    return () => {
      window.removeEventListener('message', onMsg);
      promoSel.removeEventListener('change', onPromo);
      accentIn.removeEventListener('change', onAccent);
    };
  }, []);

  const goToDetail = () => setActiveScreen('detail');
  const goToList   = () => setActiveScreen('list');

  return (
    <div style={{ '--brand-accent': tweaks.accent, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32 }}>

      {/* screen picker */}
      <div style={{
        display: 'flex', gap: 6, background: 'rgba(255,255,255,0.08)',
        borderRadius: 12, padding: 4,
      }}>
        {SCREEN_DEFS.map(({ key, label }) => (
          <button key={key} type="button" onClick={() => setActiveScreen(key)} style={{
            border: 0, borderRadius: 9, padding: '7px 16px',
            background: activeScreen === key ? '#fff' : 'transparent',
            color: activeScreen === key ? '#1A1A1A' : 'rgba(255,255,255,0.65)',
            fontSize: 13, fontWeight: activeScreen === key ? 700 : 500, cursor: 'pointer',
            boxShadow: activeScreen === key ? '0 1px 4px rgba(0,0,0,0.12)' : 'none',
          }}>{label}</button>
        ))}
      </div>

      {/* screens */}
      {activeScreen === 'home' && (
        <div data-screen-label="Home">
          <IOSDevice width={402} height={874}>
            <Home tweaks={tweaks}/>
          </IOSDevice>
        </div>
      )}

      {activeScreen === 'notif-arrived' && (
        <div data-screen-label="Notification Arrived">
          <NotificationArrivedScreen/>
        </div>
      )}

      {activeScreen === 'notif' && (
        <div data-screen-label="Notification Opened">
          <NotificationScreen onOpenPending={() => { goToDetail(); }}/>
        </div>
      )}

      {activeScreen === 'list' && (
        <div data-screen-label="Pending List">
          <PendingListScreen
            onOpenDetail={goToDetail}
            onBack={() => setActiveScreen('home')}
          />
        </div>
      )}

      {activeScreen === 'detail' && (
        <div data-screen-label="Pending Detail">
          <PendingDetailScreen onBack={goToList}/>
        </div>
      )}

    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
