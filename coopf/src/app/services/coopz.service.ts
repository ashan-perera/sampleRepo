import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoopzService {

  apiUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  listStudent(paramObject: any){
    return this.httpClient.get(this.apiUrl + '/student/listStudent', {params : paramObject});
  }

  listAllStudent(){
    return this.httpClient.get(this.apiUrl + '/student');
  }

  getStudentById(id): any {
    return this.httpClient.get(this.apiUrl + '/student/' + id);
  }

  saveStudent(studentObject){

    return this.httpClient.post(this.apiUrl + '/student', studentObject);

  }

  updateStudent(studentEditObject){

    return this.httpClient.put(this.apiUrl + '/student', studentEditObject);

  }

  deleteStudent(keyId){

    return this.httpClient.delete(this.apiUrl + '/student/' + keyId);

  }

}
