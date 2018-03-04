import React, { Component } from 'react';
import PosterCard from '../components/PosterCard'

class App extends Component{
  render(){
    return(
      <div>
        <PosterCard/>
        <PosterCard/>
        <PosterCard/>
        <PosterCard/>
      </div>
    );
  }
}

export default App;
