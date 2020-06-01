import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';

import { HomePage } from './home.page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		NgxEchartsModule.forRoot({ echarts }),
	],
	declarations: [HomePage]
})
export class HomePageModule { }
