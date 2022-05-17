import { createClient } from '../../api';
import { Album } from './types';

const api = createClient("https://jsonplaceholder.typicode.com")

export const getAlbums = () => api.get<Album[]>("/albums");
