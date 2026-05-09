import React, { useCallback, useEffect, useMemo, useState } from "https://esm.sh/react@18.3.1";
import { createRoot } from "https://esm.sh/react-dom@18.3.1/client";
import { AnimatePresence, motion } from "https://esm.sh/framer-motion@11.18.2?deps=react@18.3.1,react-dom@18.3.1";

const h = React.createElement;

const slides = [
  { id: "title", component: TitleSlide },
  { id: "issue", component: IssueSlide },
  { id: "solution", component: SolutionSlide },
  { id: "prototype", component: PrototypeSlide },
  { id: "operating", component: OperatingSlide },
  { id: "bank", component: BankActionSlide },
  { id: "selling", component: SellingPointsSlide },
  { id: "close", component: ClosingSlide },
];

function SlideEyebrow({ tone = "white", children }) {
  return h("span", { className: `slide-eyebrow ${tone}` }, children);
}

function FloatingTag({ tone = "white", children }) {
  return h("span", { className: `floating-tag ${tone}` }, children);
}

function BubbleMetric({ tone = "white", value, label }) {
  return h("div", { className: `bubble-metric ${tone}` },
    h("strong", null, value),
    h("span", null, label)
  );
}

function TitleSlide() {
  return h("section", { className: "slide slide-yellow title-slide" },
    h("div", { className: "title-minimal" },
      h("span", { className: "team-name" }, "Fluxion"),
      h("h1", { className: "title-line" }, "Third-pillar pension plans that fit real life.")
    )
  );

  return h("section", { className: "slide slide-yellow title-slide" },
    h("div", { className: "hero-panel" },
      h("div", { className: "hero-copy" },
        h(SlideEyebrow, { tone: "green" }, "Bank-native pension experience"),
        h("span", { className: "team-name" }, "Fluxion"),
        h("h1", { className: "title-line" }, "Third-pillar pension plans that fit real life."),
        h("p", { className: "title-subline" }, "A cleaner pension flow that feels native to the banking app, not bolted on after the fact."),
        h("div", { className: "tag-row" },
          h(FloatingTag, { tone: "yellow" }, "Salary-aware"),
          h(FloatingTag, { tone: "white" }, "Spending-aware"),
          h(FloatingTag, { tone: "green" }, "Inside the banking app")
        )
      ),
      h("div", { className: "hero-aside" },
        h(BubbleMetric, { tone: "yellow", value: "€46", label: "Suggested monthly contribution" }),
        h(BubbleMetric, { tone: "white", value: "3rd pillar", label: "Activated without leaving the account flow" }),
        h(BubbleMetric, { tone: "green", value: "12 months", label: "Dynamic contribution logic that keeps reacting over time" })
      )
    )
  );
}

function IssueSlide() {
  const items = [
    "They do not adjust to income",
    "They ignore changing monthly spending",
    "They create pressure in weaker months",
    "Fixed payments stay the same",
  ];

  return h("section", { className: "slide slide-yellow slide-issue" },
    h("div", { className: "issue-layout" },
      h("div", { className: "argument issue-copy" },
        h(SlideEyebrow, { tone: "white" }, "The current gap"),
        h("h1", null, "Fixed pension payments do not fit real income."),
        h("p", { className: "argument-subtitle" }, "Today’s pension setup ignores how monthly finances actually move, which makes long-term saving feel rigid instead of supportive."),
        h("ul", { className: "argument-list" },
          items.map((item) => h("li", { key: item }, item))
        )
      ),
      h("div", { className: "issue-side" },
        h("div", { className: "issue-visual" },
          h("img", { src: "./Roper.png", alt: "" })
        ),
        h("div", { className: "bubble-column" },
          h(BubbleMetric, { tone: "yellow", value: "Fixed amount", label: "Does not react when salary changes." }),
          h(BubbleMetric, { tone: "green", value: "Weak month", label: "Creates pressure exactly when spending is higher." })
        )
      )
    )
  );
}

function SolutionSlide() {
  const items = [
    "Paid on the user's salary day",
    "Based on salary",
    "Based on previous month's spending",
    "Dynamic floor and ceiling",
    "Dynamic investments",
  ];

  return h("section", { className: "slide slide-yellow slide-solution" },
    h("div", { className: "solution-layout" },
      h("div", { className: "argument solution-copy" },
        h(SlideEyebrow, { tone: "green" }, "The product direction"),
        h("h1", null, "Fluxion adapts pension savings to real life."),
        h("p", { className: "argument-subtitle" }, "The pension rule becomes contextual, adjustable, and understandable inside a premium mobile banking experience."),
        h("ul", { className: "argument-list" },
          items.map((item) => h("li", { key: item }, item))
        )
      ),
      h("div", { className: "solution-side" },
        h(BubbleMetric, { tone: "yellow", value: "Dynamic floor", label: "Protects low-cashflow months before money leaves the account." }),
        h(BubbleMetric, { tone: "white", value: "Visible logic", label: "Users see how the suggested payment is formed before they accept it." }),
        h("div", { className: "soft-note green-tint" },
          h("strong", null, "INDEXO-style principle"),
          h("p", null, "Make pension saving feel as simple, transparent, and modern as any other high-trust banking action.")
        )
      )
    )
  );
}

