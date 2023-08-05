import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListRoutingModule } from './todo-list-routing.module';
import { ListComponent } from './pages/list/list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    ListComponent,
    TodoItemComponent    
  ],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    CheckboxModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
  ]
})
export class TodoListModule { }
