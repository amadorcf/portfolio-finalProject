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

}

