import React from 'react';
import {
  FullWidthImage,
  ImageGallery,
  ImageHighlight,
  Quote,
  TextSection
} from './slices';
import { client, linkResolver } from '../prismic-configuration';

/**
 * Prismic Slice Zone component
 */
const SliceZone = ({ sliceZone }) => (
  <div className="container">
    {
      sliceZone.map((slice, index) => {
        switch (slice.slice_type) {
          case ('full_width_image'):
            return <FullWidthImage slice={slice} key={`slice-${index}`} />;
          case ('image_gallery'):
            return <ImageGallery slice={slice} key={`slice-${index}`} prismicCtx={{ client, linkResolver }} />;
          case ('image_highlight'):
            return <ImageHighlight slice={slice} key={`slice-${index}`} prismicCtx={{ client, linkResolver }} />;
          case ('quote'):
            return <Quote slice={slice} key={`slice-${index}`} />;
          case ('text_section'):
            return <TextSection slice={slice} key={`slice-${index}`} prismicCtx={{ client, linkResolver }} />;
          default:
            return null;
        }
      })
    }
  </div>
);

export default SliceZone;
