import { Component, OnInit } from '@angular/core';
import { Student } from '../student/student';
import { Subscription } from '../../../../node_modules/rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CoopzService } from 'src/app/services/coopz.service';
import { ToastrService } from 'ngx-toastr';
import { Address } from 'src/app/models/address';

@Component({
  selector: 'app-manage-student',
  templateUrl: './manage-student.component.html',
  styleUrls: ['./manage-student.component.scss']
})
export class ManageStudentComponent implements OnInit {

  private sub: Subscription
  student: Student = new Student;
  address: Address = new Address;
  addresses: Address[] = [];
  studentList: any [];

  saveClick: boolean;
  updateClick: boolean;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private coopzService: CoopzService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(
      params => {
        const id = +params.get('id');

        if (id) {
          this.getProductById(id);
          this.updateClick = true;
        } else {
          this.saveClick = true;
        }
      }
    );
  }

  showSaveSuccess() {
    this.toastr.success('Record Successfully Saved!', 'Successful!');
  }

  showUpdateSuccess() {
    this.toastr.success('Record Successfully Updated!', 'Successful!');
  }

  showError() {
    this.toastr.error('Hello world!', 'Toastr fun!');
  }

  getProductById(id: number): void {
    this.coopzService.getStudentById(id).subscribe((data: any) => {
      this.student = data;
      this.address = data.addresses[0];

      if (data.dateOfBirth) {
        this.student.dateOfBirth = new Date(data.dateOfBirth);
      }
    })
  }

  onSaveClick(student): void {
    this.addresses.push(this.address);
    this.student.addresses = this.addresses;
    this.coopzService.saveStudent(student).subscribe((data: any) => {

      if (data.reqStatus == "SUCCESS") {
        this.showSaveSuccess();
      } else if (data.reqStatus == "ERROR") {
        this.showError();
      }
    });

    this.router.navigateByUrl('/student');
  }

  onUpdateClick(student): void {
    this.coopzService.updateStudent(student).subscribe((data: any) => {

      if (data.reqStatus == "SUCCESS") {
        this.showUpdateSuccess();
      } else {
        this.showError();
      }
    });
    this.router.navigateByUrl('/student');
  }

}
