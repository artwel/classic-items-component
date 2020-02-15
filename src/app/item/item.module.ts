import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {ItemComponent} from './item.component';
import {ItemGridComponent} from './item-grid/item-grid.component';
import {TranslationModule} from '../translate/translation.module';

@NgModule({
  declarations: [
    ItemComponent,
    ItemGridComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    TranslationModule
  ],
  exports: [
    ItemComponent,
  ]
})
export class ItemModule {
}
