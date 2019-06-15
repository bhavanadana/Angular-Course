import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  selectedposttitle:string="default post title";
  title = "smartblog";
  titleColor = "green";
  bgColor = "#777";
  posts = [];

  chagePostTitle(title:string){
    this.selectedposttitle = title
  }
  
  postsForSlider = [];

  GetTitleCase(val:string){
   
    return val.toLowerCase().
    split(' ').
    map(a=>a.charAt(0).toUpperCase()+a.slice(1))
    .join(' ');

  }


  constructor(private blogService: BlogService) {
    this.blogService
      .GetAllBlogs()

      .subscribe(a => {
        this.posts = a;
        this.postsForSlider= this.posts.filter(a=>a.featured).map(a=>{
          return {
            feature_image:a.feature_image,
            title:a.title,
            created_at:a.created_at,
            author_image:a.authors[0].profile_image
          }
        }).slice(0,3)
  
      });
  }

}
