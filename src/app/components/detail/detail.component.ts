import Project from '../../interfaces/project.fire.interface';
import { ProjectFireService } from './../../services/projectFire.service';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


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
    this._route.params.subscribe(params => {
  		let id = params['id'];

      this.getProject(id);

    });

  }

   getProject(id:any) {
    this.projectFireService.getProjects().subscribe( projects => {
      this.projects = projects;

      for(let project of projects){
        if ( project.id == id){
          this.project = project;
          console.log("Detail Project", project)
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


