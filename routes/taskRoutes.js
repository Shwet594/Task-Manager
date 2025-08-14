import express from 'express';
import { Edit,create,Update,Complete,Delete} from '../Controllers/taskController.js';
import { taskModel } from '../Models/user.js';

const router = express.Router();


router.post('/create', create);
router.get('/edit/:id',Edit);
router.get('/complete/:id', Complete);
router.post('/update/:id', Update);
router.get('/delete/:id', Delete);


export default router;
