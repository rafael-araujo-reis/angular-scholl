import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared/material.module';
import { AccordionComponent } from './accordion/accordion.component';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    AccordionComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ButtonComponent,
    HeaderComponent,
    AccordionComponent,
  ]
})
export class ComponentsModule { }
