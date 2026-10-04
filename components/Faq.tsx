"use client";

import { useState, type ReactNode } from "react";
import Reveal from "./Reveal";

type FaqItem = {
  question: string;
  answer: ReactNode;
};

const FAQS: FaqItem[] = [
  {
    question: "What is GymTray?",
    answer:
      "GymTray is a fitness nutrition platform designed to help you plan and manage your daily meals around your personal goals, body details, food preferences, and routine.",
  },
  {
    question: "When is GymTray launching?",
    answer:
      "GymTray is currently in pre-launch. Join the waitlist to be notified when the product is ready.",
  },
  {
    question: "Who is GymTray for?",
    answer:
      "GymTray is designed for people who work out and want a simpler, more personalized approach to managing their nutrition.",
  },
  {
    question: "Can I choose my food preferences?",
    answer:
      "GymTray is being designed to take your food and dietary preferences into account when creating your nutrition plan.",
  },
  {
    question: "Can GymTray help with muscle gain or fat loss?",
    answer:
      "GymTray is designed to support different fitness goals, including muscle gain, fat loss, weight maintenance, and improving overall nutrition.",
  },
  {
    question: "Is GymTray a replacement for a nutritionist or doctor?",
    answer:
      "No. GymTray is a nutrition planning and tracking tool, not medical advice or a replacement for a qualified healthcare or nutrition professional.",
  },
  {
    question: "Is GymTray free?",
    answer:
      "GymTray will have a free option when it launches. More details about available plans will be shared closer to launch.",
  },
  {
    question: "How can I try GymTray?",
    answer: (
      <>
        Join the waitlist and we&apos;ll notify you when GymTray is ready for
        early access.{" "}
        <a className="faq-link" href="#waitlist">
          Join the Waitlist <span aria-hidden="true">→</span>
        </a>
      </>
    ),
  },
];

function Chevron() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M6 9.5l6 6 6-6" />
    </svg>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section faq" id="faq" aria-labelledby="faq-title">
      <div className="container faq-container">
        <Reveal className="section-head">
          <span className="eyebrow">FAQ</span>
          <h2 className="section-title" id="faq-title">
            Questions? We&apos;ve Got You.
          </h2>
        </Reveal>

        <Reveal className="faq-list" delay={80}>
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div className={`faq-item${isOpen ? " is-open" : ""}`} key={item.question}>
                <h3 className="faq-heading">
                  <button
                    type="button"
                    className="faq-trigger"
                    id={`faq-trigger-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span>{item.question}</span>
                    <span className="faq-chevron">
                      <Chevron />
                    </span>
                  </button>
                </h3>
                <div
                  className="faq-answer"
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${index}`}
                >
                  <div>
                    <p className="faq-a">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
