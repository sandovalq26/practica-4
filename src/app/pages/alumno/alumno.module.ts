import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AlumnoComponent} from "./alumno.component";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [{
  path: '',
  component: AlumnoComponent
}]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AlumnoComponent,
    RouterModule.forChild(routes)

  ]
})
export class AlumnoModule { }
