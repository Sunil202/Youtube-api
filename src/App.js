import React, { Component, Fragment } from 'react';
import SearchBar from './Components/SearchBar/Search';
import YoutubeHeader from './Components/YoutubeHeader/Header';
import axios from "axios";
import api,{baseParams} from "./Services/Api";
import { timers } from 'jquery';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            videos:[],
         }
    }
    onTermSubmit = async(term) =>{
      
        let response = await api.get("/search" , {
           params :{
            q : term,
            ...baseParams
           }
        })
        console.log(response);
    }
    render() { 
        return ( 
            <Fragment>
               <header>
                  <YoutubeHeader onTermSubmit= {this.onTermSubmit} />
                  
               </header>
            </Fragment>
         );
    }
}
 
export default App ;
