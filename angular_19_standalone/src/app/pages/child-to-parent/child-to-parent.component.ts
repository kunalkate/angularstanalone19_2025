import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-to-parent',
  imports: [  ],
  templateUrl: './child-to-parent.component.html',
  styleUrl: './child-to-parent.component.scss'
})
export class ChildToParentComponent {
  @Output() childToParent=new EventEmitter<String>();

}
