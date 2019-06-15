import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-featureblock',
  templateUrl: './featureblock.component.html',
  styleUrls: ['./featureblock.component.scss']
})
export class FeatureblockComponent implements OnInit {

  @Input() featurePosts:[]=[];
  constructor() { }

  ngOnInit() {
  }

}
