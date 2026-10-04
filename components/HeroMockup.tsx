const MACROS = [
  { label: "Calories", value: "2,180", target: "2,400", pct: 91 },
  { label: "Protein", value: "142g", target: "160g", pct: 89 },
  { label: "Carbs", value: "245g", target: "280g", pct: 88 },
  { label: "Fats", value: "62g", target: "70g", pct: 89 },
] as const;

const MEALS = [
  { name: "Breakfast", items: "Oats + Eggs + Banana", kcal: "480 kcal" },
  { name: "Lunch", items: "Rice + Chicken + Salad", kcal: "640 kcal" },
  { name: "Snack", items: "Greek Yogurt + Nuts", kcal: "220 kcal" },
  { name: "Dinner", items: "Roti + Paneer + Vegetables", kcal: "560 kcal" },
] as const;

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

export default function HeroMockup() {
  return (
    <div className="mockup" role="img" aria-label="Preview of the GymTray nutrition dashboard showing today's macros and meals">
      <div className="mockup-bar" aria-hidden="true">
        <span className="mockup-dot" />
        <span className="mockup-dot" />
        <span className="mockup-dot" />
        <span className="mockup-url">app.gymtray.com</span>
      </div>

      <div className="mockup-body">
        <p className="mockup-greeting">Good Morning, Alex 👋</p>
        <p className="mockup-date">Tuesday · Push Day · 2,400 kcal target</p>

        <section className="card nutrition-card" aria-label="Today's Nutrition">
          <div className="nutrition-head">
            <span className="card-title">Today&apos;s Nutrition</span>
            <span className="nutrition-remaining">220 kcal left</span>
          </div>

          <div className="macro-grid">
            {MACROS.map((macro) => (
              <div className="macro" key={macro.label}>
                <div className="macro-top">
                  <span className="macro-label">{macro.label}</span>
                  <span className="macro-value">
                    {macro.value} <span>/ {macro.target}</span>
                  </span>
                </div>
                <div
                  className="macro-bar"
                  role="progressbar"
                  aria-label={macro.label}
                  aria-valuenow={macro.pct}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <i style={{ width: `${macro.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <p className="meals-title">Today&apos;s Meals</p>
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
