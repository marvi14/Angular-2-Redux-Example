import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateViaAuthGuard } from './app.guards';
import { AppComponent } from './app.component';

const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{ path: 'login', loadChildren: './login/login.module' },
	{ path: 'main', loadChildren: './main/main.module', canActivate: [CanActivateViaAuthGuard] },
	{ path: 'lazy', loadChildren: './lazy/lazy.module', canActivate: [CanActivateViaAuthGuard] }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);