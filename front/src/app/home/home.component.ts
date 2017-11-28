import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AuthenticationService } from '../authentication';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar';
import { WebService } from '../webservices';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [WebService, AuthenticationService]
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private http: Http, private router: Router, private webservice: WebService) { }

  public ngOnInit() {
    this.webservice.isAuthenticated();
  }

  public ngOnDestroy() {
    console.log('destroyed');
  }

  places = [
    {value:'HauzKhas', viewValue:'Hauz Khas', latitude:28.5494459, longitude:77.2001368},
    {value:'ModelTown', viewValue:'Model Town', latitude:28.7158727, longitude:77.1910738},
    {value:'CivilLines', viewValue:'Civil Lines', latitude:28.6814284, longitude:77.2226866},
    {value:'PunjabiBagh', viewValue:'Punjabi Bagh', latitude:28.6619753, longitude:77.1241557},
    {value:'Najafgarh', viewValue:'Najafgarh', latitude:28.6090126, longitude:76.9854526},
    {value:'SaraswatiVihar', viewValue:'Saraswati Vihar', latitude:28.6964967, longitude:77.1250482},
    {value:'MukarbaChowk', viewValue:'Mukarba Chowk', latitude:28.7372, longitude:77.1603},
    {value:'Seelampur', viewValue:'Seelampur', latitude:28.6640177, longitude:77.2711557},
    {value:'Gurugram', viewValue:'Gurugram', latitude:28.4595, longitude:77.0266},
    {value:'Noida', viewValue:'Noida', latitude:28.5355, longitude:77.3910}
  ];
  selectedValue: string = '';
  msg: string = 'No Data Available';
  error: string = '';
  submitValid: boolean = false;

  settings = {
    columns: {
      date: {
        title: 'Date',
        sort: false,
        width: '25%'
      },
      time: {
        title: 'Time',
        sortDirection: 'desc',
        sort: true,
        width: '25%'
      },
      currSpeed: {
        title: 'Speed on time',
        sort: true,
        width: '25%'
      },
      normSpeed: {
        title: 'Free Flow Speed',
        sort: true,
        width: '25%'
      }
    },
    hideSubHeader: true,
    actions: {
      add: false,
      edit: false,
      delete: false
    },
    pager: {
      display: true,
      perPage: 10
    }
  };
  data: object[];

  /**
   * Fetch the data from the python-flask backend
   */
  public getData() {
    if(this.selectedValue != ''){
      let body = {
        location: this.selectedValue
      }; 
      this.webservice.getDataFromBackend(body)
      .subscribe(
        (data) => {
          this.error = '';
          console.log(data);
        },
        (err) => {
          this.error = err;
        }
      );
      this.msg = 'The Location Selected is ' + this.selectedValue;
    }
    else{
      this.msg = '';
      this.error = 'Please select a Location';
    }
  }
}
