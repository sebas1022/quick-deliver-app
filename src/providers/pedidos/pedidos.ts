import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PedidosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PedidosProvider {

  apiUrl = 'http://localhost:3000';

  constructor(public http: HttpClient) { }

  getPedidos() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/pedido').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getPedido(idPedido){
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/pedido/'+ idPedido).subscribe(data => {
        console.log(data);
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  addPedido(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/pedido', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  
}
