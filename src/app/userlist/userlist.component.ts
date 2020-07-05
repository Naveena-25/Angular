import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  message:String;
  users;
  searchText;
  fieldName = "bookTitle";
  

  constructor(private libraryService:LibraryService) {
    
   }

  getAllUsers(){
    return this.libraryService.getUsers().subscribe(response => {
      console.log(response);
      this.users = response.userList;
    }, error => {
      console.log(error);
    })
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

}
