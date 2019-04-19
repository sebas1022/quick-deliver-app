import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CONSTANST_PROVIDER } from '../providers.constanst';

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {

    apiUrl = CONSTANST_PROVIDER.API_URL;

    constructor(public http: HttpClient) {
        console.log('Hello UsuarioProvider Provider');
    }

    getUser(data) {
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + '/login', data)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }
}
