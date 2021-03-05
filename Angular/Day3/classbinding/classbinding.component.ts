import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  templateUrl: './classbinding.component.html',
  styleUrls: ['./classbinding.component.css']
})
export class ClassbindingComponent implements OnInit {

  myclass:string="success";
  rating:number=21;
  iserror:boolean=false;
  objClass={
    "success":this.iserror,
    "warning": !this.iserror,
    "special":true
  }

  constructor() { }

  ngOnInit() {
  }

}
