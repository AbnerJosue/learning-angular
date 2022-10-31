import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service'
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})




export class TaskComponent implements OnInit {
  

  modules:any= [];

  constructor(private tasksService: TaskService) { }

  ngOnInit(): void {
    this.tasksService.getTask()
    .subscribe(
      res => {
        console.log(res)
        this.modules = res.user; 
      }, 
      e => console.log(e)
    )
  }

}
