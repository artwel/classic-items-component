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

  displayedColumns: string[] = ['slot', 'name', 'source', 'target', 'own'];

  constructor() {
  }

  ngOnInit(): void {
  }

  onOwnClick(id: number, event: MatCheckboxChange) {
    this.ownChange.emit({id, own: event.checked});
  }

  getTargetUrl(type: string, id: number) {
    return this.wowHeadBaseUrl + '/' + this.getPrefixByType(type) + '=' + id;
  }

  private getPrefixByType(type): string {
    let result;
    switch (type) {
      case 'DUNGEON':
      case 'WORLDBOSS':
        result = 'npc';
        break;
      case 'item':
      case 'PROFESSION':
        result = 'item';
        break;
      case 'QUEST':
        result = 'quest';
        break;
      case 'CONTAINER':
        result = 'object';
        break;
      default:
        result = null;
    }
    return result;
  }

}
