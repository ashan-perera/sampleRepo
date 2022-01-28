import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Student } from './student';
import { CoopzService } from 'src/app/services/coopz.service';
import { ExcelExportService } from 'src/app/services/excel-export.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
declare const require: any;
import jsPDF from 'jspdf';
require('jspdf-autotable');

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {

  @ViewChild('closeBtn', {static: false}) closeBtn: ElementRef;
  @ViewChild('content', { static: false }) content: ElementRef;

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

  constructor(private coopzService: CoopzService,
              private _excelExportService: ExcelExportService) { }

  ngOnInit() {
    this.paramObject.offset = 0;
    this.paramObject.limit = 5;
    // this.paramObject.firstName = "qwe";

    this.coopzService.listStudent(this.paramObject).subscribe((data: any) => {
      this.length = data.wholeListSize;
      this.studentList = data.object;
    });
  }

  // public downloadPDF() {

  //   let doc = new jsPDF();

  //   let specialElementHandlers = {
  //     '#editor': function(element, renderer) {
  //       return true;
  //     }
  //   };

  //   let content = this.content.nativeElement;

  //   doc.fromHTML(content.innerHTML, 15, 15, {
  //     'width': 190,
  //     'elementHandlers': specialElementHandlers
  //   });

  //   doc.save('test.pdf');

  // }

  head = [['Index No', 'Student Name', 'Address', 'Contact No']]

  data = [
    [1, 'ROBERT', 'SOFTWARE DEVELOPER', 'ENGINEERING'],
    [2, 'CRISTINAO','QA', 'TESTING'],
    [3, 'KROOS','MANAGER', 'MANAGEMENT'],
    [4, 'XYZ','DEVELOPER', 'DEVLOPEMENT'],
    [5, 'ABC','CONSULTANT', 'HR'],
    [73, 'QWE','VICE PRESIDENT', 'MANAGEMENT'],
  ]

  createPdf() {
    var doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('My Team Detail', 11, 8);
    doc.setFontSize(11);
    doc.setTextColor(100);

    (doc as any).autoTable({
      head: this.head,
      body: this.data,
      theme: 'plain',
      didDrawCell: data => {
        console.log(data.column.index)
      }
    })

    // below line for Open PDF document in new tab
    doc.output('dataurlnewwindow')

    // below line for Download PDF document  
    doc.save('myteamdetail.pdf');
  }

  displayTable = false;
  val1: any;
  name = 'Angular';
  grossItems = {
    "propertyName": "Testing",
    "budgetYear": 2017,
    "actualOccupancy": 43556.0,
    "actualTotal": {
      "category": null,
      "baseAmount": 736.0,
      "grossUpAmount80": 736.0,
      "grossUpAmount85": 736.0,
      "grossUpAmount90": 736.0,
      "grossUpAmount95": 736.0,
      "grossUpAmount100": 736.0,
      "expenses": null
    },

    "actualExpenses": [
      {
        "category": "Property Tax",
        "baseAmount": 435.0,
        "grossUpAmount80": 435.0,
        "grossUpAmount85": 435.0,
        "grossUpAmount90": 435.0,
        "grossUpAmount95": 435.0,
        "grossUpAmount100": 435.0,
        "expenses": [
          {
            "name": null,
            "category": "Property Tax",
            "baseAmount": 435.0,
            "fixedPercentage": 435.0,
            "grossUpAmount80": 435.0,
            "grossUpAmount85": 435.0,
            "grossUpAmount90": 435.0,
            "grossUpAmount95": 435.0,
            "grossUpAmount100": 435.0
          },
          {
            "name": null,
            "category": "Property Tax",
            "baseAmount": 0.0,
            "fixedPercentage": 0.0,
            "grossUpAmount80": 0.0,
            "grossUpAmount85": 0.0,
            "grossUpAmount90": 0.0,
            "grossUpAmount95": 0.0,
            "grossUpAmount100": 0.0
          },
          {
            "name": null,
            "category": "Property Tax",
            "baseAmount": 0.0,
            "fixedPercentage": 0.0,
            "grossUpAmount80": 0.0,
            "grossUpAmount85": 0.0,
            "grossUpAmount90": 0.0,
            "grossUpAmount95": 0.0,
            "grossUpAmount100": 0.0
          }
        ]
      },
      {
        "category": "Other Prop Expenses_test",
        "baseAmount": 234.0,
        "grossUpAmount80": 234.0,
        "grossUpAmount85": 234.0,
        "grossUpAmount90": 234.0,
        "grossUpAmount95": 234.0,
        "grossUpAmount100": 234.0,
        "expenses": [
          {
            "name": null,
            "category": "Other Prop Expenses_test",
            "baseAmount": 234.0,
            "fixedPercentage": 56.0,
            "grossUpAmount80": 234.0,
            "grossUpAmount85": 234.0,
            "grossUpAmount90": 234.0,
            "grossUpAmount95": 234.0,
            "grossUpAmount100": 234.0
          }
        ]
      }
    ],
  }
  rowsParent: any = [];
  rows: any = [];
  actualTotal: any = [];
  actual: any = [];
  bold: any;

  // captureScreen() {
  //   this.displayTable = true;
  //   let grossItems = [];
  //   grossItems.push(this.grossItems);
  //   var doc = new jsPDF();
  //   var col = [
  //     "Actual",
  //     "Based Amount",
  //     "Fixed %",
  //     "80% GU ",
  //     "85% GU",
  //     "90% GU",
  //     "95% GU",
  //     "100% GU"
  //   ];
  //   var col1 = [
  //     "Estimate",
  //     "Based Amount",
  //     "Fixed %",
  //     "80% GU ",
  //     "85% GU",
  //     "90% GU",
  //     "95% GU",
  //     "100% GU"
  //   ];
  //   // Actual Total
  //   for (let i = 0; i < this.actualTotal.length; i++) {
  //     var temp = [];
  //     temp.push(this.actualTotal[i].category);
  //     for (let key in this.actualTotal[i]) {
  //       temp.push(this.actualTotal[i].baseAmount);
  //     }
  //   }
  //   this.actual.push(temp)
  //   // Actual Expenses
  //   var array = [];
  //   grossItems[0].actualExpenses.map(val => {
  //     this.val1 = { ...val };
  //     val.expenses.map(expense => {
  //       array.push(expense)
  //     })
  //     delete this.val1.expenses
  //     array.push(this.val1);
  //   })
  //   for (let i = 0; i < array.length; i++) {
  //     var temp = [];
  //     temp.push(array[i].category);
  //     for (let key in array[i]) {
  //       temp.push(array[i].baseAmount);
  //     }
  //     this.rows.push(temp)
  //   }
  //   const mergedArray = [...this.actual, ...this.rows]

  //   doc.setFont("Times New Roman");
  //   doc.setFontSize(10);
  //   doc.text('20', 10, grossItems[0].propertyName);
  //   doc.text(20, 30, "Budgeted Year:");
  //   doc.text(50, 30, JSON.stringify(grossItems[0].budgetYear));
  //   doc.setTextColor(0, 0, 0);
  //   doc.text(20, 40, "Actual Occupancy:");
  //   doc.text(55, 40, JSON.stringify(grossItems[0].actualOccupancy));
  //   doc.autoTable(col, mergedArray, {
  //     theme: "plain",
  //     startY: 45,
  //     margin: {
  //       top: 45
  //     },
  //     drawCell: function (cell, data) {
  //       console.log(data.table.rows,"dsahdas")
  //       var rows = data.table.rows;
  //       if (data.row.index == rows.length - 1) {
  //         doc.setFontStyle("bold");
  //       }
  //     },
  //     drawHeaderRow: (head, data) => {
  //       data.doc.setLineWidth(0.7);
  //       data.doc.setDrawColor(0, 0, 0); // draw black lines
  //       // Write the line at the top of header
  //       data.doc.line(
  //         data.cursor.x,
  //         data.cursor.y,
  //         data.cursor.x + data.table.width,
  //         data.cursor.y
  //       );
  //       // Write the line at the bottom of header
  //       data.doc.line(
  //         data.cursor.x,
  //         data.cursor.y + head.height,
  //         data.cursor.x + data.table.width,
  //         data.cursor.y + head.height
  //       );
  //     }
  //   });

  //   document
  //     .getElementById("convertToPdf")
  //     .setAttribute("src", doc.output("datauri"));
    
  // }

  generatePdf(){
    const documentDefinition = { content: 'This is an sample PDF printed with pdfMake' };
    pdfMake.createPdf(documentDefinition).open();
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

  exportAsXLSX(): void {
    this._excelExportService.exportAsExcelFile(this.studentList, 'sample');
  }

}
