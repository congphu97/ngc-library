import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IRouteData } from '@core';
import { GuidelineComponent } from './@guideline/guideline.component';
import { ContactComponent } from './@guideline/partial/contact/contact.component';



const routeData: IRouteData = { sidebar: false, cache: false };
const routes: Routes = [
	{ path: '', redirectTo: 'components', pathMatch: 'full' },
	{ path: 'components', component: GuidelineComponent, data: routeData },
	{ path: 'contact', component: ContactComponent, data: routeData },
	{ path: '**', redirectTo: 'components' },
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot( routes, { useHash: false } );
