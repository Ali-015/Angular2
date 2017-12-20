import { ContactComponent } from './contact/contact.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const contactRoutes: Routes = [
  {
    path: 'home/contact',
    component: ContactComponent
  }
];

export const ContactRouting: ModuleWithProviders = RouterModule.forRoot(contactRoutes);
