import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { SwiperOptions } from 'swiper/types/swiper-options';

@Component({
  selector: 'app-ngc-slider',
  templateUrl: './ngc-slider.component.html',
  styleUrls: ['./ngc-slider.component.scss']
})
export class NgcSliderComponent implements OnInit {

  @ViewChild('swiper', { static: true }) swiperRef!: ElementRef;
  // config: SwiperOptions = { modules: [], slidesPerView: 1 };

  // ngAfterViewInit() {
  //   Object.assign(this.swiperRef.nativeElement, this.config);
  //   this.swiperRef.nativeElement.initialize();
  // }

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
