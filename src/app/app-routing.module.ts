import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { AddbookComponent } from './addbook/addbook.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UserlistComponent } from './userlist/userlist.component';
import { BooklistComponent } from './booklist/booklist.component';
import { RequestlistComponent } from './requestlist/requestlist.component';
import { ReturnbookComponent } from './returnbook/returnbook.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminauthGuard } from './adminauth.guard';
import { UserauthGuard } from './userauth.guard';

import { UpdatebookComponent } from './updatebook/updatebook.component';
import { RequestedbooksComponent } from './requestedbooks/requestedbooks.component';
import { BorrowedbooksComponent } from './borrowedbooks/borrowedbooks.component';


const routes: Routes = [
  { path: 'userlogin', component: UserloginComponent },
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },

  { path: 'contact', component: ContactComponent },
  { path: 'adduser', component: AdduserComponent, canActivate: [AdminauthGuard] },
  { path: 'addbook', component: AddbookComponent, canActivate: [AdminauthGuard] },
  { path: 'userlist', component: UserlistComponent, canActivate: [AdminauthGuard] },
  { path: 'booklist', component: BooklistComponent },
  { path:'updatebook', component:UpdatebookComponent,  canActivate: [AdminauthGuard] },
  { path: 'requestedbooks', component: RequestedbooksComponent, canActivate: [AdminauthGuard] },
  { path: 'requestlist', component: RequestlistComponent, canActivate: [AdminauthGuard] },
  { path: 'borrowedbooks', component: BorrowedbooksComponent,canActivate:[UserauthGuard]},
  { path: 'returnbook', component: ReturnbookComponent,canActivate:[AdminauthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
