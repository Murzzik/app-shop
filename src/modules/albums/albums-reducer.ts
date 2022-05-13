import { Album } from "../posts/types";
import {AnyAction} from "redux";
import {LOAD_ALBUMS, LOAD_ALBUMS_ERROR} from "./albums-action";


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
        case LOAD_ALBUMS_ERROR:
            return {
                ...state,
                error: action.payload,
            };
    }
    return state;
}
