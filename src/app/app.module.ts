import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import {MatToolbarModule} from '@angular/material/toolbar';

import {MatSnackBarModule} from '@angular/material/snack-bar'

import {MatDialogModule} from '@angular/material/dialog';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { PlayerComponent } from './player/player.component';
import { CreatePlayerDialogComponent } from './create-player-dialog/create-player-dialog.component';
import { UpdateScoreDialogComponent } from './update-score-dialog/update-score-dialog.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, MatIconModule, MatButtonToggleModule, MatButtonModule, MatCardModule, 
    MatToolbarModule, PlayerComponent, MatSnackBarModule, BrowserAnimationsModule, MatDialogModule,
    CreatePlayerDialogComponent, UpdateScoreDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
