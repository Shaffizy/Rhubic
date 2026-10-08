/*
  Button — the one button on the site. Renders a <Link> when given `to`, an
  <a> when given `href`, and a <button> otherwise. The wording is the children.
  `variant` picks the reference's Primary (purple) or Secondary (#1f1f1f).
  Owns: the hover glow.
  Does NOT own: where it points. Callers pass `to`.
*/
import { Link } from 'react-router-dom';

import styles from './Button.module.css';

export default function Button({ to, href, onClick, variant = 'primary', className = '', children }) {
  const classNames = [styles.button, variant === 'secondary' && styles.secondary, className]
    .filter(Boolean)
    .join(' ');

  const inner = (
    <>
      <span className={styles.glow} aria-hidden="true" />
      <span className={styles.label}>{children}</span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classNames} onClick={onClick}>
        {inner}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classNames} onClick={onClick}>
        {inner}
      </a>
    );
  }

  return (
    <button type="button" className={classNames} onClick={onClick}>
      {inner}
    </button>
  );
}