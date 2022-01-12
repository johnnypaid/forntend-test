import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './template/main/main.component';
import { NewPostComponent } from './template/new-post/new-post.component';

const routes: Routes = [
  {path: 'new-post', component: NewPostComponent},
  {path: '', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
