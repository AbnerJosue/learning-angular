import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './components/task/task.component';
import { SignupComponent } from './components/signup/signup.component';
import { SiginComponent } from './components/sigin/sigin.component';
import { PrivateTaskComponent } from './components/private-task/private-task.component';
import { ProfileComponent } from './components/profile/profile.component';
import { StudentsComponent } from './components/students/students.component';
import { StudentGradesComponent } from './components/student-grades/student-grades.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'task', component: TaskComponent,canActivate: [AuthGuard] },
  { path: 'private', component: PrivateTaskComponent , canActivate: [AuthGuard]},
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SiginComponent },
  { path: 'profile', component: ProfileComponent ,canActivate: [AuthGuard]},
  { path: 'students', component: StudentsComponent ,canActivate: [AuthGuard]},
  { path: 'students-grades', component: StudentGradesComponent,canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
