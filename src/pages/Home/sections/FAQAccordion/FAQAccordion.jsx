/*
  FAQAccordion — the "Your questions, answered" band: centred heading + lead,
  then a single-open list of bordered cards (question row + chevron, answer
  revealed underneath).
  Owns: accordion state (one open at a time, first open by default) and card
  layout. Does NOT own: the copy (faqs.js) or the chevron (shared icons).
  Depends on: ChevronIcon, faqs.js.
*/

import { useState } from 'react';

import { ChevronIcon } from '@/assets/icons';
import RevealHeading from '@/components/RevealHeading';

import { faqs, heading, lead } from './faqs';
import styles from './FAQAccordion.module.css';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <div className={styles.titleBlock} data-reveal>
          <RevealHeading className={styles.heading}>{heading}</RevealHeading>
          <p className={styles.lead}>{lead}</p>
        </div>

        <div className={styles.questions} data-reveal>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className={styles.item} data-open={isOpen ? 'true' : undefined}>
                <button
                  type="button"
                  className={styles.question}
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className={styles.questionText}>{faq.question}</span>
                  <span className={styles.arrowWrap} aria-hidden="true">
                    <ChevronIcon className={styles.arrow} />
                  </span>
                </button>

                <div className={styles.answerWrap}>
                  <div className={styles.answerInner}>
                    <p className={styles.answer}>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
