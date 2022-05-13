import {createClient} from "../../api";
import {Album} from "../posts/types";

const api = createClient('https://jsonplaceholder.typicode.com')

export const getAlbums = () => api.get<Album[]>('/albums');
