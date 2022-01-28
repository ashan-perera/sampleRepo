import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartService {

  apiUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  getAllParts(){
    return this.httpClient.get(this.apiUrl + '/part');
  }

  savePart(part){
    return this.httpClient.post(this.apiUrl + '/part', part);
  }

  updatePart(part){
    return this.httpClient.put(this.apiUrl + '/part', part);
  }

  deletePart(id){
    return this.httpClient.delete(this.apiUrl + '/part/' + id);
  }

}
