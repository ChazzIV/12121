import { NgModule } from '@angular/core';
import { AuthServicesModule } from './services/services.module';
import { AuthMaterialModule } from './material/material.module';
import { AuthComponentsModule } from './components/components.module';



@NgModule({
  declarations: [],
  exports: [
    AuthServicesModule,
    AuthMaterialModule,
    AuthComponentsModule
  ]
})
export class AuthCommonsModule { }
