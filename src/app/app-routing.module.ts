import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomClueComponent } from './random-clue/random-clue.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoryComponent } from './category/category.component';


const routes: Routes = [
  { path: '', component: RandomClueComponent },
  { path: 'categories', component:CategoriesListComponent },
  { path: 'categories/:id', component: CategoryComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
