import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular';

import { UsuarioProvider } from '../../providers/usuario/usuario'
import { PedidosUltimaHoraPage } from '../pedidos-ultima-hora/pedidos-ultima-hora';

@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})
export class LoginPage {
	login = {
		usuario: '',
		password: ''
	}

	invalidUser = false;

	formulario: FormGroup;

	constructor(
		public navCtrl: NavController,
		public userProvider: UsuarioProvider,
		public alertController: AlertController) {
			this.formulario = new FormGroup({
				usuario: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(50)]),
				password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(150)]),
			});
	}
	goToPedidosUltimaHora(data) {

			this.navCtrl.push(PedidosUltimaHoraPage);

	}

	makeLogin() {
		this.userProvider.getUser(this.login).then((result) => {
			this.goToPedidosUltimaHora(result)
		}, (err) => {
			this.presentAlert();
		});
	}

	async presentAlert() {
		const alert = await this.alertController.create({
			message: 'Usuario y/o Contraseña Errados',
			buttons: ['OK']
		});

		await alert.present();
	  }
}
