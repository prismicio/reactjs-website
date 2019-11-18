import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link, RichText } from 'prismic-reactjs';
import { linkResolver } from '../prismic-configuration';

/**
 * Homepage banner component
 */
const HomepageBanner = ({ banner }) => (
  <section
    className="homepage-banner"
    style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${banner.image.url})` }}
  >
    <div className="banner-content container">
      <h2 className="banner-title">
        {RichText.asText(banner.title)}
      </h2>
      <p className="banner-description">
        {RichText.asText(banner.tagline)}
      </p>
      <RouterLink
        className="banner-button"
        to={Link.url(banner.button_link, linkResolver)}
      >
        {RichText.asText(banner.button_label)}
      </RouterLink>
    </div>
  </section>
);

export default HomepageBanner;
