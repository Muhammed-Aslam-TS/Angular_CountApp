import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count = 0
  number = ''
  is_hidden = false



  check(){
    // this.count  >0 ? this.is_hidden =false : this.is_hidden =true
    this.is_hidden = false
    this.count  %2 ==0 ? this.number='EVEN' : this.number='ODD'
    if (this.count == 0) {
       this.number = 'empty'
    }
  }
  reset(){
    this.  is_hidden = true
  }
}
