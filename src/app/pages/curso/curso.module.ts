import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CursoComponent} from "./curso.component";
import {RouterModule, Routes} from "@angular/router";



const routes: Routes = [
  {
    path: '',
    component: CursoComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CursoComponent,
    RouterModule.forChild(routes)
  ],
})
export class CursoModule {
}
