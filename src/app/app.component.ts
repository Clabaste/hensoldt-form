import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import '../mocks/browser.js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(
    private router: Router
  ) {

  }
  title = 'angular-form';
ngOnInit() {
  console.info('lölöö', this.router)
}
}
