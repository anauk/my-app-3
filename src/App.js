import React, { Component } from 'react';

import User from './components/User';
import Photos from './components/Photos';

class App extends Component{
  render() {
    return(
        <div className="App">
          <User/>
          <Photos/>
        </div>
    )
  }
}

export default App;
