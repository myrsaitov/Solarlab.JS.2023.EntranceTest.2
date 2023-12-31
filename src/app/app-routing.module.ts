import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    pathMatch: 'full',  // без этого не будут работать другие маршруты!
    title: 'Список дел',
    loadChildren: () =>
      import('./modules/todo-list/todo-list.module').then(m => m.TodoListModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
