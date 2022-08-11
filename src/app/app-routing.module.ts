import { UploadFileComponent } from './modules/upload-file/upload-file.component';
import { ClassesComponent } from './modules/classes/classes.component';
import { InstructorTimetablesComponent } from './modules/instructor-timetables/instructor-timetables.component';
import { StudentTimetablesComponent } from './modules/student-timetables/student-timetables.component';
import { OnlineSessionsComponent } from './modules/online-sessions/online-sessions.component';
import { DocumentsComponent } from './modules/documents/documents.component';
import { InstructorsComponent } from './modules/instructors/instructors.component';
import { StudentsComponent } from './modules/students/students.component';
import { CoursesComponent } from './modules/courses/courses.component';
import { DefaultComponent } from './layouts/default/default.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
    children: [
      {path: '',
      component: DashboardComponent},
      {path: 'courses',
      component: CoursesComponent},
      {path: 'classes',
      component: ClassesComponent},
      {path: 'students',
      component: StudentsComponent},
      {path: 'instructors',
      component: InstructorsComponent},
      {path: 'documents',
      component: DocumentsComponent},
      {path: 'onlineSessions',
      component: OnlineSessionsComponent},
      {path: 'student-timetables',
      component: StudentTimetablesComponent},
      {path: 'instructor-timetables',
      component: InstructorTimetablesComponent},
      {path: 'app-upload-file',
      component: UploadFileComponent}
],
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
