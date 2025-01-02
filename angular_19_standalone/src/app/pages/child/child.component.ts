import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnInit  {
@Input() childData: any;

ngOnInit(){
  console.log("Child Component Data: ", this.childData);  // This will log the data received from parent component.
}
}
