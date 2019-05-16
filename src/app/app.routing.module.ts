import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { IntroComponent } from './header/pages/intro/intro.component';
import { AboutComponent } from './header/pages/about/about.component';

@NgModule({
 
  imports: [
    RouterModule.forRoot([
      { path: 'about', component: IntroComponent },
      { path: 'intro', component: AboutComponent },
    //   { path: '**', redirectTo: 'about' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}