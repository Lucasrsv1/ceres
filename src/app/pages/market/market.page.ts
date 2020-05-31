import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

import { IProduct } from 'src/app/models/IProduct';
import { UserService } from 'src/app/services/user/user.service';

@Component({
	selector: 'app-market',
	templateUrl: './market.page.html',
	styleUrls: ['./market.page.scss'],
})
export class MarketPage implements OnInit {
	public searchInput: string;
	public produtos: IProduct[];

	constructor (
		private activatedRoute: ActivatedRoute,
		private navCtrl: NavController,
		private user: UserService
	) {
		if (!this.user.isLogged())
			this.navCtrl.navigateRoot(["/login"]);

		this.produtos = [
			{ img: "assets/imgs/grains_icon_white.png", nome: "Wheat", preco: 6.5, categoria: "Grains" },
			{ img: "assets/imgs/macarrao_icon_white.png", nome: "Noodles", preco: 3, categoria: "Pasta" },
			{ img: "assets/imgs/beef_white_png.png", nome: "Steak", preco: 12.9, categoria: "Meat" },
			{ img: "assets/imgs/egg-icon-png-white.png", nome: "Eggs", preco: 4.5, categoria: "Others" },
			{ img: "assets/imgs/hammer.png", nome: "Hammer", preco: 4.25, categoria: "Tools" },
			{ img: "assets/imgs/wrench.png", nome: "Wrench", preco: 2.8, categoria: "Tools" },
			{ img: "assets/imgs/sementes_icon_white.png", nome: "Tomato", preco: 7, categoria: "Seeds" },
			{ img: "assets/imgs/sementes_icon_white.png", nome: "Lettuce", preco: 7, categoria: "Seeds" },
			{ img: "assets/imgs/sementes_icon_white.png", nome: "Cucumber", preco: 7, categoria: "Seeds" },
			{ img: "assets/imgs/sementes_icon_white.png", nome: "Grape", preco: 7, categoria: "Seeds" },
			{ img: "assets/imgs/plantio_white.png", nome: "Planter", preco: 14.1, categoria: "Planting" }
		];

		this.searchInput = this.activatedRoute.snapshot.queryParams["category"] || "";
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
