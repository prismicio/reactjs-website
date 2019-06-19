import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link, RichText } from 'prismic-reactjs'
import { shape, array, arrayOf, object } from 'prop-types'
import { imagePropType, prismicPropType } from '../../utils/propTypes'

const ImageGallery = ({ slice, prismicCtx }) => {
  const galleryItem = () => {
    return slice.items.map((item, index) => {
      return (
        <div className='gallery-item' key={index}>
          <img src={item.image.url} alt={item.image.alt} />
          <RichText render={item.image_description} linkResolver={prismicCtx.linkResolver} />
          {RichText.asText(item.link_label) !== '' ? (
            <p className='gallery-link'>
              <RouterLink to={Link.url(item.link, prismicCtx.linkResolver)}>
                {RichText.asText(item.link_label)}
              </RouterLink>
            </p>
          ) : '' }
        </div>
      )
    })
  }

  return (
    <section className='image-gallery content-section'>
      <RichText render={slice.primary.gallery_title} linkResolver={prismicCtx.linkResolver} />
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
