import PlanMockup from "./PlanMockup";
import Reveal from "./Reveal";
import { IconCheckCircle, IconFork, IconTarget } from "./icons";

const BENEFITS = [
  {
    icon: IconFork,
    title: "Know What to Eat",
    text: "Get meal recommendations designed around your personal nutrition needs.",
  },
  {
    icon: IconTarget,
    title: "Know What to Aim For",
    text: "Understand your daily calorie and protein targets without doing the calculations yourself.",
  },
  {
    icon: IconCheckCircle,
    title: "Stay on Track",
    text: "Keep your meals and nutrition organized so following your diet becomes easier.",
  },
] as const;

export default function Solution() {
  return (
    <section
      className="section solution"
      id="solution"
      aria-labelledby="solution-title"
    >
      <div className="container solution-grid">
        <div className="solution-copy">
          <Reveal>
            <span className="eyebrow">The Solution</span>
            <h2 className="section-title solution-title" id="solution-title">
              Meet GymTray.
            </h2>
            <p className="solution-lead">
              A smarter way to plan what you eat around the way you train.
            </p>
            <p className="solution-text">
              GymTray helps you create a personalized nutrition plan based on
              your fitness goal, body details, food preferences, and everyday
              routine — so you know what to eat without following a
              one-size-fits-all diet.
            </p>
          </Reveal>

          <Reveal className="benefits" stagger delay={120}>
            {BENEFITS.map(({ icon: Icon, title, text }) => (
              <div className="benefit" key={title}>
                <span className="benefit-icon">
                  <Icon size={18} />
                </span>
                <div>
                  <h3 className="benefit-title">{title}</h3>
                  <p className="benefit-text">{text}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal className="solution-visual" delay={150}>
          <PlanMockup />
        </Reveal>
      </div>
    </section>
  );
}
