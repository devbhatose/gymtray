import Reveal from "./Reveal";

const MEALS = [
  { name: "Breakfast", items: "Oats + Eggs + Banana", kcal: "480 kcal" },
  { name: "Lunch", items: "Chicken + Rice + Salad", kcal: "640 kcal" },
  { name: "Snack", items: "Greek Yogurt + Nuts", kcal: "220 kcal" },
  { name: "Dinner", items: "Paneer + Roti + Vegetables", kcal: "560 kcal" },
] as const;

const TARGETS = [
  {
    label: "Calories",
    value: "2,180",
    target: "/ 2,400 kcal",
    pct: 91,
  },
  {
    label: "Protein",
    value: "142",
    target: "/ 160 g",
    pct: 89,
  },
] as const;

/* Clearly fictional sample week — demo data only. */
const WEEK = [
  { day: "Mon", pct: 84 },
  { day: "Tue", pct: 92 },
  { day: "Wed", pct: 76 },
  { day: "Thu", pct: 95 },
  { day: "Fri", pct: 88 },
  { day: "Sat", pct: 68 },
  { day: "Sun", pct: 80 },
] as const;

function MockupBar() {
  return (
    <div className="mockup-bar" aria-hidden="true">
      <span className="mockup-dot" />
      <span className="mockup-dot" />
      <span className="mockup-dot" />
      <span className="mockup-url">app.gymtray.com</span>
    </div>
  );
}

function MealIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M4 11h16a8 8 0 0 1-8 8 8 8 0 0 1-8-8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9 7c0-1 .8-1.5.8-2.5M13 7c0-1 .8-1.5.8-2.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DashboardScreen() {
  return (
    <div
      className="mockup"
      role="img"
      aria-label="GymTray dashboard showing today's calorie and protein progress"
    >
      <MockupBar />
      <div className="mockup-body">
        <p className="mockup-greeting">Good Morning, Alex 👋</p>
        <p className="mockup-date">Tuesday · Push Day</p>

        <section className="card preview-card" aria-label="Today's Progress">
          <div className="nutrition-head">
            <span className="card-title">Today&apos;s Progress</span>
            <span className="nutrition-remaining">220 kcal left</span>
          </div>

          <div className="macro-grid preview-targets">
            {TARGETS.map((target) => (
              <div className="macro" key={target.label}>
                <div className="macro-top">
                  <span className="macro-label">{target.label}</span>
                  <span className="macro-value">
                    {target.value} <span>{target.target}</span>
                  </span>
                </div>
                <div
                  className="macro-bar"
                  role="progressbar"
                  aria-label={target.label}
                  aria-valuenow={target.pct}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <i style={{ width: `${target.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function MealsScreen() {
  return (
    <div
      className="mockup"
      role="img"
      aria-label="GymTray screen listing today's meals from breakfast to dinner"
    >
      <MockupBar />
      <div className="mockup-body">
        <p className="mockup-greeting">Today&apos;s Meals</p>
        <p className="mockup-date">Tuesday · Personalized plan</p>

        <ul className="meals-list">
          {MEALS.map((meal) => (
            <li className="meal" key={meal.name}>
              <span className="meal-icon">
                <MealIcon />
              </span>
              <span className="meal-meta">
                <span className="meal-name">{meal.name}</span>
                <span className="meal-items">{meal.items}</span>
              </span>
              <span className="meal-kcal">{meal.kcal}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ProgressScreen() {
  return (
    <div
      className="mockup"
      role="img"
      aria-label="GymTray weekly progress screen showing a sample week of daily nutrition targets"
    >
      <MockupBar />
      <div className="mockup-body">
        <p className="mockup-greeting">This Week</p>
        <p className="mockup-date">Sample data · demo account</p>

        <section className="card preview-card" aria-label="Weekly progress">
          <div className="nutrition-head">
            <span className="card-title">Daily Targets</span>
            <span className="nutrition-remaining">Demo data</span>
          </div>

          <div className="week" aria-hidden="true">
            {WEEK.map((day) => (
              <div className="week-col" key={day.day}>
                <span className="week-track">
                  <i style={{ height: `${day.pct}%` }} />
                </span>
                <span className="week-label">{day.day}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default function ProductPreview() {
  return (
    <section
      className="section preview"
      id="preview"
      aria-labelledby="preview-title"
    >
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">A Look Inside GymTray</span>
          <h2 className="section-title" id="preview-title">
            Your Nutrition Plan, All in One Place.
          </h2>
          <p className="section-sub">
            See your meals, nutrition targets, and progress without jumping
            between different apps and notes.
          </p>
        </Reveal>

        <Reveal className="preview-grid" stagger>
          <DashboardScreen />
          <MealsScreen />
          <ProgressScreen />
        </Reveal>

        <Reveal className="preview-caption" delay={80}>
          <p>Illustrative product preview — all data shown is sample data.</p>
        </Reveal>
      </div>
    </section>
  );
}
