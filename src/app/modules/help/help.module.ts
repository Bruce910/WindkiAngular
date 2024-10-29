import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharemodulesModule } from 'src/app/sharemodules/sharemodules.module';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './pages/main/main.component';
import { DetailComponent } from './pages/detail/detail.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'detail', component: DetailComponent }
];

@NgModule({
  declarations: [
    MainComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    SharemodulesModule,
    [NgbPaginationModule, NgbAlertModule]
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [],
})
export class HelpModule { }
