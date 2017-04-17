import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { routing } from './login.routing';
import { LoginService } from './services/login.service';


@NgModule({
	imports: [
		routing,
		CommonModule
	],
	declarations: [LoginComponent],
	providers: [LoginService]
})
export default class LazyModule { }