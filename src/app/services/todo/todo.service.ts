import { Injectable } from '@angular/core';
import { ITodoItem } from 'src/app/interfaces/todo-item/i-todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  items:ITodoItem[] = [];

  constructor() { }


  toggleItem(id: string){
    let item = this.items?.find( x => x.id === id);
    if(item){
      item.isDone = !item.isDone;
    }
  }

  deleteItem(id: string){
    let item = this.items?.find( x => x.id === id);
    if(item){
      item.isDeleted = true;
    }
  }

  loadItems(){
    this.items.push(
      {
        'id': "ce7516d3-eafe-4825-8fea-f00685114446",
        'text': "Сделать тестовое задание",
        'isDone': true,
        'isDeleted': false,
      });

    this.items.push(
      {
        'id': "8160caa0-98df-4cb8-8a53-a60f93e7fae7",
        'text': "Сделать тестовое задание 2",
        'isDone': false,
        'isDeleted': false,
      });

    this.items.push(
      {
        'id': "190e9bcf-6933-4820-88c2-d97621502ae4",
        'text': "Сделать тестовое задание 3",
        'isDone': false,
        'isDeleted': false,
      });
  }

  saveItems(){}

}
