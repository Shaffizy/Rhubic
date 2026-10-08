/*
  Notifications.jsx — the "Rapid turnaround" widget: two stacked black
  notification cards, each with a circled thin-weight glyph, title and time.
  Copy comes from features.js; glyphs from icons.jsx.
*/

import { notifications } from './features';
import { NoticeFigmaIcon, NoticeFunnelIcon } from './icons';
import styles from './Notifications.module.css';

const cardIcons = [NoticeFunnelIcon, NoticeFigmaIcon];

export default function Notifications() {
  return (
    <div className={styles.stack}>
      {notifications.map((item, index) => {
        const Icon = cardIcons[index];
        return (
          <div
            key={item.title}
            className={`${styles.card} ${index === 1 ? styles.cardRaised : ''}`}
          >
            <span className={styles.icon}>
              <Icon className={styles.iconGlyph} />
            </span>
            <div className={styles.texts}>
              <span className={styles.title}>{item.title}</span>
              <span className={styles.time}>{item.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
