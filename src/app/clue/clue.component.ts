import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Clue } from '../clue';

@Component({
  selector: 'app-clue',
  templateUrl: './clue.component.html',
  styleUrls: ['./clue.component.sass']
})
export class ClueComponent implements OnInit {
  @Input() clue: Clue;
  @Input() enableNextButton: Boolean = true;
  @Output() fetchNext = new EventEmitter();
  @Output() correctAnswer = new EventEmitter<Number>();
  showAnswer: Boolean = false;
  disableForm: Boolean = false;
  userAnswer: String = "";
  result: Boolean = false;

  constructor() { }

  ngOnInit() {
  }
  
  public fetchNextClue(){
    this.showAnswer = false;
    this.disableForm = false;
    this.userAnswer = "";
    this.result = false;
    this.fetchNext.emit();
  }

  public viewSolution(){
    this.showAnswer = true;
    this.disableForm = true;
  }

  /**
   * checkSolution
   */
  public checkSolution() {
    const userAnswer = this.userAnswer.toUpperCase();
    const sistemAnswer = this.clue.answer.toUpperCase();

    this.result = userAnswer === sistemAnswer;
    if(this.result){
      this.correctAnswer.emit(this.clue.value);
    }
    this.disableForm = true;
  }
}
