import { ClientesModule } from './clientes/clientes.module';
import { HelloComponent } from './hello/hello.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursoAngularComponent } from './curso-angular/curso-angular.component';
import { TesteComponent } from './teste/teste.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CursoAngularComponent,
    TesteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
