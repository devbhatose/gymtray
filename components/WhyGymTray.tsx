import Reveal from "./Reveal";
import { IconCheckCircle, IconChart } from "./icons";

const GENERIC = [
  "Same meals for everyone",
  "Doesn't consider your routine",
  "Hard to adapt",
  "Easy to abandon",
  "Often feels complicated",
] as const;

const GYMTRAY = [
  "Built around your goals",
  "Considers your preferences",
  "Designed around your routine",
  "Easier to follow consistently",
  "Keeps your nutrition organized",
] as const;

export default function WhyGymTray() {
  return (
    <section
      className="section why"
      id="why"
      aria-labelledby="why-title"
    >
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Why GymTray</span>
          <h2 className="section-title" id="why-title">
            Because a Diet Plan Should Fit Your Life.
          </h2>
          <p className="section-sub">
            Generic plans can tell you what to eat. GymTray is designed to
            help you build a plan around who you are, what you&apos;re
            working toward, and how you actually live.
          </p>
        </Reveal>

        <Reveal className="compare" stagger>
          <div className="compare-card">
            <h3 className="compare-title">
              <span className="compare-title-icon" aria-hidden="true">
                <IconChart size={18} />
              </span>
              A Generic Diet Chart
            </h3>
            <ul className="compare-list">
              {GENERIC.map((item) => (
                <li key={item}>
                  <span className="compare-mark" aria-hidden="true">
                    –
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="compare-card compare-card--brand">
            <h3 className="compare-title">
              <span
                className="compare-title-icon is-brand"
                aria-hidden="true"
              >
                <IconCheckCircle size={18} />
              </span>
              GymTray
            </h3>
            <ul className="compare-list">
              {GYMTRAY.map((item) => (
                <li key={item}>
                  <span className="compare-mark is-on" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal className="section-closing" delay={80}>
          <p>
            Your diet should work <span className="accent">with your life</span>{" "}
            — not against it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
