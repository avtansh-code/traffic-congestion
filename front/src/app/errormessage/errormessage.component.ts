import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }
from '@angular/forms';

class Email {
  constructor(public emailAddress: string) {
  }
}

@Component({
  selector: 'app-error-message',
  templateUrl: './errormessage.component.html',
  styleUrls: ['./errormessage.component.css']
})
export class ErrorMessageComponent {
  public inputLogo = 'assets/img/angularclass-logo.png';
  public textmessage: string = 'Forgot your password ?';
  public emailModel: Email = new Email('');
  public form;

  constructor(private router: Router) {
    let group: any = {};
    group.email = new FormControl('', Validators.required);
    group.type = new FormControl('forgotpass');
    this.form = new FormGroup(group);
  }

  public resetPassword() {
    console.log('Reset email is ', this.form.value['email']);
    this.textmessage = 'Reset successful, redirecting !';
    // setTimeout(function() {
    //   window.location.reload();
    // }, 2000);
  }

}
