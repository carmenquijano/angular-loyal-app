import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  submitForm(form:any) : void {
    //console.log(form.form.controls.email.value);
    if(!form.form.valid)
    {
      window.alert('ERROR');
      return;
    }
    //invocación
    console.log(form.form.controls.email.value);
  }
}
