import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getLocaleEraNames } from '@angular/common';
import { AreaModel } from '../models/area';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


constructor( private http: HttpClient ) {}

url = "http://ap.bsdenterprise.com:8095/apimonitor/api/grid/GetAreasGrid?Id=1"

getAreas(){

  //return this.http.get<AreaModel[]>(this.url)
 return this.http.get(this.url)

}

}
