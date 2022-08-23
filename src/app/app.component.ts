import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges{
  title = 'To-Do-App';
  public toDoList:any[]=[]
  public compltedTaskList:any =[]

  ngOnChanges(changes: SimpleChanges): void {

  }
  receiveTask(tasks:any){
    if(tasks !== ''){
      this.toDoList.push(tasks)
      this.toDoList =[...this.toDoList]
    }
  }
  removeTask(index:number){
    this.toDoList.splice(index,1);
    this.toDoList = [...this.toDoList]
  }
  compltedTask(completedTask:any,index:number){
    this.toDoList.splice(index,1);
    this.compltedTaskList.push(completedTask)
    this.compltedTaskList =[...this.compltedTaskList]
    this.toDoList = [...this.toDoList]
  }
  redoTask(redoTask:any,index:number){
    this.compltedTaskList.splice(index,1);
    this.toDoList.push(redoTask)
    this.compltedTaskList =[...this.compltedTaskList]
    this.toDoList = [...this.toDoList]
  }
}
