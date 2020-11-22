import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  withoutLogin(){
    console.log("Continue without login")
    this.router.navigate(['/vendor/list'],{relativeTo:this.activatedRoute});
  }
  asUser(){
    this.router.navigate(['/user/login'],{relativeTo:this.activatedRoute});
  }
  asVendor(){
    this.router.navigate(['/vendor/login'],{relativeTo:this.activatedRoute});
  }

}
