import HeroMockup from "./HeroMockup";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-decor" aria-hidden="true" />

      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="badge animate-rise">
            🚀 Coming Soon — Join the Early Access
          </span>

          <h1 className="hero-title animate-rise delay-1" id="hero-title">
            Your Workout Needs a <span className="accent">Better Diet.</span>
          </h1>

          <p className="hero-sub animate-rise delay-2">
            GymTray helps you figure out what to eat, how much to eat, and how
            to stay on track — with a personalized meal plan built around your
            goals, body, food preferences, and routine.
          </p>

          <div className="hero-ctas animate-rise delay-3">
            <a className="btn btn-primary btn-lg" href="#waitlist">
              Join the Waitlist <span aria-hidden="true">→</span>
            </a>
            <a className="btn btn-outline btn-lg" href="#how-it-works">
              See How It Works <span aria-hidden="true">↓</span>
            </a>
          </div>

          <p className="hero-note animate-rise delay-4">
            Personalized for your goals. Built for your routine.
          </p>
        </div>

        <div className="hero-visual animate-rise delay-5">
          <div className="float-chip float-chip-1" aria-hidden="true">
            <span className="dot" />
            <span>
              91% goal hit
              <small>Last 7 days</small>
            </span>
          </div>

          <HeroMockup />

          <div className="float-chip float-chip-2" aria-hidden="true">
            <span className="dot" />
            <span>
              Protein on track
              <small>142g of 160g</small>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
