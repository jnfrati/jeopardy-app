import { Component, OnInit } from '@angular/core';
import { JeopardyService } from '../jeopardy.service';
import { Clue } from '../clue';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-random-clue',
  templateUrl: './random-clue.component.html',
  styleUrls: ['./random-clue.component.sass']
})
export class RandomClueComponent implements OnInit {
  randomClue$: Observable<Clue>
  constructor(
    private jeopardyService: JeopardyService
  ) { }

  ngOnInit() {
    this.getNextRandomClue();
  }
  
  getNextRandomClue(){
    this.randomClue$ = this.jeopardyService.fetchNextRandomClue()
  }

  earnMoney(amount: Number){
    this.jeopardyService.earnMoney(amount);
  }
}
