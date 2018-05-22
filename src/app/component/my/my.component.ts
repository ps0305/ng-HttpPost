import { Component, OnInit } from '@angular/core';
//imporing custom service
import {MyService} from '../../services/my.service';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit {

    private data:any;

//create reference with constructor
  constructor(private _service:MyService) { }

  ngOnInit() {}
    //creating clickMe function to get 'obj' from view
    public clickMe(obj):any{
      this._service.myFun(obj).subscribe(res=>this.data=res,
      err=>console.log(err));
    }
  

}
