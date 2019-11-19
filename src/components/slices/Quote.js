import React from 'react';
import { RichText } from 'prismic-reactjs';
import { shape, array } from 'prop-types';

/**
 * Quote slice component
 */
const Quote = ({ slice }) => (
  <section className="content-section quote">
    <blockquote>
      {RichText.asText(slice.primary.quote_text)}
    </blockquote>
  </section>
);

Quote.propTypes = {
  slice: shape({
    primary: shape({
      quote_text: array.isRequired
    }).isRequired
  }).isRequired
};

export default Quote;
