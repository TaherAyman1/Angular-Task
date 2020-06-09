import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from 'services/api-service';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HelpermethodsService } from 'services/helper-method';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { PostsDetailsComponent } from './posts-details/posts-details.component';

@NgModule({
  declarations: [AppComponent, PostsComponent, PostsDetailsComponent],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [ApiService, HelpermethodsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
