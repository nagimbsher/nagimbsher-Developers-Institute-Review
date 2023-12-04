import express from 'express';
import {register, login, getUsers} from '../controllers/Users.js';
import {verifyToken} from '../middlewares/VerifyToken.js'

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/users',verifyToken, getUsers);



export default router
