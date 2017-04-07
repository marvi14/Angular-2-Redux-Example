import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';

const routes: Routes = [
	{ path: '', component: MainComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);