import { AddCourseComponent } from './../../modules/courses/add-course/add-course.component';
import { DashboardService } from './../../modules/dashboard.service';
import { SharedModule } from './../../shared/shared.module';
import { CoursesComponent } from './../../modules/courses/courses.component';
import { RouterModule } from '@angular/router';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from './../../modules/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { StudentsComponent } from 'src/app/modules/students/students.component';
import { InstructorsComponent } from 'src/app/modules/instructors/instructors.component';
import { ClassesComponent } from 'src/app/modules/classes/classes.component';
import { DocumentsComponent } from 'src/app/modules/documents/documents.component';
import { InstructorTimetablesComponent } from 'src/app/modules/instructor-timetables/instructor-timetables.component';
import { StudentTimetablesComponent } from 'src/app/modules/student-timetables/student-timetables.component';
import { OnlineSessionsComponent } from 'src/app/modules/online-sessions/online-sessions.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    CoursesComponent,
    StudentsComponent,
    InstructorsComponent,
    ClassesComponent,
    DocumentsComponent,
    InstructorTimetablesComponent,
    StudentTimetablesComponent,
    OnlineSessionsComponent,
    AddCourseComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule, 
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }
