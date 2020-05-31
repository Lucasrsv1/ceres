import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NgxEchartsModule, NgxEchartsDirective } from 'ngx-echarts';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RequestInterceptorService } from './services/authentication/request.interceptor.service';
import { InputErrorModule } from './shared-components/input-error/input-error.module';
import { HomePageModule } from './pages/home/home.module';
import { LoginPageModule } from './pages/login/login.module';
import { MyProductsPageModule } from './pages/my-products/my-products.module';
import { PlantingPageModule } from './pages/planting/planting.module';
import { TutorialPageModule } from './pages/tutorial/tutorial.module';
import { MarketPageModule } from './pages/market/market.module';
import { MyServicesPageModule } from './pages/my-services/my-services.module';
import { JaxaClimatePageModule } from './pages/jaxa-climate/jaxa-climate.module';
import { NasaCloudsPageModule } from './pages/nasa-clouds/nasa-clouds.module';

import * as echarts from 'echarts';

@NgModule({
	declarations: [AppComponent],
	entryComponents: [],
	imports: [
		BrowserModule,
		IonicModule.forRoot(),
		AppRoutingModule,
		CommonModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		NgxEchartsModule.forRoot({ echarts }),
		HomePageModule,
		LoginPageModule,
		InputErrorModule,
		MyProductsPageModule,
		MyServicesPageModule,
		PlantingPageModule,
		TutorialPageModule,
		MarketPageModule,
		JaxaClimatePageModule,
		NasaCloudsPageModule
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
		{
			provide: HTTP_INTERCEPTORS,
			useClass: RequestInterceptorService,
			multi: true
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
