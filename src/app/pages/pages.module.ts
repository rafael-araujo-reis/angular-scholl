import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { MaterialModule } from '../shared/material.module';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
@NgModule({
  declarations: [
    FaqComponent,
    HomeComponent,
    ProductComponent,
  ],
  imports: [
    ComponentsModule,
    CommonModule,
    MaterialModule
  ],
  exports: [
    ComponentsModule,
    FaqComponent
  ]
})

export class PagesModule { }
