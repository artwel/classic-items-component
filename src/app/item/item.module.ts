import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {ItemComponent} from './item.component';
import {ItemGridComponent} from './item-grid/item-grid.component';
import {TranslationModule} from '../translate/translation.module';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    ItemComponent,
    ItemGridComponent,
  ],
  imports: [
    CommonModule,
    TranslationModule,
    MatTableModule,
    MatCheckboxModule
  ],
  exports: [
    ItemComponent,
  ]
})
export class ItemModule {
}
