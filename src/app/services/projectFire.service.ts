
import { Injectable } from "@angular/core";
import { Firestore, collection, addDoc } from "@angular/fire/firestore";
import Project from "../interfaces/project.fire.interface";


@Injectable({
  providedIn:'root'
})
export class ProjectFireService{

  constructor(private firestore: Firestore){
  }

  // METODOS
  addProject(project: Project){
    const projectRef = collection(this.firestore, 'projects');
    return addDoc(projectRef, project);
  }




}


