import { createClient } from '../../api';
import { GithubRepositoryItem } from '../github/types';

const api = createClient('https://api.github.com/');

export interface SearchRepositoriesResponse {
    total_count: number;
    incomplete_results: boolean;
    items: GithubRepositoryItem[];
}

export const detailRepository = (owner: string, repositoryName: string) => api.get<SearchRepositoriesResponse>(`repos/${owner}/${repositoryName}`);

