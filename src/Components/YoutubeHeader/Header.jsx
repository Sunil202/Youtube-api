import React, { Component, Fragment } from 'react';
import SearchBar from '../SearchBar/Search';
import "./Header.css";
class YoutubeHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Fragment>
                <section id="HeaderBlock">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <span className="bars"><i className="fal fa-bars"></i></span>
            <img src="./logo1.png" alt="logo" className="logo"/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <section className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <article className="CustomBlock">
            <div className="SearchBlock">
              <SearchBar onTermSubmit={this.props.onTermSubmit} />
              </div> 
          <div className="RightBlock">rightmenu</div> 
            </article>
          
          
        </section>
      </nav>
                </section>
      
            </Fragment>
          );
    }
}
 
export default YoutubeHeader;