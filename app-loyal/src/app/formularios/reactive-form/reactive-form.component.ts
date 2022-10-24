import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  loginForm: FormGroup = this.createForm();
  constructor(private formBuilder: FormBuilder) {
   }

  ngOnInit(): void {
  }

  createForm():FormGroup {
    return this.formBuilder.group(
      {
        username:['', Validators.required]
      }
    );
  }


  submitForm(form:any) : void {
    //console.log(form.form.controls.email.value);
    if(!form.valid)
    {
      window.alert('ERROR');
      return;
    }
    //invocación
    console.log(form.value.username);
  }

  hasError():boolean{
    return this.loginForm.invalid;
  }

}
