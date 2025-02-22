import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express, { Router, Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import createError from 'http-errors';
import logger from 'morgan';

import router from './routes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
// app.use(express.static(dirname.join(__dirname, 'public')));
app.use(express.static(__dirname));

app.use('/', router);

app.use((req: Request, res: Response, next: NextFunction) => {
	next(createError(404));
});
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	res.status(err.status || 500);
	res.render('error');
});

// module.exports = app;
export default app;
