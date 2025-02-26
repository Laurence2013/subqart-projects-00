import { Map } from 'immutable';

import { SayHello } from './interfaces/customErrors.js';

const user = Map({
	desc: 'Testing MongoDB'
});
function sayHello(fullName: string | null): SayHello {
	console.log(fullName);
	return {name: user.get('desc')};
};
function test00(num1: number, num2: number){
	return num1 + num2;
};
export {sayHello, test00};
