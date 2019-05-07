import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.scss']
})
export class Example1Component implements OnInit {

  @Input() aValue: string;

  constructor() { }

  ngOnInit() {
  }

}
