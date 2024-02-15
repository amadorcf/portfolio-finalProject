import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public widthSlider: number | undefined;
  public anchoToSlider: number | undefined;

  constructor() { }

  ngOnInit(): void {

    var elementos = document.getElementsByTagName('input');

    $("#limpiar").click(function (e) {
      e.preventDefault();
        for (let i = 0; i < elementos.length; i++) {
          elementos[i].value='';
        }
    });

  }

  cargarSlider(){
    this.anchoToSlider = this.widthSlider;
  }

  reiniciarSlider(){
    this.anchoToSlider = undefined;
  }

}
