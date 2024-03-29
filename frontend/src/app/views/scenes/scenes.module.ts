import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScenesPage } from './scenes.page';
import { SceneItemComponent } from '../../components/scene-item/scene-item.component';

import { ScenesPageRoutingModule } from './scenes-routing.module';
import { AlertModule } from 'src/app/shared/alert/alert.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ScenesPageRoutingModule,
    AlertModule,
  ],
  declarations: [ScenesPage, SceneItemComponent],
})
export class ScenesPageModule {}
