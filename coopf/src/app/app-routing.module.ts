import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './components/student/student.component';
import { ManageStudentComponent } from './components/manage-student/manage-student.component';
import { BookComponent } from './components/book/book.component';
import { ManageBookComponent } from './components/manage-book/manage-book.component';
import { MatStuffComponent } from './components/mat-stuff/mat-stuff.component';


const routes: Routes = [
  {  path: 'student', component: StudentComponent  },
  {  path: 'manage-student', component: ManageStudentComponent  },
  {
    path: 'manage-student/:id/edit',
    component: ManageStudentComponent
  },
  {  path: 'book', component: BookComponent  },
  {  path: 'manage-book', component: ManageBookComponent  },
  {
    path: 'manage-book/:id/edit',
    component: ManageBookComponent
  },
  {  path: 'mat-stuff', component: MatStuffComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
