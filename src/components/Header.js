import { PrismicText, PrismicLink } from "@prismicio/react";

/**
 * Menu link component
 */
const MenuLink = ({ menuLink }) => {
  return (
    <li>
      <PrismicLink field={menuLink.link}>
        <PrismicText field={menuLink.label} />
      </PrismicLink>
    </li>
  );
};

/**
 * Site header/nav component
 */
export const Header = ({ menuDoc }) => {
  if (menuDoc) {
    return (
      <header className="site-header">
        <PrismicLink href="/">
          <div className="logo">Example Site</div>
        </PrismicLink>
        <nav>
          <ul>
            {menuDoc.data.menu_links.map((menuLink) => (
              <MenuLink menuLink={menuLink} key={menuLink.link.id} />
            ))}
          </ul>
        </nav>
      </header>
    );
  }

  return null;
};
