import React, { Component } from 'react';
import PosterCardContainer from './PosterCardContainer';
import SearchBar from '../components/SearchBar';
import NavBar from '../components/NavBar';

import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component{
  render(){
    return(
      <div>
        <NavBar/>
        <SearchBar/>
        <PosterCardContainer/>
      </div>
    );
  }
}

const mapToDispatch = (dispatch) => ({

});


export default connect(null, mapToDispatch)(App);
