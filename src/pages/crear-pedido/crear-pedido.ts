import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetallePedidoPage } from '../detalle-pedido/detalle-pedido';

@Component({
  selector: 'page-crear-pedido',
  templateUrl: 'crear-pedido.html'
})
export class CrearPedidoPage {

  user = { name: '',
  username: '', email: '', phone: '', website: '', address: { street: '', suite: '', city: '', zipcode: '', geo: { lat: '', lng: '' } }, company: { name: '', bs: '', catchPhrase: '' }};
  constructor(public navCtrl: NavController) {
  }
  goToDetallePedido(params){
    if (!params) params = {};
    this.navCtrl.push(DetallePedidoPage);
  }

  savePedido() {

  }
}
