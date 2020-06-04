import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { StudentComponent } from './components/student/student.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BookComponent } from './components/book/book.component';
import { ManageStudentComponent } from './components/manage-student/manage-student.component';
import { ToastrModule } from 'ngx-toastr';
import { ManageBookComponent } from './components/manage-book/manage-book.component';
import { MatStuffComponent } from './components/mat-stuff/mat-stuff.component';
import { ConfirmationDialog } from './shared/confirmation-dialog';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { LoginComponent } from './components/login/login.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { EmailSenderComponent } from './components/email-sender/email-sender.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    NavigationComponent,
    BookComponent,
    ManageStudentComponent,
    ManageBookComponent,
    MatStuffComponent,
    ConfirmationDialog,
    BookDetailsComponent,
    LoginComponent,
    EmailSenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationDialog]
})
export class AppModule { }
