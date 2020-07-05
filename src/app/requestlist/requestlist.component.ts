import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requestlist',
  templateUrl: './requestlist.component.html',
  styleUrls: ['./requestlist.component.css']
})
export class RequestlistComponent implements OnInit {
requests;
  constructor(private libraryService:LibraryService) {
   }

  ngOnInit(): void {
    this.getAllRequests();
   
  }
  getAllRequests(){
    return this.libraryService.getRequests().subscribe(response => {
      console.log(response);
      this.requests = response.requestList;
    }, error => {
      console.log(error);
    })
  }


}
