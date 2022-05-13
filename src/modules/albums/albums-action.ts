import {Dispatch} from "redux";
import {getAlbums} from "./albums-api";


export const LOAD_ALBUMS = 'LOAD_ALBUMS';
export const LOAD_ALBUMS_ERROR = "LOAD_ALBUMS_ERROR"

export const loadAlbums = () => async (dispatch: Dispatch) => {
    try {
        const albumsList = await getAlbums();

        dispatch({
            type: LOAD_ALBUMS,
            payload: albumsList,
        });
    }   catch (error) {
        dispatch({
            type: LOAD_ALBUMS_ERROR,
            payload: error
        })
    }
}
