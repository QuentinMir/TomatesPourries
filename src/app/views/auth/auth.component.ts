import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  user!: string;
  password!: string;
  errMsg!: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.user = 'Administrateur';
    this.password = 'azerty';
  }
  onSubmitAuthForm() {
    //reset fiels
    this.errMsg = '';

    this.authService
      .signin(this.user, this.password)
      .then(() => {
        // if authentification successful user is send to the series list view
        this.router.navigateByUrl('/series');
      })
      .catch((errMsg) => {
        this.errMsg = errMsg;
      });
  }
}