function PrototypeSlide({ prototypeStep = 0 }) {
  const [ctaCompleted, setCtaCompleted] = useState(prototypeStep > 1);
  const [showContributionAfterMode, setShowContributionAfterMode] = useState(prototypeStep > 2);
  const [showBufferAfterContinue, setShowBufferAfterContinue] = useState(false);
  const [showFinalAfterLimit, setShowFinalAfterLimit] = useState(prototypeStep >= 6);
  const clickStarted = prototypeStep === 1 && !ctaCompleted;
  const centered = prototypeStep > 1 || ctaCompleted;
  const showOnboarding = centered;
  const showContributionScreen = (prototypeStep === 2 && showContributionAfterMode) || (prototypeStep >= 3 && prototypeStep < 4) || (prototypeStep === 4 && !showBufferAfterContinue);
  const sliderDragged = prototypeStep >= 3 && (prototypeStep < 4 || (prototypeStep === 4 && !showBufferAfterContinue));
  const showBufferScreen = prototypeStep >= 5 || (prototypeStep === 4 && showBufferAfterContinue);
  const showFinalScreen = prototypeStep === 6 && showFinalAfterLimit;
  const phoneLeft = prototypeStep >= 5 || (prototypeStep === 4 && showBufferAfterContinue);
  const phoneRightExplain = showContributionScreen && !phoneLeft && prototypeStep <= 4;
  const showLeftExplainLayer = (showContributionScreen && !phoneLeft && prototypeStep <= 4) || (prototypeStep === 4 && showBufferAfterContinue);
  const modeContinueClicked = prototypeStep === 2 && !showContributionAfterMode;
  const contributionContinueClicked = prototypeStep === 4 && !showBufferAfterContinue;
  const monthlyLimitContinueClicked = prototypeStep === 6 && !showFinalAfterLimit;
  const bufferClicked = prototypeStep === 5;
  const [showMonthlyLimitScreen, setShowMonthlyLimitScreen] = useState(false);
  const monthlyLimitVisible = showMonthlyLimitScreen || prototypeStep >= 6;
  const centerOffset = typeof window === "undefined" ? 0 : Math.round(window.innerWidth * -0.19);
  const leftOffset = typeof window === "undefined" ? 0 : Math.round(window.innerWidth * -0.32);
  const rightOffset = typeof window === "undefined" ? 0 : Math.round(window.innerWidth * -0.02);

  useEffect(() => {
    if (prototypeStep === 0) {
      setCtaCompleted(false);
      return undefined;
    }

    if (prototypeStep > 1) {
      setCtaCompleted(true);
      return undefined;
    }

    const timer = window.setTimeout(() => setCtaCompleted(true), 860);
    return () => window.clearTimeout(timer);
  }, [prototypeStep]);

  useEffect(() => {
    if (prototypeStep < 2) {
      setShowContributionAfterMode(false);
      return undefined;
    }

    if (prototypeStep > 2) {
      setShowContributionAfterMode(true);
      return undefined;
    }

    const timer = window.setTimeout(() => setShowContributionAfterMode(true), 820);
    return () => window.clearTimeout(timer);
  }, [prototypeStep]);

  useEffect(() => {
    if (prototypeStep !== 4) {
      setShowBufferAfterContinue(false);
      return undefined;
    }

    const timer = window.setTimeout(() => setShowBufferAfterContinue(true), 820);
    return () => window.clearTimeout(timer);
  }, [prototypeStep]);

  useEffect(() => {
    if (!bufferClicked && prototypeStep < 6) {
      setShowMonthlyLimitScreen(false);
      return undefined;
    }
    if (prototypeStep >= 6) {
      setShowMonthlyLimitScreen(true);
      return undefined;
    }
    const timer = window.setTimeout(() => setShowMonthlyLimitScreen(true), 1250);
    return () => window.clearTimeout(timer);
  }, [bufferClicked, prototypeStep]);

  useEffect(() => {
    if (prototypeStep !== 6) {
      setShowFinalAfterLimit(false);
      return undefined;
    }
    const timer = window.setTimeout(() => setShowFinalAfterLimit(true), 820);
    return () => window.clearTimeout(timer);
  }, [prototypeStep]);

  return h("section", { className: `slide prototype-slide${centered ? " is-clicked" : ""}${showOnboarding ? " is-onboarding" : ""}${phoneLeft ? " is-left-explain" : ""}${phoneRightExplain ? " is-right-explain" : ""}` },
    h(motion.div, {
      className: "prototype-copy",
      initial: { x: -34 },
      animate: centered ? { x: -70, opacity: 0 } : { x: 0, opacity: 1 },
      transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
    },
      h(SlideEyebrow, { tone: "green" }, "Embedded onboarding"),
      h("h1", null, "Pension setup inside the banking app."),
      h("p", null, "The user sees the third-pillar opportunity in context, without leaving the account experience."),
      h("div", { className: "tag-row prototype-tag-row" },
        h(FloatingTag, { tone: "yellow" }, "Suggested"),
        h(FloatingTag, { tone: "white" }, "Adjustable"),
        h(FloatingTag, { tone: "green" }, "Transparent")
      )
    ),
    phoneLeft ? h(motion.div, {
      className: "right-yellow-block",
      initial: { x: "100%" },
      animate: { x: "0%" },
      transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] },
      "aria-hidden": "true",
    }) : null,
    phoneLeft ? h(motion.div, {
      className: "explanation-panel",
      initial: { x: 80, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    }, "Fluxion keeps the setup understandable by explaining each financial safety choice at the moment it matters.") : null,
    showLeftExplainLayer ? h("div", {
      className: "left-explanation-panel",
    }, "Fluxion turns pension saving into a monthly amount that adapts before the user commits.") : null,
    h(motion.div, {
      className: "phone-stage",
      animate: phoneLeft ? { x: leftOffset } : phoneRightExplain ? { x: rightOffset } : centered ? { x: centerOffset } : { x: 0 },
      transition: { duration: 0.82, ease: [0.16, 1, 0.3, 1] },
    },
      h(motion.div, {
        className: "iphone",
        initial: { y: 118, scale: 0.72, rotate: -2 },
        animate: { y: 0, scale: 1, rotate: 0 },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
      },
        showOnboarding
          ? h(OnboardingPhoneScreen2, { modeContinueClicked, contributionContinueClicked, monthlyLimitContinueClicked, showContributionScreen, sliderDragged, showSliderCursor: prototypeStep === 3, showBufferScreen, bufferClicked, showMonthlyLimitScreen: monthlyLimitVisible, showFinalScreen })
          : h(PensionPhoneScreen, { clicked: clickStarted }),
        clickStarted ? h(CtaCursor) : null,
        (modeContinueClicked || contributionContinueClicked || monthlyLimitContinueClicked) ? h(ContinueCursor) : null,
        bufferClicked && !showMonthlyLimitScreen ? h(BufferCursor) : null
      )
    )
  );
}

