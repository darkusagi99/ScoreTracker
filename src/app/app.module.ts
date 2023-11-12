import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import {MatToolbarModule} from '@angular/material/toolbar';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { PlayerComponent } from './player/player.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, MatIconModule, MatButtonToggleModule, MatButtonModule, MatCardModule, MatToolbarModule, PlayerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
