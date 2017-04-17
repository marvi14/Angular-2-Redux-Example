import { Component } from '@angular/core';
import { Observable } from "rxjs";
import { LoginService } from './services/login.service';
import { SweetAlertService } from '../../common/sweetAlert';

@Component({
	templateUrl: './login.template.html',
	styleUrls: [
		'./login.css'
	]

})
export class LoginComponent {

	constructor(private _loginService: LoginService, private _alert: SweetAlertService) { }

	login(provider) {
		switch (provider) {
			case "Facebook":
				this._alert.showConfirmationMessage('Facebook', 'Seguro te queres loguear con Facebook?', (() => this._loginService.facebookLogin()));
				break;
			default:
				// code...
				break;
		}
	}
}