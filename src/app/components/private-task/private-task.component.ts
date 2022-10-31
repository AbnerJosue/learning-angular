import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service'
import { Taks } from '../../interface/taks'
import {MatTableDataSource} from "@angular/material/table";
@Component({
  selector: 'app-private-task',
  templateUrl: './private-task.component.html',
  styleUrls: ['./private-task.component.css']
})
export class PrivateTaskComponent implements OnInit {

  public displayedColumns = ['firstName', 'lastName', 'clase', 'note'];
  public data = new MatTableDataSource<Taks>();
  constructor(private tasksService: TaskService) { }

ngOnInit(): void {
    this.tasksService.getPrivateTask()
    .subscribe(
      res => {
        console.log(res.tasks)
        this.data.data = res.tasks; 
      }, 
      e => console.log(e)
    )
  }

}
