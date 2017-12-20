import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';


@Injectable()

export class CustomHttpInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        console.log('intercepted request ... ');

        // console.log(req.headers);
        
        // Clone the request to add the new header.
        const authReq = req.clone({ headers: req.headers.set("newKey", "newValue")});
        
        console.log("Sending request with new headers now ...");

        // console.log(authReq.headers);
        
        //send the newly created request
        return next.handle(authReq)
        .map((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
              // do stuff with response and headers you want
            //   console.log(event);
            }
            return event;
          })
        .catch((error, caught) => {
        //intercept the respons error and displace it to the console
        // console.log("Error Occurred");
        console.log(error);
        //return the error to the method that called it
        return Observable.throw(error);
        }) as any;
        }
}
