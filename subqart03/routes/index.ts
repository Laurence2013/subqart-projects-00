import express, { Router, Request, Response, NextFunction } from 'express';

import { sayHello, test00 } from '../src/index.js'
import userModel from '../src/models/user.model.js';

const router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
	const getName: any = sayHello('');
	const test01: any = test00(1, 5);
	try {
		userModel.find({}).then((data: any) => {
			console.log(data);
			res.json({
				msg: getName.name,
				test02: test01,
				payload: data,
			});
		});
	}catch(err){
		res.json({err});
	}
});
router.post('/add', (req: Request, res: Response, next: NextFunction) => {
	try {
		const user = new userModel({
			username: 'daviJ999',
			firstname: 'David',
			lastname: 'Johnson',
		});
		user.save().then(() => res.json({
				msg: 'data added successfully...!'
			})).catch((err: string) => res.json({
				err
			}));
	}catch (err){
		res.json({error: 'Invalid Add Request!'});
	}
});
router.post('/add2', (req: Request, res: Response, next: NextFunction) => {
	try{
		res.json({msg: 'data added successfully from /add2...!'})
	}catch(err){
		res.json({error: 'Invalid Add Request!'});
	}
});

export default router;
