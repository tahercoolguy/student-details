import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Response } from './response';

import { Data } from './data';
import { Response1 } from './Response1';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class HttpcallService {
 
  constructor(private http:HttpClient) { 
  
  }
  getAllStudents() : Observable<Response> 
  {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    const fd = new FormData();
    fd.append('Type', 'GetAllRecords');
  return  this.http.post<Response>("http://localhost:8080/StudentApi/",fd, {headers: headers } );
  }

  InsertStudents(data:Data) : Observable<Response> 
  {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    const fd = new FormData();
    fd.append('Type', 'Insert');
    fd.append('Name', data.Name);
    fd.append('Address', data.Addres);
    fd.append('Telephone', data.Telephone);
    fd.append('Standard', data.Standard);
    fd.append('Roll_Number', data.Roll_Number);
  return  this.http.post<Response>("http://localhost:8080/StudentApi/",fd, {headers: headers } );
  }

  UpdateStudents(data:Data) : Observable<Response> 
  {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    const fd = new FormData();
    fd.append('Type', 'Update');
    fd.append('Name', data.Name);
    fd.append('Address', data.Addres);
    fd.append('Telephone', data.Telephone);
    fd.append('Standard', data.Standard);
    fd.append('Roll_Number', data.Roll_Number);
    fd.append('student_id', data.student_id.toString());
  return  this.http.post<Response>("http://localhost:8080/StudentApi/",fd, {headers: headers } );
  }

  
  DeleteStudents(data:Data) : Observable<Response> 
  {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    const fd = new FormData();
    fd.append('Type', 'Delete');
    fd.append('student_id', data.student_id.toString());
  return  this.http.post<Response>("http://localhost:8080/StudentApi/",fd, {headers: headers } );
  }

  SearchStudents(data:Data) : Observable<Response1> 
  {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    const fd = new FormData();
    fd.append('Type', 'Search');
    fd.append('student_id', data.student_id.toString());
  return  this.http.post<Response1>("http://localhost:8080/StudentApi/",fd, {headers: headers } );
  }
  
}


