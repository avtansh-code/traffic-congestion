import { Component, OnInit, OnDestroy, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
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
  future: boolean = false;
  past: boolean = true;
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
  date: string;
  hour: string;
  trafficData;

  constructor(private http: Http, private router: Router, private webservice: WebService, public dialog: MatDialog) {
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

  hours = [
    {value: 0, hour: '00:00 - 01:00'},
    {value: 1, hour: '01:00 - 02:00'},
    {value: 2, hour: '02:00 - 03:00'},
    {value: 3, hour: '03:00 - 04:00'},
    {value: 4, hour: '04:00 - 05:00'},
    {value: 5, hour: '05:00 - 06:00'},
    {value: 6, hour: '06:00 - 07:00'},
    {value: 7, hour: '07:00 - 08:00'},
    {value: 8, hour: '08:00 - 09:00'},
    {value: 9, hour: '09:00 - 10:00'},
    {value: 10, hour: '10:00 - 11:00'},
    {value: 11, hour: '11:00 - 12:00'},
    {value: 12, hour: '12:00 - 13:00'},
    {value: 13, hour: '13:00 - 14:00'},
    {value: 14, hour: '14:00 - 15:00'},
    {value: 15, hour: '15:00 - 16:00'},
    {value: 16, hour: '16:00 - 17:00'},
    {value: 17, hour: '17:00 - 18:00'},
    {value: 18, hour: '18:00 - 19:00'},
    {value: 19, hour: '19:00 - 20:00'},
    {value: 20, hour: '20:00 - 21:00'},
    {value: 21, hour: '21:00 - 22:00'},
    {value: 22, hour: '22:00 - 23:00'},
    {value: 23, hour: '23:00 - 00:00'}
  ];

  public ngOnInit() {
    this.webservice.isAuthenticated();
  }

  ngOnChanges(){
    this.graphType = this.type;
    if(this.type === "overview"){
      this.graphType = "Overview";
      this.past = true;
      this.future = false;
      this.current = false;
    }
    else if(this.type === "monthly"){
      let today = new Date();
      let end_date = today.toLocaleDateString();
      let start = new Date();
      start.setDate(today.getDate() - 30);
      let start_date  = start.toLocaleDateString();
      this.graphType = start_date + " to " + end_date;
      this.past = true;
      this.future = false;
      this.current = false;
    }
    else if(this.type === "weekly"){
      let today = new Date();
      let end_date = today.toLocaleDateString();
      let start = new Date();
      start.setDate(today.getDate() - 7);
      let start_date  = start.toLocaleDateString();
      this.graphType = start_date + " to " + end_date;
      this.past = true;
      this.future = false;
      this.current = false;
    }
    else if(this.type === "daily"){
      let today = new Date();
      let date = today.toLocaleDateString();
      this.graphType = date;
      this.past = true;
      this.future = false;
      this.current = false;
    }
    else if(this.type === "current"){
      this.graphType = "Current Traffic Status";
      this.past = false;
      this.future = false;
      this.current = true;
    }
    else{
      this.graphType = "Future Traffic Predictions";
      this.past = false;
      this.future = true;
      this.current = false;
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
         this.trafficData = data;
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

 download_csv(): void{
   console.log("Download");
   let file: string = 'Hour, Average Speed, Congestion,\n';
   for(let key of Object.keys(this.trafficData)){
     let hours = this.trafficData[key]['Hour'] + ' to ' + (this.trafficData[key]['Hour']+1);
     file = `${file}${hours},${this.trafficData[key]['CurrSpeed']},${this.trafficData[key]['Congestion']}\n`
   }
   console.log(file);
   this.downloadAction(file);
 }

 downloadAction(logs:string):void{
  let uri = 'data:text/html;charset=utf-8,' + encodeURIComponent(logs);
  let downloadLink = document.createElement("a");
  downloadLink.setAttribute("href", uri);
  let today = new Date();
  let date = today.toLocaleDateString();
  console.log(date);
  let name:string = this.places[this.index].value+'_'+this.type+'_'+date+'.csv';
  downloadLink.setAttribute("download", name);
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}


 private getCong(){
  if(this.selectedValue != ''){
    this.msg = 'Loading Data...';
    this.dispMessage = true;
    this.dispError = false;
    this.dispTable = false;
    let body = {
      location: this.selectedValue,
      date: this.date,
      hour: this.hour
    }; 
    this.webservice.getFutureDataFromBackend(body)
    .subscribe(
      (data) => {
        this.dispMessage = false;
        this.dispError = false;
        this.dispTable = true; 
        this.handleFutureData(data);
        this.openDialog();
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

private handleFutureData(data: any){
  console.log(data);
  this.congestion_value = data['Congestion'];
  this.cong_threshold = data['Threshold'];
}

openDialog(): void {
  let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    width: '400px',
    data: { 
      congestion: this.congestion_value, 
      threshold: this.cong_threshold,
      date: this.date,
      hour: this.hours[this.hour].hour 
    }
  });
  dialogRef.afterClosed().subscribe(result => {
    this.date = "";
    this.hour = "";
  });
}

 view: any[] = [600, 350];
 
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


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialogue.html',
  styleUrls: ['./location.component.css']
})
export class DialogOverviewExampleDialog {
  cong_status: boolean;
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(){
    if(this.data.congestion === "Yes"){
      this.cong_status = true;
    }
    else{
      this.cong_status = false;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}