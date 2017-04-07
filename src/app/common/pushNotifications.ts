import { Injectable } from '@angular/core';
import { PushNotificationsService } from 'angular2-notifications';

@Injectable()
export class PushNotifications {

	constructor(private _push: PushNotificationsService) { }

	show(title, message, callback) {
		this._push.create(title, { body: message, icon: 'https://docs.nativescript.org/img/cli-getting-started/angular/chapter0/Angular_logo.png' }).subscribe(
			res => setTimeout(() => res.notification.close(), 5000),
			err => console.log(err)
		);
	}

	// onNotificationShown(res, callback) {
	// 	setTimeout(() => res.notification.close(), 5000);
	// 	res.notification.onclick(function(){
	// 		console.log('click en la push');
	// 	});
	// }

}