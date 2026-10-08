/*
  GooeyReveal — replaces HeroRipple as the grid's cursor-reveal mechanism.

  Owns: the SVG goo filter + mask, the cursor-driven blob stamping, and the
  bright grid layer that the mask reveals.
  Does NOT own: the dim/base grid itself — that stays in Hero.jsx as the
  existing `.grid` element, unchanged.

  TEMPORARY troubleshooting. Delete `DEBUG`, `diag`, the `say` calls and the
  heartbeat once the effect is confirmed working — same pattern as
  HeroRipple.jsx used during its own debug pass.
*/

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import styles from './Gooeyreveal.module.css';

const BLOB_START_RADIUS = 30;
const BLOB_PEAK_RADIUS = 100;
const GROW_DURATION = 0.5;
const SHRINK_DURATION = 1;
const SHRINK_DELAY = 0.5;

const DEBUG = true;

export default function GooeyReveal() {
  const hostRef = useRef(null);
  const blobsGroupRef = useRef(null);
  const brightGridRef = useRef(null);

  const uid = useRef(`gooey-${Math.random().toString(36).slice(2, 9)}`).current;
  const filterId = `${uid}-filter`;
  const maskId = `${uid}-mask`;

  useEffect(() => {
    const host = hostRef.current;
    const blobsGroup = blobsGroupRef.current;
    const brightGrid = brightGridRef.current;

    const diag = { pointer: 0, stamps: 0, touchSkipped: 0 };
    const say = (label, data) => {
      if (DEBUG) console.log(`[GooeyReveal] ${label}`, data ? JSON.stringify(data) : '');
    };
    if (DEBUG) window.__gooeyReveal = diag;

    say('mount', {
      gsapLoaded: typeof gsap?.to === 'function',
      gsapVersion: gsap?.version ?? 'unknown',
      host: !!host,
      blobsGroup: !!blobsGroup,
      brightGrid: !!brightGrid,
    });

    // Confirm the mask id actually resolves against something rendered in
    // this component, not a typo/mismatch between the inline style and the
    // <mask> element's own id.
    if (brightGrid) {
      const computed = window.getComputedStyle(brightGrid);
      say('brightGrid computed mask', {
        mask: computed.mask || computed.webkitMask || '(empty — mask property not applying at all)',
      });
    }

    // Report whether the bright-grid background image actually loads, since a
    // 404 there would make this fail completely silently with zero console
    // errors — background-image load failures are NOT thrown as JS errors.
    if (brightGrid) {
      const bgImage = window.getComputedStyle(brightGrid).backgroundImage;
      const urlMatch = bgImage.match(/url\(["']?(.*?)["']?\)/);
      if (urlMatch) {
        const img = new Image();
        img.onload = () => say('bright grid image: LOADED OK', { src: urlMatch[1] });
        img.onerror = () => say('bright grid image: FAILED TO LOAD (likely 404)', { src: urlMatch[1] });
        img.src = urlMatch[1];
      } else {
        say('bright grid image: no background-image url found in computed style', { bgImage });
      }
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      say('BAILED — prefers-reduced-motion is set', {});
      return undefined;
    }

    function stamp(x, y) {
      diag.stamps += 1;
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', x);
      circle.setAttribute('cy', y);
      circle.setAttribute('r', BLOB_START_RADIUS);
      circle.setAttribute('fill', 'white');
      blobsGroup.prepend(circle);

      gsap.to(circle, { attr: { r: BLOB_PEAK_RADIUS }, duration: GROW_DURATION, ease: 'power2.out' });
      gsap.to(circle, {
        attr: { r: 0 },
        duration: SHRINK_DURATION,
        delay: SHRINK_DELAY,
        onComplete: () => circle.remove(),
      });
    }

    function onPointerMove(event) {
      if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') {
        diag.touchSkipped += 1;
        return;
      }

      diag.pointer += 1;
      const rect = host.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      if (x < 0 || x > rect.width || y < 0 || y > rect.height) return;

      stamp(x, y);
    }

    window.addEventListener('pointermove', onPointerMove);

    const heartbeat = setInterval(() => {
      if (!DEBUG) return;
      say('tick', {
        pointerPerSec: diag.pointer,
        touchSkippedPerSec: diag.touchSkipped,
        stampsPerSec: diag.stamps,
        circlesInDOM: blobsGroup.querySelectorAll('circle').length,
      });
      diag.pointer = 0;
      diag.touchSkipped = 0;
      diag.stamps = 0;
    }, 1000);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      clearInterval(heartbeat);
      if (DEBUG && window.__gooeyReveal === diag) delete window.__gooeyReveal;
      gsap.killTweensOf(blobsGroup.querySelectorAll('circle'));
      blobsGroup.replaceChildren();
    };
  }, []);

  return (
    <div className={styles.host} ref={hostRef} aria-hidden="true">
      <div
        ref={brightGridRef}
        className={styles.brightGrid}
        style={{ mask: `url(#${maskId})`, WebkitMask: `url(#${maskId})` }}
      />

      <svg className={styles.svg} width="100%" height="100%">
        <defs>
          <filter id={filterId}>
            <feGaussianBlur in="SourceGraphic" stdDeviation="25" />
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 60 -14" />
          </filter>
        </defs>
        <mask id={maskId}>
          <g ref={blobsGroupRef} filter={`url(#${filterId})`} />
        </mask>
      </svg>
    </div>
  );
}