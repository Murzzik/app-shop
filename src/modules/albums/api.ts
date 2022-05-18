import { createClient } from '../../api';
import { Album } from './types';

const api = createClient('https://jsonplaceholder.typicode.com')

export const getAlbums = () => api.get<Album[]>('/albums');

export interface CreateAlbumRequest {
    title: string;
    userId: number
}

export interface CreateAlbumResponse {
    id: number
}

export const albumPost = (album: CreateAlbumRequest) => api.post<CreateAlbumResponse>('/albums', album);
