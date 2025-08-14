import express from 'express';
import { register, login ,logout} from '../Controllers/authController.js';
import { requireAuth } from '../middleware/authmidlleware.js';

const router = express.Router();


router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.get("/profile",requireAuth,(req,res)=>{
    res.render("profile", { user: req.user })
})

export default router;
