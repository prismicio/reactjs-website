import React from 'react';

export default class Loader extends React.Component {
  render() {
    return (
      <div id="loader">
        <div className="lds-ripple"></div>
      </div>
    );
  }
}