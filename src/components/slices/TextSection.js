import React from 'react';
import { shape, array, string } from 'prop-types';
import { RichTextField } from '../prismic-elements';

/**
 * Text section slice component
 */
const TextSection = ({ slice }) => {
  const sectionClass = slice.slice_label ? `text-section-${slice.slice_label}` : 'text-section-1col';
  return (
    <section className={`content-section ${sectionClass}`}>
      <RichTextField field={slice.primary.rich_text} />
    </section>
  );
};

TextSection.propTypes = {
  slice: shape({
    slice_label: string,
    primary: shape({
      rich_text: array.isRequired
    }).isRequired
  }).isRequired
};

export default TextSection;
