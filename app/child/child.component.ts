import { Component, OnInit, Input, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
 @Input() name="tulasi"
//  change() { 
//    this.name
//    console.log();
   
//  }
 
 constructor() { }

  ngOnChanges(changes:SimpleChange):any{
    for(let propName in changes){
      let change=changes[propName];
      console.log("change", change);
      // let currentVal= JSON.stringify(changes.currentValue);
      let currentVal=changes['name'].currentValue
      console.log("currentValue", currentVal);
      // let prevVal= JSON.stringify(changes.previousValue);
      let prevVal=changes['name'].previousValue
      console.log("prevVal", prevVal);
     
    }
 
  }

  ngOnInit() {
    console.log('i ngOnInit!');
  } 

  ngDoCheck(){
   console.log('ngDoCheck listen', this.name);
         
    }
    ngAfterContentInit(){
      console.log('Parent Content Init------------------', this.name);
    }
    ngAfterContentChecked(){
      console.log('Parent Content Checked------------------', this.name);
    }
    ngAfterViewInit(){
      console.log('Parent View Init------------------', this.name);
    }
    ngAfterViewChecked(){
      console.log('Parent View Checked------------------', this.name);
    }



  }


