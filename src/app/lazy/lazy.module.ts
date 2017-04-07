import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { routing } from './lazy.routing';

@NgModule({
	imports: [routing,
		CommonModule
	],
	declarations: [LazyComponent]
})
export default class LazyModule { }