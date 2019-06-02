import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private _router:Router) { }
  goToLibraryclick(){
    this._router.navigate(['/library'])
  }
  clickButton(){
    
  }
 
}
