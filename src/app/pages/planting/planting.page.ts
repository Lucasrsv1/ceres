import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { IPlanta } from 'src/app/models/IPlanta';
import { UserService } from 'src/app/services/user/user.service';

@Component({
	selector: 'app-planting',
	templateUrl: './planting.page.html',
	styleUrls: ['./planting.page.scss'],
})
export class PlantingPage implements OnInit {
	public plantas: Array<IPlanta>;

	constructor (
		private navCtrl: NavController,
		private user: UserService
	) {
		if (!this.user.isLogged())
			this.navCtrl.navigateRoot(["/login"]);

		this.plantas = [{
			img: "assets/imgs/tomate_cereja.jpg",
			nome: "Cherry Tomato",
			descricao: "Excellent for planting in small pots."
		}, {
			img: "assets/imgs/hortela.jpeg",
			nome: "Mint",
			descricao: "This herb has a unique scent and adds a fresh taste to dishes."
		}, {
			img: "assets/imgs/alface.png",
			nome: "Lettuce",
			descricao: "Lettuce is one of the easiest leaves to plant indoors."
		}, {
			img: "assets/imgs/arroz.png",
			nome: "Rice",
			descricao: "Rice is part of almost every brazilian dish."
		}, {
			img: "assets/imgs/cafe.png",
			nome: "Coffee",
			descricao: "It needs constant light and humidity."
		}]
	}

	ngOnInit () { }

	tutorial (planta: IPlanta) {
		this.navCtrl.navigateForward(["tutorial"], { state: planta });
	}
}
