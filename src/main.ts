import { interval, map, Observable, take, withLatestFrom } from "rxjs"

const a = interval(1000)
  .pipe(take(2), map(x => `A_${x}`));

const b = interval(250)
  .pipe(take(10), map(x => `B_${x}`))

export const stream = (): Observable<string> => {
  return a
    .pipe(
      withLatestFrom(b),
      map(([x, y]) => `${x} >>>>>>>>>> ${y}`)
    )
}