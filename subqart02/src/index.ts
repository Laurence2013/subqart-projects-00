import { Map, List } from 'immutable';

const user = Map({
	name: 'John Doe',
	age: 30,
	hobbies: List(['Reading', 'Coding', 'Gaming'])
});

console.log(user.get('name'));

function sayHello(fullName: string | null){
	return {name: user.get('name')};
};

export default sayHello;
