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
    return this.httpClient.get(this.apiUrl + '/book/getAll');
  }

  getBookById(id): any {
    return this.httpClient.get(this.apiUrl + '/book/' + id);
  }

  saveBook(book){
    return this.httpClient.post(this.apiUrl + '/book/save', book);
  }

  savePages(pages){
    return this.httpClient.post('http://localhost:8080/page/save-pages', pages);
  }

  deleteBook(id){
    return this.httpClient.delete(this.apiUrl + '/book/' + id);
  }

  getAllBrands(){
    return this.httpClient.get('http://localhost:8081/brand/getAll');
  }

  saveBrand(brand){
    return this.httpClient.post(this.apiUrl + '/brand/save', brand);
  }

}
