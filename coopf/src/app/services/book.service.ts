import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from 'src/app/shared/message';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  apiUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  bookAuthService() {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('uname' + ':' + 'pword') });
    return this.httpClient.get<Message>('http://localhost:8080/book', {headers});
  }

  getAllBook(){
    return this.httpClient.get(this.apiUrl + '/book');
  }

  getBookById(id): any {
    return this.httpClient.get(this.apiUrl + '/book/' + id);
  }

  saveBook(book){
    return this.httpClient.post(this.apiUrl + '/book', book);
  }

  deleteBook(id){
    return this.httpClient.delete(this.apiUrl + '/book/' + id);
  }

}
