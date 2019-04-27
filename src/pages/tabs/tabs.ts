import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetallePedidoPage } from '../detalle-pedido/detalle-pedido';
import { CrearPedidoPage } from '../crear-pedido/crear-pedido';
import { PedidosUltimaHoraPage } from '../pedidos-ultima-hora/pedidos-ultima-hora';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = CrearPedidoPage;
  tab2Root: any = PedidosUltimaHoraPage;
  constructor(public navCtrl: NavController) {
  }
  goToCrearPedido(params) {
    if (!params) params = {};
    this.navCtrl.push(CrearPedidoPage);
  } goToDetallePedido(params) {
    if (!params) params = {};
    this.navCtrl.push(DetallePedidoPage);
  }
}
