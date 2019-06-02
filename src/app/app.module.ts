import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { BookItemComponent } from './components/book-item/book-item.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BookItemComponent,
    routingComponents, 

  ],
  imports: [
    BrowserModule,   
    FormsModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
