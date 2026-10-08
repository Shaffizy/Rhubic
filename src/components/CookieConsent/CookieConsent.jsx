/*
  CookieConsent — the cookie permission bar, fixed bottom-left (the chat
  notch owns bottom-right). Slides in shortly after load when no choice is
  recorded; Accept / Essential-only both write a same-site consent cookie so
  the bar stays away, and Decline stores `essential` rather than nothing —
  any stored choice is a recorded choice.
  Owns: visibility state and the consent cookie (180 days, Path=/).
  Does NOT own: the shell (mounted once in App.jsx, outside Routes).
  Icons: Phosphor regular (Cookie), same module family as the site glyphs.
*/

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './CookieConsent.module.css';

const COOKIE_NAME = 'rhubics_cookie_consent';
const MAX_AGE = 60 * 60 * 24 * 180; // 180 days

function CookieIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 256 256" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M164.49,163.51a12,12,0,1,1-17,0A12,12,0,0,1,164.49,163.51Zm-81-8a12,12,0,1,0,17,0A12,12,0,0,0,83.51,155.51Zm9-39a12,12,0,1,0-17,0A12,12,0,0,0,92.49,116.49Zm48-1a12,12,0,1,0,0,17A12,12,0,0,0,140.49,115.51ZM232,128A104,104,0,1,1,128,24a8,8,0,0,1,8,8,40,40,0,0,0,40,40,8,8,0,0,1,8,8,40,40,0,0,0,40,40A8,8,0,0,1,232,128Zm-16.31,7.39A56.13,56.13,0,0,1,168.5,87.5a56.13,56.13,0,0,1-47.89-47.19,88,88,0,1,0,95.08,95.08Z" />
    </svg>
  );
}

function readConsent() {
  const match = document.cookie
    .split('; ')
    .find((entry) => entry.startsWith(`${COOKIE_NAME}=`));
  return match ? match.slice(COOKIE_NAME.length + 1) : '';
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (readConsent()) return undefined;
    const timer = window.setTimeout(() => setVisible(true), 900);
    return () => window.clearTimeout(timer);
  }, []);

  const decide = (choice) => {
    document.cookie = `${COOKIE_NAME}=${choice}; Max-Age=${MAX_AGE}; Path=/; SameSite=Lax`;
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside className={styles.bar} role="dialog" aria-label="Cookie consent">
      <span className={styles.iconBadge}>
        <CookieIcon className={styles.icon} />
      </span>

      <div className={styles.body}>
        <p className={styles.title}>We value your privacy</p>
        <p className={styles.text}>
          We use cookies to improve your experience and see how the site is used. Read the{' '}
          <Link to="/legal/cookie-policy" className={styles.link}>
            Cookie Policy
          </Link>
          .
        </p>

        <div className={styles.actions}>
          <button type="button" className={styles.accept} onClick={() => decide('accepted')}>
            Accept all
          </button>
          <button type="button" className={styles.decline} onClick={() => decide('essential')}>
            Essential only
          </button>
        </div>
      </div>
    </aside>
  );
}
