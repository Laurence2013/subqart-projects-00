import express from 'express';
import { sayHello, test00 } from '../src/index.js';
import userModel from '../src/models/user.model.js';
const router = express.Router();
router.get('/', (req, res, next) => {
    const getName = sayHello('');
    const test01 = test00(1, 5);
    try {
        userModel.find({}).then((data) => {
            console.log(data);
            res.json({
                msg: getName.name,
                test02: test01,
                payload: data
            });
        });
    }
    catch (err) {
        res.json({
            err
        });
    }
});
router.post('/add', (req, res, next) => {
    try {
        const user = new userModel({
            username: 'daviJ999',
            firstname: 'David',
            lastname: 'Johnson'
        });
        user.save()
            .then(() => res.json({
            msg: 'data added successfully...!'
        }))
            .catch((err) => res.json({
            err
        }));
    }
    catch (err) {
        res.json({
            error: 'Invalid Add Request!'
        });
    }
});
export default router;
