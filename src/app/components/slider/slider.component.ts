import { Component, Input } from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {

  @Input()anchura: number | undefined;

  ngOnInit(): void {
    $("#logo").click(function (e) {
      e.preventDefault();
      $("nav")
          .css("background", "green")

    });


    //$(function(){
      ($('.slider') as any).bxSlider({
        auto: true,
        autoControls: true,
        stopAutoOnClick: true,
        pager: true,
        slideWidth: this.anchura
      });
   // });
  }
}
