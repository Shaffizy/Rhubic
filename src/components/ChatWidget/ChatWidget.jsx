/*
  ChatWidget — the floating chatbot notch, bottom-right on every page.
  Toggle: the notch opens the panel and closes it again (aria-expanded +
  aria-controls), Escape also closes. There is no backend — messages are
  local and replies are scripted, cycling through a canned list.
  Owns: open state, message list, draft and the scripted replies.
  Does NOT own: the shell (mounted once in App.jsx, outside Routes).
  Icons: Phosphor regular (ChatsCircle, X, PaperPlaneRight), paths from the
  same module family the reference site loads.
*/

import { useEffect, useRef, useState } from 'react';

import logoCube from '@/assets/images/logo-cube.png';

import styles from './ChatWidget.module.css';

const GREETING =
  "Hi there! I'm the Rhubix assistant. Ask me anything about our services, pricing, or timelines.";

const REPLIES = [
  'Great question — our team replies to detailed queries within one business day. Leave your email here and we will follow up.',
  'We cover web, mobile, AI/ML and UI/UX work on both subscription and fixed-scope models. Which one are you curious about?',
  'For a project estimate, the fastest path is our contact form — we will get back to you within one business day.',
];

function ChatsIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 256 256" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M232.07,186.76a80,80,0,0,0-62.5-114.17A80,80,0,1,0,23.93,138.76l-7.27,24.71a16,16,0,0,0,19.87,19.87l24.71-7.27a80.39,80.39,0,0,0,25.18,7.35,80,80,0,0,0,108.34,40.65l24.71,7.27a16,16,0,0,0,19.87-19.86ZM62,159.5a8.28,8.28,0,0,0-2.26.32L32,168l8.17-27.76a8,8,0,0,0-.63-6,64,64,0,1,1,26.26,26.26A8,8,0,0,0,62,159.5Zm153.79,28.73L224,216l-27.76-8.17a8,8,0,0,0-6,.63,64.05,64.05,0,0,1-85.87-24.88A79.93,79.93,0,0,0,174.7,89.71a64,64,0,0,1,41.75,92.48A8,8,0,0,0,215.82,188.23Z" />
    </svg>
  );
}

function XIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 256 256" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
    </svg>
  );
}

function SendIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 256 256" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M231.87,114l-168-95.89A16,16,0,0,0,40.92,37.34L71.55,128,40.92,218.67A16,16,0,0,0,56,240a16.15,16.15,0,0,0,7.93-2.1l167.92-96.05a16,16,0,0,0,.05-27.89ZM56,224a.56.56,0,0,0,0-.12L85.74,136H144a8,8,0,0,0,0-16H85.74L56.06,32.16A.46.46,0,0,0,56,32l168,95.83Z" />
    </svg>
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState('');
  const [messages, setMessages] = useState([{ id: 'greeting', from: 'bot', text: GREETING }]);
  const listRef = useRef(null);
  const inputRef = useRef(null);
  const replyIndex = useRef(0);

  // Escape closes the panel while it is open.
  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  // Keep the newest message in view and put the caret in the field.
  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const list = listRef.current;
    if (list) list.scrollTop = list.scrollHeight;
  }, [open, messages]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;

    setMessages((prev) => [...prev, { id: `u-${Date.now()}`, from: 'user', text }]);
    setDraft('');

    const reply = REPLIES[replyIndex.current % REPLIES.length];
    replyIndex.current += 1;
    window.setTimeout(() => {
      setMessages((prev) => [...prev, { id: `b-${Date.now()}`, from: 'bot', text: reply }]);
    }, 650);
  };

  return (
    <div className={styles.root}>
      <div
        id="chat-panel"
        className={`${styles.panel} ${open ? styles.panelOpen : ''}`}
        aria-hidden={!open}
        aria-label="Chat with Rhubix"
        role="dialog"
      >
        <div className={styles.panelHead}>
          <img className={styles.avatar} src={logoCube} alt="" width={36} height={36} />
          <div className={styles.panelTitles}>
            <p className={styles.panelName}>Rhubix Assistant</p>
            <p className={styles.panelStatus}>
              <span className={styles.statusDot} aria-hidden="true" />
              Online — replies instantly
            </p>
          </div>
          <button
            type="button"
            className={styles.panelClose}
            onClick={() => setOpen(false)}
            aria-label="Close chat"
          >
            <XIcon className={styles.panelCloseIcon} />
          </button>
        </div>

        <div className={styles.messages} ref={listRef} role="log" aria-live="polite">
          {messages.map((message) => (
            <p
              key={message.id}
              className={`${styles.bubble} ${message.from === 'user' ? styles.bubbleUser : styles.bubbleBot}`}
            >
              {message.text}
            </p>
          ))}
        </div>

        <form className={styles.composer} onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            className={styles.input}
            type="text"
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder="Type a message…"
            aria-label="Type a message"
          />
          <button type="submit" className={styles.send} aria-label="Send message">
            <SendIcon className={styles.sendIcon} />
          </button>
        </form>
      </div>

      <button
        type="button"
        className={`${styles.button} ${open ? styles.buttonOpen : ''}`}
        onClick={() => setOpen((wasOpen) => !wasOpen)}
        aria-expanded={open}
        aria-controls="chat-panel"
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        {open ? <XIcon className={styles.icon} /> : <ChatsIcon className={styles.icon} />}
      </button>
    </div>
  );
}
