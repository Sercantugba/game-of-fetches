import React, { Component } from 'react';
import axios from 'axios'


class Tyrell extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            data: []
        }
    }

    componentDidMount() {
        axios.get("https://anapioficeandfire.com/api/characters/16")

        .then(res => {
            const margaeryTyrell = res.data;
            console.log("data", margaeryTyrell)

            this.setState({ data: margaeryTyrell })
        })

        .catch(error => {
            console.log('error', error)
        })
    }

    render() {
        return (
            <div>
                <h2> Where was Margaery Tyrell born? </h2>
                {<ul>{this.state.data.born}</ul>}
            </div>
        )
    }
}

export default Tyrell