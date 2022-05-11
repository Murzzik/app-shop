const httpMethods = ['get', 'post', 'put', 'patch', 'delete'] as const;

type JsonData = Record<string, unknown>;
type HttpMethod = typeof httpMethods[number];
type RequestMaker = (url: string, body?: JsonData) => Promise<JsonData>;

interface ApiClient {
    get: RequestMaker;
    // [K extends HttpMethod]: RequestMaker;
}

const api = (service: string) => (method: HttpMethod): RequestMaker => (url: string, body?: JsonData) =>
    fetch(service + url, {
        method,
        body: body ? JSON.stringify(body) : undefined,
    })
    .then(response => response.json());

const setupClient = (service: string): ApiClient => httpMethods.reduce((exports, method) => ({
    ...exports,
    [method]: api(service)(method),
}), {} as ApiClient);

export default setupClient;
