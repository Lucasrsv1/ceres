import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { IProduct } from 'src/app/models/IProduct';
import { UserService } from 'src/app/services/user/user.service';

@Component({
	selector: 'app-my-services',
	templateUrl: './my-services.page.html',
	styleUrls: ['./my-services.page.scss'],
})
export class MyServicesPage implements OnInit {
	public searchInput: string;
	public servicos: IProduct[];

	constructor (
		private navCtrl: NavController,
		private user: UserService
	) {
		if (!this.user.isLogged())
			this.navCtrl.navigateRoot(["/login"]);

		this.servicos = [
			{ img: "assets/imgs/plantio_white.png", nome: "Planter", categoria: "Planting" },
			{ img: "assets/imgs/sementes_icon_white.png", nome: "Seeds", categoria: "Seeds" }
		];
	}

	ngOnInit () { }

	search (input: string): void {
		this.searchInput = input;
	}

	get servicosFiltrados (): IProduct[] {
		if (!this.searchInput)
			return this.servicos;

		return this.servicos.filter((servico: IProduct) => {
			if (servico.nome.toLowerCase().indexOf(this.searchInput.toLowerCase()) > -1)
				return true;

			if (servico.categoria.toLowerCase().indexOf(this.searchInput.toLowerCase()) > -1)
				return true;

			return false;
		});
	}
}
