import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { CvComponent } from './cv/cv.component';
import { TodoComponent } from './todo/todo.component';
import { ColorChangeComponent } from './color-change/color-change.component'
import { BackOfficeComponent } from './back-office/back-office.component';
import { FrontOfficeComponent } from './front-office/front-office.component';
import { NotFound404Component } from './not-found404/not-found404.component';


const routes: Routes = [
  {
    path: 'back-office',
    component: BackOfficeComponent,
    children: [
      {
        path: 'Todo',
        component: TodoComponent
      },
      {
        path: 'Mini-words',
        component: ColorChangeComponent
      }
    ]
  },
  {
    path: 'front-office',
    component: FrontOfficeComponent,
    children: [
      {
        path: 'CVs',
        component: CvComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFound404Component
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
