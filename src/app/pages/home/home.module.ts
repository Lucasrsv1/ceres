import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { NgxEchartsModule } from 'ngx-echarts';

import { HomePage } from './home.page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		NgxEchartsModule
	],
	declarations: [HomePage]
})
export class HomePageModule { }
