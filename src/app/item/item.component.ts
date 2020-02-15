import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Item, ItemsService} from '../../../generated-sources/openapi';
import {Config} from '../../environments/config';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {ItemFilterComponent} from './item-filter/item-filter.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements AfterViewInit {

  @ViewChild(ItemFilterComponent) filter: ItemFilterComponent;

  items: Item[];
  wowHeadBaseUrl;

  constructor(private itemsService: ItemsService, private translateService: TranslateService) {
    this.setWowHeadLangParameter(this.translateService.currentLang);
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => this.setWowHeadLangParameter(event.lang));
  }

  ngAfterViewInit(): void {
    this.loadData();
  }

  updateItem(target: any) {
    this.itemsService.setOwn(target.id, target.own).subscribe();
  }

  private loadData() {
    this.itemsService.findItems(
      this.filter.ownValue(),
      this.filter.slotValue()
    ).subscribe((items: Item[]) => this.items = items);
  }

  private setWowHeadLangParameter(lang: string) {
    this.wowHeadBaseUrl = Config.urls.wowHead.replace(':lang', lang);
  }

}
