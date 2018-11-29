import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { OutputComponent } from './output/output.component';
import { InputComponent } from './input/input.component';
import { LoggerService } from './logger.service';
import { ListaCompraComponent } from './lista-compra/lista-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    OutputComponent,
    InputComponent,
    ListaCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
