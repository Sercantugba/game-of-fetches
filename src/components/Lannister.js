import React, { Component } from 'react';
import axios from 'axios'

class Lannister extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            data: []
        }
    }

    componentDidMount() {
        // get API
        axios.get("https://www.anapioficeandfire.com/api/houses/229")
            
            .then(res => {
                const houseLannister = res.data;
                console.log("data", houseLannister)

                this.setState({ data: houseLannister })

            })
            .catch(error => {
                console.log('error', error)
            })
    }

    render() {
        return (
            <div>
                <h2> What's the coat of arms of House Lannister?</h2>
                {<ul>
                    {this.state.data.coatOfArms}
                </ul>}
            </div>
        )
    }
}

export default Lannister;