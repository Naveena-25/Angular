import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

import { AddbookComponent } from './addbook/addbook.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UserlistComponent } from './userlist/userlist.component';
import { BooklistComponent } from './booklist/booklist.component';
import { RequestlistComponent } from './requestlist/requestlist.component';
import { ReturnbookComponent } from './returnbook/returnbook.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { SearchbookPipe } from './searchbook.pipe';
import { RequestedbooksComponent } from './requestedbooks/requestedbooks.component';
import { SearchuserPipe } from './searchuser.pipe';
import { BorrowedbooksComponent } from './borrowedbooks/borrowedbooks.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    AddbookComponent,
    AdduserComponent,
    UserlistComponent,
    BooklistComponent,
    RequestlistComponent,
    ReturnbookComponent,
    UserloginComponent,
    UpdatebookComponent,
    SearchbookPipe,
    RequestedbooksComponent,
    SearchuserPipe,
    BorrowedbooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
