import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/**
******************* my first mistake ***********************
import { Homecomponent }, from './home/home.component';
import { Aboutcomponent }, from './about/about.component';
import { Contactcomponent }, from './contact/contact.component';

const routes: Routes = [
  { path: '', component: Homecomponent },
  { path: 'about', component: Aboutcomponent },
  { path: 'contact', component: Concomponent },
];
*/
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
