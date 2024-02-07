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

  public title: string | undefined
  public project: Project;

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
  }
}
