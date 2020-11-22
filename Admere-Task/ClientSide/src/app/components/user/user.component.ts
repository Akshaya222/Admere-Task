import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor( private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  movetologin(){
    console.log("go to login")
    this.router.navigate(['/user/login'],{relativeTo:this.activatedRoute});
  }

}
