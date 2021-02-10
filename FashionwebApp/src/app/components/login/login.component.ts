import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ApirequestService } from 'src/app/common/apirequest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;
  hide = true;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private apirequestService: ApirequestService,
  ) {
  }

  async ngOnInit() {
    if (localStorage.getItem('accessToken')) {
      this.router.navigate(['event-list']);
    }
    this.form = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
  }

  async onSubmit() {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      // try {
      const email = this.form.get('email').value;
      const password = this.form.get('password').value;
      const userdata = { email, password }
      const res: any = await this.apirequestService.handleLogin(userdata);
      await this.authService.login(res.accessToken, res);
      this.formSubmitAttempt = false;
      this.loginInvalid = false;
    } else {
      this.formSubmitAttempt = true;
      this.loginInvalid = true;
    }
  }

}
