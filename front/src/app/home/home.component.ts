import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AuthenticationService } from '../authentication';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar';
import { WebService } from '../webservices';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';

interface Location{
  Hour: number;
  CurrSpeed: number;
  Congestion: number;
}

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [WebService, AuthenticationService]
})
export class HomeComponent implements OnInit, OnDestroy {

  source: LocalDataSource; 

  constructor(private http: Http, private router: Router, private webservice: WebService) {
    this.source = new LocalDataSource();
   }

  public ngOnInit() {
    this.webservice.isAuthenticated();
  }

  public ngOnDestroy() {
    console.log('destroyed');
  }

  places = [
    {value:'Hauz Khas', viewValue:'Hauz Khas', latitude:28.5494459, longitude:77.2001368},
    {value:'Model Town', viewValue:'Model Town', latitude:28.7158727, longitude:77.1910738},
    {value:'Civil Lines', viewValue:'Civil Lines', latitude:28.6814284, longitude:77.2226866},
    {value:'Punjabi Bagh', viewValue:'Punjabi Bagh', latitude:28.6619753, longitude:77.1241557},
    {value:'Najafgarh', viewValue:'Najafgarh', latitude:28.6090126, longitude:76.9854526},
    {value:'Saraswati Vihar', viewValue:'Saraswati Vihar', latitude:28.6964967, longitude:77.1250482},
    {value:'Mukarba Chowk', viewValue:'Mukarba Chowk', latitude:28.7372, longitude:77.1603},
    {value:'Seelampur', viewValue:'Seelampur', latitude:28.6640177, longitude:77.2711557},
    {value:'Gurugram', viewValue:'Gurugram', latitude:28.4595, longitude:77.0266},
    {value:'Noida', viewValue:'Noida', latitude:28.5355, longitude:77.3910}
  ];
  selectedValue: string = '';
  msg: string;
  error: string;
  dispMessage: boolean = false;
  dispError: boolean = false;
  dispTable: boolean = false;
  placesOver = [];

  settings = {
    columns: {
      Hour: {
        title: 'Hour',
        sort: true,
        width: '20%'
      },
      CurrSpeed: {
        title: 'Average Speed (kmph)',
        sort: true,
        width: '20%'
      },
      Congestion: {
        title: 'Congestion %age',
        sort: true,
        width: '20%'
      }
    },
    hideSubHeader: true,
    actions: {
      add: false,
      edit: false,
      delete: false
    },
    pager: {
      display: false
    }
  };

  /**
   * Fetch the data from the python-flask backend
   */
  public getData() {
    if(this.selectedValue != ''){
      this.msg = 'Loading Data...';
      this.dispMessage = true;
      this.dispError = false;
      this.dispTable = false;
      let body = {
        location: this.selectedValue
      }; 
      this.webservice.getDataFromBackend(body)
      .subscribe(
        (data) => {
          this.dispMessage = false;
          this.dispError = false;
          this.dispTable = true; 
          this.handleData(data);
        },
        (err) => {
          this.error = 'Server Error: Unable to fetch data';
          this.dispMessage = false;
          this.dispError = true;
          this.dispTable = false;
        }
      );
    }
    else{
      this.error = 'Please select a Location';
      this.dispMessage = false;
      this.dispError = true;
      this.dispTable = false;
    }
  }

  private handleData(data: any){
    let x = [];
    for(let key of Object.keys(data)){
      x.push(data[key]);
    }
    this.source.load(x);
  }
}
