import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PushNotificationsService } from 'angular2-notifications';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})

export class AppComponent {
	constructor(private translate: TranslateService, private _push: PushNotificationsService) {
		translate.setDefaultLang('en');
		let browserLang = translate.getBrowserLang();
		translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
		if (this._push.isSupported() && this._push.permission !== 'granted')
			this._push.requestPermission();
	}
}
