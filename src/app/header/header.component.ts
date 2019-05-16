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
  titleService: Title; // dynamic tabs
  links = ['About', 'Projects', 'Disscussion', 'Contact'];
  activeLink = this.links[0];

  ngOnInit() {
 
   // this.titleService.setTitle( 'Faduma Ahmed' );
  }
  
}
