import { Injectable } from "@angular/core";
import { Firestore, collection, addDoc, collectionData, doc, getDoc, deleteDoc } from "@angular/fire/firestore";
import Project from "../interfaces/project.fire.interface";
import { Observable } from "rxjs";

const PATH = 'projects';

@Injectable({
  providedIn:'root'
})
export class ProjectFireService{

  private _collection = collection(this.firestore, PATH);

  constructor(private firestore: Firestore){
  }

  // METODOS
  addProject(project: Project){
    const projectRef = this._collection;
    return addDoc(projectRef, project);
  }

  getProjects(): Observable<Project[]>{
    return collectionData(this._collection, {idField: 'id'}) as Observable<Project[]>;
  }

  async getProject(id: string){
    const snapshot = await getDoc(this.document(id));
    return snapshot.data() as Project;
  }

  private document(id: string) {
    return doc(this.firestore, `${PATH}/${id}`);
  }

  deleteProject(id: string) {
    const placeDocRef = doc(this.firestore, `projects/${id}`);
    return deleteDoc(placeDocRef);
  }
}


