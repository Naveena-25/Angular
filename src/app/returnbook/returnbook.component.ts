import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-returnbook',
  templateUrl: './returnbook.component.html',
  styleUrls: ['./returnbook.component.css']
})
export class ReturnbookComponent implements OnInit {

  message: string;
  error: string;
  requests;
  isAdminLogin :boolean;
    constructor(private libraryService:LibraryService) {
      this.getReturnedBooks();
      this.isAdminLogin = libraryService.isAdmin();
     } 
  
     getReturnedBooks() {
      this.message="";
      return this.libraryService.getReturnedBooks().subscribe(response => {
        console.log(response);
        this.requests = response.requestList;
      }, error => {
        console.log(error);
      })
    }
  postReceiveBook(book){
      this.libraryService.postReceiveBook(book).subscribe(response => {
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
