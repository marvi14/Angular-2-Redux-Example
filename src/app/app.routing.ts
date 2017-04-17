import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateViaAuthGuard } from './app.guards';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [{
	path: '', children: [
		{ path: '', component: HeaderComponent, outlet: 'app-header' },
		{ path: 'main', loadChildren: './main/main.module', canActivate: [CanActivateViaAuthGuard] },
		{ path: 'lazy', loadChildren: './lazy/lazy.module', canActivate: [CanActivateViaAuthGuard] }
	]
},
{ path: '', redirectTo: 'login', pathMatch: 'full' },
{ path: 'login', loadChildren: './login/login.module' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);