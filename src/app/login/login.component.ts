import { Component } from '@angular/core';
import { Observable } from "rxjs";
import { LoginService } from './services/login.service';

@Component({
	templateUrl: './login.template.html',
	styleUrls: [
		'./login.css'
	]

})
export class LoginComponent {

	constructor(private _loginService: LoginService) { }

	login(provider) {
		switch (provider) {
			case "Facebook":
				this._loginService.facebookLogin();
				break;
			default:
				// code...
				break;
		}
	}
}