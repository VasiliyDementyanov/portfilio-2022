import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import navbarStyles from './Navbar.module.scss';

const Navbar: FC = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const handleLinkClick = () => {
    setIsNavExpanded(false);
  };

  return (
    <header className={navbarStyles.mainHeader}>
      <Link onClick={handleLinkClick} to="/" className={navbarStyles.logo}>
        <div className={navbarStyles.logoText}>
          <h1>dementyanov</h1>
        </div>
      </Link>
      <div
        className={
          isNavExpanded
            ? `${navbarStyles.toggleButton} ${navbarStyles.active}`
            : navbarStyles.toggleButton
        }
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <span className={navbarStyles.bar}></span>
        <span className={navbarStyles.bar}></span>
        <span className={navbarStyles.bar}></span>
      </div>
      <nav className={navbarStyles.mainNav}>
        <ul className={isNavExpanded ? `${navbarStyles.active}` : ''}>
          <li>
            <Link onClick={handleLinkClick} to="/education">
              education
            </Link>
          </li>
          <li>
            <Link onClick={handleLinkClick} to="/">
              work
            </Link>
          </li>
          <li>
            <Link onClick={handleLinkClick} to="/">
              about
            </Link>
          </li>
          <li className={navbarStyles.contactMeSquare}>
            <Link onClick={handleLinkClick} to="/">
              contact me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
