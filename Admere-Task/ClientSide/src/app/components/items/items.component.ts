import { Component, OnInit } from '@angular/core';
import {VendorService} from '../../services/vendor.service';
import {List} from '../../shared/list';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  listItems:List[];
  constructor(private vendorService:VendorService) { }

  ngOnInit(): void {
      this.vendorService.getItems().subscribe(data=>this.listItems=data['msg'],
      error=>console.log(error));
  }

}
