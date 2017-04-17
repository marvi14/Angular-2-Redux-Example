import { Component, Input } from '@angular/core';
import { State, Store } from "@ngrx/store";
import * as fromRoot from '../../reducers.index';
import { Observable } from "rxjs";

@Component({
	template: '<p>{{selectedCurrency | async}}</p>'
})

export class LazyComponent {
	public selectedCurrency: Observable<string>;

	constructor(private _store: Store<fromRoot.State>) {
		this.selectedCurrency = _store.let(fromRoot.getSelectedCurrency);
	}

}