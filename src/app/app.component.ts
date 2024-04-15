import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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
    });
  }



}
