import React from 'react'
import { RichText } from 'prismic-reactjs'
import { shape, array, arrayOf, object } from 'prop-types'
import { imagePropType, prismicPropType } from '../../utils/propTypes'
import { PrismicLink } from '../';
import { customLink } from '../../utils/prismicHelpers';

const ImageGallery = ({ slice, prismicCtx }) => {
  const galleryItem = () => {
    return slice.items.map((item, index) => {
      return (
        <div className='gallery-item' key={index}>
          <img src={item.image.url} alt={item.image.alt} />
          <RichText
            render={item.image_description}
            linkResolver={prismicCtx.linkResolver}
            serializeHyperlink={customLink}
          />
          <p className='gallery-link'>
            <PrismicLink link={item.link}>
              {RichText.asText(item.link_label)}
            </PrismicLink>
          </p>
        </div>
      )
    })
  }

  return (
    <section className='image-gallery content-section'>
      <RichText
        render={slice.primary.gallery_title}
        linkResolver={prismicCtx.linkResolver}
        serializeHyperlink={customLink}
      />
      <div className='gallery'>
        {galleryItem()}
      </div>
    </section>
  )
}

const itemShape = shape({
  image_description: array,
  image: imagePropType.isRequired,
  link_label: array,
  link: object
})

ImageGallery.propTypes = {
  slice: shape({
    primary: shape({
      gallery_title: array
    }).isRequired,
    items: arrayOf(itemShape).isRequired
  }).isRequired,
  prismicCtx: prismicPropType.isRequired
}

export default ImageGallery
