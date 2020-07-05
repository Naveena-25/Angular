import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-borrowedbooks',
  templateUrl: './borrowedbooks.component.html',
  styleUrls: ['./borrowedbooks.component.css']
})
export class BorrowedbooksComponent implements OnInit {
message:string;
isUserLogin: boolean;
isAdminLogin:boolean;
requests;
  constructor(private libraryService:LibraryService) {
    this.getuserBooks();
    this.isUserLogin = libraryService.isUser();
     } 
  
     getuserBooks() {
      this.message="";
      return this.libraryService.getBorrowedBooks().subscribe(response => {
        console.log(response);
        this.requests = response.requestList;
      }, error => {
        console.log(error);
      })
    }

  postReturnBook(returnBook) {
    this.libraryService.postReturn(returnBook).subscribe(response => {

      if (!response.error) {
        this.message = response.message;
        setTimeout(() => {
          this.message = null;
        }, 5000);
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
