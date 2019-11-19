import React from 'react';
import { Link } from 'react-router-dom';
import {  linkResolver } from '../prismic-configuration';

// Helper function to convert Prismic Rich Text links to React Link components
export const customLink = (type, element, content, children, index) => (
  <Link to={linkResolver(element.data)} key={index}>
    {content}
  </Link>
);
