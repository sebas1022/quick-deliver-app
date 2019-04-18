import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PedidosUltimaHoraPage } from '../pedidos-ultima-hora/pedidos-ultima-hora';
import { DetallePedidoPage } from '../detalle-pedido/detalle-pedido';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToPedidosUltimaHora(params){
    if (!params) params = {};
    this.navCtrl.push(PedidosUltimaHoraPage);
  }
  goToDetallePedido(params){
    if (!params) params = {};
    this.navCtrl.push(DetallePedidoPage);
  }
}
