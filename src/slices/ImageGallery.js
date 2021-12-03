import { PrismicRichText, PrismicText, PrismicLink } from "@prismicio/react";

/**
 * Gallery item component
 */
const GalleryItem = ({ item }) => {
  return (
    <div className="gallery-item">
      <img src={item.image.url} alt={item.image.alt} />
      <PrismicRichText field={item.image_description} />
      <p className="gallery-link">
        <PrismicLink field={item.link}>
          <PrismicText field={item.link_label} />
        </PrismicLink>
      </p>
    </div>
  );
};

/**
 * Image gallery slice component
 */
export const ImageGallery = ({ slice }) => {
  return (
    <section className="image-gallery content-section">
      <PrismicRichText field={slice.primary.gallery_title} />
      <div className="gallery">
        {slice.items.map((item) => (
          <GalleryItem key={item.image.url} item={item} />
        ))}
      </div>
    </section>
  );
};
