import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-parent-to-child',
  imports: [ChildComponent],
  templateUrl: './parent-to-child.component.html',
  styleUrl: './parent-to-child.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ParentToChildComponent {

  parentdata="This data comes from the parent......."
}
