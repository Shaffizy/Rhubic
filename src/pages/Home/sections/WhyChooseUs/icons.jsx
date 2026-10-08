/*
  icons.jsx — Phosphor glyphs (256 grid, light weight) for the WhyChooseUs
  icon badges. Paths copied verbatim from the reference; colour comes from
  the badge CSS (muted grey).
*/

const glyph = {
  viewBox: '0 0 256 256',
  fill: 'currentColor',
  'aria-hidden': true,
  focusable: false,
};

/** Document with ruled lines — "No contracts". */
export function ContractIcon({ className }) {
  return (
    <svg className={className} {...glyph}>
      <path d="M90,96a6,6,0,0,1,6-6h64a6,6,0,0,1,0,12H96A6,6,0,0,1,90,96Zm6,38h64a6,6,0,0,0,0-12H96a6,6,0,0,0,0,12Zm32,20H96a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12ZM222,48V156.69a13.94,13.94,0,0,1-4.1,9.9L166.59,217.9a13.94,13.94,0,0,1-9.9,4.1H48a14,14,0,0,1-14-14V48A14,14,0,0,1,48,34H208A14,14,0,0,1,222,48ZM48,210H154V160a6,6,0,0,1,6-6h50V48a2,2,0,0,0-2-2H48a2,2,0,0,0-2,2V208A2,2,0,0,0,48,210Zm153.52-44H166v35.52Z" />
    </svg>
  );
}

/** User inside circular arrows — "Conversion focused". */
export function ConversionIcon({ className }) {
  return (
    <svg className={className} {...glyph}>
      <path d="M252.24,132.24l-24,24a6,6,0,0,1-8.48,0l-24-24a6,6,0,1,1,8.48-8.48L218,137.51V128A90,90,0,0,0,54.87,75.5a6,6,0,1,1-9.74-7A102,102,0,0,1,230,128v9.51l13.76-13.75a6,6,0,1,1,8.48,8.48ZM210.85,187.5A102,102,0,0,1,26,128v-9.51L12.24,132.24a6,6,0,0,1-8.48-8.48l24-24a6,6,0,0,1,8.48,0l24,24a6,6,0,1,1-8.48,8.48L38,118.49V128a89.65,89.65,0,0,0,24.49,61.64,77.53,77.53,0,0,1,40-31.38,46,46,0,1,1,51,0,77.49,77.49,0,0,1,40,31.41,89.35,89.35,0,0,0,7.58-9.17,6,6,0,1,1,9.74,7ZM128,154a34,34,0,1,0-34-34A34,34,0,0,0,128,154Zm0,64a90.24,90.24,0,0,0,56.57-20,66,66,0,0,0-113.13,0A89.58,89.58,0,0,0,128,218Z" />
    </svg>
  );
}

/** Lightning bolt — "Rapid delivery". */
export function DeliveryIcon({ className }) {
  return (
    <svg className={className} {...glyph}>
      <path d="M213.84,118.63a6,6,0,0,0-3.73-4.25L150.88,92.17l15-75a6,6,0,0,0-10.27-5.27l-112,120a6,6,0,0,0,2.28,9.71l59.23,22.21-15,75a6,6,0,0,0,3.14,6.52A6.07,6.07,0,0,0,96,246a6,6,0,0,0,4.39-1.91l112-120A6,6,0,0,0,213.84,118.63ZM106,220.46l11.85-59.28a6,6,0,0,0-3.77-6.8l-55.6-20.85,91.46-98L138.12,94.82a6,6,0,0,0,3.77,6.8l55.6,20.85Z" />
    </svg>
  );
}
