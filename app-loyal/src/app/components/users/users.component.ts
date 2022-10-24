import { Component, OnInit } from '@angular/core';


export interface Articulo{
  id:number,
  titulo: string
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  edad:number = 15;
  nombre:string = 'Carlos Lopez';
  lista:string[] = [];
  articulo:Articulo ={
  id:1,
  titulo:'microfono'
}
alto=true;

  constructor() {
    this.lista.push('Primero');
    this.lista.push('Segundo');
  }

  ngOnInit(): void {
  }

  getArticulo():Articulo{
    return this.articulo;
  }


  sumar():number{
    return 1+2;
  }
}
