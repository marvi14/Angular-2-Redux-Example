import { XHRBackend } from '@angular/http';
import { AngularReduxRequestOptions } from './angular-redux-request.options';
import { HttpService } from './HttpService';
import { LoaderService } from './loader/loader.service';

function httpServiceFactory(backend: XHRBackend, options: AngularReduxRequestOptions, loaderService: LoaderService) {
	return new HttpService(backend, options, loaderService);
}

export { httpServiceFactory };