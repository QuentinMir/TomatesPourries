import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isConnected!: boolean;
  tokenSub!: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // getting token from service and listening to it
    this.tokenSub = this.authService.token.subscribe(
      (newTokenValue: string) => {
        this.isConnected = !!newTokenValue;
      }
    );
  }

  onClickSignOut(): void {
    this.authService.signOut().then(() => {
      // redirect to login view
      this.router.navigateByUrl('');
    });
  }

  ngOnDestroy(): void {
    this.tokenSub.unsubscribe();
  }
}
