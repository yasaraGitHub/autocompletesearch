import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-componenet',
  templateUrl: './child-componenet.component.html',
  styleUrls: ['./child-componenet.component.scss']
})
export class ChildComponenetComponent implements OnInit {

  @Input() public parentData;

  constructor() { }

  ngOnInit() {
  }

}
