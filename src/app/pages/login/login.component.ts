import { AuthenticationService } from '../../services/authentication/authentication.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ihd-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(public authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.email, this.password)
      .then(value => {
        console.log('Nice, it worked!');
        this.router.navigateByUrl('/home');
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  logout() {
    this.authService.logout();
  }

}
