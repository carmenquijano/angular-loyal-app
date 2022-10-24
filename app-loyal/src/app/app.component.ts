import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
[x: string]: any;
  title = 'app-loyal';
  mostrarLogin:boolean = true;
  applogin='applogin';
  nombres:string[] = ['juan', 'carlos', 'pedro'];
  nombre:string = '';

  cambiarVisibilidad():void{
    this.mostrarLogin = !this.mostrarLogin;
  }
  cambiarClase():void{
    if(this.applogin == 'otraClase')
    this.applogin = 'applogin';
    else
    this.applogin = 'otraClase';
  }

  agregarNombre():void{
    this.nombres.push(this.nombre);
    this.nombre = '';
  }

  alert():void{
    window.alert('')
  }
}
