import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { InformacionCliente } from './informacion-cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteHttpService {

  //url base donde invocamos
  urlSearch:string = environment.api_url_reqres;
  endPoint = '/assets/datos.json';


  //con el HttpClient podemos hacer peticiones REST
  constructor(private httpClient: HttpClient) {}
    //
    search(clave:string): Observable<InformacionCliente> {
     console.log('buscando: ',clave);
      return this.httpClient.get<InformacionCliente>(this.endPoint);
    }

    /*post(): void{
      this.httpClient.post(''. {}, {},...)
    }*/

}
