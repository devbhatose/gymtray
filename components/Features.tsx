import Reveal from "./Reveal";
import {
  IconBowl,
  IconCalendar,
  IconChart,
  IconCheckCircle,
  IconRepeat,
  IconTrend,
} from "./icons";

const FEATURES = [
  {
    icon: IconBowl,
    title: "Personalized Meal Plans",
    text: "Get meal suggestions built around your fitness goal, preferences, and routine.",
  },
  {
    icon: IconChart,
    title: "Protein & Calorie Targets",
    text: "Know what you're aiming for each day with clear nutrition targets.",
  },
  {
    icon: IconCalendar,
    title: "Daily Meal Planning",
    text: "See what to eat throughout the day without having to plan every meal yourself.",
  },
  {
    icon: IconCheckCircle,
    title: "Nutrition Tracking",
    text: "Keep track of your meals and stay aware of how you're progressing toward your daily targets.",
  },
  {
    icon: IconRepeat,
    title: "Flexible Recommendations",
    text: "Get practical meal options that can fit your food preferences and everyday routine.",
  },
  {
    icon: IconTrend,
    title: "Progress Tracking",
    text: "Keep an eye on your nutrition journey and build consistency over time.",
  },
] as const;

export default function Features() {
  return (
    <section
      className="section features"
      id="features"
      aria-labelledby="features-title"
    >
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">What You Get</span>
          <h2 className="section-title" id="features-title">
            Everything You Need to Stay on Track.
          </h2>
          <p className="section-sub">
            From planning your meals to keeping an eye on your nutrition,
            GymTray brings the important pieces together in one place.
          </p>
        </Reveal>

        <Reveal className="features-grid" stagger>
          {FEATURES.map(({ icon: Icon, title, text }) => (
            <article className="info-card" key={title}>
              <span className="info-icon">
                <Icon size={22} />
              </span>
              <h3 className="info-title">{title}</h3>
              <p className="info-text">{text}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
