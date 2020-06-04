import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './components/student/student.component';
import { ManageStudentComponent } from './components/manage-student/manage-student.component';
import { BookComponent } from './components/book/book.component';
import { ManageBookComponent } from './components/manage-book/manage-book.component';
import { MatStuffComponent } from './components/mat-stuff/mat-stuff.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { LoginComponent } from './components/login/login.component';
import { EmailSenderComponent } from './components/email-sender/email-sender.component';


const routes: Routes = [
  {  
    path: 'student', component: StudentComponent
  },
  {  
    path: 'manage-student', component: ManageStudentComponent
  },
  {
    path: 'manage-student/:id/edit',
    component: ManageStudentComponent
  },
  {  
    path: 'book', component: BookComponent
  },
  {  
    path: 'manage-book', component: ManageBookComponent
  },
  {
    path: 'manage-book/:id/edit', component: ManageBookComponent
  },
  {
    path: 'book-details/:id', component: BookDetailsComponent
  },
  {  
    path: 'mat-stuff', component: MatStuffComponent
  },
  {  
    path: 'login', component: LoginComponent
  }
  ,
  {  
    path: 'email-sender', component: EmailSenderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
