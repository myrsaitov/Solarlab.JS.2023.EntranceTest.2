import { Injectable } from '@angular/core';
import { ITodoItem } from 'src/app/interfaces/todo-item/i-todo-item';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  items:ITodoItem[] = [];

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
      'isDone': false
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
    let index = this.items?.findIndex(x => x.id === id);
    if (index < 0) {
      console.error(index)
      return
    }

    this.items.splice(index, 1)

    if (this.items.length == 0) {
      this.items.push(
        {
          'id': Guid.create().toString(),
          'text': "Введите описание дела",
          'isDone': false
        }
      );
    }

    this.saveItems();

  }

  loadItems(){

    let initTodoList: string = JSON.stringify([
      {
        'id': Guid.create().toString(),
        'text': "Введите описание дела",
        'isDone': false
      }
    ])

    this.items = JSON.parse(localStorage.getItem("data") || initTodoList);
    //this.items = JSON.parse(this.initTodoList);
    console.log('loadItems()');
    console.log(this.items);
  }

  saveItems(){
    localStorage.setItem('data', JSON.stringify(this.items));
    console.log('saveItems()');
    console.log(this.items);
  }

}
