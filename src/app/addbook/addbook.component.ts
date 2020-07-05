import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  message: string;

  constructor(private libraryService: LibraryService) { }

  postaddBook(form: NgForm) {
    this.libraryService.postBook(form.value).subscribe(response => {
      console.log(response);
      form.reset();
      if (!response.error) {
        this.message = "New Book Added Successfully";
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
