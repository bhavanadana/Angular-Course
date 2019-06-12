import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  data:any;
  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.afs.collection('blog').valueChanges().subscribe(a=>{
      this.data = a;
    })
  }

}
