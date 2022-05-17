import React, { useEffect } from 'react';
import { StoreState } from '../store';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Album } from '../modules/albums/types';
import { loadAlbums } from '../modules/albums/action';
import { AlbumsList } from '../components/AlbumsList';
import { CreateAlbumRequest } from '../modules/albums/api';
import { createAlbum } from '../modules/albums/services';
import { CreateAlbumForm } from '../components/CreateAlbumForm';

interface AlbumsProps {
    albumsList: Album[];
    onLoadAlbums: () => void
    onCreateAlbum: (album: CreateAlbumRequest) => void
}


export const AlbumsContainer: React.FC<AlbumsProps> = ({onLoadAlbums, albumsList, onCreateAlbum}) => {
    useEffect(() =>  {
        onLoadAlbums();
    }, [])

    const onCreate = (album: CreateAlbumRequest) => {
        onCreateAlbum(album)
    }
    return (
        <>
            <CreateAlbumForm onCreate={onCreate}/>
            <AlbumsList albumsList={albumsList}/>
        </>
    );
};



const mapStateToProps = (state: StoreState) => ({
    albumsList: state.albums.albumsList
})

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators({onLoadAlbums: loadAlbums, onCreateAlbum: createAlbum}, dispatch);


export const Albums = connect(mapStateToProps, mapDispatchToProps)(AlbumsContainer)
