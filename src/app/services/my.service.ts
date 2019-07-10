import { Injectable } from '@angular/core';
//import 'Http' to hit the server
//import 'Response' as response from server is 'Response' type
import { 
  Http,
  Response
} from '@angular/http';
//import rxjs/Rx as map(),catch() and throw function available in the package
import "rxjs/Rx";
//import 'Observable' to throw the error
import { Observable } from 'rxjs/Observable';

//Decorator that marks a class as available to Injector for creation.
@Injectable()
export class MyService {

  constructor(private _http:Http) { }
  //obj from component
  public myFun(obj):any{
    return this._http.post("http://test-routes.herokuapp.com/test/uppercase",obj)
    //map to catch the positive observable response from server
    .map((res:Response)=>{
      return res.json();
    })
    .catch(this._handleError); //catch to catch the negative/error observable response from server
  }
  public _handleError(err){
    console.error("Error raised"+err);
    //throw error with the help of Observable
    return Observable.throw(err || "internal server error")
  }
}
