import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharemodulesModule } from 'src/app/sharemodules/sharemodules.module';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './pages/main/main.component';
import { DetailComponent } from './pages/detail/detail.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaindetailComponent } from './pages/maindetail/maindetail.component';
import {
  GoogleMapsModule,
  MapInfoWindow,
  MapMarker,
} from '@angular/google-maps';
import { MakesureComponent } from './pages/makesure/makesure.component';
import { DoneoneComponent } from './pages/doneone/doneone.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'main', component: MainComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'maindetail', component: MaindetailComponent },
  { path: 'makesure', component: MakesureComponent },
  { path: 'doneone', component: DoneoneComponent }
];

@NgModule({
  declarations: [
    MainComponent,
    DetailComponent,
    MakesureComponent,
    DoneoneComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    SharemodulesModule,
    GoogleMapsModule,
    [NgbPaginationModule, NgbAlertModule]

  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [],
})
export class HelpModule { }
