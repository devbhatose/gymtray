import Reveal from "./Reveal";
import {
  IconClock,
  IconFork,
  IconHeart,
  IconLeaf,
  IconTarget,
  IconUser,
} from "./icons";

const CARDS = [
  {
    icon: IconTarget,
    title: "Your Goal",
    text: "Muscle gain, fat loss, maintenance, or better nutrition.",
  },
  {
    icon: IconUser,
    title: "Your Body",
    text: "Your personal body details help determine appropriate nutrition targets.",
  },
  {
    icon: IconFork,
    title: "Your Food Preferences",
    text: "Build around the foods you actually enjoy and can realistically eat.",
  },
  {
    icon: IconClock,
    title: "Your Routine",
    text: "Your meals should fit your schedule — not force you to completely change it.",
  },
  {
    icon: IconLeaf,
    title: "Your Dietary Preferences",
    text: "Choose the type of foods that work for you, including vegetarian or non-vegetarian preferences when supported.",
  },
  {
    icon: IconHeart,
    title: "Your Lifestyle",
    text: "The plan should work in your real life, not just look good on paper.",
  },
] as const;

export default function Personalized() {
  return (
    <section
      className="section personalized"
      id="personalized"
      aria-labelledby="personalized-title"
    >
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Personalized Nutrition</span>
          <h2
            className="section-title section-title--strong"
            id="personalized-title"
          >
            Because Your Diet Shouldn&apos;t Be One-Size-Fits-All.
          </h2>
          <p className="section-sub">
            Your goals, body, food preferences, and routine are different.
            GymTray takes those differences into account when building your
            nutrition plan.
          </p>
        </Reveal>

        <Reveal className="personalized-grid" stagger>
          {CARDS.map(({ icon: Icon, title, text }) => (
            <article className="info-card" key={title}>
              <span className="info-icon">
                <Icon size={22} />
              </span>
              <h3 className="info-title">{title}</h3>
              <p className="info-text">{text}</p>
            </article>
          ))}
        </Reveal>

        <Reveal className="personalized-closing" delay={80}>
          <p>
            No generic diet chart. Just a plan{" "}
            <span className="accent">built around you</span>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
