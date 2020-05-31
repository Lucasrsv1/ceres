import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { EChartOption } from 'echarts';

import { UserService } from 'src/app/services/user/user.service';
import { IClima } from 'src/app/models/IClima';

@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
	public alimentos: Array<{ img: string, nome: string }>;
	public servicos: Array<{ img: string, nome: string }>;

	public infoClima: IClima;
	public humidityOpts: EChartOption;
	public tempOpts: EChartOption;

	private apiEndpoint = "https://api.hgbrasil.com/weather?key=8d002ed7&lat=-23.682&log=-46.875&user_ip=remote";

	constructor (
		private navCtrl: NavController,
		private user: UserService
	) {
		if (!this.user.isLogged())
			this.navCtrl.navigateRoot(["/login"]);

		this.alimentos = [
			{ img: "assets/imgs/grains_icon_white.png", nome: "Grains" },
			{ img: "assets/imgs/macarrao_icon_white.png", nome: "Pasta" },
			{ img: "assets/imgs/beef_white_png.png", nome: "Meat" }
		];

		this.servicos = [
			{ img: "assets/imgs/plantio_white.png", nome: "Planting" },
			{ img: "assets/imgs/sementes_icon_white.png", nome: "Seeds" },
			{ img: "assets/imgs/equipamentos_icon_png.png", nome: "Tools" }
		];

		this.infoClima = {
			by: "geo_ip",
			valid_key: true,
			results: {
				temp: 22,
				date: "2020-05-31",
				time: "15:35",
				condition_code: "30",
				description: "Day partly cloudy",
				currently: "day",
				cid: "",
				city: "Betim, MG",
				img_id: "30",
				humidity: 45,
				wind_speedy: "6 km/h",
				sunrise: "6:24 am",
				sunset: "5:24 pm",
				condition_slug: "cloudly_day",
				city_name: "Betim",
				forecast: [
					{
						date: "05-31",
						weekday: "Sun",
						max: 22,
						min: 10,
						description: "Day partly cloudy",
						condition: "cloudly_day"
					},
					{
						date: "06-01",
						weekday: "Mon",
						max: 22,
						min: 10,
						description: "Day partly cloudy",
						condition: "cloudly_day"
					},
					{
						date: "06-02",
						weekday: "Tue",
						max: 24,
						min: 11,
						description: "Sunny",
						condition: "clear_day"
					},
					{
						date: "06-03",
						weekday: "Wed",
						max: 26,
						min: 12,
						description: "Sunny",
						condition: "clear_day"
					},
					{
						date: "06-04",
						weekday: "Thu",
						max: 25,
						min: 15,
						description: "Fair day",
						condition: "cloudly_day"
					},
					{
						date: "06-05",
						weekday: "Fri",
						max: 23,
						min: 15,
						description: "Day partly cloudy",
						condition: "cloudly_day"
					},
					{
						date: "06-06",
						weekday: "Sat",
						max: 23,
						min: 15,
						description: "Day mostly cloudy",
						condition: "cloud"
					},
					{
						date: "06-07",
						weekday: "Sun",
						max: 23,
						min: 16,
						description: "Isolated thundershowers",
						condition: "storm"
					},
					{
						date: "06-08",
						weekday: "Mon",
						max: 22,
						min: 15,
						description: "Isolated thundershowers",
						condition: "storm"
					},
					{
						date: "06-09",
						weekday: "Tue",
						max: 22,
						min: 13,
						description: "Fair day",
						condition: "cloudly_day"
					}
				]
			},
			execution_time: 0.14,
			from_cache: false
		};

		this.setCharts();
	}

	ngOnInit () { }

	setCharts () {
		this.humidityOpts = {
			tooltip: { show: false },
			series: [{
				name: 'Humidity',
				type: 'gauge',
				radius: "100%",
				detail: {
					formatter: '{value}%',
					fontSize: 16,
					color: "white"
				},
				data: [{ value: this.infoClima.results.humidity, name: '' }],
				axisLine: {
					lineStyle: {
						width: 10,
						color: [[0.12, '#c23531'], [0.4, '#f49b45'], [0.7, '#e3dc28'], [1, '#1cd064']]
					}
				},
				axisLabel: {
					show: false
				},
				axisTick: {
					length: 0
				},
				splitLine: {
					length: 0
				},
				pointer: {
					width: 3
				}
			}]
		};

		let min = this.infoClima.results.forecast[0].min < 10 ? this.infoClima.results.forecast[0].min : 10;
		let max = this.infoClima.results.forecast[0].max > 40 ? this.infoClima.results.forecast[0].max : 40;

		this.tempOpts = {
			tooltip: { show: false },
			series: [{
				name: 'Temperature',
				type: 'gauge',
				radius: "100%",
				detail: {
					formatter: '{value} °C',
					fontSize: 16,
					color: "white"
				},
				min: min,
				max: max,
				data: [
					{ value: this.infoClima.results.temp, name: '' }
				],
				axisLine: {
					lineStyle: {
						width: 10,
						color: [[(23 - min) / Math.abs(min - max), '#4cbaf0'], [(26 - min) / Math.abs(min - max), '#1cd064'],[1, '#f49b45']]
					}
				},
				axisLabel: {
					show: false
				},
				axisTick: {
					length: 0
				},
				splitLine: {
					length: 0
				},
				pointer: {
					width: 3
				}
			}]
		};
	}

	openMarket (category: string): void {
		this.navCtrl.navigateForward(["/market"], {
			queryParams: { category }
		});
	}
}
