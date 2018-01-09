import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor(private myLocation:Location) { }

  ngOnInit() {
  }
  toBack(){
    this.myLocation.back();
  }
}
