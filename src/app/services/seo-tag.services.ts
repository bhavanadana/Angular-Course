import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { Meta, TransferState, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {


  seoSubject: BehaviorSubject<SeoTag> = new BehaviorSubject<any>({});
  data$: Observable<SeoTag> = this.seoSubject.asObservable();
  updateSeoTags(path) {
    let documenet = this.db.collection<SeoTag>(`SeoTag`,
      ref => ref.where("path", "==", path)).
      valueChanges().subscribe(a => {
        //console.log(a);
        this.SetMetaTags(a[0]);
      })
  }

  private SetMetaTags(seotag: SeoTag) {
    if(!seotag){
      seotag = this.initializeSeoTag()
    }
    if (!seotag.title ) {
         seotag = this.initializeSeoTag()
      }
      //console.log('content:',seotag.keywords);
      
      this.titleService.setTitle(seotag.title);

      this.meta.addTags([
           { name: 'DC.title', content: seotag.title },
        { name: 'DC.description', content: seotag.description},
        //twitter cards
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:creator', content: '@neeraj123bh' },
        { name: 'twitter:site', content: '@neeraj123bh' },
        { name: 'twitter:title', content: seotag.title },
        { name: 'twitter:description', content: seotag.description},
        { name: 'twitter:image', content: seotag.image },
        //opengraph card
        { name: 'og:url', content: seotag.url },
          { name: 'og:site_name', content: 'Smart Code Hub' },
        { name: 'og:type', content: "website" },
      { name: 'og:title', content: seotag.title },
      { name: 'og:description', content: seotag.description},
      { name: 'og:image', content:  seotag.image},
      { name: 'og:image:width', content: seotag.imagewidth },
      { name: 'og:image:height', content: seotag.imageheight },
      
      //cononicalTag
      { name: 'canonical', content: seotag.canonical },
      { name: 'description', content: seotag.description},
      { name: 'keywords',content:seotag.keywords} 
    ]);

  }
  initializeSeoTag(): SeoTag {
    return {
      canonical:'https://Smartcodehub.com',
      description:'Best quality courses for web developers in Quality online courses in JavaScript, Angular, NGRX , TypeScript,React,Vue,Python,Machine learning and blockchain',
      image:'https://www.Smartcodehub.com/assets/images/logo100120.png',
      imageheight:'630',
      imagewidth:'1200',
      keywords:`Angular courses , Typescript courses , React Courses , Machine learning courses ,
                python courses , online development courses ,
                software development courses `,
      path:'',
      title:'Smartcodehub ™ | Quality online courses in  Typescript,Angular,vue, React,Python',
      url:'https://www.Smartcodehub.com/'
    }
  }
  constructor(private db: AngularFirestore, private meta: Meta,
    private state: TransferState,
    private titleService: Title, ) {



  }
}

export interface SeoTag {
  path: string;
  title: string;
  description: string;
  canonical: string;
  image: string;
  url: string;
  imagewidth: string;
  imageheight: string;
  keywords: string
}