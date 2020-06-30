import { Component, OnInit } from '@angular/core';
declare var $;
declare global {
  interface Window {
    initDrag;
  }
}
// import * as $ from "jquery";

@Component({
  selector: 'app-pin-map',
  templateUrl: './pin-map.component.html',
  styleUrls: ['./pin-map.component.scss']
})
export class PinMapComponent implements OnInit {
  defaultHref='/inspector/my-duties/1';

  constructor() { }

  ngOnInit() {

  }

}
