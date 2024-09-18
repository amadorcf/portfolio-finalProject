import { Component, HostListener } from '@angular/core';
import { addIcons } from 'ionicons';
import { mail, logoLinkedin, logoGithub} from 'ionicons/icons';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  public title: string | undefined;
  public subtitle: string | undefined;
  public description: string | undefined;


  constructor(){
    this.title = "Amador Cano Fernández";
    this.subtitle = "Future Full-Stack Developer";
    this.description = "Graduado en Ingeniería Electrónica y Automática. Organizado, resolutivo, trabajador y con espíritu de continuo aprendizaje y renovación. Actualmente inmerso en un giro profesional buscando nuevas experiencias en el mundo de la programación."

    addIcons({
      logoLinkedin,
      logoGithub,
      mail
    });
  }

  ngOnInit(): void {


    $(() => {

      /*==================== SHOW MENU ====================*/
      $(".nav__toggle").on("click",  () => {
        if ($(".nav__menu").hasClass("show-menu")) {
          $(".nav__menu").removeClass("show-menu");
        } else {
          $(".nav__menu").addClass("show-menu");
        }
      });


      $(".nav__link").on("click",  (navEl) => {

        /*==================== SECTIONS ACTIVE LINK ====================*/
        $(".nav__link").removeClass("active-link");
        $(navEl.currentTarget).addClass("active-link")

        /*==================== REMOVE MENU MOBILE ====================*/
        if ($(".nav__menu").hasClass("show-menu")) {
          $(".nav__menu").removeClass("show-menu");
        } else {
          $(".nav__menu").addClass("show-menu");
        }
      });

      /*==================== DARK LIGHT THEME ====================*/
/*       this.localStorageTheme(); */

      $("#theme-button").on("click",  () => {

/*         localStorage.setItem('selected-theme', this.getCurrentTheme())
        localStorage.setItem('selected-icon', this.getCurrentIcon()) */

        if ($(".cv-container").hasClass("dark-theme")) {
          this.removeThemeDark();
        } else {
          this.addThemeDark();
        }



      });

    });


  }

  /*==================== SHOW SCROLL TOP ====================*/
  scrollTop: number = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Obtener la posición actual del scroll
    this.scrollTop = window.scrollY || document.documentElement.scrollTop;
    if(this.scrollTop >= 350){
      $("#scroll-top").addClass('show-scroll');
    } else {
      $("#scroll-top").removeClass('show-scroll');
    }

    const sections = $('section[id]')

  }

  localStorageTheme(){
    const selectedTheme = localStorage.getItem('selected-theme')
    const selectedIcon = localStorage.getItem('selected-icon')

    if (selectedTheme ==='dark') {
      // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
      this.addThemeDark();
    }
    if(selectedTheme ==='ligth'){
      this.removeThemeDark();
    }

  }

  getCurrentTheme(){
    if($(".cv-container").attr("class")?.split(' ').includes('dark-theme')){
      return 'light';
    }else{
      return 'dark';
    }
  }

  getCurrentIcon(){
    if($("#theme-button").attr("class")?.split(' ').includes('bx-sun')){
      return 'bx-moon';
    }else{
      return  'bx-sun';
    }
  }

  addThemeDark(){
    $("main").addClass("dark-theme");
    $(".cv-container").addClass("dark-theme");
    $(".change-theme").removeClass("bx-moon");

    $(".change-theme").addClass("bx-sun");

    $(".resume__left").css("background-color", "#f39431e6");

  }

  removeThemeDark(){
    // Change main section color
    $("main").removeClass("dark-theme");

    //Change icon
    $(".change-theme").removeClass("bx-sun");
    $(".change-theme").addClass("bx-moon");

    // Change cv-containter to dark-theme
    $(".cv-container").removeClass("dark-theme");
    $(".resume__left").css("background-color", "#D7FEE3");

}



}

