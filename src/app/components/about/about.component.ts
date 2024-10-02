import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  public title: string | undefined;
  public subtitle: string | undefined;
  public email: string | undefined;

  @ViewChild('cardContainer') cardContainer!: ElementRef;

  constructor(private renderer: Renderer2) {
    this.title = "Amador Cano Fernández";
    this.subtitle = "Future Full-Stack Developer";
    this.email = "amadorcf@outlook.com"
   }

   ngAfterViewInit(): void {
    // Asegúrate de que el DOM esté completamente cargado
    this.renderer.listen(this.cardContainer.nativeElement, 'mousemove', (e: MouseEvent) => {
      this.onMouseMove(e);
    });
    this.renderer.listen(this.cardContainer.nativeElement, 'mouseout', () => {
      this.onMouseOut();
    });


  }

  onMouseMove(e: MouseEvent): void {
    const card = this.cardContainer.nativeElement;
    const cardRect = card.getBoundingClientRect();

    const xPosition = (e.clientX - cardRect.left) / cardRect.width;
    const yPosition = (e.clientY - cardRect.top) / cardRect.height - 0.6;
    const xOffset = -(xPosition - 0.6);
    const dxNorm = Math.min(Math.max(xOffset, -0.6), 0.6);

    this.renderer.setStyle(card, 'transform', `perspective(1000px)
      rotateY(${dxNorm * 25}deg)
      rotateX(${yPosition * 10}deg)`);
  }

  onMouseOut(): void {
    const card = this.cardContainer.nativeElement;
    this.renderer.setStyle(card, 'transform', 'none');
  }


}
