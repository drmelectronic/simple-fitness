import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { AuthService } from '../../../../shared/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  @Output() toggleNavigator = new EventEmitter();
  @Input() userLogged;

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  onToggled(e) {
    this.toggleNavigator.emit(e);
  }


}
