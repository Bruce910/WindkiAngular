import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharemodulesModule } from 'src/app/sharemodules/sharemodules.module';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './pages/main/main.component';
import { DetailComponent } from './pages/detail/detail.component';


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
    RouterModule.forChild(routes),
    SharemodulesModule,
    [NgbPaginationModule, NgbAlertModule]
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [],
})
export class HelpModule { }
