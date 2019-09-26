import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(public authService: AuthService) {
  }

  public isLogged = false;
  public user;

  ngOnInit() {
  }

  signOut() {
    this.authService.signOut();
  }

  onCheckUser(): void {
    this.user = this.authService.getCurrentUser()
    if (this.user == null) {
      this.isLogged = false;
    } else {
      this.isLogged = true;
    }
  }
}
