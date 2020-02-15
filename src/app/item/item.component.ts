import { Component, OnInit } from '@angular/core';
import {Item, ItemsService} from '../../../generated-sources/openapi';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  items: Item[];

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    this.itemsService.findItems().subscribe((items: Item[]) => {
      this.items = items;
    });
  }

}
