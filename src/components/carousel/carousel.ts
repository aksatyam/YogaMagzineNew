import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Platform } from 'ionic-angular';

export interface CarouselItem{
    id: number,
    long_desc: string,
    name: string,
    price: string,
    short_desc: string,
    subscribed: boolean,
    created_at: CreatedAt,
    thumbnail: ThumbNail,
    updated_at:CreatedAt,
    color?: string,
    outstanding?: boolean,
    currentPlacement: number
}

interface SlideItem {
    idx: number,
    id: number,
    long_desc: string,
    name: string,
    price: string,
    short_desc: string,
    subscribed: boolean,
    created_at: CreatedAt,
    thumbnail: ThumbNail,
    updated_at:CreatedAt,
    color?: string,
    outstanding?: boolean
    currentPlacement: number
}

interface CreatedAt{
    data: string,
    timezone: string,
    timezone_type: number
}

interface ThumbNail{
    created_at: CreatedAt,
    id: number,
    link: string,
    name: string,
    price: string,
    type: string,
}

@Component({
  selector: 'carousel',
  templateUrl: 'carousel.html'
})
export class CarouselComponent {
  public currentDeg: number = 0;
  public items: Array<SlideItem> = [];
  public tz: number;

  @Input() autoloop: boolean = false;
  @Input() set slides(values: Array<CarouselItem>) {
      if (!values.length) return;

      let degree: number = 0;

      if(this.platform.is('core') || this.platform.is('mobileweb')) {
          this.tz = 250;

      } else {
          this.tz = 200;
      }

      //this.tz = Math.round((this.containerWidth / 2) / Math.tan(Math.PI / values.length));
      this.items = <Array<SlideItem>>values.map((item: CarouselItem, index: number) => {
          let slideItem = {
              idx: index,
              id: item.id,
              long_desc: item.long_desc,
              name: item.name,
              price: item.price,
              short_desc: item.short_desc,
              created_at: item.created_at,
              thumbnail: item.thumbnail,
              updated_at: item.updated_at,
              currentPlacement: degree
          };
          degree = degree + 60;
          return slideItem;
      })
  }

  @Output() selectSlide = new EventEmitter();

  constructor(public platform: Platform, private eleRef: ElementRef) {
   
  }

  ngOnInit() { 
    if (this.autoloop) {
        let autoloopTask = setInterval(() => {
            this.onSwipeLeft();
        }, 2000);
    }   
}

onSwipeLeft() {
    this.currentDeg = this.currentDeg - 60;
    this.applyStyle();
}

onSwipeRight() {
    this.currentDeg = this.currentDeg + 60;
    this.applyStyle();
}

private applyStyle() {
  let ele = this.eleRef.nativeElement.querySelector('.carousel');
  ele.style[ '-webkit-transform' ] = "rotateY(" + this.currentDeg + "deg)";
  ele.style[ '-moz-transform' ] = "rotateY(" + this.currentDeg + "deg)";
  ele.style[ '-o-transform' ] = "rotateY(" + this.currentDeg + "deg)";
  ele.style[ 'transform' ] = "rotateY(" + this.currentDeg + "deg)";
}

selectItem(item:any) {

  this.applyResizeStyle(item);

  setTimeout(() => {
      this.resetResizeStyle(item);
      this.selectSlide.emit(item);
  },200);
}
applyResizeStyle(item: any) {

  let ele = this.eleRef.nativeElement.querySelector('.slide-item-' + item.idx);

  ele.style[ 'animation-name' ] = "resize";
  ele.style[ 'animation-duration' ] = "1s";
  ele.style[ 'animation-timing-function' ] = "ease-in-out";
  ele.style[ 'animation-iteration-count' ] = "1";

  ele.style[ '-webkit-animation-name' ] = "resize";
  ele.style[ '-webkit-animation-duration' ] = "1s";
  ele.style[ '-webkit-animation-timing-function' ] = "ease-in-out";
  ele.style[ '-webkit-animation-iteration-count' ] = "1";

  ele.style[ '-moz-animation-name' ] = "resize";
  ele.style[ '-moz-animation-duration' ] = "1s";
  ele.style[ '-moz-animation-timing-function' ] = "ease-in-out";
  ele.style[ '-moz-animation-iteration-count' ] = "1";

  ele.style[ '-o-animation-name' ] = "resize";
  ele.style[ '-o-animation-duration' ] = "1s";
  ele.style[ '-o-animation-timing-function' ] = "ease-in-out";
  ele.style[ '-o-animation-iteration-count' ] = "1";
}

resetResizeStyle(item: any) {
  let ele = this.eleRef.nativeElement.querySelector('.slide-item-' + item.idx);
  ele.style[ 'animation-name' ] = "";
  ele.style[ '-webkit-animation-name' ] = "";
  ele.style[ '-moz-animation-name' ] = "";
  ele.style[ '-o-animation-name' ] = "";
}

}
