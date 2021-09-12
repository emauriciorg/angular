import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { RigthMenuComponent } from './components/rigth-menu/rigth-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    RigthMenuComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
