import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibraryService } from '../library.service';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RoutingGuardService } from '../routing-guard.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  error: String;
  message:"";
  constructor(private routingGuardService: RoutingGuardService,
    private route: ActivatedRoute, private libraryService: LibraryService,
    private router: Router) { }

  ngOnInit(): void {
  }
  loginUser(form: NgForm) {
    this.libraryService.postLogin(form.value).subscribe(response => {
      console.log(response);
      if (response.error) {
        this.error = response.message;
        setTimeout(() => {
          this.error = null;
        }, 5000);
      } else {
        this.libraryService.userId = response.libraryUsers.id;
        console.log(this.libraryService.userId)
        form.reset();
        this.routingGuardService.setTempSession();
        if (response.libraryUsers.role == 'user') {
          localStorage.setItem('userDetails', JSON.stringify(response.libraryUsers));
          localStorage.setItem('role', response.libraryUsers.role);
         /// this.message=response.message;
          console.log("********************************************")
          this.router.navigateByUrl('/');
        } else if (response.libraryUsers.role == 'admin') {
          localStorage.setItem('role', response.libraryUsers.role);
          this.router.navigateByUrl('/');
        } else {

        }
      }
    });
  }

}
