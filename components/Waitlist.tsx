"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

const GOALS = [
  "Build Muscle",
  "Lose Fat",
  "Maintain My Weight",
  "Improve My Nutrition",
  "Other",
] as const;

type Goal = (typeof GOALS)[number];

type FormValues = {
  name: string;
  email: string;
  goal: Goal | "";
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Google Apps Script Web App endpoint (no credentials on the frontend).
 */
const WAITLIST_ENDPOINT = "https://script.google.com/macros/s/AKfycbzC8RnwPBTzY2RKIl1aSfeH9zoq__f25uXW22KZRR1fZ7zx8icniuCZ76O2-QglB60j/exec";

async function submitWaitlistEntry(values: FormValues): Promise<void> {
  const payload = {
    name: values.name.trim(),
    email: values.email.trim(),
    goal: values.goal,
    createdAt: new Date().toISOString(),
  };

  const response = await fetch(WAITLIST_ENDPOINT, {
    // text/plain avoids a CORS preflight, which Google Apps Script
    // Web Apps do not answer — Apps Script reads the body from
    // e.postData.contents.
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Waitlist submission failed");
  }
}

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.goal) {
    errors.goal = "Please choose your main goal.";
  }

  return errors;
}

function CheckIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M5 12.5l4.5 4.5L19 7.5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Waitlist() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    goal: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [visible, setVisible] = useState(false);

  // Reveal the section when it enters the viewport.
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const reduceMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const handleChange =
    (field: keyof FormValues) =>
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement
      >
    ) => {
      const next = { ...values, [field]: event.target.value } as FormValues;
      setValues(next);
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const nextErrors = validate(values);
    setErrors(nextErrors);

    const firstInvalid = (["name", "email", "goal"] as const).find(
      (key) => nextErrors[key]
    );
    if (firstInvalid) {
      document.getElementById(`waitlist-${firstInvalid}`)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      await submitWaitlistEntry(values);
      setValues({ name: "", email: "", goal: "" });
      setStatus("success");
    } catch {
      // Never surface technical details to the visitor.
      setStatus("error");
    }
  }

  const submitting = status === "submitting";

  return (
    <section
      className="waitlist"
      id="waitlist"
      aria-labelledby="waitlist-title"
      ref={sectionRef}
    >
      <div className="container">
        <div
          className={`waitlist-card waitlist-reveal${
            visible ? " is-visible" : ""
          }`}
        >
          <noscript>
            <style>{`.waitlist-reveal{opacity:1 !important;transform:none !important;}`}</style>
          </noscript>

          <div className="waitlist-inner">
            <h2 className="waitlist-title" id="waitlist-title">
              Be <span className="accent">First</span> to Try GymTray
            </h2>

            <p className="waitlist-sub">
              GymTray is launching soon. Join the waitlist and be among the
              first to build a diet that actually fits your goals and routine.
            </p>

            {status === "success" ? (
              <div className="waitlist-success" role="status">
                <span className="success-icon">
                  <CheckIcon />
                </span>
                <h3 className="success-title">You&apos;re on the list! 🎉</h3>
                <p className="success-text">
                  We&apos;ll let you know when GymTray is ready.
                </p>
              </div>
            ) : (
              <form className="waitlist-form" onSubmit={handleSubmit} noValidate>
                <div className="waitlist-fields">
                  <div className={`field${errors.name ? " has-error" : ""}`}>
                    <label className="field-label" htmlFor="waitlist-name">
                      Your Name
                      <span className="field-req" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      className="input"
                      id="waitlist-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Enter your name"
                      aria-required="true"
                      value={values.name}
                      onChange={handleChange("name")}
                      disabled={submitting}
                      aria-invalid={errors.name ? true : undefined}
                      aria-describedby={
                        errors.name ? "waitlist-name-error" : undefined
                      }
                    />
                    <span className="field-msg" id="waitlist-name-error">
                      {errors.name}
                    </span>
                  </div>

                  <div className={`field${errors.email ? " has-error" : ""}`}>
                    <label className="field-label" htmlFor="waitlist-email">
                      Email Address
                      <span className="field-req" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      className="input"
                      id="waitlist-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      inputMode="email"
                      placeholder="you@example.com"
                      aria-required="true"
                      value={values.email}
                      onChange={handleChange("email")}
                      disabled={submitting}
                      aria-invalid={errors.email ? true : undefined}
                      aria-describedby={
                        errors.email ? "waitlist-email-error" : undefined
                      }
                    />
                    <span className="field-msg" id="waitlist-email-error">
                      {errors.email}
                    </span>
                  </div>

                  <div className={`field${errors.goal ? " has-error" : ""}`}>
                    <label className="field-label" htmlFor="waitlist-goal">
                      What&apos;s your main goal?
                      <span className="field-req" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <div className="select-wrap">
                      <select
                        className="select"
                        id="waitlist-goal"
                        name="goal"
                        aria-required="true"
                        value={values.goal}
                        onChange={handleChange("goal")}
                        disabled={submitting}
                        aria-invalid={errors.goal ? true : undefined}
                        aria-describedby={
                          errors.goal ? "waitlist-goal-error" : undefined
                        }
                      >
                        <option value="">Select your goal</option>
                        {GOALS.map((goal) => (
                          <option key={goal} value={goal}>
                            {goal}
                          </option>
                        ))}
                      </select>
                      <svg
                        className="select-chevron"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          d="M6 9l6 6 6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="field-msg" id="waitlist-goal-error">
                      {errors.goal}
                    </span>
                  </div>

                  <div className="field submit-field">
                    <button
                      className="btn btn-primary waitlist-submit"
                      type="submit"
                      disabled={submitting}
                    >
                      {submitting ? (
                        "Joining…"
                      ) : (
                        <>
                          Join the Waitlist{" "}
                          <span aria-hidden="true">→</span>
                        </>
                      )}
                    </button>
                    <span className="field-msg" aria-hidden="true" />
                  </div>
                </div>

                <p className="waitlist-microcopy">
                  No spam. Just launch updates from GymTray.
                </p>

                {status === "error" && (
                  <p className="waitlist-form-error" role="alert">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
