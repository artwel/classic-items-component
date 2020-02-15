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
    this.wowHeadBaseUrl = Config.urls.wowHead.replace('{:lang}', this.translateService.currentLang);
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.wowHeadBaseUrl = Config.urls.wowHead.replace('{:lang}', event.lang);
    });
  }

  ngOnInit(): void {
    this.loadData();
  }

  goToWowHead(prefix: string, id: number) {
    window.open(`${this.wowHeadBaseUrl}/${prefix}=${id}`);
  }

  private loadData() {
    this.itemsService.findItems().subscribe((items: Item[]) => {
      this.items = items;
    });
  }

}
