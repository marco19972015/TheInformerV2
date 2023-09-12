import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { ResourcesComponent } from './pages/resources/resources.component';

const routes: Routes = [
  {path:'', component: HomeComponent}, 
  {path:'resources', component: ResourcesComponent},
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactComponent},
  {path: 'log-in', component: LogInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
