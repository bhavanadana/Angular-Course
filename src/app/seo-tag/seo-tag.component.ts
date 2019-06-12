import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-seo-tag',
  templateUrl: './seo-tag.component.html',
  styleUrls: ['./seo-tag.component.scss']
})
export class SeoTagComponent implements OnInit {
update = false;
  constructor(private db: AngularFirestore,) { }
seoTag:SeoTag={
  canonical:'https://d-drops.com',
  imageheight:'1200',imagewidth:'630', 
  url:'https://www.d-drops.com/',
  description:'',id:'',image:'',keywords:'',path:'',title:''

};
seoTags:Observable<SeoTag[]>;
  ngOnInit() {
    this.seoTags = this.db.collection<SeoTag>(`SeoTag`).valueChanges()
  }

  save(){
    if(!this.seoTag.id)
    {
      let id = this.db.createId();
      this.seoTag.id = id;
    }
    this.seoTag.canonical ='https://d-drops.com'+this.seoTag.path,
    this.seoTag.imageheight ='1200',
    this.seoTag.imagewidth='630', 
    this.seoTag.url ='https://www.d-drops.com'+this.seoTag.path,
    console.log(this.seoTag);
    
    this.db.doc(`SeoTag/${this.seoTag.id}`).set(this.seoTag);
   this.update = false;
    }


edit(item)
{
  this.seoTag = item;
  this.update = true;
}

delete(id){
  this.db.doc(`SeoTag/${id}`).delete();
}
    reset()
    {
      this.seoTag = {
        canonical:'https://d-drops.com',
        imageheight:'1200',imagewidth:'630', 
        url:'https://www.d-drops.com/',
        description:'',id:'',image:'',keywords:'',path:'',title:''
      };
    }
}
export interface SeoTag {
  id:string;
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
