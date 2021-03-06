import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppComponent } from './app.component';
import { CommentComponent } from './classes/comment.component';
import { ThreadComponent } from './classes/thread.component';

import { OpinionFetcherService } from './services/opinion-fetcher.service';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    ThreadComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [OpinionFetcherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
