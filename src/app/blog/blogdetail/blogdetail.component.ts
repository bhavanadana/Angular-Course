import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.scss']
})
export class BlogdetailComponent implements OnInit {
  id:any;
  data:any;
  constructor(private aroute: ActivatedRoute , private afs: AngularFirestore) { }

  ngOnInit() {
    this.aroute.params.subscribe(a=>{
      this.id = a.Id;
    });
    this.afs.collection('blog').doc(this.id).valueChanges().subscribe(a=>{
      this.data = a;
    })
  }

}
