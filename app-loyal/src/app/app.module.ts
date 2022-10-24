import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    /* definir las vistas que formar parte del módulo */
    AppComponent,
    UsersComponent, /* generar un nuevo componente: ng g c users */
    LoginComponent /* ng g c login */
  ],
  /* Exports de otro módulo que importamos */
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  /* Servucuis que se puede acceder desde cualquier parte de la aplicacion */
  providers: [],
  /* componente inicial de la aplicacion */
  bootstrap: [AppComponent]
})
export class AppModule { }
