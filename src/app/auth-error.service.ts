import { Injectable } from '@angular/core';

@Injectable()
export class AuthErrorService {

  constructor() { }

  toString() {
    return 'You are not authorized to view this content!!!';
}

}
