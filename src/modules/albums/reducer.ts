import { Album } from './types';
import { AnyAction } from 'redux';
import { LOAD_ALBUMS, LOAD_ALBUMS_ERROR } from './action';
import { CREATE_ALBUM, CREATE_ALBUM_ERROR } from './services';

export interface AlbumsState {
    albumsList: Album[];
    error?: Error
}

const initialState: AlbumsState = {
    albumsList: [],
}

export const albums = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case LOAD_ALBUMS:
            return {
                ...state,
                albumsList: action.payload,
            };
        case CREATE_ALBUM: {
            return {
                ...state,
                albumsList: [action.payload, ...state.albumsList]
            }
        }
        case CREATE_ALBUM_ERROR:
        case LOAD_ALBUMS_ERROR:
            return {
                ...state,
                error: action.payload,
            };
    }
    return state;
}
