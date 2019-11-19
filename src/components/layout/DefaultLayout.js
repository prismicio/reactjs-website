import React from 'react';
import { Footer, Header } from './';

const DefaultLayout = ({ wrapperClass, children }) => {
  return (
    <div className={wrapperClass}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default DefaultLayout;
