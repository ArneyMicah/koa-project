import Router from 'koa-router';
import {
    getHelloWorld
} from '../controller/user.controller.js';
const router = new Router();
router.get('/', getHelloWorld);

export default router;