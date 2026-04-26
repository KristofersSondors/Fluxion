const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "promo": "auto",
  "accent": "#F2D23A"
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweaks] = React.useState(TWEAK_DEFAULTS);

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

  return (
    <div data-screen-label="Home" style={{ '--brand-accent': tweaks.accent }}>
      <IOSDevice width={402} height={874}>
        <Home tweaks={tweaks}/>
      </IOSDevice>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
