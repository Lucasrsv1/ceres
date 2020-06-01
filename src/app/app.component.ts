import { Component, OnInit } from '@angular/core';

import { Platform, NavController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { IUser } from './models/IUser';
import { UserService } from './services/user/user.service';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
	public selectedIndex = 0;
	public appPages = [{
		title: "Home",
		url: "/home",
		icon: "home",
		direction: "root"
	}, {
		title: "How to Plant",
		url: "/planting",
		icon: "leaf",
		direction: "forward"
	}];

	public informacoes = [{
		url: "/climate-rain",
		nome: "Climate and Rain"
	}, {
		url: "/clouds-weather",
		nome: "Clouds and Weather"
	}];

	constructor (
		public menu: MenuController,
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar,
		private navCtrl: NavController,
		private userService: UserService
	) {
		this.initializeApp();
	}

	initializeApp () {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.statusBar.backgroundColorByHexString('#9D8B6E');
			this.statusBar.styleLightContent();

			this.splashScreen.hide();
		});
	}

	ngOnInit () {
		this.updateSelectedIdx();
	}

	ionWillOpen (): void {
		this.updateSelectedIdx();
	}

	get usuarioLogado (): IUser {
		return this.userService.user;
	}

	get isLoginPage (): boolean {
		return window.location.pathname.split('/')[1] === "login";
	}

	updateSelectedIdx (): void {
		const path = "/" + window.location.pathname.split('/')[1];
		this.selectedIndex = this.appPages.findIndex(page => page.url === path);
	}

	openInfo (infoUrl: string): void {
		this.navCtrl.navigateForward([infoUrl]);
		this.menu.close();
	}

	openMyProductsAndServices (isProduct: boolean) {
		this.navCtrl.navigateForward([isProduct ? "my-products" : "my-services"]);
		this.menu.close();
	}

	logout (): void {
		this.userService.logout();
	}
}
