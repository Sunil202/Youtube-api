import React, { Component, Fragment } from 'react';
import "./Search.css";
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term:"",
          };
    }
    handleChange= e => {
        this.setState({term: e.target.value});
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.onTermSubmit(this.state.term);
    };
    render() { 
        return (  
            <Fragment>
           <section>
               <article>
                   <form onSubmit={this.handleSubmit} >
                      <input type="text" 
                      className="form-control" 
                      placeholder="Search"
                      name="term"
                      onChange={this.handleChange}/>
                   </form>
                   <span className="SearchIcon">
                           <i className="fas fa-search" aria-hidden="true"></i>
                       </span>

               </article>
           </section>
            </Fragment>
        );
    }
}
 
export default SearchBar;