import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link, RichText } from 'prismic-reactjs'
import { shape, array, object } from 'prop-types'
import { prismicPropType, imagePropType } from '../../utils/propTypes'

const ImageHighlight = ({ slice, prismicCtx }) => (
  <section className='highlight content-section'>
    <div className='highlight-left'>
      <RichText render={slice.primary.title} linkResolver={prismicCtx.linkResolver} />
      <RichText render={slice.primary.headline} linkResolver={prismicCtx.linkResolver} />
      {RichText.asText(slice.primary.link_label) !== '' && Link.url(slice.primary.link, prismicCtx.linkResolver) ? (
        <p>
          <RouterLink to={Link.url(slice.primary.link, prismicCtx.linkResolver)}>
            {RichText.asText(slice.primary.link_label)}
          </RouterLink>
        </p>
      ) : '' }
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
