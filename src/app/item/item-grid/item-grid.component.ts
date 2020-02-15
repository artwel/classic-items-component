import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from '../../../../generated-sources/openapi';

@Component({
  selector: 'app-item-grid',
  templateUrl: './item-grid.component.html',
  styleUrls: ['./item-grid.component.scss']
})
export class ItemGridComponent implements OnInit {

  @Input() items: Item[];
  @Input() wowHeadBaseUrl: string;
  displayedColumns: string[] = ['slot', 'name', 'wowHeadId'];

  constructor() {
  }

  ngOnInit(): void {
  }

  getTargetUrl(prefix: string, id: number) {
    return this.wowHeadBaseUrl + '/' + prefix + '=' + id;
  }

}
