import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  myURL = 'http://localhost:8080/librarymanagementspringrest/';
  userId;
  message;
  constructor(private http: HttpClient) {

  }
  postData(user) {
    return this.http.post<any>(`${this.myURL}addUser`, user);
  }
  postBook(book) {
    return this.http.post<any>(`${this.myURL}addBook`, book);
  }
  getUsers() {
    return this.http.get<any>(`${this.myURL}getAllUsers`);
  }
  getBooks() {
    return this.http.get<any>(`${this.myURL}getAllBooks`);
  }
  postUpdateBook(book) {
    return this.http.post<any>(`${this.myURL}updateBook`, book)
  }
  postRequest(request) {
    console.log(request,this.getUserId);
    return this.http.post<any>(`${this.myURL}requestBook/${this.getUserId()}`, request);
  }
  getRequests() {
    return this.http.get<any>(`${this.myURL}getAllRequests`);
  }

  getRequestedBooks() {
    return this.http.get<any>(`${this.myURL}getAllRequestedBooks`);
  }
  postIssue(issue) {
    return this.http.post<any>(`${this.myURL}issueBook`, issue);
  }

  getBorrowedBooks() {
    return this.http.get<any>(`${this.myURL}userBooks/${this.getUserId()}`);
  }

  postReturn(returnBook) {
    return this.http.post<any>(`${this.myURL}returnBook/${this.getUserId()}`, returnBook)
  }
  getReturnedBooks() {
    return this.http.get<any>(`${this.myURL}getAllReturnedBooks`);
  }
  postReceiveBook(book) {
    return this.http.post<any>(`${this.myURL}receiveBook`, book);
  }
  deleteBook(book) {
    return this.http.delete<any>(`http://localhost:8080/librarymanagementspringrest/deleteBook/${book.bookId}`);
  }
  getSearch(book){
    return this.http.get<any>(`${this.myURL}searchBook/${book.bookId}`);
  }
  postLogin(userDetails) {
    return this.http.post<any>('http://localhost:8080/librarymanagementspringrest/userLogin', userDetails);
  }
  isAdmin() {
    var role = localStorage.getItem('role');
    if (role == 'admin')
      return true;
    else
      return false;
  }
  isUser() {
    var role = localStorage.getItem('role');
    if (role == 'user')
      return true;
    else
      return false;
  }

  isLoggedIn() {
    var role = localStorage.getItem('role');
    if (role == 'user' || role == 'admin') {
      return true;
    } else {
      return false;
    }
  }
  isNotLoggedIn() {
    var role = localStorage.getItem('role');
    if (role != 'user' && role != 'admin') {
      return true;
    } else {
      return false;
    }
  }

  getUserId() {
    var user = JSON.parse(localStorage.getItem('userDetails'));
    return user.id;
  }

}
