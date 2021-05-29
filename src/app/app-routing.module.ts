import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './components/add-book/add-book.component';
import { ShowBooksComponent } from './components/show-books/show-books.component';
import { UpdateBookComponent } from './components/update-book/update-book.component';

const routes: Routes = [
  {
    path: "show",
    component: ShowBooksComponent,
  },
  {
    path: "add",
    component: AddBookComponent,
  },
  {
    path: "update",
    component: UpdateBookComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
