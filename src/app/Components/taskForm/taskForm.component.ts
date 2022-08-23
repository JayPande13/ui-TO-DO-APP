import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-taskForm',
  templateUrl: './taskForm.component.html',
  styleUrls: ['./taskForm.component.css']
})
export class TaskFormComponent implements OnInit {

  public taskForm!: FormGroup;
  @Output() task = new EventEmitter<any>()
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.taskFormIntializer();
  }

  taskFormIntializer(){
    this.taskForm = this.fb.group({
      myTask :['']
    })
  }
  submit(){
    this.task.emit(this.taskForm.value);
    this.taskForm.reset();
  }

}
