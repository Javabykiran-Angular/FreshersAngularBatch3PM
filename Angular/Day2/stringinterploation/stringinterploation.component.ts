import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stringinterploation',
  templateUrl: './stringinterploation.component.html',
  styleUrls: ['./stringinterploation.component.css']
})
export class StringinterploationComponent implements OnInit {

  name:string='Sumit Raokhande';
  flag:boolean=true;
  imageurl:string='../../assets/Desert.jpg';
  
  constructor() { }

  ngOnInit() {
  }

}
