import { Component, OnInit } from '@angular/core';
import Utils from "../utils";

@Component({
  selector: 'app-minutes-input',
  templateUrl: './minutes-input.component.html',
  styleUrls: ['./minutes-input.component.scss']
})
export class MinutesInputComponent implements OnInit {
  Utils = Utils;

  constructor() { }

  ngOnInit(): void {
  }

}
