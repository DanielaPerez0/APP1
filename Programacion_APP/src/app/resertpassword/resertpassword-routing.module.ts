import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResertpasswordPage } from './resertpassword.page';

const routes: Routes = [
  {
    path: '',
    component: ResertpasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResertpasswordPageRoutingModule {}
