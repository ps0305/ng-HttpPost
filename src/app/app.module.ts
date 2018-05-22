import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyComponent } from './component/my/my.component';
import { FormsModule} from '@angular/forms';
import { MyService } from './services/my.service';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    MyComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule
  ],
  providers: [MyService],
  bootstrap: [MyComponent]
})
export class AppModule { }
