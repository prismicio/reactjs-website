import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <footer><p>
        Proudly published with &nbsp;<a href="https://prismic.io" target="_blank" rel="noopener noreferrer">prismic.io</a>
        <br/>
        <a href="https://prismic.io" target="_blank" rel="noopener noreferrer">
          <img className="footer-logo" src="/images/logo-prismic.svg" alt="Gray Prismic logo"/>
        </a>
      </p></footer>
    );
  }
}