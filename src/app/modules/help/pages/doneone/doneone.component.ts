import { Component } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';


@Component({
  selector: 'app-doneone',
  templateUrl: './doneone.component.html',
  styleUrls: ['./doneone.component.css']
})
export class DoneoneComponent {
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
  constructor(private router: Router) {}

  backtomain(){
    this.router.navigate(['/help/main']);
  }

}
