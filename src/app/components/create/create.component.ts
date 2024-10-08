import { ProjectFireService } from './../../services/projectFire.service';
import { Storage, ref, uploadBytes, getDownloadURL, listAll } from '@angular/fire/storage';

import { Component } from '@angular/core';
import { Project } from '../../models/project';
import { Global } from '../../services/global';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
  providers: [ProjectService, UploadService],
})
export class CreateComponent {
  public title: string | undefined;
  public project: Project;
  public save_project: any;
  public status: string | undefined;
  public filesToUpload: Array<File> | undefined;
  public url: string | undefined;

  projectForm: FormGroup;
  images: string[];
  image: string;

  constructor(
    private projectsService: ProjectFireService,
    private storage: Storage
  ) {
    this.projectForm = new FormGroup({
      name: new FormControl(),
      description: new FormControl(),
      category: new FormControl(),
      date: new FormControl(new Date().toISOString().substring(0, 10)),
      year: new FormControl(new Date().getFullYear()),
      langs: new FormControl(),
      link: new FormControl(),
      image: new FormControl(),
    });

    this.title = 'Crear proyecto';
    this.project = new Project('', '', '', '', new Date(), 2024, '', '', '');
    this.images = [];
    this.url = Global.url;
    this.image = '';
  }

  ngOnInit(): void {
    this.getImages();
  }

  async onSubmit(form:any) {

    /* const response = this.projectsService.addProject(form.value); // esto devulvete una promesa */
    this.projectsService.addProject(form.value)
      .then( (response) => {

        if(response){
          console.log(response)
          this.save_project = this.project._id;
          this.status = 'success';
          form.reset();
        }else{
          this.save_project = this.project._id;
          this.status = 'failed';
        }


      })
      .catch((error) => console.log(error));

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


  // Funcion para obtener imagenes
  getImages() {
    const imagesRef = ref(this.storage, 'images');

    listAll(imagesRef)
      .then(async (response) => {
        this.images = [];

        for (let item of response.items) {
          const url = await getDownloadURL(item);

          this.images.push(url);
        }

      })
      .catch((error) => console.log(error));
  }

}
