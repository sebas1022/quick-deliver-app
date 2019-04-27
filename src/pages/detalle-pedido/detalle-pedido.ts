import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PedidosProvider } from '../../providers/pedidos/pedidos';

@Component({
  selector: 'page-detalle-pedido',
  templateUrl: 'detalle-pedido.html'
})
export class DetallePedidoPage {
  pedido: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: PedidosProvider) {
    this.getPedido(navParams.get('idPedido'))
  }

  getPedido(idPedido) {
    this.restProvider.getPedido(idPedido)
      .then(data => {
        this.pedido = data;
      })
  }

}
