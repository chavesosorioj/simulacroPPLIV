import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareRoutingModule } from './share-routing.module';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    ShareRoutingModule
  ],
  exports:[
    MenuComponent
  ]
})
export class ShareModule { }
