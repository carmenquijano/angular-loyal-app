import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SaldoComponent } from './components/saldo/saldo.component';
import { DatosEquipoComponent } from './components/datos-equipo/datos-equipo.component';
import { ContactoClienteComponent } from './components/contacto-cliente/contacto-cliente.component';
import { RecomendacionesComponent } from './components/recomendaciones/recomendaciones.component';

@NgModule({
  declarations: [
    /* definir las vistas que formar parte del módulo */
    AppComponent,
    UsersComponent, /* generar un nuevo componente: ng g c users */
    LoginComponent,  /* ng g c login */
    DashboardComponent,
    NavbarComponent,
    TopbarComponent,
    FooterComponent,
    SaldoComponent,
    DatosEquipoComponent,
    ContactoClienteComponent,
    RecomendacionesComponent
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
