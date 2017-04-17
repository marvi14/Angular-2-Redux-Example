import { Component, ViewEncapsulation } from '@angular/core';
import { State, Store } from "@ngrx/store";
import * as operations from "./actions/operations";
import * as currenciesActions from "./actions/currencies";

import { Operation } from "./models/operation.model";
import { Observable } from "rxjs";
import { TranslateService } from '@ngx-translate/core';

/* In order to access the application state, reference the reducers folder again, accessing all the exported members from it though index.ts */
import * as fromRoot from '../../reducers.index';

@Component({
	selector: 'marvi-main-component',
	templateUrl: './main.template.html'
})

export class MainComponent {
	public operations: Observable<Operation[]>;
	public id: number = 0;
	//initialize a new operation class instance 
	public operation: Operation = new Operation();
	public currencies: Observable<string[]>;
	public selectedCurrency: Observable<string>;

	constructor(private _store: Store<fromRoot.State>, private translate: TranslateService) {
		//_store.let executes getEntities and returns its value.
		this.operations = _store.let(fromRoot.getEntities);
		this.currencies = _store.let(fromRoot.getCurrencyEntities);
		this.selectedCurrency = _store.let(fromRoot.getSelectedCurrency);
		_store.dispatch(new currenciesActions.LoadCurrencyRatesAction(null));
	}

	addOperation(operation) {
		//use the dispatch() function to send an action with type and payload 
		this._store.dispatch(new operations.AddOperationAction({
			id: ++this.id,//simulating ID increments 
			reason: operation.reason,
			amount: operation.amount
		}));
	}

	incrementOperation(operation) {
		this._store.dispatch(new operations.IncrementOperationAction(operation));
	}

	decrementOperation(operation) {
		this._store.dispatch(new operations.DecrementOperationAction(operation));
	}

	deleteOperation(operation) {
		this._store.dispatch(new operations.RemoveOperationAction(operation));
	}

	onCurrencySelected(currency: string) {
		this._store.dispatch(new currenciesActions.ChangeCurrencyAction(currency));
	}
}
