import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { NavController } from '@ionic/angular';

@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
	constructor (
		private navCtrl: NavController,
		private user: UserService
	) {
		if (!this.user.isLogged())
			this.navCtrl.navigateRoot(["/login"]);
	}

	ngOnInit () { }
}
