import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { RichText } from 'prismic-reactjs';
import { PrismicLink } from '../';

/**
 * Site header/nav component
 */
const Header = ({ menuDoc }) => {
  if (menuDoc) {
    return (
      <header className="site-header">
        <RouterLink to="./">
          <div className="logo">Example Site</div>
        </RouterLink>
        <nav>
          <ul>
            {menuDoc.data.menu_links.map(menuLink => (
              <MenuLink
                menuLink={menuLink}
                key={menuLink.link.id}
              />
            ))}
          </ul>
        </nav>
      </header>
    );
  }
  return null;
};

/**
 * Menu link component
 */
const MenuLink = ({ menuLink }) => {
  return (
    <li>
      <PrismicLink link={menuLink.link}>
        {RichText.asText(menuLink.label)}
      </PrismicLink>
    </li>
  );
};

export default Header;
