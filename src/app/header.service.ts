import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';
import { HeaderComponent } from 'src/app/header/header.component';
import { MatTabsModule } from '@angular/material/tabs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Title } from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Injectable({
  providedIn: 'root'
})
@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    NoopAnimationsModule
  ],
  providers: [Title],
})
export class HeaderService {

  constructor() { }
}
