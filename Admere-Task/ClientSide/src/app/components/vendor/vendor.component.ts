import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  constructor( private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  movetologin(){
    console.log("gotologin")
    this.router.navigate(['/vendor/login'],{relativeTo:this.activatedRoute});
  }
}
