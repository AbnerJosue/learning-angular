import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private URL = 'http://localhost:4081'
  

  constructor(
    private http: HttpClient
  ) {
    
  }


  getTask() {
    return this.http.get<any>(`${this.URL}/gettingModuls`)
  }


  getPrivateTask() {
    return this.http.get<any>(`${this.URL}/getTask`)
  }

  gettingTaks(){
    return this.http.get<any>(`${this.URL}/new/get-task`)
  }

  createdTask(newTaks:any){
    return this.http.get<any>(`${this.URL}/new-task`,newTaks)
  }

}
