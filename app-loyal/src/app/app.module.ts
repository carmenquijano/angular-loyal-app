import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SaldoComponent } from './components/saldo/saldo.component';
import { DatosEquipoComponent } from './components/datos-equipo/datos-equipo.component';
import { ContactoClienteComponent } from './components/contacto-cliente/contacto-cliente.component';
import { RecomendacionesComponent } from './components/recomendaciones/recomendaciones.component';
import { TemplateDrivenComponent } from './formularios/template-driven/template-driven.component';
import { ReactiveFormComponent } from './formularios/reactive-form/reactive-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*material */
// import { theme } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { BasicFormComponent } from './formularios/basic-form/basic-form.component';
import { NestedFormComponent } from './formularios/nested-form/nested-form.component';
import { ArrayFormComponent } from './formularios/array-form/array-form.component';

/* Importamos el httpClientModule para el service */
import { HttpClientModule } from '@angular/common/http';

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
    RecomendacionesComponent,
    TemplateDrivenComponent,
    ReactiveFormComponent,
    BasicFormComponent,
    NestedFormComponent,
    ArrayFormComponent
  ],
  /* Exports de otro módulo que importamos */
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    /*Importamos el httpModule */
    HttpClientModule
  ],
  /* Servucuis que se puede acceder desde cualquier parte de la aplicacion */
  providers: [],
  /* componente inicial de la aplicacion */
  bootstrap: [AppComponent]
})
export class AppModule { }
