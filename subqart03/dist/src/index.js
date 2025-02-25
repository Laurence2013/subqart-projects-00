import { Map } from 'immutable';
const user = Map({
    desc: 'Testing MongoDB'
});
function sayHello(fullName) {
    return { name: user.get('desc') };
}
;
function test00(num1, num2) {
    return num1 + num2;
}
export { sayHello, test00 };
