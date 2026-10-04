import Reveal from "./Reveal";
import { IconSparkles, IconTarget, IconTrend, IconUser } from "./icons";

type StepVisual = "profile" | "goal" | "plan" | "track";

const STEPS = [
  {
    number: "01",
    icon: IconUser,
    title: "Tell Us About You",
    text: "Enter your basic details, fitness goal, food preferences, and routine.",
    visual: "profile" as StepVisual,
  },
  {
    number: "02",
    icon: IconTarget,
    title: "Set Your Goal",
    text: "Choose what you're working toward — whether that's building muscle, losing fat, maintaining your weight, or improving your nutrition.",
    visual: "goal" as StepVisual,
  },
  {
    number: "03",
    icon: IconSparkles,
    title: "Get Your Plan",
    text: "GymTray turns your information into a personalized daily nutrition and meal plan.",
    visual: "plan" as StepVisual,
  },
  {
    number: "04",
    icon: IconTrend,
    title: "Follow & Track",
    text: "See your meals and nutrition targets in one place and stay consistent with your plan.",
    visual: "track" as StepVisual,
  },
] as const;

function StepVisual({ kind }: { kind: StepVisual }) {
  if (kind === "profile") {
    return (
      <div className="sv" aria-hidden="true">
        <div className="sv-profile">
          <span className="sv-avatar" />
          <span className="sv-lines">
            <i />
            <i />
          </span>
        </div>
        <div className="sv-chips">
          <span>Age 26</span>
          <span>72 kg</span>
          <span>178 cm</span>
        </div>
      </div>
    );
  }

  if (kind === "goal") {
    return (
      <div className="sv" aria-hidden="true">
        <span className="sv-option is-on">Build Muscle</span>
        <span className="sv-option">Lose Fat</span>
        <span className="sv-option">Maintain Weight</span>
      </div>
    );
  }

  if (kind === "plan") {
    return (
      <div className="sv" aria-hidden="true">
        <span className="sv-meal">
          <i className="sv-dot" />
          Oats + Eggs + Banana
        </span>
        <span className="sv-meal">
          <i className="sv-dot" />
          Chicken + Rice + Salad
        </span>
        <span className="sv-meal">
          <i className="sv-dot" />
          Paneer + Roti + Vegetables
        </span>
      </div>
    );
  }

  return (
    <div className="sv" aria-hidden="true">
      <div className="sv-track">
        <span className="sv-track-top">
          <span>Calories</span>
          <span>2,180 / 2,400</span>
        </span>
        <span className="sv-bar">
          <i style={{ width: "91%" }} />
        </span>
      </div>
      <div className="sv-track">
        <span className="sv-track-top">
          <span>Protein</span>
          <span>142 / 160 g</span>
        </span>
        <span className="sv-bar">
          <i style={{ width: "89%" }} />
        </span>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section
      className="section how"
      id="how-it-works"
      aria-labelledby="how-title"
    >
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">How It Works</span>
          <h2 className="section-title" id="how-title">
            Your Diet. Your Goals. Your Plan.
          </h2>
          <p className="section-sub">
            Getting a personalized nutrition plan shouldn&apos;t be
            complicated.
          </p>
        </Reveal>

        <Reveal className="steps" stagger>
          {STEPS.map(({ number, icon: Icon, title, text, visual }) => (
            <article className="step" key={number}>
              <div className="step-head">
                <span className="step-label">Step {number}</span>
                <span className="step-icon">
                  <Icon size={20} />
                </span>
              </div>
              <div className="step-body">
                <h3 className="step-title">{title}</h3>
                <p className="step-desc">{text}</p>
                <StepVisual kind={visual} />
              </div>
            </article>
          ))}
        </Reveal>

        <Reveal className="how-cta" delay={80}>
          <p className="how-cta-title">
            Ready to make your diet part of the plan?
          </p>
          <a className="text-cta" href="#waitlist">
            Join the Waitlist <span aria-hidden="true">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
