import React, { Component } from 'react';
import axios from 'axios'


class Targaryen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            data: []
        }
    }

    componentDidMount() {
        // get API
        axios.get("https://www.anapioficeandfire.com/api/houses/378")

        .then(res => {
            const targaryenHouse = res.data;
            console.log("data", targaryenHouse)

            this.setState({ data: targaryenHouse })
        })

        .catch(error => {
            console.log('error', error)
        })
    }

    render() {
        return (
            <div>
                <h2> What region is House Targaryen in? </h2>
                {<ul>{this.state.data.region}</ul>}
            </div>
        )
    }
}

export default Targaryen;