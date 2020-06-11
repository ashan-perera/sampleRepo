import { ItemsRoutingModule } from './items-routing.module';
import { NgModule } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material';

@NgModule({
    declarations: [ItemComponent],
    imports: [
      ItemsRoutingModule,
      CommonModule,
      MaterialModule
    ]
  })
  export class ItemsModule { }