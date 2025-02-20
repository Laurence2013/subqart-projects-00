import express, {Router, Request, Response, NextFunction} from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
	res.json({msg: 'Index Page works!!!'})
});

export default router;
