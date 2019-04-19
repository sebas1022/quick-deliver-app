import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { PedidosUltimaHoraPage } from '../pages/pedidos-ultima-hora/pedidos-ultima-hora';
import { CrearPedidoPage } from '../pages/crear-pedido/crear-pedido';
import { TabsPage } from '../pages/tabs/tabs';
import { DetallePedidoPage } from '../pages/detalle-pedido/detalle-pedido';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PedidosProvider } from '../providers/pedidos/pedidos';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    PedidosUltimaHoraPage,
    CrearPedidoPage,
    TabsPage,
    DetallePedidoPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    PedidosUltimaHoraPage,
    CrearPedidoPage,
    TabsPage,
    DetallePedidoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PedidosProvider
  ]
})
export class AppModule {}
