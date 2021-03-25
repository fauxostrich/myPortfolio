import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  uName = sessionStorage.getItem("user");
  portRef = new FormGroup({
    name:new FormControl(),
    phone:new FormControl()
  });
  

  submit()
  {
    let contactName = this.portRef.get("name")?.value;
    let contactPhone= this.portRef.get("phone")?.value;

    var table = document.getElementById("contactTable");
    var body = table?.getElementsByTagName("tbody")[0];
    var newR = body?.insertRow();
    var cell1 = newR?.insertCell(0);
    var cell2 = newR?.insertCell(1)
    var newName = document.createTextNode(contactName);
    var newPhone = document.createTextNode(contactPhone);
    cell1?.appendChild(newName);
    cell2?.appendChild(newPhone);
  }
  reroute()
  {
    this.router.navigate(["log-in"]);
  }
  constructor(public router:Router) {}


  ngOnInit(): void {
  }

}
