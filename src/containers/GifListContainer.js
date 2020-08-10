import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends Component {
    constructor() {
        super();
        this.state = {
            gifs: []
        }
    }

    componentDidMount() {
        this.fetchGifs()
    }

    fetchGifs = (query = 'cat') => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=I0icGvslKhEZRTeeVHNsNsy4m7fybi1B`)
        .then(res => res.json())
        .then(gifs => this.setState({ gifs: gifs.data.map(gif => ({ url: gif.images.original.url}))}))
    }

    newFetch = (newQuery) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${newQuery}&api_key=I0icGvslKhEZRTeeVHNsNsy4m7fybi1B`)
        .then(res => res.json())
        .then(gifs => this.setState({ gifs: gifs.data.map(gif => ({ url: gif.images.original.url}))}))
    }

    getQuery = (e) => {
        let newQuery = e.target.value
        this.newFetch(newQuery)

    }


    render() {
        return (
            <div>
                <GifList gifs={this.state.gifs}/>
                <GifSearch getQuery={this.getQuery}/>
            </div>
        )
    }
}