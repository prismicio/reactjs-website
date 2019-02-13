import React from 'react';
import {Link, RichText} from 'prismic-reactjs'; 

export default class Header extends React.Component {
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
      return props.prismicCtx.api.getSingle('menu', {}, (err, doc) => {
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

  render() {
    if (this.state.doc) {
      const menuLink = this.state.doc.data.menu_links.map((link, index) => {
        return (
          <li>
            <a href={Link.url(link.link, this.props.prismicCtx.linkResolver)}>
              {RichText.asText(link.label)}
            </a>
          </li>
        );
      });
      return (
        <header className="site-header">
          <a href="./">
            <div className="logo">Example Site</div>
          </a>
        {/*Render only if menu content exists*/}
          <nav>
            <ul>
              {menuLink}
            </ul>
          </nav>
        </header>
      );
    } else {
      return null
    }
  }
}