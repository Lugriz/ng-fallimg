import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgFallimgModule } from '../../projects/ng-fallimg/src/public_api';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgFallimgModule.forRoot({
      default: 'assets/angular.png',
      angular:  'assets/angular.png',
      nothing: '',
      invalid: 'adsda'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
