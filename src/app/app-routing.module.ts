import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { BlogdetailComponent } from './blog/blogdetail/blogdetail.component';
import { LinkComponent } from './link/link.component';
import { CreateComponent } from './create/create.component';
import { SeoTagComponent } from './seo-tag/seo-tag.component';

const routes: Routes = [
  
  {path: '' , component: BlogComponent},
  {path: 'blogdetail/:Id' , component: BlogdetailComponent},
  {path: 'link/:Id' , component: LinkComponent},
  {path: 'create' , component: CreateComponent},
  {path: 'seo' , component: SeoTagComponent},
  {path: '**' , component: BlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
