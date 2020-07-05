import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  message:string;
  error:string;
  
  
  mySubscription:Subscription;
  constructor(private libraryService:LibraryService) { }
  
  postUser(form:NgForm){
    this.libraryService.postData(form.value).subscribe(response => {
      console.log(response);
      form.reset();
      if(!response.error) {
        this.message= response.message;
        setTimeout(() => {
          this.message = null;
        }, 4000);
      } else {
        this.error = response.error;
        setTimeout(() => {
          this.message = null;
        }, 4000);
      }
    }, error => {
      console.log(error);
      this.message =error;
      ;
    });
  }

  ngOnInit(): void {
  
}
}
