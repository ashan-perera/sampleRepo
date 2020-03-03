import { MatButtonModule, MatCheckboxModule, MatNativeDateModule, MatDialogModule, MatListModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';


@NgModule({
    
    imports: [
      MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatInputModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatTableModule,
      MatPaginatorModule,
      MatRadioModule,
      MatCardModule,
      MatDialogModule,
      MatListModule,
      MatIconModule,
      MatTabsModule,
      MatTooltipModule,
      MatMenuModule,
      MatStepperModule
    ],
    exports: [
      MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatInputModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatTableModule,
      MatPaginatorModule,
      MatRadioModule,
      MatCardModule,
      MatDialogModule,
      MatListModule,
      MatIconModule,
      MatTabsModule,
      MatTooltipModule,
      MatMenuModule,
      MatStepperModule
    ]
  })

  export class MaterialModule { }