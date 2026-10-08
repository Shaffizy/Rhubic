/*
  Policy — the /legal/:slug detail template, shared by all three documents.
  Layout: sticky sidebar (Legal Pages heading + the three policy links,
  current page marked via aria-current) beside the texts column (h1 +
  "Last update" + the section list). On phone the texts come first and the
  sidebar drops below behind a top hairline.
  Owns: page layout. Unknown slugs render the 404 page.
  Does NOT own: the shell (Navbar/Footer in App.jsx), the copy
  (sections/policies.js) or reveal timing (index.css + useReveal).
  Depends on: useParams, Link, RevealHeading, sections/policies.js.
*/

import { Link, useParams } from 'react-router-dom';

import RevealHeading from '@/components/RevealHeading';
import NotFound from '@/pages/NotFound/NotFound';

import { policyIndex, sidebarOrder, lastUpdate } from './sections/policies';
import styles from './Policy.module.css';

export default function Policy() {
  const { slug } = useParams();
  const page = policyIndex[slug];

  if (!page) return <NotFound />;

  return (
    <div className={styles.page}>
      <section className={styles.section} id="content">
        <div className={styles.container}>
          <div className={styles.row}>
            <aside className={styles.sidebar} data-reveal>
              <p className={styles.sidebarHeading}>
                <Link to="/legal">Legal Pages</Link>
              </p>

              <nav className={styles.sidebarLinks} aria-label="Legal pages">
                {sidebarOrder.map((policySlug) => (
                  <Link
                    key={policySlug}
                    to={`/legal/${policySlug}`}
                    className={styles.sidebarLink}
                    aria-current={policySlug === slug ? 'page' : undefined}
                  >
                    {policyIndex[policySlug].title}
                  </Link>
                ))}
              </nav>
            </aside>

            <div className={styles.texts} data-reveal>
              <div className={styles.titleBlock}>
                <RevealHeading as="h1" className={styles.h1}>
                  {page.title}
                </RevealHeading>

                <div className={styles.lastUpdate}>
                  <p className={styles.lastUpdateLabel}>Last update</p>
                  <p className={styles.lastUpdateDate}>{lastUpdate}</p>
                </div>
              </div>

              <div className={styles.content}>
                {page.sections.map((block) => (
                  <div className={styles.block} key={block.heading}>
                    <h2 className={styles.blockHeading}>{block.heading}</h2>
                    <p className={styles.blockBody}>{block.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
