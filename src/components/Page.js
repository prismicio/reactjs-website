import React from 'react';
import NotFound from './NotFound';
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
    if (!prevProps.prismicCtx) {
      this.fetchPage(this.props);
    }
  }

  fetchPage(props) {
    if (props.prismicCtx) {
      // We are using the function to get a document by its uid
      return props.prismicCtx.api.getByUID('page', props.match.params.uid, {}, (err, doc) => {
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
      return (
        <div className="page">
          <Header prismicCtx={this.props.prismicCtx} />
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