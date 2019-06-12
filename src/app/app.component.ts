import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { isPlatformBrowser } from '@angular/common';
import { SeoService } from './services/seo-tag.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  isBrowser;
  /**
   *
   */
  title = 'Blog';

  GetLinks(){
    return new Array(1000).map((a, i) => i);
  }
  constructor(private router: Router,
    @Inject(PLATFORM_ID) private platformId,
    private seoService: SeoService) {

  }
  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.seoService.data$.subscribe(a => {
      //console.log(a);
      
    })

    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        let currentUrl = event.url

        if (event.url == '/') {
          currentUrl = '/dashboard'
        }
        this.seoService.updateSeoTags(currentUrl);
        //console.log(currentUrl);
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });

  }
  onActivate(event) {
   // window.scroll(0, 0);
   if (this.isBrowser) { 
        window.scroll(0, 0);
    // put your code which is access window variable 
  } 
  }
}
