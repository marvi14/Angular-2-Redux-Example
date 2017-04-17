import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import * as fromRoot from '../reducers.index';
import { State, Store } from "@ngrx/store";
import { TranslateService } from '@ngx-translate/core';
import { PushNotificationsService } from 'angular2-notifications';
import * as loginActions from '../login/actions/login';

@Component({
	templateUrl: './header.component.html',
	selector: 'app-header',
})
export class HeaderComponent {

	constructor(private router: Router, private _store: Store<fromRoot.State>, private translate: TranslateService, private _push: PushNotificationsService) {
		translate.setDefaultLang('en');
		let browserLang = translate.getBrowserLang();
		translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
		if (this._push.isSupported() && this._push.permission !== 'granted')
			this._push.requestPermission();
	}

	logout() {
		this.router.navigate(['/login']);
		localStorage.removeItem('user');
		this._store.dispatch(new loginActions.LogUserAction(null));
	}
}