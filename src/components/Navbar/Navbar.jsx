/*
  Navbar — the floating glass pill at the top of the page.
  Owns: the disclosure menu on phone widths and the CTA glow.
  Does NOT own: page layout. The pill is absolutely positioned over the hero.
*/
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import logoCube from '@/assets/images/logo-cube.png';

import Button from '@/components/Button';

import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Case Studies', to: '/case-studies' },
];

const linkClass = (isActive) =>
  isActive ? `${styles.link} ${styles.linkActive}`.trim() : styles.link;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={styles.outer}>
      <div className={styles.shell}>
        <div className={styles.pill}>
          <Link to="/" className={styles.brand} onClick={closeMenu}>
            <span className={styles.cube}>
              <img src={logoCube} alt="" className={styles.cubeImage} width={310} height={368} />
            </span>
            <span className={styles.wordmark}>Rhubix</span>
          </Link>

          <nav className={styles.links} aria-label="Main">
            {navLinks.map(({ label, to }) => (
              <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => linkClass(isActive)}>
                {label}
              </NavLink>
            ))}
          </nav>

          <Button to="/contact" className={styles.navCta} onClick={closeMenu}>
            Contact us
          </Button>

          <button
            type="button"
            className={styles.burger}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={`${styles.bar} ${styles.barTop} ${menuOpen ? styles.barTopOpen : ''}`.trim()} />
            <span className={`${styles.bar} ${styles.barBottom} ${menuOpen ? styles.barBottomOpen : ''}`.trim()} />
          </button>
        </div>

        {menuOpen && (
          <nav className={styles.drawer} aria-label="Mobile">
            {navLinks.map(({ label, to }) => (
              <NavLink key={to} to={to} end={to === '/'} className={styles.drawerLink} onClick={closeMenu}>
                {label}
              </NavLink>
            ))}
            <Button to="/contact" className={styles.drawerCta} onClick={closeMenu}>
              Contact us
            </Button>
          </nav>
        )}
      </div>
    </div>
  );
}