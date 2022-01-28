import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Part } from 'src/app/models/part';
import { PartService } from 'src/app/services/part.service';

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.scss']
})
export class PartComponent implements OnInit {

  @Input() data: any;
  @Output() save: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();

  public btnText = '';
  public isEdit = false;
  public hideInactiveReason = true;

  partFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _partService: PartService
  ) { }

  ngOnInit() {
    this.setForm();
  }

  ngOnChanges(change: any) {
    this.setForm();
    this.setValuesToForm();
  }

  resetForm(){
    this.partFormGroup.reset();
  }

  saveData() {

    if (this.hideInactiveReason) {
      this.partFormGroup.controls['isActiveCtrl'].setValue(true);
    } else {
      this.partFormGroup.controls['isActiveCtrl'].setValue(false);
    }

    // if (this.partFormGroup.invalid)
    // return

    let data = {
      'formData': this.partFormGroup.value,
      'isEdit': this.isEdit
    };
    this.save.emit(data);
  }

  setForm() {
    this.partFormGroup = this.formBuilder.group({
      idCtrl: ['0'],
      nameCtrl: ['', Validators.compose([Validators.required, Validators.maxLength(100), Validators.pattern('[a-zA-Z ]*')])],
      descriptionCtrl: ['', Validators.compose([Validators.required, Validators.maxLength(500)])],
      isActiveCtrl: [true],
      inactiveReasonCtrl: [''],
      createdDateTimeCtrl: [''],
      modifiedDateTimeCtrl: ['']
    });
  }

  setValuesToForm() {
    if (this.data) {
      this.isEdit = true;
      this.btnText = 'Update';
      this.partFormGroup.controls['idCtrl'].setValue(this.data.id);
      this.partFormGroup.controls['nameCtrl'].setValue(this.data.name);
      this.partFormGroup.controls['descriptionCtrl'].setValue(this.data.description);
      this.partFormGroup.controls['isActiveCtrl'].setValue(this.data.isActive);
      this.partFormGroup.controls['inactiveReasonCtrl'].setValue(this.data.inactiveReason);
      this.partFormGroup.controls['createdDateTimeCtrl'].setValue(this.data.createdDateTime);
      this.partFormGroup.controls['modifiedDateTimeCtrl'].setValue(this.data.modifiedDateTime);

      if (this.data.isActive == 'true')
        this.hideInactiveReason = true;
      else
        this.hideInactiveReason = false;

      this.validateInactiveReason();

    } else {
      this.isEdit = false;
      this.hideInactiveReason = true;
      this.btnText = 'Save';
    }
  }

  validateInactiveReason() {
    if (!this.hideInactiveReason) {
      this.partFormGroup.controls['inactiveReasonCtrl'].setValidators([Validators.compose([Validators.required, Validators.maxLength(100)])]);
      this.partFormGroup.controls['inactiveReasonCtrl'].updateValueAndValidity();
    } else {
      this.partFormGroup.controls['inactiveReasonCtrl'].clearValidators();
      this.partFormGroup.controls['inactiveReasonCtrl'].updateValueAndValidity();
    }
  }

  enableInactiveReason(isActive: boolean) {
    this.hideInactiveReason = !isActive;
    this.validateInactiveReason();
  }

  cancelForm() {
    this.partFormGroup.reset();
    this.cancel.emit(null);
  }

}
