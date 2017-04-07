import { NgModule } from '@angular/core';
//import the reducer
import { NewOperation } from "./New Operation/new-operation.component";
import { OperationsList } from "./Operations List/operations-list.component";
import { CurrenciesComponent } from './currencies/currencies.component';
import { CurrencyEffects } from "./effects/currencies";
import { EffectsModule } from "@ngrx/effects";
import { CurrencyService } from "./services/currencies";
import { CustomCurrencyPipe } from "./pipes/currency";
import { routing } from './main.routing';
import { MainComponent } from './main.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    MainComponent,
    NewOperation,
    OperationsList,
    CurrenciesComponent,
    CustomCurrencyPipe
  ],
  imports: [
    routing,
    FormsModule,
    EffectsModule.run(CurrencyEffects),
    CommonModule,
    TranslateModule
  ],
  providers: [CurrencyService]
})
export default class MainModule {
  constructor() { }
}