import { Http, RequestOptions, ConnectionBackend, RequestOptionsArgs, Request, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class HttpInterceptor extends Http {

    options_global: RequestOptionsArgs;

    constructor (backend: ConnectionBackend, defaultOptions: RequestOptions) {
        super(backend, defaultOptions);
        this.options_global = defaultOptions;
        this.options_global.headers.append('Content-Type', 'application/json');
        this.options_global.headers.append('NewHeader', 'TestHeader');
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        // options.headers.append('Content-Type', 'application/json');
        return super.request(url, this.options_global);
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        // options.headers.append('Content-Type', 'application/json');
        return super.get(url, this.options_global);
    }

    post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return super.post(url, this.options_global);
    }

    put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return super.put(url, this.options_global);
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.delete(url, this.options_global);
    }

    patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return super.patch(url, this.options_global);
    }

    head(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.head(url, this.options_global);
    }

    options(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.options(url, this.options_global);
    }
}
