const httpMethods = ['get', 'post', 'put', 'patch', 'delete'] as const;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type JsonData = Record<string, any>;
type HttpMethod = typeof httpMethods[number];
type RequestMaker = <T>(url: string, body?: JsonData) => Promise<T>;

interface ApiClient {
    get: RequestMaker;
    post: RequestMaker;
    put: RequestMaker;
    patch: RequestMaker;
    delete: RequestMaker;
    // [K extends HttpMethod]: RequestMaker;
}

const api =
    (service: string) => (method: HttpMethod): RequestMaker =>
        <T>(url: string, body?: JsonData): Promise<T> =>
            fetch(service + url, {
                method,
                body: body ? JSON.stringify(body) : undefined,
            })
                .then((response: Response) => response.json());

export const createClient = (service: string): ApiClient => httpMethods.reduce((exports, method) => ({
    ...exports,
    [method]: api(service)(method),
}), {} as ApiClient);
