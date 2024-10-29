import { Component } from '@angular/core';

@Component({
  selector: 'app-wandkinavbar',
  templateUrl: './wandkinavbar.component.html',
  styleUrls: ['./wandkinavbar.component.css']
})
export class WandkinavbarComponent {
  closeForm(){
    const form = document.getElementById("myForm");
    if (form) {
      form.style.display = "none";
    }
  }
  openForm(){
    const form = document.getElementById("myForm");
    if (form) {
      form.style.display = "flex";
    }
  }
}
