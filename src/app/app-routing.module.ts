import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpingComponent } from './modules/template/pages/helping/helping.component';
import { MainpageComponent } from './sharemodules/mainpage/mainpage.component';
import { ShopComponent } from './modules/shop/pages/main/shop.component'; './modules/template/pages/Social/social/index/social.component'
import { SocialComponent } from '../app/modules/social/pages/index/social.component'
const routes: Routes = [
  // {
  //   path: 'template',
  //   loadChildren: () =>
  //     import('./modules/template/template.module').then(
  //       (m) => m.TemplateModule
  //     ),
  // },
  {
    path: 'help',
    loadChildren: () => import('./modules/help/help.module').then(m => m.HelpModule)
  },
  {
    path: 'shop',
    loadChildren: () => import('./modules/shop/shop.module').then(m => m.ShopModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
