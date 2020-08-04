import React, {Component} from 'react'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      data: []
    }
  }

  render() {
    return (
      <div>
        <h1> Game of Thrones </h1>
      </div>
    )
  }
}

export default App;
