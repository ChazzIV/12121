import { NgModule } from '@angular/core';
import { AuthServicesModule } from './services/services.module';
import { AuthMaterialModule } from './material/material.module';



@NgModule({
  declarations: [],
  exports: [
    AuthServicesModule,
    AuthMaterialModule
  ]
})
export class AuthCommonsModule { }
