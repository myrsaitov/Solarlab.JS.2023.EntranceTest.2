import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from 'src/app/services/todo/todo.service'; 

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit{
  @Input() id: string = '';
  @Input() text: string = 'Напишите, что нужно сделать';
  @Input() isDone: boolean = false;
  @Input() isDeleted: boolean = false;
  form!: FormGroup;
  
  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      text: new FormControl<string>(this.text, [Validators.required]),
      isDone: new FormControl<boolean>(this.isDone)
    });
  }

}