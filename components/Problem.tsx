import Reveal from "./Reveal";
import { IconBowl, IconChart, IconEgg, IconRepeat } from "./icons";

const PROBLEMS = [
  {
    icon: IconEgg,
    title: "Not Enough Protein",
    text: "You know protein matters, but you're not sure how much you actually need or how to reach it every day.",
  },
  {
    icon: IconBowl,
    title: "What Should I Eat?",
    text: "Finding meals that fit your goal, preferences, and routine shouldn't require hours of research.",
  },
  {
    icon: IconChart,
    title: "Confused About Calories",
    text: "Too little, too much, or simply no idea what your daily target should look like.",
  },
  {
    icon: IconRepeat,
    title: "Can't Stay Consistent",
    text: "A diet that doesn't fit your lifestyle is difficult to follow for more than a few days.",
  },
] as const;

export default function Problem() {
  return (
    <section
      className="section problem"
      id="problem"
      aria-labelledby="problem-title"
    >
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">The Problem</span>
          <h2 className="section-title" id="problem-title">
            Working Out Is Only Half the Work.
          </h2>
          <p className="section-sub">
            You can spend hours in the gym, but if your diet is random,
            reaching your goal becomes a lot harder.
          </p>
        </Reveal>

        <Reveal className="problem-grid" stagger>
          {PROBLEMS.map(({ icon: Icon, title, text }) => (
            <article className="info-card" key={title}>
              <span className="info-icon">
                <Icon size={22} />
              </span>
              <h3 className="info-title">{title}</h3>
              <p className="info-text">{text}</p>
            </article>
          ))}
        </Reveal>

        <Reveal className="problem-closing" delay={80}>
          <p>
            Your workout plan is structured. Your{" "}
            <span className="accent">diet should be too</span>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
