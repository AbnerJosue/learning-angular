import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { SiginComponent } from './components/sigin/sigin.component';
import { MatTableModule } from '@angular/material/table'  
import { TaskComponent } from './components/task/task.component';
import { PrivateTaskComponent } from './components/private-task/private-task.component';
import { ProfileComponent } from './components/profile/profile.component';
import { StudentGradesComponent } from './components/student-grades/student-grades.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthGuard } from './auth.guard'
import { TokenInterceptorService } from './services/token-interceptor.service';
import { NewTaskComponent } from './components/new-task/new-task.component'
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SiginComponent,
    TaskComponent,
    PrivateTaskComponent,
    ProfileComponent,
    StudentGradesComponent,
    NewTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
