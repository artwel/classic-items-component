import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from '../../../../generated-sources/openapi';
import {MatCheckboxChange} from '@angular/material/checkbox';

@Component({
  selector: 'app-item-grid',
  templateUrl: './item-grid.component.html',
  styleUrls: ['./item-grid.component.scss']
})
export class ItemGridComponent implements OnInit {

  @Input() items: Item[];
  @Input() wowHeadBaseUrl: string;
  @Output() ownChange: EventEmitter<any> = new EventEmitter<any>();

  displayedColumns: string[] = ['slot', 'name', 'own'];

  constructor() {
  }

  ngOnInit(): void {
  }

  onOwnClick(id: number, event: MatCheckboxChange) {
    this.ownChange.emit({id, own: event.checked});
  }

  getTargetUrl(prefix: string, id: number) {
    return this.wowHeadBaseUrl + '/' + prefix + '=' + id;
  }

}
