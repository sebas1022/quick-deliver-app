import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetallePedidoPage } from '../detalle-pedido/detalle-pedido';

@Component({
  selector: 'page-pedidos-ultima-hora',
  templateUrl: 'pedidos-ultima-hora.html'
})
export class PedidosUltimaHoraPage {

  constructor(public navCtrl: NavController) {
  }
  goToDetallePedido(params){
    if (!params) params = {};
    this.navCtrl.push(DetallePedidoPage);
  }
}
