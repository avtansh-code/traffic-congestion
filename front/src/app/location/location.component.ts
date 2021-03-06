import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AuthenticationService } from '../authentication';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar';
import { WebService } from '../webservices';

@Component({
  selector: 'location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
  providers: [WebService, AuthenticationService]
})
export class LocationComponent implements OnInit, OnDestroy {

  @Input('index') index: number;
  @Input('type') type: string;

  current: boolean = false;
  selectedValue: string;
  graphType: string;
  msg: string;
  error: string;
  dispMessage: boolean = false;
  dispError: boolean = false;
  dispTable: boolean = false
  congResults = [];
  speedResults = [];
  cong_threshold: number;
  freeflow_speed: number;
  current_speed: number;
  congestion_value: number;
  congType: string;

  constructor(private http: Http, private router: Router, private webservice: WebService) {
  }


  places = [
    {value:'Hauz Khas', latitude:28.5494459, longitude:77.2001368},
    {value:'Model Town', latitude:28.7158727, longitude:77.1910738},
    {value:'Civil Lines', latitude:28.6814284, longitude:77.2226866},
    {value:'Punjabi Bagh', latitude:28.6619753, longitude:77.1241557},
    {value:'Najafgarh', latitude:28.6090126, longitude:76.9854526},
    {value:'Saraswati Vihar', latitude:28.6964967, longitude:77.1250482},
    {value:'Mukarba Chowk', latitude:28.7372, longitude:77.1603},
    {value:'Seelampur', latitude:28.6640177, longitude:77.2711557},
    {value:'Gurugram', latitude:28.4595, longitude:77.0266},
    {value:'Noida', latitude:28.5355, longitude:77.3910}
  ];

  public ngOnInit() {
    this.webservice.isAuthenticated();
  }

  ngOnChanges(){
    this.graphType = this.type;
    if(this.type === "overview"){
      this.graphType = "Overview"
    }
    else if(this.type === "monthly"){
      let today = new Date();
      let end_date = today.toLocaleDateString();
      let start = new Date();
      start.setDate(today.getDate() - 30);
      let start_date  = start.toLocaleDateString();
      this.graphType = start_date + " to " + end_date;
    }
    else if(this.type === "weekly"){
      let today = new Date();
      let end_date = today.toLocaleDateString();
      let start = new Date();
      start.setDate(today.getDate() - 7);
      let start_date  = start.toLocaleDateString();
      this.graphType = start_date + " to " + end_date;
    }
    else if(this.type === "daily"){
      let today = new Date();
      let date = today.toLocaleDateString();
      this.graphType = date;
    }
    else{
      this.graphType = "Current Traffic Status"
      this.current = true;
    }
    console.log(this.graphType);
    this.selectedValue = this.places[this.index].value;
    this.getData();
  }

  public ngOnDestroy() {
    console.log('destroyed');
  }

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
       location: this.selectedValue,
       type: this.type
     }; 
     this.webservice.getDataFromBackend(body)
     .subscribe(
       (data) => {
         this.congResults = [];
         this.speedResults = [];
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
   console.log(data);
   if(!this.current){
    this.cong_threshold = data[0]['Threshold'];
    this.freeflow_speed = data[0]['NormSpeed'];
    console.log(this.freeflow_speed);
    for(let key of Object.keys(data)){
      let val1 ={
        'name': data[key]['Hour'],
        'value': data[key]['Congestion']
      }
      let val2 ={
        'name': data[key]['Hour'],
        'value': data[key]['CurrSpeed']
      }
      this.congResults.push(val1);
      this.speedResults.push(val2);
    }
   }
   else{
     this.freeflow_speed = data['normSpeed'];
     this.current_speed = data['currSpeed'];
     this.congestion_value = data['congestion'];
     this.congType = data['congType'];
   }
 }

 view: any[] = [600, 400];
 
 // options
 showXAxis = true;
 showYAxis = true;
 gradient = false;
 showLegend = false;
 showXAxisLabel = true;
 xAxisLabel = 'Time of Day';
 showYAxisLabel = true;
 yAxisLabel1 = 'Congestion Percentage';
 yAxisLabel2 = 'Average Speed (kmph)';

}
