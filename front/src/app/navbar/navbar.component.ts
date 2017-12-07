import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication';

@Component({
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  @Input('index') index: number;

  locationIndex: number;

  constructor(private authService: AuthenticationService) { }
  public ngOnInit() {
    this.locationIndex = this.index;
    console.log(this.locationIndex);
  }

  ngOnChanges(){
    this.locationIndex = this.index;
    console.log(this.locationIndex);
  }
}
