import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-mail',
    templateUrl: './mail.component.html',
    styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {
    mailForm: any = FormGroup;


    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.mailForm = this.formBuilder.group({
            mailTo: ['', [Validators.required]],
            mailCc: [''],
            mailSub: ['', [Validators.required]],
            mailBody: ['', [Validators.required]],
        });
    }

    get formControl() {
        return this.mailForm.controls;
    }

    sendMail() { 
        
    }

}