import { Component } from '@angular/core';

// FormGroup is often used to organize and manage the controls within a form

// FromControl represents a single form control element, like an input field
// or a checkbox. we use them to define the behavior and validationn rules for individual form elements 
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {

  // BELOW IS JUST A VERY SIMPLE WAY OF SAVING AND DISPLAYING LOCALSTORAGE
  
  // we declare a property name called myId
  // the '!' is used to indicate that this property can be initialiazed later (like null)
  // 'any' means the property can hold any value of any type
  myform!: any;

  ngOnInit() {
    this.myform = new FormGroup({
      username : new FormControl(''),
      emailAddress : new FormControl(''),
      message : new FormControl('')
    });
  }

  onSubmit() {
    localStorage.setItem("formdata", JSON.stringify(this.myform.value));
  }

  




  

}
