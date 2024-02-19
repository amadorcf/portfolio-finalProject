import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public widthSlider: number | undefined;
  public anchoToSlider: any | undefined;
  public autor: any;

  @ViewChild('textos', {static: true}) textos: any;


  constructor() {
    this.autor = undefined;
  }

  ngOnInit(): void {

    // Opcion clasica
    //alert(document.querySelector('#texto')?.innerHTML);

    // Opcion Angular viewChild
    console.log("Evento capturado con viewChild...\n"+this.textos.nativeElement.innerText);

    /*
    var elementos = document.getElementsByTagName('input');

    $("#limpiar").click(function (e) {
      e.preventDefault();
        for (let i = 0; i < elementos.length; i++) {
          elementos[i].value='';
        }
    });
    */
  }

  cargarSlider(){
    this.anchoToSlider = this.widthSlider;
    if(this.anchoToSlider > 600){
      this.anchoToSlider = 600;
    }
  }

  reiniciarSlider(){
    this.anchoToSlider = undefined;
  }

  getAutor(event: any){
    this.autor = event;
  }

}
