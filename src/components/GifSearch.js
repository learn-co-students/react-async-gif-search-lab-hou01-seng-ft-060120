import React, { Component } from 'react';

export default class GifSearch extends Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         query: '',
    //     }
    // }

    // handleSubmit = (e) => {
    //     e.preventDefault 
    //     let query = this.state.query
    //     let form = e.currentTarget
    //     this.props.getQuery(query)
    //     form.reset()
    // }



    render() {
        return (
            <div>
                <label>Search:</label>
                <input type='text'  placeholder="Search for a gif..." onChange={(e) => this.props.getQuery(e)}/>
            </div>
        )
    }
}