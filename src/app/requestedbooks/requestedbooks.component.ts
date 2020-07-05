import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-requestedbooks',
  templateUrl: './requestedbooks.component.html',
  styleUrls: ['./requestedbooks.component.css']
})
export class RequestedbooksComponent implements OnInit {
message:string;
requests;
error:string;
isAdminLogin :boolean;
  constructor(private libraryService:LibraryService) {
    this.getReqBooks();
    this.isAdminLogin = libraryService.isAdmin();
   }

  getReqBooks() {
    this.message="";
    return this.libraryService.getRequestedBooks().subscribe(response => {
      console.log(response);
      this.requests = response.requestList;
    }, error => {
      console.log(error);
    })
  }
  postIssueBook(request){
    this.libraryService.postIssue(request).subscribe(response => {
      console.log(response);
      
      if(!response.error) {
        this.message = response.message;
        setTimeout(() => {
          this.message = null;
        }, 4000);
      } else {
        this.message = response.message;
        setTimeout(() => {
          this.message = null;
        }, 4000);
      }
    }, error => {
      console.log(error);
    });
  }
  ngOnInit(): void {
  }

}
