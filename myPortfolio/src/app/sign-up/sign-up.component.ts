import { getLocaleDayNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'
import { User } from '../user.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  signUpRef = new FormGroup({
    fName:new FormControl(),
    lName:new FormControl(),
    email:new FormControl(),
    pass:new FormControl()
  });

  addUser(){
    let newUser = new User(this.signUpRef.get("fName")?.value,
                           this.signUpRef.get("lName")?.value,
                           this.signUpRef.get("email")?.value,
                           this.signUpRef.get("pass")?.value);
    newUser.add(newUser);
    this.router.navigate(["log-in"]);
  }

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

}
