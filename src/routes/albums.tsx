import React, {useEffect} from 'react';
import {StoreState} from "../store";
import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";
import { Album } from "../modules/posts/types";
import {loadAlbums} from "../modules/albums/albums-action";
import {AlbumsList} from "../components/AlbumsList";

interface AlbumsProps {
    albumsList: Album[];
    onLoadAlbums: () => void
}


export const AlbumsContainer: React.FC<AlbumsProps> = ({onLoadAlbums, albumsList}) => {
    useEffect(() =>  {
        onLoadAlbums();
    }, [])

    return <AlbumsList albumsList={albumsList}/>;
};

const mapStateToProps = (state: StoreState) => ({
    albumsList: state.albums.albumsList
})

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators({onLoadAlbums: loadAlbums}, dispatch);


export const Albums = connect(mapStateToProps, mapDispatchToProps)(AlbumsContainer)
