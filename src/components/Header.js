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
      // We use a single document query to get the only menu document
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

  menuLinks() {
    return this.state.doc.data.menu_links.map((menuLink) => {
      return (
        <li key={menuLink.link.id}>
          <a href={Link.url(menuLink.link, this.props.prismicCtx.linkResolver)}>
            {RichText.asText(menuLink.label)}
          </a>
        </li>
      );
    });
  }

  render() {
    if (this.state.doc) {
      
      return (
        <header className="site-header">
          <a href="./">
            <div className="logo">Example Site</div>
          </a>
          <nav>
            <ul>
              {this.menuLinks()}
            </ul>
          </nav>
        </header>
      );
    } else {
      return null
    }
  }
}