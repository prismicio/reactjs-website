import React from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../prismic-configuration';
import { customLink } from '../../utils/prismicHelpers';

/**
 * Helper component for Prismic Rich Text fields
 */
const RichTextField = ({ field }) => {
  return (
    <RichText
      render={field}
      linkResolver={linkResolver}
      serializeHyperlink={customLink}
    />
  );
};

export default RichTextField;
