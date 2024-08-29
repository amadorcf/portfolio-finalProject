import { Injectable } from "@angular/core";
import { Firestore, collection, addDoc, collectionData, doc, getDoc, deleteDoc, updateDoc, orderBy, query } from "@angular/fire/firestore";
import Project from "../interfaces/project.fire.interface";
import { Observable } from "rxjs";

const PATH = 'projects';

@Injectable({
  providedIn:'root'
})
export class ProjectFireService{

  //private _collection = collection(this.firestore, PATH);
  private _collection = collection(this.firestore, PATH);


  constructor(private firestore: Firestore){
  }

  // METODOS
  addProject(project: Project){
    const projectRef = this._collection;
    return addDoc(projectRef, project);
  }

  getProjects(): Observable<Project[]>{
    const orderedQuery = query(this._collection, orderBy('date','desc'));

    return collectionData(orderedQuery, {idField: 'id'}) as Observable<Project[]>;
  }

  async getProject(id: string){

    try {
      const snapshot = await getDoc(this.document(id));
      return snapshot.data() as Project;
    } catch (error) {
      //catch error
      return undefined;
    }

  }

  private document(id: string) {
    return doc(this.firestore, `${PATH}/${id}`);
  }

  deleteProject(id: string) {
    const placeDocRef = doc(this.firestore, `projects/${id}`);
    return deleteDoc(placeDocRef);
  }

  updateProject(id: string, project: Project) {
    return updateDoc(this.document(id), { ...project });
  }
}


