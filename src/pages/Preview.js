import React, { useEffect } from 'react';
import qs from 'qs';
import { Loader } from '../components';
import {  linkResolver } from '../prismic-configuration';
import { client } from '../utils/prismicHelpers';

/**
 * Prismic preview component
 */
const Preview = ({ history, location }) => {
  useEffect(() => {
    const {token, documentId} = qs.parse(location.search.slice(1));
    if (!token) {
      return console.warn(`Unable to retrieve the session token from provided url. \n
      Check https://prismic.io/docs/reactjs/beyond-the-api/in-website-preview for more info`)
    }
    client.getPreviewResolver(token, documentId).resolve(linkResolver, '/').then(url => history.push(url));
  });


  return <Loader />;
};

export default Preview;
