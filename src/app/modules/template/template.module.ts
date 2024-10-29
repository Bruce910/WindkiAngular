import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './pages/detail/detail.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { SharemodulesModule } from 'src/app/sharemodules/sharemodules.module';
import { HelpingComponent } from './pages/helping/helping.component';
import { SocialComponent } from './pages/Social/social/index/social.component';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';

import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CarouselModule } from 'primeng/carousel';
import { FinancialService } from './pages/Social/services/financial.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'h1', component: DetailComponent },
  { path: 'helping', component: HelpingComponent },
  { path: 'mainpage', component: MainpageComponent},
  { path: 'social', loadChildren: () => import('./pages/Social/social/social.module').then(m => m.SocialModule) }
];

@NgModule({
  declarations: [
    DetailComponent,
    IndexComponent,
    MainpageComponent,
    HelpingComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharemodulesModule,
    CommonModule
  ],
  exports: [RouterModule],
  bootstrap: [],
})
export class TemplateModule { }
