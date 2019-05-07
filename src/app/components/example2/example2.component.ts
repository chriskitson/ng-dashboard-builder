import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.scss']
})
export class Example2Component implements OnInit {

  @Input() aValue: string;

  constructor() { }

  ngOnInit() {
    console.log(this.aValue);
  }

}
