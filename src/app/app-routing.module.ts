import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IRouteData } from '@core';
import { GuidelineComponent } from './@guideline/guideline.component';



const routeData: IRouteData = { sidebar: false, cache: false };
const routes: Routes = [
	// { path: '', redirectTo: AUTH_CONSTANT.SIGNIN_PATH, pathMatch: 'full' },
	{ path: '**', component: GuidelineComponent, data: routeData },
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot( routes, { useHash: false } );
