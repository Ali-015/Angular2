import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HttpService {

  constructor(private httpClient: HttpClient) { }


  getDataFromServer (loginForm: any) {

  return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }

}
