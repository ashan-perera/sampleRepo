import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  apiUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  getAllBook(){
    return this.httpClient.get(this.apiUrl + '/book');
  }

  getBookById(id): any {
    return this.httpClient.get(this.apiUrl + '/book/' + id);
  }

  saveBook(book){
    return this.httpClient.post(this.apiUrl + '/book', book);
  }

}
