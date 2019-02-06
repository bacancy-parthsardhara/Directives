import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  flag : boolean = false;
  buttonValue = [
    {id: 1, name:'Emp 1'},
    {id: 2, name:'Emp 2'},
    {id: 3, name:'Emp 3'},
  ];

  Number: number;
  constructor() { }

  value(a) {
    this.flag =true;
    this.Number = a;
  }

  ngOnInit() {
  }


}
