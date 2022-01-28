import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteDialogBoxComponent } from './delete-dialog-box.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [DeleteDialogBoxComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    DeleteDialogBoxComponent
  ],
  entryComponents: [
    DeleteDialogBoxComponent
  ]
})
export class DeleteDialogBoxModule { }
