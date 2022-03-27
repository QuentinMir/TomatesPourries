import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token: BehaviorSubject<string>;

  constructor() {
    this.token = new BehaviorSubject<string>('');
  }

  // method to connect the user using the token
  signin(user: string, password: string): Promise<void> {
    return new Promise<void>((res, rej) => {
      if (user === 'Administrateur' && password === 'azerty') {
        //new token value
        this.token.next('uneBonneNoteStpThomas');
        res(); //success
      } else {
        rej("Nom d'utilisateur ou mot de passe incorrect"); //failure
      }
    });
  }

  //method to sign out the user
  signOut(): Promise<void> {
    return new Promise<void>((res, rej) => {
      // emptying the token string
      this.token.next('');
      res(); //success
    });
  }
}
