import {Component, OnInit} from '@angular/core';
import { AuthService} from '../../shared/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public isLogged = false;

  constructor(private authService: AuthService, private afsAuth: AngularFireAuth) { }

  ngOnInit() {
    this.authService.user$.subscribe(auth => {
      if (auth) {
        console.log('user logged');
        this.isLogged = true;
      } else {
        this.isLogged = false;
        console.log('NOT user logged');
      }
    });
  }


  onLoginGoogle() {
    this.authService.googleSignin();
  }
}
