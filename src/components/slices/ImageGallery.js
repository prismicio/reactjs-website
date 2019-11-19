import React from 'react';
import { shape, array, arrayOf, object } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { PrismicLink, RichTextField } from '../prismic-elements';
import { imagePropType } from '../../utils/propTypes';

/**
 * Image gallery slice component
 */
const ImageGallery = ({ slice }) => {
  return (
    <section className="image-gallery content-section">
      <RichTextField field={slice.primary.gallery_title} />
      <div className="gallery">
        {slice.items.map((item, index) => (
          <GalleryItem item={item} key={index} />
        ))}
      </div>
    </section>
  );
};

/**
 * Gallery item component
 */
const GalleryItem = ({ item }) => {
  return (
    <div className="gallery-item">
      <img src={item.image.url} alt={item.image.alt} />
      <RichTextField field={item.image_description} />
      <p className="gallery-link">
        <PrismicLink link={item.link}>
          {RichText.asText(item.link_label)}
        </PrismicLink>
      </p>
    </div>
  );
};

const itemShape = shape({
  image_description: array,
  image: imagePropType.isRequired,
  link_label: array,
  link: object
});

ImageGallery.propTypes = {
  slice: shape({
    primary: shape({
      gallery_title: array
    }).isRequired,
    items: arrayOf(itemShape).isRequired
  }).isRequired
};

export default ImageGallery;
