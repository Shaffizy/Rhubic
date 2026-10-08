/*
  RevealHeading — heading whose words rise in one by one, the reference's
  heading treatment (its h2s ship as inline-block word spans starting at
  opacity 0.001 / translateY(10px), released with a stagger).
  Owns: splitting the text into word spans with a --w index each.
  Does NOT own: the hiding CSS (index.css, with the [data-reveal] primitive)
  or the timing — that is global, keyed off a data-revealed ancestor.
  Space handling: the inter-word space sits BETWEEN spans as its own text
  node. A space inside an inline-block collapses at the box end, which
  silently joins the words — keep it outside.
  `as` picks the heading level (h1 for the hero, h2 default).
*/

import { Fragment } from 'react';

export default function RevealHeading({ as: Tag = 'h2', className, children, ...rest }) {
  const words = String(children).split(' ');

  return (
    <Tag className={className} {...rest}>
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <span data-reveal-word style={{ '--w': index }}>
            {word}
          </span>
          {index < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </Tag>
  );
}
