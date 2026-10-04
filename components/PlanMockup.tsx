import { IconTarget } from "./icons";

const MEALS = [
  { name: "Breakfast", items: "Oats + Eggs + Banana", kcal: "480 kcal" },
  { name: "Lunch", items: "Chicken + Rice + Salad", kcal: "640 kcal" },
  { name: "Snack", items: "Greek Yogurt + Nuts", kcal: "220 kcal" },
  { name: "Dinner", items: "Paneer + Roti + Vegetables", kcal: "560 kcal" },
] as const;

const TARGETS = [
  { label: "Calories", value: "2,400", unit: "kcal", pct: 74 },
  { label: "Protein", value: "160", unit: "g", pct: 68 },
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

/**
 * GymTray personalized-plan interface, built from the same primitives as the
 * Hero mockup so the product feels like one continuous app.
 */
export default function PlanMockup() {
  return (
    <div
      className="mockup"
      role="img"
      aria-label="Preview of a GymTray personalized nutrition plan showing the daily calorie and protein targets and today's meals"
    >
      <div className="mockup-bar" aria-hidden="true">
        <span className="mockup-dot" />
        <span className="mockup-dot" />
        <span className="mockup-dot" />
        <span className="mockup-url">app.gymtray.com</span>
      </div>

      <div className="mockup-body">
        <div className="plan-head">
          <div>
            <p className="mockup-greeting">Your GymTray Plan</p>
            <p className="mockup-date">Personalized for you · Tuesday</p>
          </div>
          <span className="plan-goal">
            <IconTarget size={13} />
            Goal: Build Muscle
          </span>
        </div>

        <p className="plan-label">Daily Target</p>

        <div className="macro-grid plan-targets">
          {TARGETS.map((target) => (
            <div className="macro" key={target.label}>
              <div className="macro-top">
                <span className="macro-label">{target.label}</span>
                <span className="macro-value">
                  {target.value} <span>{target.unit}</span>
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
