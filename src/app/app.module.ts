import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InventoryComponent } from './project/inventory/inventory.component';
import { animeComponent } from './project/anime/anime.component';



@NgModule({
  declarations: [ //Component,Pipe,Directive
    AppComponent,
    animeComponent,
    InventoryComponent,
    
  ],
  imports: [
    BrowserModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
