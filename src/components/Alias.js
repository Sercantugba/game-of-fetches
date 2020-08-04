import React, { Component } from 'react';
import axios from 'axios'
// create class for Alias
class Alias extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            data: []
        }
    }

    componentDidMount() {
        // get API
        axios.get("https://www.anapioficeandfire.com/api/characters/901")
            
            .then(res => {
                const robertAlias = res.data;
                console.log("data", robertAlias)

                this.setState({ data: robertAlias })

            })
            .catch(error => {
                console.log('error', error)
            })
    }

    render() {
        return (
            <div>
                <h2> What is Robert Baratheon's second alias?</h2>
                {<ul>
                    {this.state.data.aliases} 
                </ul>}
            </div>
        )
    }
}

export default Alias;