import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { StoreModule } from "@ngrx/store";
//import the reducer
import { reducer } from "./reducers.index";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { routing } from './app.routing';
import { CommonCustomModule } from './common/common.module';
import { FacebookService } from 'ng2-facebook-sdk';
import { CanActivateViaAuthGuard } from './app.guards';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule,
    //provideStore accepts an object with reducers.
    StoreModule.provideStore(reducer),
    routing,
    CommonCustomModule
  ],
  providers: [
    FacebookService,
    CanActivateViaAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { }
}