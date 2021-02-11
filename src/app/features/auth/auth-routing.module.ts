import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { HomeView } from './views/home/home.view';
import { RessetPasswordComponent } from './commons/components/resset-password/resset-password.component';
import { RegisterComponent } from './commons/components/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'login' ,pathMatch: 'full'},
  {
    path: '', component: AuthComponent,
    children: [
      { path: 'login', component: HomeView},
      { path: 'resset-password', component: RessetPasswordComponent},
      { path: 'register', component: RegisterComponent}

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
