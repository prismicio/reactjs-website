import React from 'react';
import { Footer, Header } from './';

const DefaultLayout = ({ wrapperClass, menuDoc, children }) => {
  return (
    <div className={wrapperClass}>
      <Header menuDoc={menuDoc} />
      {children}
      <Footer />
    </div>
  );
}

export default DefaultLayout;
