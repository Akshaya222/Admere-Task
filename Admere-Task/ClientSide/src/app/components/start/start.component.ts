import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor( private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  movetohome(){
    console.log("gotohome")
    this.router.navigate(['/home'],{relativeTo:this.activatedRoute});
  }

}
