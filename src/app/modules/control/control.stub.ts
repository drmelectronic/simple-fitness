import { ControlItem } from './control.interface';
import { ControlEnum } from './control.enum';

export const ControlStub = {
  controlData: <ControlItem[]> [
    {
      weight: 55, bmi: 22.2, bodyFat: 19.9, muscle: 32.2, calories: 1584, age: 24, visceralFat: 5, time: new Date(2019, 9, 23, 9, 2, 3)},
    {weight: 54.8, bmi: 22.0, bodyFat: 19.7, muscle: 33.1, calories: 1574, age: 24, visceralFat: 5, time: new Date(2019, 9, 24, 8, 55, 32)},
    {weight: 55.1, bmi: 22.2, bodyFat: 20.1, muscle: 32.8, calories: 1594, age: 24, visceralFat: 5, time: new Date(2019, 9, 25, 9, 0, 13)},
  ],
  displayedColumns: <ControlEnum.Time |
    ControlEnum.Weight |
    ControlEnum.Bmi |
    ControlEnum.BodyFat |
    ControlEnum.Muscle |
    ControlEnum.Calories |
    ControlEnum.Age |
    ControlEnum.VisceralFat[]> [
    ControlEnum.Time,
    ControlEnum.Weight,
    ControlEnum.Bmi,
    ControlEnum.BodyFat,
    ControlEnum.Muscle,
    ControlEnum.Calories,
    ControlEnum.Age,
    ControlEnum.VisceralFat
  ]
};
