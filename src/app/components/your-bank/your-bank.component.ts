import { Component, HostListener, ViewChild } from '@angular/core';

import { ProjectFireService } from '../../services/projectFire.service';
import Project from '../../interfaces/project.fire.interface';
import { Global } from '../../services/global';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-your-bank',
  templateUrl: './your-bank.component.html',
  styleUrl: './your-bank.component.css'
})
export class YourBankComponent {

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  public url:string | undefined;

  projects: Project[];
  project: Project | undefined;
  isSidenavOpen = true; // Set the initial state to visible
  isMobile = true;
  isPlaying = false;
  autoplay: boolean = true;

  constructor(
    private projectFireService: ProjectFireService,
    private observer: BreakpointObserver,
    private meta: Meta,
    private titleService: Title,
    private route: ActivatedRoute
  ) {
    this.projects = [];
    this.url = Global.url;
  }

  ngOnInit(){
    // Cambiar dinámicamente el título de la página
    this.titleService.setTitle('YourBank Project');

    // Actualizar las meta etiquetas
    this.meta.updateTag({ property: 'og:title', content: 'YourBank Project' });
    this.meta.updateTag({ name: 'description', content: 'YourBank App' });
    this.meta.updateTag({ property: 'og:description', content: 'YourBank Project' });
    this.meta.updateTag({ property: 'og:image', content: 'https://firebasestorage.googleapis.com/v0/b/portfolio-project-d906b.appspot.com/o/images%2FYourBank_v3.1.png?alt=media&token=dd2cd3d2-8957-4f79-9390-acf4ac1a6cad' });
    this.meta.updateTag({ property: 'og:url', content: 'https://amadorcf.es/projects/your-bank' });


    this.projectFireService.getProjects().subscribe( projects => {
      this.projects = projects;
      this.getProject();
      //console.log("Metodo getProjects", projects)


    });

    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if(screenSize.matches){
        this.isMobile = true;
        this.isSidenavOpen = false;
        this.autoplay = false;
      } else {
        this.isMobile = false;
      }
    });

    $(() => {
      $('mat-list-item').on("click", () => {
        $("body").css("background-color", "red");
      });
    });

  }

  getProject() {
    this.projectFireService.getProjects().subscribe( projects => {
      this.projects = projects;

      for(let project of projects){
        if ( project.name == "YourBank"){
          this.project = project;
          /* console.log("Detail Project", project); */
        }
      }

      });
  }


  navigateTo(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if(this.isMobile){
      this.sidenav.toggle();
    }
    //console.log(section)

    // Esperar a que el scroll termine y luego cerrar el sidenav
    setTimeout(() => {
      if (section) {
        // Si la sección existe, hacer scroll a la sección y luego cerrar el sidenav
        section.scrollIntoView({ behavior: 'auto', block: 'start' });
      } else {
        // Si la sección no existe, puedes mostrar un mensaje o simplemente no hacer nada
        console.error('Sección no encontrada:', sectionId);
      }
    }, 500);
  }

      /*==================== SHOW SCROLL TOP ====================*/
  scrollTop: number = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Obtener la posición actual del scroll
    this.scrollTop = window.scrollY || document.documentElement.scrollTop;
    if(this.scrollTop >= 350){
      $("#scroll-top").addClass('show-scroll');
      $("#scroll-toggle-button").addClass('show-scroll-toggle');

    } else {
      $("#scroll-top").removeClass('show-scroll');
      $("#scroll-toggle-button").removeClass('show-scroll-toggle');
    }

    const sections = $('section[id]')

  }



  onPlay() {
    this.isPlaying = true;
  }

  onPause() {
    this.isPlaying = false;
  }
}
