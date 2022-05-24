import { albumPost, CreateAlbumRequest } from './api';
import { Dispatch } from 'redux';
import { Album } from './types';

export const CREATE_ALBUM = 'CREATE_ALBUM';
export const CREATE_ALBUM_ERROR = 'CREATE_ALBUM_ERROR';

export const createAlbum = (albumRequest: CreateAlbumRequest) => async (dispatch: Dispatch) => {
    try {
        const response = await albumPost(albumRequest);

        const album: Album = {
            ...albumRequest,
            ...response,
        };
        dispatch({
            type: CREATE_ALBUM,
            payload: album,
        });
    }
    catch(error) {
        dispatch({
            type: CREATE_ALBUM_ERROR,
            payload: error,
        });
    }
};
