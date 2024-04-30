import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-p';


  ngOnInit(): void {

    $(() => {

      //
      $(".toggle").on("click",  () => {
        if ($(".item").hasClass("active-nav")) {
          $(".item").removeClass("active-nav");
          /* $(this).find("a").html("<i class='fas fa-bars'></i>"); */
          $(".toggle a i").removeClass("fa-solid fa-times");
          $(".toggle a i").addClass("fa-solid fa-bars");

        } else {
          $(".item").addClass("active-nav");
         /*  $(this).find("a").html("<i class='fas fa-times'></i>"); */
         $(".toggle a i").removeClass("fa-solid fa-bars");
         $(".toggle a i").addClass("fa-solid fa-times");
        }
      });



      $(".show-button").on("click",  () => {
        if ($(".acf").hasClass("show")) {
          $(".acf").removeClass("show");
          $("html, body").animate({ scrollTop: 0 }, "slow");
        } else {
          $(".acf").addClass("show");
          $("html, body").animate({ scrollTop: 0 }, "slow");
        }
      });


      /*==================== REMOVE MAIN MENU  ====================*/
      $("nav .item").on("click",  () => {
        // Reset menu
        $("main").removeClass("dark-theme");
        $(".toggle a i").removeClass("fa-solid fa-times");
        $(".toggle a i").addClass("fa-solid fa-bars");

        if ($(".item").hasClass("active-nav")) {
          $(".item").removeClass("active-nav");
        } else {
          $(".item").addClass("active-nav");
        }
      });

    });
  }


}
