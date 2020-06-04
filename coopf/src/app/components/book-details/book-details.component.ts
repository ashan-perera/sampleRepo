import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from '../book/book';
import { Page } from 'src/app/models/page';
import { FormGroup } from '@angular/forms';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  private sub: Subscription

  book: Book = new Book();
  page: Page = new Page();
  // pageList: Array<Page> = [];
  pages: Page[] = [];
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
      this.pages = data.pages;
    })
  }

}
