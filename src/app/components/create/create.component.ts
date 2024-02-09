import { Component } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
  providers: [ProjectService]
})
export class CreateComponent {

  public title: string | undefined;
  public project: Project;
  public status: string | undefined;

  constructor(
    private _projectService: ProjectService
  ){
    this.title = "Crear proyecto";
    this.project = new Project('', '', '', '', 2024, '', '');

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  onSubmit(form:any){
    console.log(this.project)
    this._projectService.saveProject(this.project).subscribe(
      response =>{
        //console.log(response)
        if(response.project){
          this.status = 'success';
          form.reset();
        }else{
          this.status = 'failed';
        }
      },
      error =>{
        console.log(<any>error)
      }
    );
  }
}
