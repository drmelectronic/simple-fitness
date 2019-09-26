import { Component, OnInit } from '@angular/core';
import { ControlStub } from '../../control.stub';
import {ControlEnum} from '../../control.enum';
import {ControlItem} from '../../control.interface';
import {ControlService} from '../../../../shared/services/control.service';
import {AuthService} from '../../../../shared/services/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  displayedColumns: ControlEnum.Time |
  ControlEnum.Weight |
  ControlEnum.Bmi |
  ControlEnum.BodyFat |
  ControlEnum.Muscle |
  ControlEnum.Calories |
  ControlEnum.Age |
  ControlEnum.VisceralFat[] = ControlStub.displayedColumns;

  dataSource: ControlItem[] = ControlStub.controlData;

  constructor(private controlService: ControlService, private authService: AuthService) { }

  ngOnInit() {
    this.authService.user$.subscribe(user => {
      this.controlService.setUser(user);
    });
    this.controlService.getControles().subscribe(controles => {
      console.log(controles);
      this.dataSource = controles;
    });
  }

}
