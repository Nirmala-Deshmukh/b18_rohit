import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaxProtectComponent } from './max-protect/max-protect.component';
import { PersonalProtectComponent } from './personal-protect/personal-protect.component';
import { CustomPipe } from './Services/custom.pipe';
import { CustomDirDirective } from './Services/custom-dir.directive';



@NgModule({
  declarations: [
    MaxProtectComponent,
    PersonalProtectComponent,
    CustomPipe,
    CustomDirDirective
  ],
  imports: [
    CommonModule
  ]
})
export class HealthModule { }
