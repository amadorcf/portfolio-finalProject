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



}


