import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './pages/detail/detail.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { SharemodulesModule } from 'src/app/sharemodules/sharemodules.module';
import { HelpingComponent } from './pages/helping/helping.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'h1', component: DetailComponent },
  { path: 'helping', component: HelpingComponent },
  { path: 'mainpage', component: MainpageComponent}

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
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [],
})
export class TemplateModule { }