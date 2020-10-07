import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { EditionComponent } from './edition/edition.component';
import { SimplePostComponent } from './simple-post/simple-post.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'edit', component: EditionComponent },
  { path: 'post/:id', component: SimplePostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
