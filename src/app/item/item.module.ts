import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {ItemComponent} from './item.component';
import {ItemGridComponent} from './item-grid/item-grid.component';
import {TranslationModule} from '../translate/translation.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ItemFilterComponent } from './item-filter/item-filter.component';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ItemComponent,
    ItemGridComponent,
    ItemFilterComponent,
  ],
  imports: [
    CommonModule,
    TranslationModule,
    MatTableModule,
    MatCheckboxModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  exports: [
    ItemComponent,
  ]
})
export class ItemModule {
}
