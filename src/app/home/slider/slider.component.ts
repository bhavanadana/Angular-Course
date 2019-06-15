import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  
  @Output() onslideselect:EventEmitter<String> = new EventEmitter<string>();

  slideSelect(title:string){
    this.onslideselect.emit(title);
  }
  @Input() sliderData:[]=[];
  constructor() { }

  ngOnInit() {
  }

}
