import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CrearPedidoPage } from '../crear-pedido/crear-pedido';
import { DetallePedidoPage } from '../detalle-pedido/detalle-pedido';
import { PedidosProvider } from '../../providers/pedidos/pedidos';

@Component({
  selector: 'page-pedidos-ultima-hora',
  templateUrl: 'pedidos-ultima-hora.html'
})
export class PedidosUltimaHoraPage {

  pedidos: any;

  constructor(public navCtrl: NavController, public restProvider: PedidosProvider) {
      this.getPedidos();
  }
  
  goToDetallePedido(params){
      if (!params) params = {};

      this.navCtrl.push(DetallePedidoPage, {idPedido: params});
  }

  goToCrearPedido(params){
    if (!params) params = {};
    this.navCtrl.push(CrearPedidoPage);
  }

  getPedidos() {
    this.restProvider.getPedidos()
    .then(data => {
      this.pedidos = data;
    });
  }
}
