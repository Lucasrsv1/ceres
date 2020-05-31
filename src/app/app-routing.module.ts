import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomePage } from './pages/home/home.page';
import { LoginPage } from './pages/login/login.page';
import { MyProductsPage } from './pages/my-products/my-products.page';
import { PlantingPage } from './pages/planting/planting.page';
import { TutorialPage } from './pages/tutorial/tutorial.page';
import { MarketPage } from './pages/market/market.page';
import { MyServicesPage } from './pages/my-services/my-services.page';
import { JaxaClimatePage } from './pages/jaxa-climate/jaxa-climate.page';
import { NasaCloudsPage } from './pages/nasa-clouds/nasa-clouds.page';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomePage },
	{ path: 'login', component: LoginPage },
	{ path: 'my-products', component: MyProductsPage },
	{ path: 'my-services', component: MyServicesPage },
	{ path: 'planting', component: PlantingPage },
	{ path: 'tutorial', component: TutorialPage },
	{ path: 'market', component: MarketPage },
	{ path: 'climate-rain', component: JaxaClimatePage },
	{ path: 'clouds-weather', component: NasaCloudsPage }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
