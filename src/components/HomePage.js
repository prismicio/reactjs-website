import React from 'react';
import NotFound from './NotFound';
import {Link, RichText} from 'prismic-reactjs';
import SliceZone from './slices/SliceZone';
import Header from './Header';
import Footer from './Footer';
import Loader from './Loader';

export default class Page extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      doc: null,
      notFound: false,
    }
    if (props.prismicCtx) {
      this.fetchPage(props);
    }
  }

  componentDidUpdate(prevProps) {
    this.props.prismicCtx.toolbar();
    // We fetch the page only after it's ready to query the api
    if (!prevProps.prismicCtx) {
      this.fetchPage(this.props);
    }
  }

  fetchPage(props) {
    if (props.prismicCtx) {
      // We are using the function to get a document by its uid
      return props.prismicCtx.api.getSingle('homepage', {}, (err, doc) => {
        if (doc) {
          // We put the retrieved content in the state as a doc variable
          this.setState({ doc });
        } else {
          // We changed the state to display error not found if no matched doc
          this.setState({ notFound: !doc });
        }
      });
    }
    return null;
  }

  homePageBanner() {
    const banner = this.state.doc.data.homepage_banner[0];
    return (
      <section className="homepage-banner"
        style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(' + banner.image.url +')'}}>
        <div className="banner-content container">
          <h2 className="banner-title">{RichText.asText(banner.title)}</h2>
          <p className="banner-description">{RichText.asText(banner.tagline)}</p>
          <a className="banner-button"
            href={Link.url(banner.button_link, this.props.prismicCtx.linkResolver)}>
            {RichText.asText(banner.button_label)}
          </a>
        {/*Don't display if missing link button*/}
        </div>
      </section>
    );
  }

  render() {
    if (this.state.doc) {
      return (
        <div className="homepage" data-wio-id={this.state.doc.id}>
          <Header prismicCtx={this.props.prismicCtx} />
          {this.homePageBanner()}
          <div className="container">
            <SliceZone sliceZone={this.state.doc.data.page_content} prismicCtx={this.props.prismicCtx} />
          </div>
          <Footer />
        </div>
      );
    } else if (this.state.notFound) {
      return <NotFound />;
    }
    return <Loader />;
  }
}