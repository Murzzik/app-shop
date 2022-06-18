import { createClient } from '../../api';
import { GithubRepositoryItem } from './types';

const api = createClient('https://api.github.com/');

export interface SearchRepositoriesResponse {
    total_count: number;
    incomplete_results: boolean;
    items: GithubRepositoryItem[];
}

export const searchRepositories = (name: string, perPage: number, currentPage: number) =>
    api.get<SearchRepositoriesResponse>(`search/repositories?q=${name}&per_page=${perPage}&page=${currentPage}`);

