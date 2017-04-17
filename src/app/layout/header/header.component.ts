import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import * as fromRoot from '../../reducers.index';
import { State, Store } from "@ngrx/store";
import { TranslateService } from '@ngx-translate/core';
import { PushNotificationsService } from 'angular2-notifications';
import * as loginActions from '../../modules/login/actions/login';

@Component({
	templateUrl: './header.component.html',
	selector: 'app-header',
})
export class HeaderComponent {

	constructor(private router: Router, private _store: Store<fromRoot.State>, private translate: TranslateService, private _push: PushNotificationsService) { }

	logout() {
		this.router.navigate(['/login']);
		localStorage.removeItem('user');
		this._store.dispatch(new loginActions.LogUserAction(null));
	}
}