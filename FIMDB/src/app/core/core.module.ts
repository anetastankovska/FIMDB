import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    NavigationComponent,
    HomeComponent
  ]
})
export class CoreModule { }
