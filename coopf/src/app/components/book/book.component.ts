import { Component, OnInit, ViewChild } from '@angular/core';
import { Book } from './book';
import { BookService } from 'src/app/services/book.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  displayedColumns: string[] = ['author', 'isbn', 'title', 'imageUrl', 'actions'];
  bookDataSource: MatTableDataSource<Book>;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getAllBook();
  }

  getAllBook(): void {
    this.bookService.getAllBook().subscribe((data: any) => {
      this.bookDataSource = new MatTableDataSource(data);
      this.bookDataSource.paginator = this.paginator; 
      this.bookDataSource.sort = this.sort;
    });
  }

}
