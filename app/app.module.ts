import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './models/in-memory-data.service';

import { AppComponent }  from './app.component';

import { CommentComponent } from './ts/comment.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService) ],
  declarations: [ AppComponent, CommentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
