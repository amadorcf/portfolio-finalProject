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
      $(".toggle").on("click",  () => {
        if ($(".item").hasClass("active")) {
          $(".item").removeClass("active"); $(this).find("a").html("<i class='fas fa-bars'></i>");
        } else {
          $(".item").addClass("active"); $(this).find("a").html("<i class='fas fa-times'></i>");
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

    });
  }


}
