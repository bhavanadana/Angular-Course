import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { TruncatetextPipe } from './pipes/truncatetext.pipe';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './home/slider/slider.component';
import { FeatureblockComponent } from './home/featureblock/featureblock.component';
import { FeaturepostComponent } from './home/featureblock/featurepost/featurepost.component';
import { PostlistComponent } from './home/postlist/postlist.component';
import { PostComponent } from './home/postlist/post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TruncatetextPipe,
    HomeComponent,
    SliderComponent,
    FeatureblockComponent,
    FeaturepostComponent,
    PostlistComponent,
    PostComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
