import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthMaterialModule } from '../material/material.module';
import { RessetPasswordComponent } from './resset-password/resset-password.component';
import { RouterModule } from '@angular/router';

const COMPONETS = [
  LoginComponent, 
  RegisterComponent
];


@NgModule({
  declarations: [...COMPONETS, RessetPasswordComponent],
  exports: [...COMPONETS, AuthMaterialModule],
  imports: [
    CommonModule,
    AuthMaterialModule,
    RouterModule
  ]
})
export class AuthComponentsModule { }
