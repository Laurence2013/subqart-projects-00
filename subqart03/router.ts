import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express, { Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import createError from 'http-errors';
import logger from 'morgan';

import router from './routes/index.js';
import { CustomError } from './src/interfaces/customErrors.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(__dirname));

app.use('/', router);

app.use((next: NextFunction) => {
	next(createError(404));
});
app.use((err: CustomError, req: Request, res: Response) => {
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	res.status(err.status || 500).json({error: err.message});
	res.render('error');
});

export default app;
