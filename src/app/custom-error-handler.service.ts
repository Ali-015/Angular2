import { AuthErrorService } from './auth-error.service';
import { Injectable } from '@angular/core';
import {ErrorHandler} from '@angular/core';


@Injectable()
export class CustomErrorHandlerService extends ErrorHandler {

  constructor() {
    super();
}

public handleError(error: any): void {

  if (error.originalError instanceof AuthErrorService) {
    console.log(this);
} else {
  super.handleError(error);
}

}

}
