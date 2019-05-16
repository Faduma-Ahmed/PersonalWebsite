import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { MatMenuModule} from '@angular/material/menu';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './header/pages/about/about.component';
import { IntroComponent } from './header/pages/intro/intro.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    IntroComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatMenuModule,
    NoopAnimationsModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
