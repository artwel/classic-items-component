import {Component, OnInit} from '@angular/core';
import {Item, ItemsService} from '../../../generated-sources/openapi';
import {Config} from '../../environments/config';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  items: Item[];
  wowHeadBaseUrl;

  constructor(private itemsService: ItemsService, private translateService: TranslateService) {
    this.setWowHeadLangParameter(this.translateService.currentLang);
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => this.setWowHeadLangParameter(event.lang));
  }

  ngOnInit(): void {
    this.loadData();
  }

  updateItem(target: any) {
    console.log('update item', target);
    this.itemsService.setOwn(target.id, target.own).subscribe();
  }

  private loadData() {
    this.itemsService.findItems().subscribe((items: Item[]) => {
      this.items = items;
    });
  }

  private setWowHeadLangParameter(lang: string) {
    this.wowHeadBaseUrl = Config.urls.wowHead.replace(':lang', lang);
  }

}
