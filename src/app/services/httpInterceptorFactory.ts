import { XHRBackend, RequestOptions } from '@angular/http';
import { HttpInterceptor } from './http.interceptor';

export function httpInterceptorFactory (backend: XHRBackend, defaultOptions: RequestOptions) {
    return new HttpInterceptor(backend, defaultOptions);
}
