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

  deleteTask(props: any){
    console.log(props._id)
    this.tasksService.deleteTask(props._id)
    .subscribe(
      res=> {
        console.log(res)
      },
      e => console.log('error',e)
    )

  }

  createTaks() {
    console.log(this.newTask);
    this.tasksService.createdTask(this.newTask)
    .subscribe(
      res=> {
        console.log(res)
      },
      e => console.log('error',e)
    )
  }

}
