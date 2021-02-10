import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ApirequestService } from 'src/app/common/apirequest.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    private apirequestService: ApirequestService,
  ) {
  }

  async ngOnInit() {
    if (localStorage.getItem('accessToken')) {
      this.router.navigate(['event-list']);
    }

    this.form = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
  }

  async onSubmit() {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      const firstname = this.form.get('firstname').value;
      const lastname = this.form.get('lastname').value;
      const email = this.form.get('email').value;
      const password = this.form.get('password').value;
      const userdata = { firstname, lastname, email, password }
      const res: any = await this.apirequestService.handlesignup(userdata);
      let snackBarRef = this._snackBar.open(res.message);

      setTimeout(() => {
        snackBarRef.dismiss();
        this.router.navigate(['login']);
      }, 1000);
      this.formSubmitAttempt = false;
      this.loginInvalid = false;
    } else {
      this.formSubmitAttempt = true;
    }
  }

}
