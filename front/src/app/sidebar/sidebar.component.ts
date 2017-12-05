import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from '../authentication';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [AuthenticationService]
})
export class SidebarComponent implements OnInit, OnDestroy {

    constructor(private authService: AuthenticationService) { }
    
    public logout() {
        this.authService.logout();
    }

    public ngOnInit() {}

    public ngOnDestroy() {
        console.log('destroyed');
    }

    locationIndex = 0;

    changeLocation(loc: number):void{
        this.locationIndex = loc;
    }

    public inputLogo = 'assets/img/traffic.jpg';

    places = ['Hauz Khas','Model Town', 'Civil Lines','Punjabi Bagh','Najafgarh', 'Saraswati Vihar', 'Mukarba Chowk', 'Seelampur', 'Gurugram', 'Noida'];
}
