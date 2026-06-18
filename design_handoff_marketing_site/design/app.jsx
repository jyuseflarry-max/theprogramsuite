/* app.jsx — composition + tweaks */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#007aff",
  "dark": false,
  "density": "regular",
  "fontScale": 1,
  "showFounder": true,
  "showSpots": true
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useReveal();

  React.useEffect(() => {
    const r = document.documentElement;
    r.className = t.dark ? "dark" : "";
    r.style.setProperty("--accent", t.accent);
    // deeper variant for text/hover derived from accent
    r.style.setProperty("--accent-2", `color-mix(in srgb, ${t.accent} 80%, #000)`);
    r.style.setProperty("--font-scale", t.fontScale);
    const pad = t.density === "compact" ? 80 : t.density === "comfy" ? 128 : 104;
    r.style.setProperty("--section-pad", pad + "px");
  }, [t.dark, t.accent, t.fontScale, t.density]);

  return (
    <div>
      <style>{`.section{padding:var(--section-pad,104px) 0}`}</style>
      <Nav />
      <Hero />
      <BeforeAfter />
      {t.showFounder && <Founder />}
      <ProductProof />
      <Capabilities />
      <ContentStudio />
      <Audiences />
      <Pricing showSpots={t.showSpots} />
      <LeadForm />
      <FAQ />
      <FinalCTA />
      <Footer />
      <MobileBar />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Brand" />
        <TweakColor
          label="Accent"
          value={t.accent}
          options={["#007aff", "#5856d6", "#30b0c7", "#34c759"]}
          onChange={(v) => setTweak("accent", v)}
        />
        <TweakToggle label="Dark mode" value={t.dark} onChange={(v) => setTweak("dark", v)} />

        <TweakSection label="Layout" />
        <TweakRadio
          label="Density"
          value={t.density}
          options={["compact", "regular", "comfy"]}
          onChange={(v) => setTweak("density", v)}
        />
        <TweakSlider
          label="Text size"
          value={t.fontScale} min={0.9} max={1.15} step={0.05}
          onChange={(v) => setTweak("fontScale", v)}
        />

        <TweakSection label="Sections" />
        <TweakToggle label="Founder story" value={t.showFounder} onChange={(v) => setTweak("showFounder", v)} />
        <TweakToggle label="Founding spots" value={t.showSpots} onChange={(v) => setTweak("showSpots", v)} />
      </TweaksPanel>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
