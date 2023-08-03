import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { TodoRoutingModule } from './todo-routing.module';
import { ListComponent } from './pages/list/list.component';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    CheckboxModule,
    InputTextModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
