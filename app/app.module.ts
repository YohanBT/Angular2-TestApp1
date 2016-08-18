import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { PostsComponent }  from './posts.component';
import { PostService } from './post.service';
import { PostDetailComponent } from './post-detail.component';
import { DashboardComponent } from './dashboard.component';
import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
  ],
  declarations: [
    AppComponent,
    PostsComponent,
    PostDetailComponent,
    DashboardComponent,
  ],
  providers:[
    PostService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
