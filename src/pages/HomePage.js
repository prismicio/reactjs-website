import React, { useEffect, useState } from 'react';
import { DefaultLayout, HomepageBanner, SliceZone } from '../components';
import NotFound from './NotFound';
import { client } from '../prismic-configuration';

/**
 * Website homepage component
 */
const HomePage = () => {
  const [prismicData, setPrismicData] = useState({ homeDoc: null });
  const [notFound, toggleNotFound] = useState(false);

  // Get the homepage document from Prismic
  useEffect(() => {
    const fetchPrismicData = async () => {
      try {
        const homeDoc = await client.getSingle('homepage');
  
        if (homeDoc) {
          setPrismicData({ homeDoc });
        } else {
          console.warn('Homepage document was not found. Make sure it exists in your Prismic repository.');
          toggleNotFound(true);
        }
      } catch (error) {
        console.error(error);
        toggleNotFound(true);
      }
    }

    fetchPrismicData();
  }, []);

  // Return the page if a document was retrieved from Prismic
  if (prismicData.homeDoc) {
    const homeDoc = prismicData.homeDoc;

    return (
      <DefaultLayout wrapperClass="homepage">
        <HomepageBanner banner={homeDoc.data.homepage_banner[0]} />
        <SliceZone sliceZone={homeDoc.data.page_content} />
      </DefaultLayout>
    );
  } else if (notFound) {
    return <NotFound />;
  }
  return null;
};

export default HomePage;
