import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <Link to="/">
          <h1>Bookstore CMS</h1>
        </Link>
      </div>
      <ul className={styles.navItems}>
        <li className={styles.navItem}>
          <NavLink to="/">BOOKS</NavLink>
        </li>
        <li>
          <NavLink to="/categories">CATEGORIES</NavLink>
        </li>
      </ul>
      <div className={styles.user_action}>
        <button type="button">
          <FaUser className={styles.user_icon} />
        </button>
      </div>
    </nav>
  </header>
);

export default Header;
