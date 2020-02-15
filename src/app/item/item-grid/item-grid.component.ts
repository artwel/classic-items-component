import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../../../generated-sources/openapi';

@Component({
  selector: 'app-item-grid',
  templateUrl: './item-grid.component.html',
  styleUrls: ['./item-grid.component.scss']
})
export class ItemGridComponent implements OnInit {

  @Input() items: Item[];
  displayedColumns: string[] = ['slot', 'name', 'wowHeadId'];

  constructor() { }

  ngOnInit(): void {
  }

}
