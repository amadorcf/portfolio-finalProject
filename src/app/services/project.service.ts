import { UploadService } from './upload.service';
import { Project } from './../models/project';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from "./global";

@Injectable()
export class ProjectService{
  public url:string | undefined;

  constructor(private _http: HttpClient){
    this.url = Global.url;
  }

  testService(){
    return "Probando probando"
  }

	saveProject(project: Project): Observable<any>{
		let params = JSON.stringify(project);
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.post(this.url+'save-project', params, {headers: headers});
	}

  getProjects(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.get(this.url+'projects', {headers: headers});
	}

  getProject(id:any): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.get(this.url+'project/'+id, {headers: headers});
	}

  deleteProject(id:any): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.delete(this.url+'delete-project/'+id, {headers: headers});
  }

  updateProject(project: Project): Observable<any>{
    let params = JSON.stringify(project);
    let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.put(this.url+'update-project/'+project._id, params, {headers: headers});
  }
}


