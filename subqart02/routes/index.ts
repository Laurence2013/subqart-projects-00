import express, {Router, Request, Response, NextFunction} from 'express';

import sayHello from '../src/index.js'
import userModel from '../src/models/user.model.js';

const router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
	const getName: any = sayHello('');
	try{
		userModel.find({}).then((data: any) => {
			console.log(data);
			res.json({
				msg: getName.name,
				payload: data
			});
		});
	}catch(err){
		res.json({err});
	}
});
router.post('/add', (req: Request, res: Response, next: NextFunction) => {
	try{
		const user = new userModel({
			username: 'mark187',
			firstname: 'Mark',
			lastname: 'Johnson'
		});
		user.save()
			.then(() => res.json({msg: 'data added successfully...!'}))
			.catch((err: string) => res.json({err}));
	}catch(err){
		res.json({error: 'Invalid Add Request!'});
	}
});

export default router;
