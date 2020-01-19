import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clue } from './clue';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, catchError, retry, reduce, scan, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JeopardyService {
  
  
  randomClues$: BehaviorSubject<Clue[]> = new BehaviorSubject<Clue[]>([]);
  // money: Number[] = [0];
  money: Number = 0;


  constructor(
    private http: HttpClient
  ) { }

  // getRandomClues(): Observable<Clue[]>{
  //   return new Observable(subscribe=>{
  //     subscribe.next(this.randomClues)
  //     return function unsuscribe(){
  //       this.randomClues = []
  //     }
  //   })
  // }

  fetchNextRandomClue(): void {
    this.http.get<Clue[]>('http://jservice.io/api/random')
      .pipe(
        map((response)=> {
          return response[0]
        })
      )
      .subscribe(clue => {
        console.log('Clue: ', clue);
        const nextClues: Clue[] = this.randomClues$.getValue();
        nextClues.push(clue);
        this.randomClues$.next(nextClues)
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
