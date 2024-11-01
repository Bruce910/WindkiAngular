import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharemodulesModule } from 'src/app/sharemodules/sharemodules.module';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ShopComponent } from './pages/main/shop.component';



const routes: Routes = [
  { path: '', component: ShopComponent },
];

@NgModule({
  declarations: [
   ShopComponent

  ],
  imports: [
    RouterModule.forChild(routes),
    [NgbPaginationModule, NgbAlertModule]
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [],
})
export class ShopModule { }
