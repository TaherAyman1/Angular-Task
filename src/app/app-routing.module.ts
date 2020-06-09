import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsDetailsComponent } from './posts-details/posts-details.component';
import { PostsComponent } from './posts/posts.component';


const routes: Routes = [
  {path: '', component: PostsComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'posts/:id', component: PostsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
