import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CONSTANST_PROVIDER } from '../providers.constanst';
/*
  Generated class for the PedidosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PedidosProvider {

    apiUrl = CONSTANST_PROVIDER.API_URL;

    constructor(public http: HttpClient) { }

    getPedidos() {
        return new Promise(resolve => {
            this.http.get(this.apiUrl + '/pedido').subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

    getPedido(idPedido) {
        return new Promise(resolve => {
            this.http.get(this.apiUrl + '/pedido/' + idPedido).subscribe(data => {
                console.log(data);
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

    addPedido(data) {
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + '/pedido', data)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

}
