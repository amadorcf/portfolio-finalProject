import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';
import { UploadService } from '../../services/upload.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService]
})
export class EditComponent implements OnInit {

  public title: string | undefined;
  public project: Project;
  public save_project: any;
  public status: string | undefined;
  public filesToUpload: Array<File> | undefined;
  public url: string;

  constructor(
    private _projectService: ProjectService,
    private _route: ActivatedRoute,
    private _uploadService: UploadService
  ) {
    this.url = Global.url;
    this.project = new Project('', '', '', '', 2024, '', '');
  }

  ngOnInit(){
    this._route.params.subscribe(params => {
  		let id = params['id'];

      this.getProject(id);
    });
  }

  getProject(id: any) {
    this._projectService.getProject(id).subscribe({
      next: (response) =>{
        console.log(response)
        if(response.project){
          this.project = response.project;
        }},
      error: (e) => console.error(<any>e),
      complete: () => console.info('metodo GetProject completado')
    });
  }

  onSubmit(form:any){
    //Actualizar datos
    this._projectService.updateProject(this.project).subscribe(

      response =>{
        //console.log(response)
        if(response.project){

          // Subir la imagen
					if(this.filesToUpload){
						this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id, [], this.filesToUpload, 'image')
						.then((result:any) => {

							this.save_project = result.project;
							this.status = 'success';

						});
					}else{
						this.save_project = response.project;
						this.status = 'success';

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
