import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NetworkPage } from './network.page';

const routes: Routes = [
  {
    path: '',
    component: NetworkPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NetworkPageRoutingModule {}
