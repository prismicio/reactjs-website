import React from 'react'
import { RichText } from 'prismic-reactjs'
import { shape, array, string } from 'prop-types'
import { prismicPropType } from '../../utils/propTypes'
import { customLink } from '../../utils/prismicHelpers';

const TextSection = ({ slice, prismicCtx }) => {
  const sectionClass = slice.slice_label ? `text-section-${slice.slice_label}` : 'text-section-1col'
  return (
    <section className={`content-section ${sectionClass}`}>
      <div>
        <RichText
          render={slice.primary.rich_text}
          linkResolver={prismicCtx.linkResolver}
          serializeHyperlink={customLink}
        />
      </div>
    </section>
  )
}

TextSection.propTypes = {
  slice: shape({
    slice_label: string,
    primary: shape({
      rich_text: array.isRequired
    }).isRequired
  }).isRequired,
  prismicCtx: prismicPropType.isRequired
}

export default TextSection
