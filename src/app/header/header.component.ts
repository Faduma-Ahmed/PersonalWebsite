import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
  
})
   
export class HeaderComponent implements OnInit {
  constructor() { }
  titleService: Title;

  ngOnInit() {
 
   // this.titleService.setTitle( 'Faduma Ahmed' );
  }
  
}
