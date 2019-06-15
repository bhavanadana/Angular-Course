import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-featurepost',
  templateUrl: './featurepost.component.html',
  styleUrls: ['./featurepost.component.scss']
})
export class FeaturepostComponent implements OnInit {

  @Input() post:any;
  constructor() { }

  ngOnInit() {
  }

}
