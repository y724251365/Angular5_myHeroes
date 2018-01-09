import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  showwing: boolean=true;
  heroName: string='';
  lid: number;
  lname: string;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.lid=this.route.snapshot.params['id'];
    this.lname=this.route.snapshot.params['name'];
  }
  isShow(){
    this.showwing==true?this.showwing=false:this.showwing=true;
  }
  toBackMain(){
    this.router.navigate(['/main',{id:this.lid,name:this.heroName}]);
  }
}
