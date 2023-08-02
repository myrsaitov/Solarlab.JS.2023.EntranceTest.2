import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { TodoRoutingModule } from './todo-routing.module';
import { ListComponent } from './pages/list/list.component';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    CheckboxModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
