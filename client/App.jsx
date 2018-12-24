import MainContainer from "./containers/MainContainer.jsx";
import React, { Component } from 'react'; 


class App extends Component {
  constructor(props) {
    super(props);
    console.log('Constructed App!');
  }

  render() {
    const posts = [];
    

    return(
      <MainContainer></MainContainer>
    )
  }
}

export default App;