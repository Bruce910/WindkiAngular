import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// PrimeNG Modules
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CarouselModule } from 'primeng/carousel';

// Components
// import { SocialComponent } from '../social/pages/index/social.component';
import { FinancialService } from '../social/pages/services/financial.service';
import { SharemodulesModule } from "../../sharemodules/sharemodules.module";
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent }
];

@NgModule({
  declarations: [
    // SocialComponent,
    MainComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    CardModule,
    ButtonModule,
    BadgeModule,
    RippleModule,
    AvatarModule,
    InputTextModule,
    CarouselModule,
    HttpClientModule,
],
  exports: [RouterModule],
  providers: [FinancialService]
})
export class SocialModule { }
