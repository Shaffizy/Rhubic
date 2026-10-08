/*
  BarGraph.jsx — the "Scale as you grow" widget: black chart panel with five
  purple bars, a +42% readout and the pie-chart PNG tucked in the corner.
  Owns only this widget's markup; sizing comes from BarGraph.module.css and
  the value string from features.js.
*/

import pieChart from '@/assets/images/chart-pie.png';

import styles from './BarGraph.module.css';

const bars = [styles.bar1, styles.bar2, styles.bar3, styles.bar4, styles.bar5];

export default function BarGraph({ value }) {
  return (
    <div className={styles.graph}>
      <div className={styles.panel}>
        <span className={styles.value}>{value}</span>
        {bars.map((barClass) => (
          <span key={barClass} className={`${styles.bar} ${barClass}`} />
        ))}
      </div>
      <img className={styles.pie} src={pieChart} alt="" aria-hidden="true" />
    </div>
  );
}
