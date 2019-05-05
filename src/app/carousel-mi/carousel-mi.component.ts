import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-carousel-mi',
  templateUrl: './carousel-mi.component.html',
  styleUrls: ['./carousel-mi.component.css']
})
export class CarouselMIComponent implements OnInit {

  constructor(public ass : ApiService) {
    
   }
   bcd;
  ngOnInit() {
    this.ass.getApi().subscribe(abc =>{
    console.log(abc);
    this.bcd = abc['data'];
    })
   
  }
  active(k){
    if (k == 0){
      return "active";
    }
  }
  sl(v){
    if (v === 4){
      return "c.subCategories";
    }
    else {
      return "c.Services";
    }
  }
  
  
}
