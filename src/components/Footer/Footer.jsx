/*
  Footer — brand block on the left, Company and Legal columns, social marks.
  Owns: nothing stateful. It is pure presentational markup.
*/
import { Link } from 'react-router-dom';

import logoCube from '@/assets/images/logo-cube.png';
import { InstagramIcon, LinkedInIcon, XIcon } from '@/assets/icons';

import styles from './Footer.module.css';

const year = new Date().getFullYear();

const socials = [
  { label: 'X', href: 'https://x.com', Icon: XIcon },
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedInIcon },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brandColumn}>
            <Link to="/" className={styles.brand}>
              <span className={styles.cube}>
                <img src={logoCube} alt="" className={styles.cubeImage} width={310} height={368} />
              </span>
              <span className={styles.wordmark}>Rhubix</span>
            </Link>

            <p className={styles.copyright}>&copy; {year}. Your design partner</p>
          </div>

          <nav className={styles.column} aria-label="Company">
            <h5 className={styles.columnTitle}>
              <Link to="/" >
                Company
              </Link>
            </h5>
            <ul className={styles.columnLinks}>
              <li>
                <Link to="/services" className={styles.columnLink}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className={styles.columnLink}>
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/about-us" className={styles.columnLink}>
                  About Us
                </Link>
              </li>
            </ul>
          </nav>

          <nav className={styles.column} aria-label="Legal">
            <h5 className={styles.columnTitle}>
              <Link to="/legal" >
                Legal
              </Link>
            </h5>
            <ul className={styles.columnLinks}>
              <li>
                <Link to="/legal/privacy-policy" className={styles.columnLink}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/legal/cookie-policy" className={styles.columnLink}>
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/legal/terms-of-service" className={styles.columnLink}>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </nav>

          <div className={styles.socials}>
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={styles.social}
                aria-label={label}
              >
                <Icon className={styles.socialIcon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}