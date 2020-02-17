import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ItemModule} from './item/item.module';
import {TranslationModule} from './translate/translation.module';
import {BASE_PATH} from '../../generated-sources/openapi';
import {Config} from '../environments/config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslationModule,
    ItemModule,
  ],
  providers: [
    {provide: BASE_PATH, useValue: Config.urls.backend}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
