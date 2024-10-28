import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './pages/detail/detail.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { SharemodulesModule } from 'src/app/sharemodules/sharemodules.module';
import { HelpingComponent } from './pages/helping/helping.component';
import { SocialComponent } from './pages/Social/social/social.component';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';

import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CarouselModule } from 'primeng/carousel';
import { FinancialService } from './services/financial.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'h1', component: DetailComponent },
  { path: 'helping', component: HelpingComponent },
  { path: 'mainpage', component: MainpageComponent},
  { path: 'social', component: SocialComponent}
];

@NgModule({
  declarations: [
    DetailComponent,
    IndexComponent,
    MainpageComponent,
    HelpingComponent,
    SocialComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharemodulesModule,
    CommonModule,
    FormsModule,
    CardModule,
    ButtonModule,
    BadgeModule,
    RippleModule,
    CardModule,
    AvatarModule,
    InputTextModule,
    CarouselModule,
    HttpClientModule,
    CommonModule
  ],
  exports: [RouterModule, SocialComponent],
  providers: [FinancialService],
  bootstrap: [],
})
export class TemplateModule { }
