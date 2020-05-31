import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { UserService } from 'src/app/services/user/user.service';
import { IProduct } from 'src/app/models/IProduct';

@Component({
	selector: 'app-my-products',
	templateUrl: './my-products.page.html',
	styleUrls: ['./my-products.page.scss'],
})
export class MyProductsPage implements OnInit {
	public searchInput: string;
	public produtos: IProduct[];

	constructor (
		private navCtrl: NavController,
		private user: UserService
	) {
		if (!this.user.isLogged())
			this.navCtrl.navigateRoot(["/login"]);

		this.produtos = [
			{ img: "assets/imgs/grains_icon_white.png", nome: "Wheat", categoria: "Grains" },
			{ img: "assets/imgs/egg-icon-png-white.png", nome: "Eggs", categoria: "Others" }
		];
	}

	ngOnInit () { }

	search (input: string): void {
		this.searchInput = input;
	}

	get produtosFiltrados (): IProduct[] {
		if (!this.searchInput)
			return this.produtos;

		return this.produtos.filter((product: IProduct) => {
			if (product.nome.toLowerCase().indexOf(this.searchInput.toLowerCase()) > -1)
				return true;

			if (product.categoria.toLowerCase().indexOf(this.searchInput.toLowerCase()) > -1)
				return true;

			return false;
		});
	}
}
