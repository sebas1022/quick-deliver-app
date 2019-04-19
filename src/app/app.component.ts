import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PedidosUltimaHoraPage } from '../pages/pedidos-ultima-hora/pedidos-ultima-hora';
import { DetallePedidoPage } from '../pages/detalle-pedido/detalle-pedido';
import { LoginPage } from '../pages/login/login';



@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) navCtrl: Nav;
    rootPage: any = LoginPage;

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.hide();
            splashScreen.hide();
        });
    }
    goToLogin(params) {
        if (!params) params = {};
        this.navCtrl.setRoot(LoginPage);
    } goToPedidosUltimaHora(params) {
        if (!params) params = {};
        this.navCtrl.setRoot(PedidosUltimaHoraPage);
    } goToDetallePedido(params) {
        if (!params) params = {};
        this.navCtrl.setRoot(DetallePedidoPage);
    }
}
