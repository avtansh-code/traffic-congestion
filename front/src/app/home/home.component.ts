import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private http: Http, private router: Router) {
   }

  public ngOnInit() {
  }

  public ngOnDestroy() {
    console.log('destroyed');
  }
}
