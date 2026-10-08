/*
  FeatureBento — the "Your scalable, dedicated design team" section: centred
  heading + lead, a row of three widget tiles, then one wide collaboration tile.
  Owns: section layout, tile frames, and which widget sits in which tile.
  Does NOT own: widget internals (BarGraph/Notifications/ChatBubbles/ToolTickers)
  or the copy (features.js).
  Depends on: the four widget components, features.js.
*/

import RevealHeading from '@/components/RevealHeading';

import { barValue, heading, lead, tiles } from './features';
import BarGraph from './BarGraph';
import ChatBubbles from './ChatBubbles';
import Notifications from './Notifications';
import ToolTickers from './ToolTickers';
import styles from './FeatureBento.module.css';

function TileTexts({ tile }) {
  return (
    <div className={styles.tileTexts}>
      <h4 className={styles.tileTitle}>{tile.title}</h4>
      <p className={styles.tileBody}>{tile.body}</p>
    </div>
  );
}

export default function FeatureBento() {
  return (
    <section className={styles.section} id="benefits">
      <div className={styles.container}>
        <div className={styles.titleBlock} data-reveal>
          <RevealHeading className={styles.heading}>{heading}</RevealHeading>
          <p className={styles.lead}>{lead}</p>
        </div>

        <div className={styles.tiles} data-reveal>
          <div className={styles.row}>
            <article className={styles.tile}>
              <TileTexts tile={tiles.scale} />
              <div className={styles.widgetBar}>
                <BarGraph value={barValue} />
              </div>
            </article>

            <article className={styles.tile}>
              <TileTexts tile={tiles.rapid} />
              <div className={styles.widgetNotifications}>
                <Notifications />
              </div>
            </article>

            <article className={styles.tile}>
              <TileTexts tile={tiles.unlimited} />
              <div className={styles.widgetChat}>
                <ChatBubbles />
              </div>
            </article>
          </div>

          <article className={`${styles.tile} ${styles.tileWide}`}>
            <TileTexts tile={tiles.collaboration} />
            <div className={styles.widgetTools}>
              <ToolTickers />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
