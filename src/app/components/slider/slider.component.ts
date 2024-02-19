import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {

  @Input() anchura: any | undefined;
  @Output() getAutor = new EventEmitter();

  public autor: any;

  constructor(){
    this.autor = {
      nombre: "amadorcf",
      website: "amadorcf.es"
    }
  }

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

  lanzar(event:any){
    this.getAutor.emit(this.autor);
  }
}
