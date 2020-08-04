import React, {Component} from 'react'
import './App.css';
import Tyrell from './components/Tyrell'

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
        <Tyrell />
      </div>
    )
  }
}

export default App;
