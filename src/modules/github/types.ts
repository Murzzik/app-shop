export interface GithubRepositoryOwner {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
}

export interface GithubRepositoryItem {
    id: number;
    name: string;
    total_count: number;
    full_name: string;
    description: string;
    svn_url: string;
    subscribers_count: number;
    owner: GithubRepositoryOwner;
}