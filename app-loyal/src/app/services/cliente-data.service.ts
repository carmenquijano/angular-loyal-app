import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { InformacionCliente } from './informacion-cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteDataService {

  //dar un estado inicial a los datos
  datosVacios = {
    saldos: {datosSaldos:[]},
    equipo: {datosEquipo:[]},
    cliente: {contactos:[]},
    recomendaciones:{ recomendaciones:[] }
  }

  //rxjs
  //subject > BeheviorSubject
  private informacionClienteSubject = new BehaviorSubject<InformacionCliente>(this.datosVacios);
  private currentinformacionCliente: Observable<InformacionCliente> = this.informacionClienteSubject.asObservable();

  constructor() { }

  clear():void{
    this.informacionClienteSubject.next(this.datosVacios);

  }

  updateCliente(nuevaInformacionCliente: InformacionCliente) : void {
    //actualiza el estado del subject
    this.informacionClienteSubject.next(nuevaInformacionCliente);//con next() actualiza el estado
  }

  getInformacionCliente(): Observable<InformacionCliente>{
    return this.currentinformacionCliente;
  }

}
