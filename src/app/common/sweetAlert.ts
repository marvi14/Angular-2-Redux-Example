import { Injectable } from '@angular/core';
declare var swal: any;

@Injectable()
export class SweetAlertService {

	constructor() { }

	showInformationMessage(title, message) {
		swal(title, message, 'question');
	}

	showSuccessMessage(title, message) {
		swal(title, message, 'success');
	}

	showConfirmationMessage(title, message, callback) {
		swal({
			title: title,
			text: message,
			type: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Ok',
			cancelButtonText: 'Cancelar'
		}).then(function() {
			callback();
		}, function(dismiss) {
			//do sth if needed
		});
	}

}