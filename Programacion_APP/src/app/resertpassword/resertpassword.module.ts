import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResertpasswordPageRoutingModule } from './resertpassword-routing.module';

import { ResertpasswordPage } from './resertpassword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResertpasswordPageRoutingModule
  ],
  declarations: [ResertpasswordPage]
})
export class ResertpasswordPageModule {}
