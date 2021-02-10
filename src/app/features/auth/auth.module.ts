import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { HomeView } from './views/home/home.view';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthCommonsModule } from './commons/commons.module';



@NgModule({
  declarations: [AuthComponent, HomeView],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AuthCommonsModule
  ]
})
export class AuthModule { }
