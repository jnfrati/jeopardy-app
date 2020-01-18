import { Component, OnInit } from '@angular/core';
import { JeopardyService } from '../jeopardy.service';
import { Clue } from '../clue';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-random-clue',
  templateUrl: './random-clue.component.html',
  styleUrls: ['./random-clue.component.sass']
})
export class RandomClueComponent implements OnInit {

  randomClue$: Observable<Clue[]>
  loading: Boolean = false;
  constructor(
    private jeopardyService: JeopardyService
  ) { }

  ngOnInit() {
    this.getNextRandomClue();
    this.randomClue$ = this.jeopardyService.getRandomClues()
    
  }
  getNextRandomClue(){
    this.loading = true;
    this.jeopardyService.fetchNextRandomClue()
    .then((data)=>{
      console.log(data);
      this.loading = false;
    });
    
  }
  earnMoney(amount: Number){
    this.jeopardyService.earnMoney(amount);
  }
}
