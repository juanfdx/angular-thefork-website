import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  usuarios : Array<any> = []

  profileForm = this.fb.group({

    firstName : [ '', [ Validators.required, Validators.minLength(3) ]],
    lastName  : [ '', [ Validators.required, Validators.minLength(3) ]],
    email     : [ '', [ Validators.required, Validators.email ]],
    code      : [ '' ],
    phone     : [ '', [ Validators.required, Validators.minLength(9), Validators.maxLength(12) ]],
    check     : [ true, Validators.requiredTrue ]

  })

  constructor( private fb : FormBuilder ) { }

  ngOnInit(): void {
  }

  enviarForm(): void {
    console.log(this.profileForm.value);
    
  }
}
