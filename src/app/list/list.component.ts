import { Component } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  items : Item[] = [];

  constructor() {}

  ngOnInit() : void {
    this.items = [
      {
        id : 0,
        title : 'manzana',
        price : 10.5,
        quantity : 4,
        completed : false
      },
      {
        id : 1,
        title : 'pan',
        price : 3.5,
        quantity : 8,
        completed : true
      }
    ]
  }

  delete(item : Item) : void {
    this.items = this.items.filter(x => x.id != item.id);
  }
}
