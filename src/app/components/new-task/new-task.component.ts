import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service'
@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  newTask = {
    "title": "",
    "description": "",
    "note": "",
    "module": "",
    "asignacion": ""
  }

  tasks: any = [];

  constructor(
    private tasksService: TaskService,
  ) { }

  ngOnInit(): void {
    this.tasksService.gettingTaks()
      .subscribe(
        res => {
          console.log(res)
          this.tasks = res.tasks;
        },
        e => console.log(e)
    )
  }


  createTaks() {
    this.tasksService.createdTask(this.newTask)
    .subscribe(
      res=> {
        console.log(res)
      },
      e => console.log('error',e)
    )
  }

}
