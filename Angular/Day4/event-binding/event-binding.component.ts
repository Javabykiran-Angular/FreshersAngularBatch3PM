import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  result:number=0;
  res:number=0;
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    console.log("Click Event is occur...");
  }
  onImageClick(){
    console.log("Click on image occur....");
  }

  onClick1(event){
    console.log(event);
    console.log(event.target.value);
   
  }

  onSend(input){
    console.log(input);
    console.log("Data is ... "+input.value);

  }
  onSend1(input,value){
        console.log("Data  "+value);
        input.style.background='green';
        input.style.color='white';
    
  }

  OnAddition(num1,num2){
    this.res=(+num1)+(+num2);
  }

  onChange(){
    console.log("Change event occur!!!!");
  }

  onKeyUp(){
    console.log("Key up Event Occur...");
  }
  onKeyDown(){
    console.log("Key Down Event Occur...");
  }

}
