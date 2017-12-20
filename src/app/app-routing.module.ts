import { ContactComponent } from './contact/contact/contact.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

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
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
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