function PensionPhoneScreen({ clicked }) {
  return h(React.Fragment, null,
    h("div", { className: "status-bar" },
      h("span", null, "9:41"),
      h("div", { className: "status-icons" },
        h("span", { className: "signal", "aria-hidden": "true" }, h("i"), h("i"), h("i"), h("i")),
        h("span", { className: "wifi", "aria-hidden": "true" }),
        h("span", { className: "battery", "aria-hidden": "true" })
      )
    ),
    h("main", { className: "app" },
      h("div", { className: "app-main" },
        h("div", { className: "profile-row" },
          h("div", { className: "avatar" }, "ES"),
          h("div", { className: "profile-name" }, "Edvards Markuss Selikovs"),
          h("div", { className: "chat-icon", "aria-hidden": "true" })
        ),
        h("nav", { className: "tabs", "aria-label": "App tabs" },
          h("span", null, "Konti"),
          h("span", { className: "active" }, "Pensija"),
          h("span", null, "Uzkrājumi"),
          h("span", null, "Aizdevumi")
        ),
        h("section", { className: "summary-card" },
          h("div", { className: "summary-top" },
            h("span", null, "Tiktu uzkrāts pēdējos 12 mēnešos"),
            h("span", { className: "analysis-link" }, "Analīze →")
          ),
          h("div", { className: "big-euro" }, "2 114 €"),
          h("div", { className: "summary-note" }, "134 € vairāk nekā ar fiksētu 180 €/mēn."),
          h(motion.button, {
            className: "yellow-cta",
            type: "button",
            animate: clicked ? { scale: [1, 0.97, 1] } : { scale: 1 },
            transition: { duration: 0.2, delay: 0.48 },
          }, "Iestatīt pensiju 3. līmeni")
        ),
        h("div", { className: "pillar-title" }, "Tavi pensiju līmeņi"),
        h("section", { className: "tier-card" },
          h("div", { className: "tier-head" },
            h("span", { className: "badge" }, "1"),
            h("span", { className: "tier-name" }, "Valsts pensija")
          ),
          h(BuildingArt),
          h("div", { className: "tier-money" }, "620 €", h("small", null, "/mēn.")),
          h("div", { className: "progress" }),
          h("div", { className: "work-years" }, "31 / 40 darba gadi")
        ),
        h("div", { className: "tier-grid" },
          h(SmallTier, {
            number: "2",
            title: "2. līmenis",
            money: "2 480 €",
            note: "250 €/mēn.",
            detail: "Fonda uzkrājums",
            kind: "sun",
          }),
          h(SmallTier, {
            number: "3",
            title: "3. līmenis",
            money: "4 180 €",
            note: "170 €/mēn.",
            detail: "Dinamiskais",
            kind: "people",
          })
        )
      ),
      h(BottomNav)
    ),
    h("div", { className: "home-indicator" })
  );
}

function CtaCursor() {
  return h("svg", {
    className: "demo-cursor cta-cursor",
    viewBox: "0 0 34 34",
    "aria-hidden": "true",
  },
    h("path", { d: "M3 2 27 20 16 22 12 32 3 2Z", fill: "#111", stroke: "#fff", strokeWidth: "1.4", strokeLinejoin: "round" }),
    h("circle", { cx: "23", cy: "24", r: "6", fill: "rgba(255,235,0,0.78)" })
  );
}

