import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  Heroes: Array<any>=[{id:12,name:'Narco'},
                      {id:13,name:'Bombasto'},
                      {id:14,name:'Celeritas'},
                      {id:15,name:'Magneta'}];
  hero: Array<any>=[
    {id:11,name:'Mr.Nice'},
    {id:12,name:'Narco'},
    {id:13,name:'Bombasto'},
    {id:14,name:'Celeritas'},
    {id:15,name:'Magneta'},
    {id:16,name:'Rubberman'},
    {id:17,name:'Dynama'},
    {id:18,name:'Dr.IQ'},
    {id:19,name:'Magma'},
    {id:20,name:'Tornado'},
  ]
  listId: number;
  listName: string='';
  showwing: boolean=true;
    constructor(private myRoute: ActivatedRoute) { }   

  ngOnInit() {
    this.initData();
  }
  initData(){
    this.listName=this.myRoute.snapshot.params['name'];
    this.listId=this.myRoute.snapshot.params['id'];
    // console.log(this.listName);
    // console.log(this.listId);
    for(var i=0;i<this.hero.length;i++){
      if(this.hero[i].id==this.listId){
        this.hero[i].name=this.listName;
        // console.log(this.hero);
      }
    }
    for(var i=0;i<this.Heroes.length;i++){
      if(this.Heroes[i].id==this.listId){
        this.Heroes[i].name=this.listName;
      }
    }
  }
  isShow(){
    this.showwing==true?this.showwing=false:this.showwing=true;
  }
}
