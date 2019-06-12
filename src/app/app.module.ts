import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject, PLATFORM_ID, APP_ID } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { BlogdetailComponent } from './blog/blogdetail/blogdetail.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import {FormsModule} from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from 'src/environments/environment.prod';
import { LinkComponent } from './link/link.component';
import { CreateComponent } from './create/create.component';
import { SeoTagComponent } from './seo-tag/seo-tag.component';
import { SeoService } from './services/seo-tag.services';
import { isPlatformBrowser } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    BlogdetailComponent,
    NavbarComponent,
    LinkComponent,
    CreateComponent,
    SeoTagComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule,
    AppRoutingModule,FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [SeoService],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string
  ) {
    const platform = isPlatformBrowser(platformId)
      ? 'in the browser'
      : 'on the server';
    //console.log(`Running ${platform} with appId=${appId}`);
  }
}
