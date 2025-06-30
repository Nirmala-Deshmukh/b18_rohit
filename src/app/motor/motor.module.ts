import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikeIncComponent } from './bike-inc/bike-inc.component';
import { MotorIncComponent } from './motor-inc/motor-inc.component';
import { Pipe2Pipe } from './Services/pipe2.pipe';
import { Dir1Directive } from './Services/dir1.directive';



@NgModule({
  declarations: [
    BikeIncComponent,
    MotorIncComponent,
    Pipe2Pipe,
    Dir1Directive
  ],
  imports: [
    CommonModule
  ]
})
export class MotorModule { }
