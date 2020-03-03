import { Component, OnInit } from '@angular/core';
import { Book } from '../book/book';
import { Page } from 'src/app/models/page';
import { FormGroup } from '@angular/forms';
import { BookService } from 'src/app/services/book.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-book',
  templateUrl: './manage-book.component.html',
  styleUrls: ['./manage-book.component.scss']
})
export class ManageBookComponent implements OnInit {

  private sub: Subscription

  book: Book = new Book();
  page: Page = new Page();
  pageList: Array<Page> = [];
  pageFormGroup: FormGroup;

  constructor(private bookService: BookService,
              private route: ActivatedRoute) { }

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
  }

  getBookById(id: number): void {
    this.bookService.getBookById(id).subscribe((data: any) => {
      this.book = data;
    })
  }

  onSaveClick(book): void {
    this.bookService.saveBook(book).subscribe((data: any) => {});
  }

  addPage(page): void {
    this.pageList.push(page);
    this.page = new Page();
  }

  editPage(page): void {
    this.page = page;
    this.removePage(page);
  }

  removePage(page): void {
    this.pageList = this.pageList.filter(item =>
      item !== page);
  }

}
