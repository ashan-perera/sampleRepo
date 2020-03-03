import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Student } from './student';
import { CoopzService } from 'src/app/services/coopz.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {

  @ViewChild('closeBtn', {static: false}) closeBtn: ElementRef;

  student: Student = new Student;
  studentList: any [];

  length: any;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 20];
  limitList = [5, 10, 20];

  paramObject: any = {};

  offset: any;
  limit: any;
  currentOffset: any;

  saveClick: boolean;
  updateClick: boolean;

  constructor(private coopzService: CoopzService) { }

  ngOnInit() {
    this.paramObject.offset = 0;
    this.paramObject.limit = 5;
    // this.paramObject.firstName = "qwe";

    this.coopzService.listStudent(this.paramObject).subscribe((data: any) => {
      this.length = data.wholeListSize;
      this.studentList = data.object;
    });
  }

  onSearchClick() {
    this.paramObject.firstName = "Lak";
  }

  onPageChange(e){

    if(e.pageIndex - e.previousPageIndex > 0){

      console.log("Next");
      //this.spinner.show();

      if(e.previousPageIndex == 0){
        this.currentOffset = this.paramObject.limit;
      }

      this.paramObject.offset = this.currentOffset;
      this.coopzService.listStudent(this.paramObject).subscribe((data: any) => {

        this.studentList = data.object;

        if(this.studentList.length != 0){
          this.length = data.wholeListSize;
        }
        
      }
       
      );

      this.currentOffset = this.currentOffset + this.paramObject.limit;
      //this.spinner.hide();

    }else if(e.pageIndex - e.previousPageIndex < 0){

      console.log("Previous");
      //this.spinner.show();

      this.paramObject.offset = this.currentOffset - this.paramObject.limit - this.paramObject.limit;

      this.coopzService.listStudent(this.paramObject).subscribe((data: any) => {

        this.studentList = data.object;

        if(this.studentList.length != 0){
          this.length = data.wholeListSize;
        }
        
      }
       
      );

      this.currentOffset = this.currentOffset - this.paramObject.limit;

    }
      
    this.pageIndex = e.pageIndex;

  }

  listAllStudent() {

    this.coopzService.listAllStudent().subscribe((data: any) => {
      this.studentList = data;
    });

  }

  onAddClick() {

    this.onCloseClick();
    this.saveClick = true;
    this.updateClick = false;

  }

  // onSaveClick(student): void {

  //   this.coopzService.saveStudent(student).subscribe((data: any) => {});
  //   this.closeBtn.nativeElement.click();

  // }

  // onEditClick(student): void {

  //   this.saveClick = false;
  //   this.updateClick = true;

  //   this.student = student;

  // }

  // onUpdateClick(student): void {

  //   this.coopzService.updateStudent(student).subscribe((data: any) => {});
  //   this.closeBtn.nativeElement.click();

  // }

  onDeleteClick(studentId) {

    this.coopzService.deleteStudent(studentId).subscribe((data: any) => {
    });

  }

  onCloseClick() {

    this.student = new Student();
    console.log("ffdhgfdhgfdgf");
    

  }

}
