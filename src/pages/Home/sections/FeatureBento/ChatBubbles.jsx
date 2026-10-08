/*
  ChatBubbles.jsx — the "Unlimited requests" widget: a two-line chat mockup,
  avatar left with a translucent bubble, reply right with a solid black one.
  Copy from features.js; avatars are local downloads of the reference images.
*/

import avatarClient from '@/assets/images/chat-avatar-1.jpg';
import avatarTeam from '@/assets/images/chat-avatar-2.jpg';

import { chat } from './features';
import styles from './ChatBubbles.module.css';

export default function ChatBubbles() {
  return (
    <div className={styles.stack}>
      <div className={styles.bubble}>
        <span className={styles.avatar}>
          <img src={avatarClient} alt="" />
        </span>
        <p className={`${styles.text} ${styles.textIn}`}>{chat.question}</p>
      </div>
      <div className={styles.bubble}>
        <p className={`${styles.text} ${styles.textOut}`}>{chat.reply}</p>
        <span className={styles.avatar}>
          <img src={avatarTeam} alt="" />
        </span>
      </div>
    </div>
  );
}
