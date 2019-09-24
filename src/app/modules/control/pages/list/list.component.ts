import { Component, OnInit } from '@angular/core';
import { ControlStub } from '../../control.stub';
import {ControlEnum} from '../../control.enum';
import {ControlItem} from '../../control.interface';

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

  constructor() { }

  ngOnInit() {
  }

}
