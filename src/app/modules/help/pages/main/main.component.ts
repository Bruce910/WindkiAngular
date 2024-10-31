import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(private router: Router) {} // 通过构造函数注入 Router
  navigateToSearch() {
    this.router.navigate(['/help/maindetail']);
  }

  id: string = '測試1';

}
