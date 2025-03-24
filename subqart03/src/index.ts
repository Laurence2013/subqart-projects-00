import { Map } from 'immutable';
import { of, Observable } from 'rxjs';
import { scan, delay } from 'rxjs/operators';

import { SayHello } from './interfaces/customErrors.js';

const user = Map({desc: 'Testing MongoDB'});

const source00$: Observable<number> = of(1,2,3,4,5,6,7,8,9)
const result00$ = source00$.pipe(
	scan((acc, curr: number) => acc += (curr * 10), 0),
	delay(2000)
);
function sayHello(fullName: string | null): SayHello {
	console.log(fullName);
	result00$.subscribe(console.log);

	return {name: user.get('desc')};
};
function test00(num1: number, num2: number){
	return num1 + num2;
};
export {sayHello, test00};
