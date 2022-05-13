import React, {useEffect} from 'react';
import {StoreState} from "../store";
import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";

interface AlbumsProps {
    albumsList: Albums[];
    onLoadAlbums: () => void
}


export const AlbumsContainer: React.FC<AlbumsProps> = ({onLoadAlbums, albumsList}) => {
    useEffect(() =>  {
        onLoadAlbums();
    }, [])

    return <AlbumsList list={albumsList}/>;
};

const mapStateToProps = (state: StoreState) => ({
    albumsList: state.albums.albumsList
})

const mapDispatchToProps = (dispatch: Dispatch) => {
    bindActionCreators({onLoadAlbums: loadAlbums}, dispatch);
}

export const Albums = connect(mapStateToProps, mapDispatchToProps)(AlbumsContainer)
