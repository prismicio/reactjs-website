import React from 'react';
import {Link, RichText} from 'prismic-reactjs';

export default class ImageHighlight extends React.Component {
  render() {
    return (
      <section className="highlight content-section">
        <div className="highlight-left">
          {RichText.render(this.props.slice.primary.title, this.props.prismicCtx.linkResolver)}
          {RichText.render(this.props.slice.primary.headline, this.props.prismicCtx.linkResolver)}
          {RichText.asText(this.props.slice.primary.link_label) !== "" ? (
            <p>
              <a href={Link.url(this.props.slice.primary.link, this.props.prismicCtx.linkResolver)}>
                {RichText.asText(this.props.slice.primary.link_label)}
              </a>
            </p>
          ) : '' }
        </div>
        <div className="highlight-right">
          <img src={this.props.slice.primary.featured_image.url} alt={this.props.slice.primary.featured_image.alt} />
        </div>
      </section>
    );
  }
}