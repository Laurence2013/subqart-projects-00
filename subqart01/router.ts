import path from 'path';
import express, {Router, Request, Response, NextFunction} from 'express';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import createError from 'http-errors';
import logger from 'morgan';

// const indexRouter = require('./routes/index');
const connectToMongoDb = require('./databases/mongodb');

const app = express();

connectToMongoDb();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', (req: Request, res: Response, next: NextFunction) => {
	res.send(`<h1>Hello World</h1>`);
	console.log(res.locals.validated);
});
app.use((req: Request, res: Response, next: NextFunction) => {
	next(createError(404));
});
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
