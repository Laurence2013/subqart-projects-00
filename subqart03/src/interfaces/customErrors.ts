interface CustomError extends Error {
	status?: number;
	message: string;
};
interface SayHello {
	name: string
};
interface Person {
	username?: string;
	firstname: string;
	lastname: string;
}
export { CustomError, SayHello, Person };
