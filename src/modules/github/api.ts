import {GitRepo} from './types';
import { createClient } from '../../api';


const api = createClient('https://api.github.com/search/repositories')

export const getRepo = (s: string) => api.get<GitRepo[]>(`/search/repositories?s=${s}`)

export interface CreateRepoRequest {
    total_count: number;
    incomplete_results: boolean;
    items: [{id: number, full_name: string}]
}
export interface CreateRepoResponse {
    id: number
}

export const gitRepoPost = (gitRepo: CreateRepoRequest) =>
    api.post<CreateRepoResponse>('/search/repositories', gitRepo)
