import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../_service/authentication.service';
import { AlertService } from '../_service/alert.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  returnUrl: string;
  loading = false;
  submitted = false;
  error = '';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
    
    ) { 
      if (this.authenticationService.currentUserValue) { 
            this.router.navigate(['/']);
        } }

  ngOnInit()
  {
    this.loginForm = this.formBuilder.group({
      idEmp: ['', Validators.required],
      password: ['', Validators.required]
  });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.loginForm.controls; }

  
  onSubmit() {
    this.submitted = true;
    this.loading = true;
    this.authenticationService.login(this.f.idEmp.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
}

}
