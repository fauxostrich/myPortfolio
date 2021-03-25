import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'
import { User } from '../user.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  logInRef = new FormGroup({
    email: new FormControl(),
    pass:new FormControl()
  });
  constructor(public router:Router) {}
  authenticate():boolean { 
    
    let loginEmail = this.logInRef.get("email")?.value;
    let loginPass = this.logInRef.get("pass")?.value;
    for(let userObj of User.allUsers)
    {
      if (userObj.email === loginEmail &&
          userObj.pass === loginPass )
          {
            sessionStorage.setItem("user", userObj.fName);
            this.router.navigate(["portfolio"])
            return true;
            break;
          }
    }
    alert("Email or Password was incorrect. Please try again.");
    return false;
  }

  reroute() {this.router.navigate(["sign-up"]);} 

  ngOnInit(): void {}

}
