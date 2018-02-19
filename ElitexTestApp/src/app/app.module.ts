import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GridComponentComponent } from './grid-component/grid-component.component';
import { ItemComponentComponent } from './item-component/item-component.component';
import { FocusDirective } from './focus.directive';
import { InputComponentComponent } from './input-component/input-component.component';



@NgModule({
  declarations: [
    AppComponent,
    GridComponentComponent,
    ItemComponentComponent,
    FocusDirective,
    InputComponentComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
