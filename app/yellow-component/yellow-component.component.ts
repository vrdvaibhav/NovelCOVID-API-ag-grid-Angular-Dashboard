import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yellow-component',
  templateUrl: './yellow-component.component.html',
  styleUrls: ['./yellow-component.component.css']
})
export class YellowComponentComponent {

  private params: any;

  constructor() { }

  agInit(params: any): void {
      this.params = params;
  }
}