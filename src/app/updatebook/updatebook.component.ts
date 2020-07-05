import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibraryService } from '../library.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {
  message: String;
  update;
  isAvailable: boolean;
  bookId: Number;
  author: String;
  bookName : String;
  publisher:string;
 

  constructor(private activatedRoute: ActivatedRoute, private libraryService: LibraryService ) {
    this.activatedRoute.queryParams.subscribe(data => {
      console.log('Book To be Updated', data);
      this.update = data;
      this.isAvailable = data.isAvailable;

    });
  }

  ngOnInit(): void {
  this.bookId = this.update.bookId;
  this.bookName = this.update.bookName;
  this.author = this.update.author;
  this.publisher = this.update.publisher;
  this.isAvailable = this.update.isAvailable;
  }
  postUpdate(form: NgForm){
    console.log("******************************************************");
    this.libraryService.postUpdateBook(form.value).subscribe(response => {
     
      console.log(response);
     
      if (!response.error) {
        this.message = response.message;
        setTimeout(() => {
          this.message = null;
        }, 4000);
      }
    }, error => {
      console.log(error);
    });
  
  }

}
