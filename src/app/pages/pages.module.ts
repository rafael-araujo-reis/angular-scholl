import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq/faq.component';
import { AccordionComponent } from '../components/accordion/accordion.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [
    FaqComponent,
    AccordionComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    FaqComponent
  ]
})
export class PagesModule { }
