import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material';

@NgModule({
    declarations: [AdminComponent],
    imports: [
      AdminRoutingModule,
      CommonModule
    ]
  })

export class AdminModule { }
