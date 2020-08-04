import React, { Component } from 'react';
import axios from 'axios'

class Baratheon extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            data: []
        }
    }

    componentDidMount() {
        // get API
        axios.get("https://www.anapioficeandfire.com/api/houses/17")
            
            .then(res => {
                const seatBaratheon = res.data;
                console.log("data", seatBaratheon)

                this.setState({ data: seatBaratheon })

            })
            .catch(error => {
                console.log('error', error)
            })
    }

    render() {
        return (
            <div>
                <h2> What is the second seat of House Baratheon? </h2>
                {<ul>
                    {this.state.data.seats}
                </ul>}
            </div>
        )
    }
}

export default Baratheon;