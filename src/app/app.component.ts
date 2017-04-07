import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as fromRoot from './reducers.index';
import { State, Store } from "@ngrx/store";
import * as loginActions from './login/actions/login';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})

export class AppComponent {
	constructor(private router: Router, private _store: Store<fromRoot.State>, private translate: TranslateService) {
		translate.setDefaultLang('en');
		let browserLang = translate.getBrowserLang();
		translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
	}

	logout() {
		this.router.navigate(['/login']);
		localStorage.removeItem('user');
		this._store.dispatch(new loginActions.LogUserAction(null));
	}
}
