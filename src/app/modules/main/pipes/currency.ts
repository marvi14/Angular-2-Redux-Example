import { Pipe, PipeTransform } from '@angular/core';
import * as fromRoot from '../../../reducers.index';
import { State, Store } from "@ngrx/store";
const fx = require('money');
fx.base = "USD";

@Pipe({
  name: 'currencyPipe',
})
export class CustomCurrencyPipe implements PipeTransform {

  /* One of the main advantages of Redux is that the state of the application can be observed from any file 
  by simply implementing a selector and calling it where needed. */

  constructor(private _store: Store<fromRoot.State>) {
    this._store.let(fromRoot.getCurrencyRates).subscribe((rates) => {
      fx.rates = rates;
    });
  }

  /*The currency parameter obtains its value from the selectedCurrency property. 
  An alternative implementation would be to call getSelectedCurrency within the pipe and get the selectedCurrency within the pipe.*/

  transform(value: number, currency): string {
    if (currency != null) {
      fx.settings = { from: "USD" };
      value = fx.convert(value, { from: "USD", to: currency });
      return currency + ' ' + value;
    } else {
      return 'USD' + ' ' + value;
    }
  }
}