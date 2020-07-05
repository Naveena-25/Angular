import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  message = "";
  books;
  isAdminLogin: boolean;
  isUserLogin: boolean;
  requestbook: RequestInfo;
  searchText;
  fieldName = "bookTitle";
  update;


  constructor(private libraryService: LibraryService, private router: Router) {
    this.isAdminLogin = libraryService.isAdmin();
    this.isUserLogin = libraryService.isUser();
    this.getBooks();
  }

  getBooks() {
    this.message = "";
    return this.libraryService.getBooks().subscribe(response => {
      console.log(response);
      this.books = response.bookList;
    }, error => {
      console.log(error);
    })
  }

  deleteBook(book) {
    this.libraryService.deleteBook(book).subscribe(response => {
      console.log(response);
      if (response.error) {
        this.message = response.message;
      } else {
        this.message = response.error;
      }
      setTimeout(() => {
        this.message = null;
      }, 5000);

      this.getBooks();
    });
  }

  updateBook(book) {
    this.router.navigate(['/updatebook'], { queryParams: book });
  }
  postRequests(requestbook) {
    console.log(requestbook.bookId);
    this.libraryService.postRequest(requestbook).subscribe(response => {
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
