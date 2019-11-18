import React from 'react';
import { RichText } from 'prismic-reactjs';
import { PrismicLink } from './';

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
      <PrismicLink
        link={banner.button_link}
        linkClass="banner-button"
      >
        {RichText.asText(banner.button_label)}
      </PrismicLink>
    </div>
  </section>
);

export default HomepageBanner;
