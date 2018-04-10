import { Component, OnInit, OnDestroy, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Http, Response } from '@angular/http';
import { AuthenticationService } from '../authentication';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar';
import { WebService } from '../webservices';

@Component({
  selector: 'future',
  templateUrl: './future.component.html',
  styleUrls: ['./future.component.css'],
  providers: [WebService, AuthenticationService]
})
export class FutureComponent implements OnInit, OnDestroy{

  @Input('index') index: number;

  selectedValue: string;
  msg: string;
  error: string;
  dispMessage: boolean = false;
  dispError: boolean = false;
  dispTable: boolean = true;
  congResults = [];
  speedResults = [];
  cong_threshold: number = 25;
  congestion_value: number = 0.0;
  congType: string;
  date: string;
  hour: string;
  showCong: boolean = false;


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
    this.selectedValue = this.places[this.index].value;
    this.webservice.isAuthenticated();
  }

  public ngOnDestroy() {
    console.log('destroyed');
  }

  private getCong(){
    this.showCong = true;
    this.openDialog();
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '400px',
      data: { congestion: this.congestion_value, threshold: this.cong_threshold }
    });
  }
}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialogue.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}