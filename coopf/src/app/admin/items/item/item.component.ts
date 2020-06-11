import { Component, OnInit, ViewChild } from '@angular/core';
import { CoopzService } from 'src/app/services/coopz.service';
import { Item } from 'src/app/models/item';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  item: Item = new Item();

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  items: Observable<any>;
  itemDataSource: MatTableDataSource<Item> = new MatTableDataSource<Item>();

  constructor(private coopzService: CoopzService) { }

  ngOnInit() {
    this.getAllStudents();
  }

  getAllStudents(): void {
    this.coopzService.getAllItems().subscribe((data: any) => {

      this.itemDataSource = new MatTableDataSource(data);
      this.items = this.itemDataSource.connect();
      this.itemDataSource.paginator = this.paginator;
     
    });
  }

}
