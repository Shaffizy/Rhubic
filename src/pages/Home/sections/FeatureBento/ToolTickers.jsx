/*
  ToolTickers.jsx — the "Seamless collaboration" widget: two masked icon
  marquees (row 1 narrower than row 2), each a duplicated track scrolling left.
  Owns the icon lists and the loop; sizing/duration live in the module CSS.
  All glyphs are decorative, so the whole widget is hidden from screen readers.
*/

import {
  BugIcon,
  CompassIcon,
  DialIcon,
  EnvelopeIcon,
  FigmaIcon,
  FunnelIcon,
  GlobeIcon,
} from './icons';
import styles from './ToolTickers.module.css';

const rowOne = [FunnelIcon, FigmaIcon, DialIcon];
const rowTwo = [EnvelopeIcon, BugIcon, GlobeIcon, CompassIcon];

function Ticker({ icons, className, duration }) {
  const cycle = [...icons, ...icons];
  return (
    <div className={`${styles.viewport} ${className}`} aria-hidden="true">
      <ul className={styles.track} style={{ animationDuration: duration }}>
        {cycle.map((Icon, index) => (
          <li key={`${Icon.name}-${index}`} className={styles.tile}>
            <Icon className={styles.glyph} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ToolTickers() {
  return (
    <div className={styles.tools}>
      <Ticker icons={rowOne} className={styles.rowNarrow} duration="16s" />
      <Ticker icons={rowTwo} className={styles.rowWide} duration="20s" />
    </div>
  );
}
