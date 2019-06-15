import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post:any;
  GetStyle(feature_image:string){
    return {
     'background-image':`url('${feature_image}')`,
     'height':'30vh',
     'background-size':'cover'
    };
  }
  constructor() { }

  ngOnInit() {
  }

}
