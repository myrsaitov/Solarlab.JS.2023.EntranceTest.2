import { Injectable } from '@angular/core';
import { ITodoItem } from 'src/app/interfaces/todo-item/i-todo-item';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  items:ITodoItem[] = [];

  fakeTodoList: string = JSON.stringify([

    {
      'id': Guid.create().toString(),
      'text': "Сделать тестовое задание",
      'isDone': true,
      'isDeleted': false,
    },
    {
      'id': Guid.create().toString(),
      'text': "Сделать тестовое задание 2",
      'isDone': false,
      'isDeleted': false,
    },
    {
      'id': Guid.create().toString(),
      'text': "Сделать тестовое задание 3",
      'isDone': false,
      'isDeleted': false,
    }
  ])

  constructor() { }



  moveUpItem(id: string){
    console.log('moveUpItem()');
    const index = this.items?.findIndex(x => x.id === id);
    console.log(index)
    if (index > 0) {
      this.items.splice(index - 1, 0, this.items.splice(index, 1)[0])
      this.saveItems();
    }

  }

  moveDownItem(id: string){
    console.log('moveDownItem()');
    const index = this.items?.findIndex(x => x.id === id);
    console.log(index)
    if (index < this.items.length) {
      this.items.splice(index + 1, 0, this.items.splice(index, 1)[0])
      this.saveItems();
    }
  }

  toggleItem(id: string){
    console.log('toggleItem()');
    let item = this.items?.find(x => x.id === id);
    if(item){
      item.isDone = !item.isDone;
      this.saveItems();
    }
  }

  addItem(id: string){
    console.log('addItem()');
    const index = this.items?.findIndex(x => x.id === id);
    console.log(index)
    if (index < 0) {
      console.error(index)
      return
    }
    let newElement:ITodoItem = {
      'id': Guid.create().toString(),
      'text': "Введите описание дела",
      'isDone': false,
      'isDeleted': false,
    }
    if (index < this.items.length) {
      this.items.splice(index + 1, 0, newElement)
      this.saveItems();
    }
    else
    {
      this.items.push(newElement);
    }
  }

  changeText(id: string, text: string){
    console.log('changeText()');
    let item = this.items?.find(x => x.id === id);
    if(item){
      item.text = text;
      this.saveItems();
    }
  }

  deleteItem(id: string){
    console.log('deleteItem()');
    let item = this.items?.find(x => x.id === id);
    if(item){
      item.isDeleted = true;
      this.saveItems();
    }
  }

  loadItems(){
    //this.items = JSON.parse(localStorage.getItem("data") || this.fakeTodoList);
    this.items = JSON.parse(this.fakeTodoList);
    console.log('loadItems()');
    console.log(this.items);
  }

  saveItems(){
    localStorage.setItem('data', JSON.stringify(this.items));
    console.log('saveItems()');
    console.log(this.items);
  }

}
