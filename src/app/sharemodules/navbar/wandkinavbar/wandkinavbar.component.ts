import { Component, ViewChild } from '@angular/core';
import { LoginComponent } from 'src/app/modules/login/index/login.component';

@Component({
  selector: 'app-wandkinavbar',
  templateUrl: './wandkinavbar.component.html',
  styleUrls: ['./wandkinavbar.component.css']
})
export class WandkinavbarComponent {
  @ViewChild(LoginComponent) loginComponent!: LoginComponent;
  openChild(){
    this.loginComponent.openForm();
  }
}
