import { Component } from '@angular/core';
import { JeopardyService } from './jeopardy.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title: String = 'jeopardy-app';
  money: Number;
  
  constructor(
    private jeopardyService: JeopardyService
  ){
  }
  ngOnInit(){
    this.money = this.jeopardyService.getMoney();
  }
}
