import { ProjectFireService } from './../../services/projectFire.service';
import { Storage, ref, uploadBytes, getDownloadURL, listAll } from '@angular/fire/storage';

import { Component, OnInit } from '@angular/core';


import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import Project from '../../interfaces/project.fire.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService]
})
export class EditComponent implements OnInit { public title: string | undefined;
  public confirm: boolean = false;
  public website: any;
  public save_project: any;
  public status: string | undefined;
  public filesToUpload: Array<File> | undefined;
  public url: string | undefined;
  idToUpdate: string;

  projectForm: FormGroup;
  project: Project;
  projects: Project[];

  constructor(
    private projectsService: ProjectFireService,
    private _router: Router,
    private _route: ActivatedRoute,
    private storage: Storage,
    private fb: FormBuilder
  ) {
    this.projectForm = new FormGroup({
      name: new FormControl(),
      description: new FormControl(),
      category: new FormControl(),
      year: new FormControl(),
      langs: new FormControl(),
      link: new FormControl(),
      image: new FormControl(),
    });
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
      name: 'test-pro',
      description: 'test-pro',
      category: 'test-pro',
      year: 2222,
      langs: 'test-pro',
      link: 'test-pro',
      image: 'test-pro',
    }];
    this.title = 'Editar proyecto';
    this.idToUpdate = '';
  }

  ngOnInit(){
    this._route.params.subscribe(params => {
  		let id = params['id'];
      this.idToUpdate = id;
      this.getProject(id);

    });

  }

   getProject(id:any) {
    this.projectsService.getProjects().subscribe( projects => {
      this.projects = projects;

      for(let project of projects){
        if ( project.id == id){
          this.project = project;
          this.save_project = project;
          this.projectForm = this.fb.group({
            name: this.project.name,
            description: this.project.description,
            category: this.project.category,
            year: this.project.year,
            langs: this.project.langs,
            link: this.project.link,
            image: this.project.image,
          });
          console.log("Edit Project", project)
        }
      }

    });

  }

  async onSubmit(form:any) {
    /* const response = this.projectsService.addProject(form.value); // esto devulvete una promesa */
    this.projectsService.updateProject(this.idToUpdate, form.value);

    this.status = 'success';
    form.reset();
    console.log("Proyecto editado correctamente")

  }

  // Funcion para las alertas de las validaciones del formulario
  get projectFormControl() {
    return this.projectForm.controls;
  }


  // Funcion para subir archivos
  fileChangeEvent($event: any) {

    // Subir imagen a Firebase, metoro valido tambien para archivos
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `images/${file.name}`);

    uploadBytes(imgRef, file)
      .then(async (response) => {
        const img_url = await getDownloadURL(imgRef);
        this.projectForm.patchValue({
          image: img_url
        });
        console.log("Imagen subida correctamente a Firebase: ", file.name);
      })
      .catch((error) => console.log(error));

  }


}
