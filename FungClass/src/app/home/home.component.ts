import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HOMEComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myimage:string = "/assets/Pozadina.jpg"

  button=GamepadButton;

}
