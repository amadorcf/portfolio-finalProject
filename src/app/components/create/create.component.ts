import { Component } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
  providers: [ProjectService, UploadService]
})
export class CreateComponent {

  public title: string | undefined;
  public project: Project;
  public status: string | undefined;
  public filesToUpload: Array<File> | undefined;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
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

    //Guardar datos
    this._projectService.saveProject(this.project).subscribe(

      response =>{
        //console.log(response)
        if(response.project){
          // Subir la imagen
					if(this.filesToUpload){
						this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id, [], this.filesToUpload, 'image')
						.then((result:any) => {

							//this.save_project = result.project;

							this.status = 'success';
							form.reset();
						});
					}else{
						//this.save_project = response.project;
            
						this.status = 'success';
						form.reset();
					}

        }else{
          this.status = 'failed';
        }
      },
      error =>{
        console.log(<any>error)
      }
    );
  }

  fileChangeEvent(fileInput:any){
    //console.log(fileInput)
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}
