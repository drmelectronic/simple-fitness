import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { ControlService } from '../../../../shared/services/control.service';
import { ControlItem } from '../../../../modules/control/control.interface';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  controlForm: FormGroup = new FormGroup({
    time: new FormControl(),
    weight: new FormControl(),
    bmi: new FormControl(),
    bodyFat: new FormControl(),
    muscle: new FormControl(),
    calories: new FormControl(),
    age: new FormControl(),
    visceralFat: new FormControl()
  });

  constructor(private controlService: ControlService) { }

  ngOnInit() {
  }

  public createControl() {
    console.log('createControl');
    if (this.controlForm.valid) {
      this.controlService.addControl(this.controlForm.getRawValue());
    }
  }
}
