import express, {Router, Request, Response, NextFunction} from 'express';

import sayHello from '../src/index.js'

const router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
	const name: string = 'Craig Johnson';
	const getName: any = sayHello(name);
	res.json({msg: getName.name})
});

export default router;
