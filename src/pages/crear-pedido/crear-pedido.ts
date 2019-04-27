import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { DetallePedidoPage } from '../detalle-pedido/detalle-pedido';
import { PedidosProvider } from '../../providers/pedidos/pedidos';

@Component({
	selector: 'page-crear-pedido',
	templateUrl: 'crear-pedido.html'
})
export class CrearPedidoPage {
	pedido = {
		barrio: '',
		direccion: '',
		telefonoContacto: '',
		valor: '',
		descripcion: '',
		pago: '',
		noPedido: Math.floor(Math.random() * 90000) + 10000
	};

	formulario: FormGroup;

	constructor(
		public navCtrl: NavController,
		public restProvider: PedidosProvider) {

		this.formulario = new FormGroup({
			barrio: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(50)]),
			direccion: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(150)]),
			telefonoContacto: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(20)]),
			valor: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
			descripcion: new FormControl('', [Validators.required, Validators.minLength(4)]),
			pago: new FormControl(null, Validators.compose([
				Validators.required
			]))
		});
	}

	goToDetallePedido(params) {
		if (!params) params = {};

		this.navCtrl.push(DetallePedidoPage, { idPedido: params._id });
	}

	savePedido() {
		this.restProvider.addPedido(this.pedido).then((result) => {
			this.goToDetallePedido(result)
		}, (err) => {
			console.log(err);
		});
	}
}
