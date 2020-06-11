import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Book } from '../book/book';
import { Page } from 'src/app/models/page';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { BookService } from 'src/app/services/book.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

@Component({
  selector: 'app-manage-book',
  templateUrl: './manage-book.component.html',
  styleUrls: ['./manage-book.component.scss']
})
export class ManageBookComponent implements OnInit {

  @ViewChild('UploadFileInput', { static: false }) uploadFileInput: ElementRef;
  fileUploadForm: FormGroup;
  fileInputLabel: string;

  private sub: Subscription

  book: Book = new Book();
  page: Page = new Page();
  // pageList: Array<Page> = [];
  pages: Page[] = [];
  pageFormGroup: FormGroup;

  constructor(private bookService: BookService,
              private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(
      params => {
        const id = +params.get('id');

        if (id) {
          this.getBookById(id);
          // this.updateClick = true;
        } else {
          // this.saveClick = true;
        }
      }
    );

    this.fileUploadForm = this.formBuilder.group({
      myfile: ['']
    });
  }

  getBookById(id: number): void {
    this.bookService.getBookById(id).subscribe((data: any) => {
      this.book = data;
      this.pages = data.pages;
    })
  }

  onSaveClick(book): void {
    this.book.pages = this.pages;
    this.bookService.saveBook(book).subscribe((data: any) => {});
    this.router.navigateByUrl('/book');
  }

  addPage(page): void {
    this.pages.push(page);
    this.page = new Page();
  }

  editPage(page): void {
    this.page = page;
    this.removePage(page);
  }

  removePage(page): void {
    this.pages = this.pages.filter(
      item => item !== page);
  }

  // onFileSelect(event) {
  //   let af = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel']
  //   if (event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     // console.log(file);

  //     if (!_.includes(af, file.type)) {
  //       alert('Only EXCEL Docs Allowed!');
  //     } else {
  //       this.fileInputLabel = file.name;
  //       this.fileUploadForm.get('myfile').setValue(file);
  //     }
  //   }
  // }


  // onFormSubmit() {

  //   if (!this.fileUploadForm.get('myfile').value) {
  //     alert('Please fill valid details!');
  //     return false;
  //   }

  //   const formData = new FormData();
  //   formData.append('formFile', this.fileUploadForm.get('myfile').value);
  //   formData.append('agentId', '007');


  //   this.http
  //     .post<any>('http://www.example.com/api/upload', formData).subscribe(response => {
  //       console.log(response);
  //       if (response.statusCode === 200) {
  //         // Reset the file input
  //         this.uploadFileInput.nativeElement.value = "";
  //         this.fileInputLabel = undefined;
  //       }
  //     }, error => {
  //       console.log(error);
  //     });
  // }

}
