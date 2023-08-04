import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo/todo.service'; 

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(public todoService: TodoService) { }


  ngOnInit(): void {
    this.todoService.loadItems();
    this.todoService.items;
  }

}
