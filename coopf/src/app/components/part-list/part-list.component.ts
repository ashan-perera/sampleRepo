import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Part } from 'src/app/models/part';
import { PartService } from 'src/app/services/part.service';
import * as $ from "jquery";
import 'datatables.net';
import 'datatables.net-bs4';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteDialogBoxComponent } from 'src/app/modals/delete-dialog-box/delete-dialog-box.component';

@Component({
  selector: 'app-part-list',
  templateUrl: './part-list.component.html',
  styleUrls: ['./part-list.component.scss']
})
export class PartListComponent implements OnInit {

  public showPartForm: boolean = false;
  public data: any;
  public partComp: any;

  public partList: Array <Part>;
  dataTable: any;

  constructor(
    private _partService: PartService,
    private chRef: ChangeDetectorRef,
    private modalService: NgbModal
    ) { }

  ngOnInit() {
    this.refreshDataSource();
  }

  refreshDataSource() { 
    if(this.dataTable){
      this.dataTable.destroy();
    }
    this._partService.getAllParts().subscribe((data: any) => {
      let part = new Part();
      this.partList = part.mapData(data.object)
      
      this.chRef.detectChanges();
      const table: any = $('#data_table');
      this.dataTable = table.DataTable();
    });
  }

  onOpen() {
    this.data = null;
    this.showPartForm = true;
  }

  openEditDialog(part: Part) {
    this.data = part;
    this.showPartForm = true;
    window.scrollTo(0, 0);
  }

  openDeleteDialog(part: Part) {
    const modalRef = this.modalService.open(DeleteDialogBoxComponent);
    modalRef.result.then(data => { }, (result) => {

      if (result) {
        // this.ngxLoader.start();
        this._partService.deletePart(part.id).subscribe(res => {
          // this.notifications.successDelete();
          // this.ngxLoader.stop();
          this.refreshDataSource();
        }, error => {

          // this.notifications.errDelete();

          // this.ngxLoader.stop();
        });
      }
    });

  }

  closeForm() {
    this.data = null;
    this.showPartForm = false;
  }

  saveData(data: any) {

    let part = new Part();
    part.id = data.formData.idCtrl;
    part.name = data.formData.nameCtrl;
    part.description = data.formData.descriptionCtrl;
    part.inactiveReason = data.formData.inactiveReasonCtrl;
    part.isActive = data.formData.isActiveCtrl;
    part.createdDateTime = data.formData.createdDateTimeCtrl;
    part.modifiedDateTime = data.formData.modifiedDateTimeCtrl;



    // this.ngxLoader.start();

    if (data.isEdit) {
      this._partService.updatePart(part).subscribe(res => {

        // this.notifications.successUpdate();
        // this.ngxLoader.stop();
        this.showPartForm = false;
        this.partComp.resetForm();
        this.refreshDataSource();
      }, error => {
        // this.ngxLoader.stop();
        // this.notifications.errUpdate();
      });
    } else {
      this._partService.savePart(part).subscribe(res => {

        // this.notifications.successSave();
        // this.ngxLoader.stop();
        this.showPartForm = false;
        this.partComp.resetForm();
        this.refreshDataSource();
      }, error => {
        // this.notifications.errSave();
        // this.ngxLoader.stop();
      });
    }
  }

}
