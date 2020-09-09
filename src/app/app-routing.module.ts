import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';

const routes: Routes = [
    { path: '', component: HomePageComponent, data: { page: 'home'} },
    { path: 'article/:id', component: ArticlePageComponent, data: { page: 'article'} },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule { }