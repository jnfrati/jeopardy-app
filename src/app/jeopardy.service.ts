import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clue } from './clue';
import { Observable } from 'rxjs';
import { map, catchError, retry, reduce, scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JeopardyService {
  
  
  randomClues: Clue[] = [];
  // money: Number[] = [0];
  money: Number = 0;


  constructor(
    private http: HttpClient
  ) { }

  getRandomClues(): Observable<Clue[]>{
    return new Observable(subscribe=>{
      subscribe.next(this.randomClues)
      return function unsuscribe(){
        this.randomClues = []
      }
    })
  }

  fetchNextRandomClue(): Promise<Clue>{
    return new Promise(resolve => {
      this.http.get<Clue[]>('http://jservice.io/api/random')
      .pipe(
        map((response: Clue[])=>({
          ...response[0]
        } as Clue)),
        retry(3),
        catchError((error:any) => {
          console.log("Error on fetch random clue");
          return error;
        })
      ).subscribe(
        (randomClue: Clue) =>{
          this.randomClues.push(randomClue);
          resolve(randomClue);
        }
      )
    })
  }

  earnMoney(amount: Number){
    console.log(amount)
    // this.money.push(Number(amount));
    this.money = Number(this.money) + Number(amount);
  }

  /**
   * getMoney
   */
  public getMoney() {
    return this.money
  }
  // getMoney(): Observable<Number>{
    // return new Observable<Number[]>(subscribe =>{
    //   subscribe.next(this.money)
    // }).pipe(
    //   scan((acc, curr, index)=>{
    //     return acc + curr[index]})
    // )
  // }
}
