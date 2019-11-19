import React from 'react';
import { RichText } from 'prismic-reactjs';
import { PrismicLink, RichTextField } from '../prismic-elements';

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

export default ImageGallery;
