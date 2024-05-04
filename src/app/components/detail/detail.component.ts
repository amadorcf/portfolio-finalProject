import Project from '../../interfaces/project.fire.interface';
import { ProjectFireService } from './../../services/projectFire.service';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
  providers: [ProjectService],
})
export class DetailComponent implements OnInit {


  public confirm: boolean = false;
  public website: any;

  project: Project;
  projects: Project[];

  constructor(
    private projectFireService: ProjectFireService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.project = {
      name: 'test',
      description: 'test',
      category: 'test',
      year: 2024,
      langs: 'test',
      link: 'test',
      image: 'test'
    };
    this.projects = [{
      name: 'test',
      description: 'test',
      category: 'test',
      year: 2024,
      langs: 'test',
      link: 'test',
      image: 'test',
    }];
  }

  ngOnInit(){

    $(() => {
      $(window).scrollTop(0);

      $('.bxslider').bxSlider({
        adaptiveHeight: true,
        /* slideWidth: 250, */
        pager:false,
        responsive: true,
        adaptiveHeightSpeed: 0
      });

      $('.bx-wrapper').css({
        'border': '0px',
        'background-color': 'transparent',
        'border-radius': '10px',
        'margin': 'auto',
        'margin-bottom': '0',
        'align-self': 'center',
      });


    });

    this._route.params.subscribe(params => {

      //Modificado para que coja el nombre en lugar del id y asi fugure en la url
  		let id = params['id'];

      this.getProject(id);

    });



  }

   getProject(name:any) {
    this.projectFireService.getProjects().subscribe( projects => {
      this.projects = projects;

      for(let project of projects){
        if ( project.name == name){
          this.project = project;
          /* console.log("Detail Project", project) */
        }
      }

    });

  }


  setConfirm(confirm:any){
    this.confirm = confirm;
  }

  deleteProject(id:any){

    this.projectFireService.deleteProject(id);
    this._router.navigate(['/projects']);
    console.log("Proyecto borrado correctamente")

  }

}


