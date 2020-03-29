import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-green-component',
  templateUrl: './green-component.component.html',
  styleUrls: ['./green-component.component.css']
})
export class GreenComponentComponent implements OnInit {

  private params: any;
  constructor() { }

  ngOnInit() {
  }

    agInit(params: any): void {
        this.params = params;
    }

}