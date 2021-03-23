import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  agentLoginform: any = FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.agentLoginform = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    // if(this.accountService.userValue){
    //   this.accountService.flushUserdetails();
    //  }
    
    // this.submitted = true;

    // this.alertService.clear();

    if (this.agentLoginform.invalid) {
        return;
    }

    // this.loading = true;
    // this.agentService.login(this.agentLoginform.value)
    //     .subscribe(data=>{
    //         const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    //         this.router.navigate(['/agent/dashboard']);
    //       },
    //       (error: HttpErrorResponse)=>{
    //         this.unauthorised = true;
    //         this.alertService.error(error.error);
    //         this.loading = false;
    //       });
    //     }
        this.router.navigate(['/agent/dashboard']);
  }

}
