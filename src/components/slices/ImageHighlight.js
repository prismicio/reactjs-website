import React from 'react';
import { shape, array, object } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { PrismicLink, RichTextField } from '../prismic-elements';
import { imagePropType } from '../../utils/propTypes';

/**
 * Image highlight slice component
 */
const ImageHighlight = ({ slice }) => (
  <section className="highlight content-section">
    <div className="highlight-left">
      <RichTextField field={slice.primary.title} />
      <RichTextField field={slice.primary.headline} />
      <p>
        <PrismicLink link={slice.primary.link}>
          {RichText.asText(slice.primary.link_label)}
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

ImageHighlight.propTypes = {
  slice: shape({
    primary: shape({
      featured_image: imagePropType.isRequired,
      headline: array.isRequired,
      link_label: array,
      link: object,
      title: array.isRequired
    }).isRequired
  }).isRequired
};

export default ImageHighlight;
