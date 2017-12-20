import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CommunicateService {

  constructor() { }

   public data1: any;
   public showLoader= false;
   private subject = new Subject<any>();

  set(data: any) {
     this.data1 = data;
  }

  get() {
    return this.data1;
  }

  loader(loaderValue: boolean) {
      this.showLoader = loaderValue;
  }

  getLoader() {
    return this.showLoader;
  }

  sendMessage(message: string) {
    this.subject.next({ text: message });
}

clearMessage() {
    this.subject.next();
}

getMessage(): Observable<any> {
    return this.subject.asObservable();
}

}
