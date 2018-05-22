import { Injectable } from '@angular/core';
//import 'Http' to hit the server
//import 'Response' as response from server is 'Response' type
import { Http, Response} from '@angular/http';
//import rxjs/Rx as map(),catch() and throw function available in the package
import "rxjs/Rx";
//import 'Observable' to throw the error
import { Observable} from 'rxjs/Observable';


@Injectable()
export class MyService {

  constructor() { }

}
