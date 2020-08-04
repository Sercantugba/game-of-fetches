import React, {Component} from 'react'
import './App.css';
import Tyrell from './components/Tyrell'
import Targaryen from './components/Targaryen'

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
        <Targaryen />
      </div>
    )
  }
}

export default App;
