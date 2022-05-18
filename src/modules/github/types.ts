export interface GitRepo {
    total_count: number;
    incomplete_results: boolean;
    items: [{id: number, full_name: string}]
}
