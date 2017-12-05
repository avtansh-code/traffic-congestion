import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public ngOnInit() {
  }

  public ngOnDestroy() {
    console.log('destroyed');
  }
}
