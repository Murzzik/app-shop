export interface GithubRepositoryOwner {
    login: string;
    id: number;
    avatar: string;
}

export interface GithubRepository {
    id: string;
    name: string;
    full_name: string;
    owner: GithubRepositoryOwner;
}
