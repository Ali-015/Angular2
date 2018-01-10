import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HttpService {

  jsonPath = './tableData.json';

  constructor(private httpClient: HttpClient) { }


  getDataFromServer (loginForm: any) {

  return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }


  getJsonDataForTable () {

    return this.httpClient.get(this.jsonPath);
    // .map((res: any) => res.json())
    // .catch((error: any) => console.log(error));


  }

}
