import { PrismicText, PrismicLink } from "@prismicio/react";

/**
 * Homepage banner component
 */
export const HomepageBanner = ({ banner }) => (
  <section
    className="homepage-banner"
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${banner.image.url})`,
    }}
  >
    <div className="banner-content container">
      <h2 className="banner-title">
        <PrismicText field={banner.title} />
      </h2>
      <p className="banner-description">
        <PrismicText field={banner.tagline} />
      </p>
      <PrismicLink field={banner.button_link} className="banner-button">
        <PrismicText field={banner.button_label} />
      </PrismicLink>
    </div>
  </section>
);
