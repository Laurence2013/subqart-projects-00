import { Map, List } from 'immutable';

const user = Map({
	desc: 'Testing MongoDB'
});
function sayHello(fullName: string | null){
	return {name: user.get('desc')};
};

export default sayHello;
