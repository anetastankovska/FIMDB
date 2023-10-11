import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from "../../app-routing.module";


const routes: Routes = [
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AppRoutingModule
  ],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
