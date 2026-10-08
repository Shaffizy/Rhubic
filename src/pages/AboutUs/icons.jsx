/*
  icons.jsx — Phosphor glyphs (256 grid) for the About page: the three stat
  badges (light), the virtual-tour play button (thin) and the team social
  links (light). Paths pulled from the same Phosphor module the reference
  page loads; colour comes from the surrounding CSS.
*/

const glyph = {
  viewBox: '0 0 256 256',
  fill: 'currentColor',
  'aria-hidden': true,
  focusable: false,
};

/** Nine-cell grid — "Projects delivered". */
export function GridNineIcon({ className }) {
  return (
    <svg className={className} {...glyph}>
      <path d="M216,50H40A14,14,0,0,0,26,64V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V64A14,14,0,0,0,216,50ZM102,146V110h52v36Zm52,12v36H102V158ZM38,110H90v36H38Zm64-12V62h52V98Zm64,12h52v36H166Zm52-46V98H166V62h50A2,2,0,0,1,218,64ZM40,62H90V98H38V64A2,2,0,0,1,40,62ZM38,192V158H90v36H40A2,2,0,0,1,38,192Zm178,2H166V158h52v34A2,2,0,0,1,216,194Z" />
    </svg>
  );
}

/** Thumbs up — "Customer satisfaction". */
export function ThumbsUpIcon({ className }) {
  return (
    <svg className={className} {...glyph}>
      <path d="M232.49,81.44A22,22,0,0,0,216,74H158V56a38,38,0,0,0-38-38,6,6,0,0,0-5.37,3.32L76.29,98H32a14,14,0,0,0-14,14v88a14,14,0,0,0,14,14H204a22,22,0,0,0,21.83-19.27l12-96A22,22,0,0,0,232.49,81.44ZM30,200V112a2,2,0,0,1,2-2H74v92H32A2,2,0,0,1,30,200ZM225.92,97.24l-12,96A10,10,0,0,1,204,202H86V105.42l37.58-75.17A26,26,0,0,1,146,56V80a6,6,0,0,0,6,6h64a10,10,0,0,1,9.92,11.24Z" />
    </svg>
  );
}

/** Headset — "Support availability". */
export function HeadsetIcon({ className }) {
  return (
    <svg className={className} {...glyph}>
      <path d="M200.47,56.07A101.37,101.37,0,0,0,128.77,26H128A102,102,0,0,0,26,128v56a22,22,0,0,0,22,22H64a22,22,0,0,0,22-22V144a22,22,0,0,0-22-22H38.2A90,90,0,0,1,128,38h.68a89.71,89.71,0,0,1,89.13,84H192a22,22,0,0,0-22,22v40a22,22,0,0,0,22,22h26v2a26,26,0,0,1-26,26H136a6,6,0,0,0,0,12h56a38,38,0,0,0,38-38V128A101.44,101.44,0,0,0,200.47,56.07ZM64,134a10,10,0,0,1,10,10v40a10,10,0,0,1-10,10H48a10,10,0,0,1-10-10V134Zm118,50V144a10,10,0,0,1,10-10h26v60H192A10,10,0,0,1,182,184Z" />
    </svg>
  );
}

/** Play-in-circle — the virtual-tour thumbnail. */
export function PlayCircleIcon({ className }) {
  return (
    <svg className={className} {...glyph}>
      <path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm46.12-95.39-64-40A4,4,0,0,0,104,88v80a4,4,0,0,0,2.06,3.5,4.06,4.06,0,0,0,1.94.5,4,4,0,0,0,2.12-.61l64-40a4,4,0,0,0,0-6.78ZM112,160.78V95.22L164.45,128Z" />
    </svg>
  );
}

/** X (formerly Twitter). */
export function XLogoIcon({ className }) {
  return (
    <svg className={className} {...glyph}>
      <path d="M213.06,212.78l-63.42-99.66L212.44,44A6,6,0,1,0,203.56,36L143,102.62l-41.9-65.84A6,6,0,0,0,96,34H48a6,6,0,0,0-5.06,9.22l63.42,99.66L43.56,212A6,6,0,0,0,52.44,220L113,153.38l41.9,65.84A6,6,0,0,0,160,222h48a6,6,0,0,0,5.06-9.22ZM163.29,210,58.93,46H92.71L197.07,210Z" />
    </svg>
  );
}

export function InstagramLogoIcon({ className }) {
  return (
    <svg className={className} {...glyph}>
      <path d="M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162ZM176,26H80A54.06,54.06,0,0,0,26,80v96a54.06,54.06,0,0,0,54,54h96a54.06,54.06,0,0,0,54-54V80A54.06,54.06,0,0,0,176,26Zm42,150a42,42,0,0,1-42,42H80a42,42,0,0,1-42-42V80A42,42,0,0,1,80,38h96a42,42,0,0,1,42,42ZM190,76a10,10,0,1,1-10-10A10,10,0,0,1,190,76Z" />
    </svg>
  );
}

export function BehanceLogoIcon({ className }) {
  return (
    <svg className={className} {...glyph}>
      <path d="M112.15,122.36A36,36,0,0,0,90,58H32a6,6,0,0,0-6,6V192a6,6,0,0,0,6,6H94a40,40,0,0,0,18.15-75.64ZM38,70H90a24,24,0,0,1,0,48H38ZM94,186H38V130H94a28,28,0,0,1,0,56ZM162,80a6,6,0,0,1,6-6h64a6,6,0,0,1,0,12H168A6,6,0,0,1,162,80Zm38,26a46,46,0,1,0,36.8,73.61,6,6,0,0,0-9.6-7.21A34,34,0,0,1,166.53,158H240a6,6,0,0,0,6-6A46.06,46.06,0,0,0,200,106Zm-33.47,40a34,34,0,0,1,66.94,0Z" />
    </svg>
  );
}

export function LinkedinLogoIcon({ className }) {
  return (
    <svg className={className} {...glyph}>
      <path d="M216,26H40A14,14,0,0,0,26,40V216a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V40A14,14,0,0,0,216,26Zm2,190a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2ZM94,112v64a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0Zm88,28v36a6,6,0,0,1-12,0V140a22,22,0,0,0-44,0v36a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0v2.11A34,34,0,0,1,182,140ZM98,84A10,10,0,1,1,88,74,10,10,0,0,1,98,84Z" />
    </svg>
  );
}
