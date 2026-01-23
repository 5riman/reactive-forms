import { Routes } from '@angular/router';

import { Home } from './home';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
];
