import { Component, OnInit, ViewChild } from '@angular/core';
import { Book } from './book';
import { BookService } from 'src/app/services/book.service';
import { MatTableDataSource, MatPaginator, MatSort, MatDialogRef, MatDialog } from '@angular/material';
import { ConfirmationDialog } from 'src/app/shared/confirmation-dialog';
import { NgxSpinnerService } from "ngx-spinner";

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
  dialogRef: MatDialogRef<ConfirmationDialog>;
  color = "red";
  message: string;

  constructor(private bookService: BookService,
              public dialog: MatDialog,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.bookService.bookAuthService().subscribe( (result) => {
      this.message = result.content;
    });
    this.getAllBook();
    
  }

  getAllBook(): void {
    this.spinner.show();
    this.bookService.getAllBook().subscribe((data: any) => {
      
      this.bookDataSource = new MatTableDataSource(data);
      this.bookDataSource.paginator = this.paginator; 
      this.bookDataSource.sort = this.sort;
      
    });
    this.spinner.hide();
  }

  onDelete(id): void {
    this.bookService.deleteBook(id).subscribe((data: any) => {
      
    });
  }

  openConfirmationDialog(id) {

    this.dialogRef = this.dialog.open(ConfirmationDialog, {
      disableClose: false
    });
    this.dialogRef.componentInstance.confirmMessage = "Are you sure you want to delete?"
    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onDelete(id);
      } else {
        console.log("Klfdfdf");
      }
      this.dialogRef = null;
    });

  }

}
