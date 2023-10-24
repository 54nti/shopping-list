import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() item : Item = new Item();
  @Output() delete : EventEmitter<Item> = new EventEmitter();

  onDelete(item : Item) : void {
    this.delete.emit(item);
  }
}
