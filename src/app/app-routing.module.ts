import { ContactComponent } from './contact/contact/contact.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { IndustryDetailComponent } from './industry-detail/industry-detail/industry-detail.component';

const routes: Routes = [
  {
      path: '',
      component: LoginComponent,
      pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
},
{
  path: 'industryDetail/:id',
  component: IndustryDetailComponent
},
  {
    path: 'home',
    component: HomeComponent,
   
    children: [
      {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
      // component: HomeComponent,
      },
      { path: 'contact', 
      loadChildren: 'app/contact/contact.module#ContactModule'
      },
      { path: 'industry', 
      loadChildren: 'app/industries/industries.module#IndustriesModule'
      },
      { path: 'solutions', 
      loadChildren: 'app/solutions/solutions.module#SolutionsModule'
      },
      { path: 'products', 
      loadChildren: 'app/products/products.module#ProductsModule'
      },
      { path: 'resources', 
      loadChildren: 'app/resources/resources.module#ResourcesModule'
      },
      { path: 'about', 
      loadChildren: 'app/about/about.module#AboutModule'
      }
    ]
}
// ,
// {
//   path: 'contact',
//   component: ContactComponent,
//   pathMatch: 'full'
// }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
