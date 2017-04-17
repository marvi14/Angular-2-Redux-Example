import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateViaAuthGuard } from './app.guards';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';


const routes: Routes = [{
	path: '', children: [
		{ path: '', component: HeaderComponent, outlet: 'app-header' },
		{ path: 'main', loadChildren: './modules/main/main.module', canActivate: [CanActivateViaAuthGuard] },
		{ path: 'lazy', loadChildren: './modules/lazy/lazy.module', canActivate: [CanActivateViaAuthGuard] }
	]
},
{ path: '', redirectTo: 'login', pathMatch: 'full' },
{ path: 'login', loadChildren: './modules/login/login.module' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);