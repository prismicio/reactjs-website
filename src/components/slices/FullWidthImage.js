import React from 'react'
import { shape } from 'prop-types'
import { imagePropType } from '../../utils/propTypes'

const FullWidthImage = ({ slice }) => (
  <section className='full-width-image content-section'>
    <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
  </section>
)

FullWidthImage.propTypes = {
  slice: shape({
    primary: shape({
      image: imagePropType.isRequired
    }).isRequired
  }).isRequired
}

export default FullWidthImage
