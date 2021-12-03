import { PrismicRichText, PrismicText, PrismicLink } from "@prismicio/react";

/**
 * Image highlight slice component
 */
export const ImageHighlight = ({ slice }) => (
  <section className="highlight content-section">
    <div className="highlight-left">
      <PrismicRichText field={slice.primary.title} />
      <PrismicRichText field={slice.primary.headline} />
      <p>
        <PrismicLink field={slice.primary.link}>
          <PrismicText field={slice.primary.link_label} />
        </PrismicLink>
      </p>
    </div>
    <div className="highlight-right">
      <img
        src={slice.primary.featured_image.url}
        alt={slice.primary.featured_image.alt}
      />
    </div>
  </section>
);
