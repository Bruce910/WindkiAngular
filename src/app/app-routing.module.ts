import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpingComponent } from './modules/template/pages/helping/helping.component';
import { MainpageComponent } from './modules/template/pages/mainpage/mainpage.component';
import { SocialComponent } from './modules/template/pages/Social/social/index/social.component';

const routes: Routes = [
  {
    path: 'template',
    loadChildren: () =>
      import('./modules/template/template.module').then(
        (m) => m.TemplateModule
      ),
  },
  {
    path: 'help',
    loadChildren: () => import('./modules/help/help.module').then(m => m.HelpModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
