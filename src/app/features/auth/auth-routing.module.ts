import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { HomeView } from './views/home/home.view';

const routes: Routes = [
  { path: '', redirectTo: 'home' ,pathMatch: 'full'},
  {
    path: '', component: AuthComponent,
    children: [
      { path: 'home', component: HomeView}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
