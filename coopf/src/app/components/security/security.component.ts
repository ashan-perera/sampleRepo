import { Component, OnInit } from '@angular/core';
import { JwtClientService } from 'src/app/services/jwt-client.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {

  authRequest: any = {
    "userName": "javatechie",
    "password": "password"
  }

  response:any;

  constructor(private _jwtClientService: JwtClientService) { }

  ngOnInit() {
    this.getAccessToken(this.authRequest);
  }

  public getAccessToken(authRequest){
    let resp = this._jwtClientService.generateToken(authRequest);
    resp.subscribe(data => this.accessApi(data));
  }

  public accessApi(token){
    let resp = this._jwtClientService.welcome(token);
    resp.subscribe(data => this.response = data);
  }

}
