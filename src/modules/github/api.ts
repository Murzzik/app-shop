import {createClient} from '../../api';
import {GithubRepository} from "./types";

const api = createClient('https://api.github.com/')

export interface SearchRepositoriesResponse {
    total_count: number;
    incomplete_results: boolean;
    items: GithubRepository[]
}

export const searchRepositories = (name: string) => api.get<SearchRepositoriesResponse>(`search/repositories?q=${name}`)
