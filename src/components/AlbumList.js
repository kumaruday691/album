import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    // maintain state
    state = { albums: [] };

    // initialize behavior
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    // Helper Methods
    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} albumProp={album} />
        );
    }

    // render view
    render() {
        console.log(this.state);
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }

}

export default AlbumList;
