/*
  Pricing — split heading (left) + lead (right), then the three-column grid:
  two tier cards and an extra column stacking Enterprise over Priority.
  Owns: section layout, the grid, card internals and the accent overlay.
  Does NOT own: the copy (plans.js) or button styling (shared Button).
  Depends on: Button (primary/secondary), CheckIcon, plans.js.
*/

import Button from '@/components/Button';
import RevealHeading from '@/components/RevealHeading';
import { CheckIcon } from '@/assets/icons';

import { enterprise, heading, lead, plans, priority } from './plans';
import styles from './Pricing.module.css';

function PlanCard({ plan }) {
  return (
    <article className={`${styles.planCard} ${plan.accent ? styles.planCardAccent : ''}`}>
      {plan.accent && <div className={styles.accentOverlay} aria-hidden="true" />}

      <div className={styles.cardHead}>
        <h4 className={styles.cardTitle}>{plan.name}</h4>
        <p className={styles.cardDescription}>{plan.description}</p>
      </div>

      <div className={styles.priceRow}>
        <span className={styles.price}>{plan.price}</span>
        <span className={styles.unit}>{plan.unit}</span>
      </div>

      <ul className={styles.features}>
        {plan.features.map((feature) => (
          <li key={feature} className={styles.feature}>
            <span className={styles.featureCheck}>
              <CheckIcon className={styles.checkIcon} />
            </span>
            <span className={styles.featureLabel}>{feature}</span>
          </li>
        ))}
      </ul>

      <Button to="/contact" variant={plan.accent ? 'primary' : 'secondary'} className={styles.cardButton}>
        {plan.cta}
      </Button>
    </article>
  );
}

export default function Pricing() {
  return (
    <section className={styles.section} id="pricing">
      <div className={styles.container}>
        <div className={styles.titleRow} data-reveal>
          <RevealHeading className={styles.heading}>{heading}</RevealHeading>
          <p className={styles.lead}>{lead}</p>
        </div>

        <div className={styles.grid} data-reveal>
          {plans.map((plan) => (
            <PlanCard key={plan.slug} plan={plan} />
          ))}

          <div className={styles.extra}>
            <div className={styles.extraBlock}>
              <h4 className={styles.cardTitle}>{enterprise.name}</h4>
              <p className={styles.cardDescription}>{enterprise.description}</p>
              <Button to="/contact" variant="secondary" className={styles.extraButton}>
                {enterprise.cta}
              </Button>
            </div>

            <div className={`${styles.extraBlock} ${styles.extraBlockStart}`}>
              <h4 className={styles.cardTitle}>{priority.name}</h4>
              <p className={styles.cardDescription}>{priority.description}</p>
              <div className={styles.priceRow}>
                <span className={styles.price}>{priority.price}</span>
                <span className={styles.unit}>{priority.unit}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
