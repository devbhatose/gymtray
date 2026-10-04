import Reveal from "./Reveal";
import { IconBalance, IconDumbbell, IconFlame, IconPlay } from "./icons";

const AUDIENCE = [
  {
    icon: IconDumbbell,
    title: "Building Muscle",
    text: "Trying to build muscle and want your nutrition to support your training?",
  },
  {
    icon: IconFlame,
    title: "Losing Fat",
    text: "Working toward fat loss and need a structured approach to your daily meals?",
  },
  {
    icon: IconBalance,
    title: "Maintaining",
    text: "Happy with where you are and want a sustainable way to manage your nutrition?",
  },
  {
    icon: IconPlay,
    title: "Getting Started",
    text: "New to structured nutrition and don't know where to begin? Start with a plan built around you.",
  },
] as const;

export default function WhoFor() {
  return (
    <section
      className="section audience"
      id="who"
      aria-labelledby="who-title"
    >
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Made for Your Journey</span>
          <h2 className="section-title" id="who-title">
            Whatever You&apos;re Working Toward, Start With the Right
            Nutrition.
          </h2>
          <p className="section-sub">
            GymTray is designed for people who train, care about their
            nutrition, and want a simpler way to stay consistent.
          </p>
        </Reveal>

        <Reveal className="audience-grid" stagger>
          {AUDIENCE.map(({ icon: Icon, title, text }) => (
            <article className="info-card" key={title}>
              <span className="info-icon">
                <Icon size={22} />
              </span>
              <h3 className="info-title">{title}</h3>
              <p className="info-text">{text}</p>
            </article>
          ))}
        </Reveal>

        <Reveal className="section-closing" delay={80}>
          <p>
            Your goal may be different.{" "}
            <span className="accent">Your plan should be too.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