function OnboardingPhoneScreen() {
  return h(React.Fragment, null,
    h("div", { className: "status-bar" },
      h("span", null, "9:41"),
      h("div", { className: "status-icons" },
        h("span", { className: "signal", "aria-hidden": "true" }, h("i"), h("i"), h("i"), h("i")),
        h("span", { className: "wifi", "aria-hidden": "true" }),
        h("span", { className: "battery", "aria-hidden": "true" })
      )
    ),
    h(motion.main, {
      className: "onboarding-screen",
      initial: { x: 70, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
    },
      h("div", { className: "onboarding-progress" },
        h("span", { className: "active" }),
        h("span"),
        h("span"),
        h("span"),
        h("span")
      ),
      h("div", { className: "onboarding-eyebrow" }, "Iemaksu režīms"),
      h("h2", null, "Izvēlies, kā vēlies veikt iemaksas"),
      h("div", { className: "option-card active" },
        h("div", null,
          h("strong", null, "Dinamisks"),
          h("p", null, "Iegulda procentu no algas un pielāgojas tavai finanšu situācijai.")
        ),
        h("span", { className: "recommended" }, "Ieteikts")
      ),
      h("div", { className: "option-card" },
        h("div", null,
          h("strong", null, "Fiksēts"),
          h("p", null, "Izvēlies nemainīgu summu, kas tiek iemaksāta katru mēnesi.")
        )
      ),
      h("button", { className: "onboarding-next", type: "button" }, "Turpināt")
    ),
    h("div", { className: "home-indicator" })
  );
}

function OnboardingPhoneScreen2({ modeContinueClicked, contributionContinueClicked, monthlyLimitContinueClicked, showContributionScreen, sliderDragged, showSliderCursor, showBufferScreen, bufferClicked, showMonthlyLimitScreen, showFinalScreen }) {
  return h(React.Fragment, null,
    h("div", { className: "status-bar" },
      h("span", null, "9:41"),
      h("div", { className: "status-icons" },
        h("span", { className: "signal", "aria-hidden": "true" }, h("i"), h("i"), h("i"), h("i")),
        h("span", { className: "wifi", "aria-hidden": "true" }),
        h("span", { className: "battery", "aria-hidden": "true" })
      )
    ),
    h(motion.main, {
      className: "onboarding-screen",
      initial: { x: 70, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
    },
      showBufferScreen
        ? showFinalScreen ? h(FinalOnboardingScreen) : showMonthlyLimitScreen ? h(MonthlyLimitScreen, { continueClicked: monthlyLimitContinueClicked }) : h(BufferScreen, { bufferClicked })
        : showContributionScreen
          ? h(ContributionScreen2, { sliderDragged, showSliderCursor, continueClicked: contributionContinueClicked })
          : h(ContributionModeScreen, { continueClicked: modeContinueClicked })
    ),
    h("div", { className: "home-indicator" })
  );
}

function ContinueCursor() {
  return h("svg", {
    className: "demo-cursor continue-cursor",
    viewBox: "0 0 34 34",
    "aria-hidden": "true",
  },
    h("path", { d: "M3 2 27 20 16 22 12 32 3 2Z", fill: "#111", stroke: "#fff", strokeWidth: "1.4", strokeLinejoin: "round" }),
    h("circle", { cx: "23", cy: "24", r: "6", fill: "rgba(255,235,0,0.78)" })
  );
}

function SliderCursor() {
  return h("svg", {
    className: "demo-cursor slider-cursor",
    viewBox: "0 0 34 34",
    "aria-hidden": "true",
  },
    h("path", { d: "M3 2 27 20 16 22 12 32 3 2Z", fill: "#111", stroke: "#fff", strokeWidth: "1.4", strokeLinejoin: "round" }),
    h("circle", { cx: "23", cy: "24", r: "6", fill: "rgba(255,235,0,0.78)" })
  );
}

function BufferCursor() {
  return h("svg", {
    className: "demo-cursor buffer-cursor",
    viewBox: "0 0 34 34",
    "aria-hidden": "true",
  },
    h("path", { d: "M3 2 27 20 16 22 12 32 3 2Z", fill: "#111", stroke: "#fff", strokeWidth: "1.4", strokeLinejoin: "round" }),
    h("circle", { cx: "23", cy: "24", r: "6", fill: "rgba(255,235,0,0.78)" })
  );
}

function ContributionModeScreen({ continueClicked }) {
  return h(motion.div, { className: "onboarding-page" },
    h(ProgressDots, { active: 0 }),
    h("div", { className: "onboarding-eyebrow" }, "Iemaksu režīms"),
    h("h2", null, "Izvēlies, kā vēlies veikt iemaksas"),
    h("div", { className: "option-card active" },
      h("div", null,
        h("strong", null, "Dinamisks"),
        h("p", null, "Iegulda procentu no algas un pielāgojas tavai finanšu situācijai.")
      ),
      h("span", { className: "recommended" }, "Ieteikts")
    ),
    h("div", { className: "option-card" },
      h("div", null,
        h("strong", null, "Fiksēts"),
        h("p", null, "Izvēlies nemainīgu summu, kas tiek iemaksāta katru mēnesi.")
      )
    ),
    h(motion.button, {
      className: "onboarding-next",
      type: "button",
      animate: continueClicked ? { scale: [1, 0.97, 1] } : { scale: 1 },
      transition: { duration: 0.2, delay: 0.42 },
    }, "Turpināt")
  );
}

function ContributionScreen() {
  return h(motion.div, {
    className: "onboarding-page",
    initial: { x: 70, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
    h(ProgressDots, { active: 1 }),
    h("h2", null, "Cik lielu daļu ieguldīt?"),
    h("div", { className: "amount-display" },
      h("span", null, "Šomēnes paredzamā iemaksa"),
      h("strong", null, "~170 €")
    ),
    h("div", { className: "percent-row" },
      h("span", null, "Mērķa procents no bruto algas"),
      h("strong", null, "7%")
    ),
    h("div", { className: "range-track" },
      h("span", { className: "range-fill" }),
      h("span", { className: "range-thumb" })
    ),
    h("div", { className: "chip-row" },
      h("span", null, "5%"),
      h("span", { className: "active" }, "7%"),
      h("span", null, "10%")
    ),
    h("div", { className: "info-box" },
      h("strong", null, "Ieteikums"),
      h("p", null, "INDEXO iesaka līdz 10% no bruto algas.")
    ),
    h("button", { className: "onboarding-next", type: "button" }, "Turpināt")
  );
}

function ContributionScreen2({ sliderDragged, showSliderCursor, continueClicked }) {
  return h(motion.div, {
    className: "onboarding-page",
    initial: { x: 70, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
    h(ProgressDots, { active: 1 }),
    h("h2", null, "Cik lielu daļu ieguldīt?"),
    h("div", { className: "amount-display" },
      h("span", null, "Šomēnes paredzamā iemaksa"),
      h("strong", null, sliderDragged ? "~240 €" : "~170 €")
    ),
    h("div", { className: "percent-row" },
      h("span", null, "Mērķa procents no bruto algas"),
      h("strong", null, sliderDragged ? "10%" : "7%")
    ),
    h("div", { className: `range-track${sliderDragged ? " is-ten" : ""}` },
      h("span", { className: "range-fill" }),
      h("span", { className: "range-thumb" },
        showSliderCursor ? h(SliderCursor) : null
      )
    ),
    h("div", { className: "chip-row" },
      h("span", null, "5%"),
      h("span", { className: sliderDragged ? "" : "active" }, "7%"),
      h("span", { className: sliderDragged ? "active" : "" }, "10%")
    ),
    h("div", { className: "info-box" },
      h("strong", null, "Ieteikums"),
      h("p", null, "INDEXO iesaka līdz 10% no bruto algas.")
    ),
    h(motion.button, {
      className: "onboarding-next",
      type: "button",
      animate: continueClicked ? { scale: [1, 0.97, 1] } : { scale: 1 },
      transition: { duration: 0.2, delay: 0.42 },
    }, "Turpināt")
  );
}

function BufferScreen({ bufferClicked }) {
  return h(motion.div, {
    className: "onboarding-page",
    initial: { x: 70, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
    h(ProgressDots, { active: 2 }),
    h("h2", null, "Iestati savu minimālo atlikumu"),
    h("p", { className: "screen-subtitle" }, "Lietotne neieguldīs, ja konta atlikums pēc tam būtu zem šīs summas."),
    h("div", { className: "buffer-grid" },
      h("span", null, "300 €"),
      h("span", { className: bufferClicked ? "active" : "" }, "500 €"),
      h("span", null, "1 000 €")
    ),
    h("button", { className: "onboarding-next", type: "button" }, "Turpināt")
  );
}

function MonthlyLimitScreen({ continueClicked }) {
  return h(motion.div, {
    className: "onboarding-page",
    initial: { x: 70, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
    h(ProgressDots, { active: 3 }),
    h("h2", null, "Nosaki mēneša limitu"),
    h("p", { className: "screen-subtitle" }, "Iemaksa nekad nepārsniegs šo summu."),
    h("div", { className: "amount-display" },
      h("span", null, "Maksimālā iemaksa mēnesī"),
      h("strong", null, "250 €")
    ),
    h("div", { className: "chip-row" },
      h("span", null, "150 €"),
      h("span", { className: "active" }, "250 €"),
      h("span", null, "400 €")
    ),
    h(motion.button, {
      className: "onboarding-next",
      type: "button",
      animate: continueClicked ? { scale: [1, 0.97, 1] } : { scale: 1 },
      transition: { duration: 0.2, delay: 0.42 },
    }, "Turpināt")
  );
}

function FinalOnboardingScreen() {
  return h(motion.div, {
    className: "onboarding-page final-onboarding-page",
    initial: { x: 70, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
    h(ProgressDots, { active: 4 }),
    h("div", { className: "final-check", "aria-hidden": "true" }, "✓"),
    h("h2", null, "Dinamiskā iemaksa ir gatava"),
    h("p", { className: "screen-subtitle final-subtitle" }, "Fluxion aprēķinās iemaksu algas dienā un nepārsniegs tavus drošības limitus."),
    h("div", { className: "setup-summary" },
      h("div", null,
        h("span", null, "Mērķa iemaksa"),
        h("strong", null, "~240 €")
      ),
      h("div", null,
        h("span", null, "Minimālais atlikums"),
        h("strong", null, "500 €")
      ),
      h("div", null,
        h("span", null, "Mēneša limits"),
        h("strong", null, "250 €")
      )
    ),
    h("div", { className: "final-note" },
      h("strong", null, "Pirmā pārbaude"),
      h("span", null, "Nākamajā algas dienā")
    ),
    h("button", { className: "onboarding-next", type: "button" }, "Apstiprināt")
  );
}

function ProgressDots({ active }) {
  return h("div", { className: "onboarding-progress" },
    [0, 1, 2, 3, 4].map((step) => h("span", {
      key: step,
      className: step === active ? "active" : "",
    }))
  );
}

function SmallTier({ number, title, money, note, detail, kind }) {
  return h("section", { className: "small-tier" },
    h("div", { className: "ghost-number" }, number),
    kind === "sun" ? h(SunArt) : h(PeopleArt),
    h("div", { className: "small-title" }, title),
    h("div", { className: "small-money" }, money),
    h("div", { className: "small-note" }, note),
    h("div", { className: "small-note" }, detail)
  );
}

function BuildingArt() {
  return h("svg", { className: "tier-art", viewBox: "0 0 84 58", fill: "none", "aria-hidden": "true" },
    h("path", { d: "M9 47h43M15 47V17l15-8 16 8v30M22 47V24h8v23M36 47V19h9v28", stroke: "#555", strokeWidth: "1.6" }),
    h("circle", { cx: "61", cy: "16", r: "10", fill: "#ffeb00", stroke: "#9f8f10", strokeWidth: "1.4" }),
    h("path", { d: "M61 11v10M56 16h10", stroke: "#174b3d", strokeWidth: "1.8", strokeLinecap: "round" }),
    h("path", { d: "M57 39c11-9 18 8 27-3", stroke: "#7d92ab", strokeWidth: "1.7", strokeLinecap: "round" })
  );
}

function SunArt() {
  return h("svg", { className: "small-art", viewBox: "0 0 80 60", fill: "none", "aria-hidden": "true" },
    h("path", { d: "M18 42a22 22 0 0 1 44 0", fill: "#f5e9aa", stroke: "#cfbf74" }),
    h("path", { d: "M14 42h52M26 42V24h14v18", stroke: "#333", strokeWidth: "1.5" }),
    h("circle", { cx: "31", cy: "32", r: "3", fill: "#e4bf56" })
  );
}

function PeopleArt() {
  return h("svg", { className: "small-art", viewBox: "0 0 80 60", fill: "none", "aria-hidden": "true" },
    h("path", { d: "M18 45h44", stroke: "#333", strokeWidth: "1.5" }),
    h("circle", { cx: "25", cy: "21", r: "3.4", fill: "#333" }),
    h("path", { d: "M19 30h12v15H21z", fill: "#ffdf22" }),
    h("path", { d: "M43 28h12v17H45z", fill: "#474184" }),
    h("circle", { cx: "49", cy: "24", r: "3.4", fill: "#e4bf76" }),
    h("path", { d: "M33 34c5-7 14 0 8 7 7-1 9 3 8 6H31V34z", stroke: "#333", strokeWidth: "1.5", fill: "#eac176" })
  );
}

function BottomNav() {
  return h("nav", { className: "bottom-nav", "aria-label": "Bottom navigation" },
    h("div", { className: "nav-item active" }, h("span", { className: "nav-dot" }, h(HomeIcon)), h("span", null, "Sākums")),
    h("div", { className: "nav-item" }, h(SwapIcon), h("span", null, "Maksājumi")),
    h("div", { className: "nav-item" }, h(GridIcon), h("span", null, "Viss"))
  );
}

function HomeIcon() {
  return h("svg", { width: "21", height: "21", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true" },
    h("path", { d: "M4 11.3 12 5l8 6.3V20h-5v-6H9v6H4v-8.7Z", fill: "#111" })
  );
}

function SwapIcon() {
  return h("svg", { width: "23", height: "23", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true" },
    h("path", { d: "M5 8h13l-3-3M19 16H6l3 3", stroke: "#111", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" })
  );
}

function GridIcon() {
  return h("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true" },
    h("rect", { x: "4", y: "4", width: "6", height: "6", rx: "1", stroke: "#111", strokeWidth: "1.5" }),
    h("rect", { x: "14", y: "4", width: "6", height: "6", rx: "1", stroke: "#111", strokeWidth: "1.5" }),
    h("rect", { x: "4", y: "14", width: "6", height: "6", rx: "1", stroke: "#111", strokeWidth: "1.5" }),
    h("rect", { x: "14", y: "14", width: "6", height: "6", rx: "1", stroke: "#111", strokeWidth: "1.5" })
  );
}

function FlowBox({ x, y, width, height, rx = 8, fill, stroke = "#202122", strokeWidth = 2, delay, children }) {
  return h(motion.g, {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.34, delay, ease: [0.22, 1, 0.36, 1] },
  },
    h(motion.rect, {
      x,
      y,
      width,
      height,
      rx,
      ry: rx,
      fill,
      stroke,
      strokeWidth,
      initial: { opacity: 0, scale: 0.985, transformBox: "fill-box", transformOrigin: "center center" },
      animate: { opacity: 1, scale: 1, transformBox: "fill-box", transformOrigin: "center center" },
      transition: { duration: 0.42, delay, ease: [0.22, 1, 0.36, 1] },
    }),
    children
  );
}

function FlowArrow({ d, markerEnd, delay, stroke, strokeWidth = 2.4 }) {
  return h(motion.path, {
    d,
    fill: "none",
    stroke,
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    markerEnd,
    initial: { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1 },
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
  });
}

function FlowLabel({ x, y, delay, color = "#111111", fontSize = 15, fontWeight = 500, textAnchor = "middle", italic = false, children }) {
  return h(motion.text, {
    x,
    y,
    fill: color,
    fontSize,
    fontWeight,
    fontStyle: italic ? "italic" : "normal",
    textAnchor,
    initial: { opacity: 0, y: 4 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, delay, ease: [0.22, 1, 0.36, 1] },
  }, children);
}

function FlowMultiline({ x, y, lines, delay, fontSize = 15, fontWeight = 500, fill = "#111111", lineHeight = 18, textAnchor = "middle" }) {
  return h(motion.text, {
    x,
    y,
    fill,
    fontSize,
    fontWeight,
    textAnchor,
    initial: { opacity: 0, y: 4 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, delay, ease: [0.22, 1, 0.36, 1] },
  },
    lines.map((line, index) => h("tspan", {
      key: `${line}-${index}`,
      x,
      dy: index === 0 ? 0 : lineHeight,
    }, line))
  );
}

function OperatingSlide() {
  return h("section", { className: "slide slide-light flowchart-slide" },
    h("div", { className: "flowchart-layout" },
      h("div", { className: "flowchart-title-block" },
        h("h1", null, "Flowchart"),
        h("span", { className: "flowchart-accent", "aria-hidden": "true" })
      ),
      h("div", { className: "flowchart-board" },
        h("div", { className: "flowchart-canvas" },
          h("svg", { className: "flowchart-svg", viewBox: "0 0 920 580", preserveAspectRatio: "xMidYMid meet", "aria-hidden": "true" },
            h("defs", null,
              h("marker", { id: "flow-arrow-black", markerWidth: "10", markerHeight: "10", refX: "10", refY: "5", orient: "auto", markerUnits: "strokeWidth" },
                h("path", { d: "M0 0L10 5L0 10Z", fill: "#111111" })
              ),
              h("marker", { id: "flow-arrow-green", markerWidth: "10", markerHeight: "10", refX: "10", refY: "5", orient: "auto", markerUnits: "strokeWidth" },
                h("path", { d: "M0 0L10 5L0 10Z", fill: "#59c56f" })
              ),
              h("marker", { id: "flow-arrow-red", markerWidth: "10", markerHeight: "10", refX: "10", refY: "5", orient: "auto", markerUnits: "strokeWidth" },
                h("path", { d: "M0 0L10 5L0 10Z", fill: "#e34c4c" })
              )
            ),
            h(FlowArrow, { d: "M183 230H242", markerEnd: "url(#flow-arrow-black)", stroke: "#111111", delay: 0.75 }),
            h(FlowArrow, { d: "M403 230H461", markerEnd: "url(#flow-arrow-black)", stroke: "#111111", delay: 1.95 }),
            h(FlowArrow, { d: "M635 230H708", markerEnd: "url(#flow-arrow-green)", stroke: "#59c56f", delay: 3.55 }),
            h(FlowArrow, { d: "M786 286V362", markerEnd: "url(#flow-arrow-black)", stroke: "#111111", delay: 4.75 }),
            h(FlowArrow, { d: "M708 425H633", markerEnd: "url(#flow-arrow-black)", stroke: "#111111", delay: 5.9 }),
            h(FlowArrow, { d: "M569 489V520", markerEnd: "url(#flow-arrow-black)", stroke: "#111111", delay: 7.0 }),
            h(FlowArrow, { d: "M504 565H131V457", markerEnd: "url(#flow-arrow-green)", stroke: "#59c56f", delay: 8.1 }),
            h(FlowArrow, { d: "M505 426H223", markerEnd: "url(#flow-arrow-green)", stroke: "#59c56f", delay: 9.05 }),
            h(FlowArrow, { d: "M548 155V145", stroke: "#e34c4c", delay: 10.15, strokeWidth: 2.2 }),
            h(FlowArrow, { d: "M548 119V102", markerEnd: "url(#flow-arrow-red)", stroke: "#e34c4c", delay: 10.35, strokeWidth: 2.2 }),
            h(FlowArrow, { d: "M634 565H894V62H817", stroke: "#e34c4c", delay: 11.0, strokeWidth: 2.2 }),
            h(FlowArrow, { d: "M682 62H617", markerEnd: "url(#flow-arrow-red)", stroke: "#e34c4c", delay: 11.18, strokeWidth: 2.2 }),
            h(FlowBox, { x: 40, y: 200, width: 143, height: 60, rx: 30, fill: "#16c8bc", delay: 0.2 },
              h(FlowMultiline, { x: 111.5, y: 226, lines: ["Salary", "received"], delay: 0.28, fontSize: 16 })
            ),
            h(FlowBox, { x: 242, y: 174, width: 161, height: 112, rx: 8, fill: "#6da8f1", delay: 1.25 },
              h(FlowMultiline, { x: 322.5, y: 211, lines: ["Fluxion", "analyzes", "financial data"], delay: 1.33, fontSize: 15, lineHeight: 20 })
            ),
            h(motion.g, {
              initial: { opacity: 0, scale: 0.985 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 0.42, delay: 2.6, ease: [0.22, 1, 0.36, 1] },
              style: { transformBox: "fill-box", transformOrigin: "center center" },
            },
              h("polygon", { points: "548,155 635,230 548,305 461,230", fill: "#ffffff", stroke: "#1f7ef4", strokeWidth: "3" }),
              h(FlowMultiline, { x: 548, y: 225, lines: ["Is account balance", "sufficient?"], delay: 2.68, fontSize: 14, lineHeight: 18 })
            ),
            h(FlowLabel, { x: 670, y: 219, delay: 3.45, color: "#56bf68", fontSize: 15, fontWeight: 600 }, "Yes"),
            h(FlowBox, { x: 708, y: 174, width: 156, height: 112, rx: 8, fill: "#6da8f1", delay: 3.95 },
              h(FlowMultiline, { x: 786, y: 206, lines: ["Fluxion", "calculates", "suggested", "contribution"], delay: 4.03, fontSize: 15, lineHeight: 19 })
            ),
            h(FlowBox, { x: 708, y: 362, width: 158, height: 128, rx: 8, fill: "#6da8f1", delay: 5.05 },
              h(FlowMultiline, { x: 787, y: 400, lines: ["Money is", "transferred to", "a temporary", "holding", "account"], delay: 5.13, fontSize: 15, lineHeight: 18 })
            ),
            h(FlowBox, { x: 505, y: 383, width: 128, height: 106, rx: 8, fill: "#ffce1f", delay: 6.15 },
              h(FlowMultiline, { x: 569, y: 420, lines: ["Push", "notification", "to user"], delay: 6.23, fontSize: 15, lineHeight: 19 })
            ),
            h(FlowBox, { x: 504, y: 520, width: 130, height: 104, rx: 8, fill: "#ffce1f", delay: 7.25 },
              h(FlowMultiline, { x: 569, y: 555, lines: ["User adjusts", "contribution"], delay: 7.33, fontSize: 15, lineHeight: 20 })
            ),
            h(FlowLabel, { x: 320, y: 552, delay: 8.05, fontSize: 14, fontWeight: 600 }, "Selected amount invested"),
            h(FlowLabel, { x: 320, y: 602, delay: 8.17, fontSize: 12, fontWeight: 500, italic: true, color: "#595959" }, "Increase, reduce, keep"),
            h(FlowBox, { x: 40, y: 385, width: 183, height: 72, rx: 36, fill: "#16c8bc", delay: 8.45 },
              h(FlowMultiline, { x: 131.5, y: 404, lines: ["Contribution", "invested into 3rd", "pillar"], delay: 8.53, fontSize: 16, lineHeight: 18 })
            ),
            h(FlowLabel, { x: 364, y: 408, delay: 9.0, fontSize: 14, fontWeight: 600 }, "No user action"),
            h(FlowLabel, { x: 364, y: 451, delay: 9.12, fontSize: 12, fontWeight: 500, italic: true, color: "#595959" }, "Adjustment period ends"),
            h(FlowLabel, { x: 548, y: 139, delay: 10.05, fontSize: 13, fontWeight: 600, color: "#e34c4c" }, "No (Account balance too low)"),
            h(motion.g, {
              initial: { opacity: 0, scale: 0.985 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 0.42, delay: 10.45, ease: [0.22, 1, 0.36, 1] },
              style: { transformBox: "fill-box", transformOrigin: "center center" },
            },
              h("polygon", { points: "515,22 627,22 606,102 494,102", fill: "#ec69c7", stroke: "#202122", strokeWidth: "2" }),
              h(FlowMultiline, { x: 560, y: 53, lines: ["Skip this", "month"], delay: 10.53, fontSize: 15, lineHeight: 20 })
            ),
            h(FlowMultiline, { x: 749, y: 81, lines: ["User manually chooses", "to skip investment"], delay: 11.0, fontSize: 12.5, fontWeight: 600, lineHeight: 15 })
          )
        )
      )
    )
  );
}

function BankActionSlide() {
  const actions = [
    {
      title: "Plan selection",
      text: "Banks publish preferred third-pillar plans that can be selected directly in the flow.",
    },
    {
      title: "Annual reports",
      text: "Each bank provides yearly performance summaries so users understand what happened.",
    },
    {
      title: "Competition layer",
      text: "Results sit side by side, pushing banks to improve funds, fees, and communication.",
    },
  ];

  return h("section", { className: "slide slide-light bank-slide" },
    h("div", { className: "bank-copy" },
      h(SlideEyebrow, { tone: "green" }, "Bank-side enablement"),
      h("h1", null, "Action from the bank side"),
      h("p", null, "Banks do not need to rebuild pension infrastructure. They need to expose the plans, reporting, and competition signals Fluxion uses in the onboarding flow."),
      h("div", { className: "post-tags" },
        h(FloatingTag, { tone: "white" }, "Plan data"),
        h(FloatingTag, { tone: "yellow" }, "Annual reports"),
        h(FloatingTag, { tone: "green" }, "Switching flow")
      ),
      h("ul", { className: "bank-bullets" },
        h("li", null, "Connect available third-pillar pension plans"),
        h("li", null, "Send annual performance and fee data"),
        h("li", null, "Let users compare and switch without leaving the bank")
      )
    ),
    h("div", { className: "bank-actions" },
      actions.map((action, index) => h("section", { className: "bank-action", key: action.title },
        h("div", { className: "bank-icon" }, h(BankActionIcon, { type: index })),
        h("div", null,
          h("h2", null, action.title),
          h("p", null, action.text)
        )
      ))
    )
  );
}

function SellingPointsSlide() {
  const points = [
    ["Onboard more people", "A pension flow inside the bank reaches users who would not open a separate pension product."],
    ["Users stay active", "Dynamic payments react every month, so the product keeps proving its value."],
    ["All pension plans in one place", "The bank becomes the pension control surface, not just the payment account."],
    ["Clear understanding", "Users see the contribution logic before committing, including limits and safety buffers."],
    ["Banks compete on results", "Transparent annual performance makes better funds and clearer reporting visible."],
  ];

  return h("section", { className: "slide slide-light selling-slide" },
    h("div", { className: "post-header compact" },
      h(SlideEyebrow, { tone: "green" }, "Why this wins"),
      h("h1", null, "Unique selling points")
    ),
    h("div", { className: "selling-grid" },
      points.map(([title, text], index) => h("section", { className: "selling-point", key: title },
        h("div", { className: "selling-icon" }, h(SellingIcon, { type: index })),
        h("h2", null, title),
        h("p", null, text)
      ))
    )
  );
}

function ClosingSlide() {
  return h("section", { className: "slide close-slide" },
    h("div", { className: "close-copy" },
      h(SlideEyebrow, { tone: "yellow" }, "Conference-ready takeaway"),
      h("span", null, "Fix the road"),
      h("h1", null, "Invest smart like Fluxion"),
      h("p", { className: "close-note" }, "A lighter, bank-native pension experience that feels credible for INDEXO customers and polished enough for a fintech stage.")
    ),
    h("div", { className: "road-scene", "aria-hidden": "true" },
      h("div", { className: "road" },
        h("span", { className: "road-line" }),
        h("span", { className: "road-crack crack-one" }),
        h("span", { className: "road-crack crack-two" }),
        h("span", { className: "road-crack crack-three" })
      )
    )
  );
}

function BankActionIcon({ type }) {
  if (type === 0) {
    return h("svg", { viewBox: "0 0 48 48", fill: "none", "aria-hidden": "true" },
      h("circle", { cx: "24", cy: "16", r: "5", stroke: "currentColor", strokeWidth: "2" }),
      h("path", { d: "M12 36c2-8 7-12 12-12s10 4 12 12M9 39h30", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }),
      h("path", { d: "M15 18 24 8l9 10", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
    );
  }
  if (type === 1) {
    return h("svg", { viewBox: "0 0 48 48", fill: "none", "aria-hidden": "true" },
      h("path", { d: "M14 8h16l6 6v26H14V8Z", stroke: "currentColor", strokeWidth: "2", strokeLinejoin: "round" }),
      h("path", { d: "M30 8v8h8M19 31l5-6 4 4 5-8M19 36h14", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
    );
  }
  return h("svg", { viewBox: "0 0 48 48", fill: "none", "aria-hidden": "true" },
    h("path", { d: "M10 36h28M14 32V18h6v14M22 32V12h6v20M30 32V22h6v10", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
    h("path", { d: "M11 14c8 2 17 1 26-5M33 8l5 1-1 5", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
  );
}

function SellingIcon({ type }) {
  const icons = [
    h("path", { d: "M24 8v32M8 24h32M14 14l20 20M34 14 14 34", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }),
    h("path", { d: "M12 32h24M16 32V20h5v12M24 32V12h5v20M32 32V18h5v14M10 14h6M8 18h8", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
    h("path", { d: "M8 24h32M24 8v32", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round" }),
    h("path", { d: "M10 13h28v20H10V13ZM17 39h14M24 33v6", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
    h("path", { d: "M12 38h24V16L24 8 12 16v22ZM18 38V24h12v14M18 17h12", stroke: "currentColor", strokeWidth: "2", strokeLinejoin: "round" }),
  ];

  return h("svg", { viewBox: "0 0 48 48", fill: "none", "aria-hidden": "true" }, icons[type]);
}

function TitleSlideUnused() {
  return h("section", { className: "slide slide-yellow title-slide" },
    h("div", { className: "title-minimal" },
      h("span", { className: "team-name" }, "Fluxion"),
      h("h1", { className: "title-line" }, "Third-pillar pension plans that fit real life.")
    )
  );
}

function App() {
  const [current, setCurrent] = useState(getInitialSlideIndex);
  const [direction, setDirection] = useState(1);
  const [prototypeStep, setPrototypeStep] = useState(getInitialPrototypeStep);
  const ActiveSlide = slides[current].component;

  const goTo = useCallback((nextIndex) => {
    setCurrent((previous) => {
      const clamped = Math.max(0, Math.min(slides.length - 1, nextIndex));
      if (clamped !== previous) {
        setDirection(clamped > previous ? 1 : -1);
      }
      return clamped;
    });
  }, []);

  const next = useCallback(() => {
    if (slides[current].id === "prototype" && prototypeStep < 6) {
      setPrototypeStep(step => step + 1);
      return;
    }
    goTo(current + 1);
  }, [current, goTo, prototypeStep]);
  const previous = useCallback(() => {
    if (slides[current].id === "prototype" && prototypeStep > 0) {
      setPrototypeStep(step => step - 1);
      return;
    }
    goTo(current - 1);
  }, [current, goTo, prototypeStep]);

  useEffect(() => {
    document.body.className = `theme-${slides[current].id}`;
  }, [current]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "ArrowRight" || event.key === " " || event.key === "PageDown") {
        event.preventDefault();
        next();
      }
      if (event.key === "ArrowLeft" || event.key === "PageUp") {
        event.preventDefault();
        previous();
      }
      if (event.key === "Home") {
        goTo(0);
      }
      if (event.key === "End") {
        goTo(slides.length - 1);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goTo, next, previous]);

  const variants = useMemo(() => ({
    enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%" }),
    center: { x: "0%" },
    exit: (dir) => ({ x: dir > 0 ? "-100%" : "100%" }),
  }), []);

  return h("div", { className: `deck theme-${slides[current].id}`, onClick: next },
    h(AnimatePresence, { initial: false, custom: direction },
      h(motion.div, {
        key: slides[current].id,
        custom: direction,
        variants,
        initial: "enter",
        animate: "center",
        exit: "exit",
        transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
        className: "slide",
      }, h(ActiveSlide, { prototypeStep }))
    ),
    h("div", { className: "controls", onClick: (event) => event.stopPropagation() },
      h("div", { className: "counter" }, `${current + 1} / ${slides.length}`),
      h("div", { className: "control-buttons" },
        h("button", { type: "button", onClick: previous, disabled: current === 0, "aria-label": "Previous slide" }, "←"),
        h("button", { type: "button", onClick: next, disabled: current === slides.length - 1, "aria-label": "Next slide" }, "→")
      )
    )
  );
}

function getInitialSlideIndex() {
  const params = new URLSearchParams(window.location.search);
  const requested = Number(params.get("slide") || window.location.hash.replace("#", ""));
  if (!Number.isFinite(requested)) {
    return 0;
  }
  return Math.max(0, Math.min(slides.length - 1, requested - 1));
}

function isYellowSlide(index) {
  return ["title", "issue", "solution"].includes(slides[index]?.id);
}

function getInitialPrototypeStep() {
  const params = new URLSearchParams(window.location.search);
  const requested = Number(params.get("demo") || 0);
  return Number.isFinite(requested) ? Math.max(0, Math.min(6, requested)) : 0;
}

createRoot(document.getElementById("root")).render(h(App));
