import { Component, ViewChild } from '@angular/core';
import { LoginComponent } from '../../login/login/login.component';


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
