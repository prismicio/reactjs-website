import React from 'react'
import { RichText } from 'prismic-reactjs'
import { shape, array, object } from 'prop-types'
import { prismicPropType, imagePropType } from '../../utils/propTypes'
import { PrismicLink } from '../';

const ImageHighlight = ({ slice, prismicCtx }) => (
  <section className='highlight content-section'>
    <div className='highlight-left'>
      <RichText render={slice.primary.title} linkResolver={prismicCtx.linkResolver} />
      <RichText render={slice.primary.headline} linkResolver={prismicCtx.linkResolver} />
      <p>
        <PrismicLink link={slice.primary.link}>
          {RichText.asText(slice.primary.link_label)}
        </PrismicLink>
      </p>
    </div>
    <div className='highlight-right'>
      <img src={slice.primary.featured_image.url} alt={slice.primary.featured_image.alt} />
    </div>
  </section>
)

ImageHighlight.propTypes = {
  slice: shape({
    primary: shape({
      featured_image: imagePropType.isRequired,
      headline: array.isRequired,
      link_label: array,
      link: object,
      title: array.isRequired
    }).isRequired
  }).isRequired,
  prismicCtx: prismicPropType.isRequired
}

export default ImageHighlight
