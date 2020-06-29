import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  apiUrl = 'http://localhost:8080';

  constructor(private _httpClient: HttpClient) { }

  public generateToken(request) {
    return this._httpClient.post<string>(this.apiUrl + "/authenticate", request, { responseType: 'text' as 'json' });
  }

  public welcome(token) {
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenStr);
    return this._httpClient.get(this.apiUrl + "/", {headers, responseType: 'text' as 'json'});
  }

}
