import Project from '../../interfaces/project.fire.interface';
import { ProjectFireService } from './../../services/projectFire.service';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Storage, ref, uploadBytes, getDownloadURL, listAll } from '@angular/fire/storage';
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
  images: String[] = [];
  urlYes: boolean;
  imgUrl: String | undefined;
  formatedDescription: string = '';

  constructor(
    private projectFireService: ProjectFireService,
    private _router: Router,
    private _route: ActivatedRoute,
    private storage: Storage
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
    this.urlYes = false;

  }

  ngOnInit(){

    this._route.params.subscribe(params => {

      //Modificado para que coja el nombre en lugar del id y asi fugure en la url
  		let id = params['id'];

      this.existeRuta(id);
      this.getImages(id);
      this.getProject(id);



      $(() => {
        $(window).scrollTop(0);

        $('.bxslider').bxSlider({
          adaptiveHeight: true,
          /* slideWidth: 250, */
          pager:false,
          responsive: true,
          adaptiveHeightSpeed: 0,
          auto: true,
          autoHover: true,
          pause: 2500,
        });

        $('.bx-wrapper').css({
          'border': '0px',
          'background-color': 'transparent',
          'border-radius': '10px',
          'margin': 'auto',
          'margin-bottom': '0',
          'align-self': 'center',
          'cursor': 'pointer',
        });

      });

    });

  }

  formatContent(content: string): string {
    content = content.replace(/\n/g, "<br/>");
    //console.log(content)
    return content;
  }

   getProject(name:any) {
    this.projectFireService.getProjects().subscribe( projects => {
      this.projects = projects;

      for(let project of projects){
        if ( project.name == name){
          this.project = project;
          /* console.log("Detail Project", project) */

          //Formatear descripcion
          this.formatedDescription = this.formatContent(project.description)

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

  private existeRuta(path: string) {
    path = path.split(' ').join('');

    // Para imagenes de nuevos proyectos, crear carpeta y agregar nombre del proyecto a -rutas-
    const rutas = ["YourApp", "WebDevelopmentBootcamp", "amadorcf.es"];

    if(rutas.includes(path)){
      this.urlYes = true;
      this.imgUrl = path;
    }

  }

  getImages(projectName:any){

    this.images = [];

    for(let i = 0; i <=3; i++){
      let ele = (i+1)+ ".png";
      this.images.push(ele);
    }

    return this.images

    /* const path = 'images/projects-images/'+ projectName;
    console.log(path)

    const imagesRef = ref(this.storage, path);

    listAll(imagesRef)
      .then(async (response) => {
        this.images = [];
        console.log(response)
        for (let item of response.items) {
          const url = await getDownloadURL(item);

          this.images.push(url);
        }
        console.log(this.images)
        return this.images;
      })
      .catch((error) => console.log(error)); */


  }

}


