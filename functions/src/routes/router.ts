import {Router,Response,Request} from 'express';
import { createCollabPost, deleteCollabPost, getAllCollabPosts } from '../controllers/collaborate.controller';
import { createQuestion, deleteQuestion, fuzzySearch, getAllAnswers, getAllQuestions, getQuestion, postAnswer, searchByTags, updateLike, updateQuestion } from '../controllers/discussion.controller';
import { createEvent, deleteEvent, getAllEvents } from '../controllers/event.controller';
import { login, signUp, verifyToken } from '../controllers/user.controller';
import SanitizerMiddleware from '../middlewares/sanitizer.middleware';
import UserAuthentication from '../middlewares/verifyToken.middleware';
import User from '../models/user.model';

const router = Router();

router.get('/',(req:Request,res:Response)=>{
    res.json('Hi!! Welcome to Aagman Backend')
})

router.delete('/delete',async(req,res)=>{
    const response = await User.deleteMany({userName : 'kdakshi'});
    res.json(response);
})

//user routes
router.get('/api/v1/user/verifyToken',[UserAuthentication],verifyToken);
router.post('/api/v1/user/login',login);
router.post('/api/v1/user/signup',[SanitizerMiddleware],signUp);

router.post('/api/v1/event/post',[SanitizerMiddleware,UserAuthentication],createEvent);
router.get('/api/v1/event/getAllEvents',getAllEvents);
router.delete('/api/v1/event/delete',[UserAuthentication],deleteEvent);

//discussion routes
router.post('/api/v1/discussion/question/post',[UserAuthentication],createQuestion);
router.get('/api/v1/discussion/question/getAll',getAllQuestions);
router.get('/api/v1/discussion/question',getQuestion);
router.get('/api/v1/discussion/question/search',[SanitizerMiddleware],fuzzySearch);
router.patch('/api/v1/discussion/question/update',[UserAuthentication],updateQuestion);
router.patch('/api/v1/discussion/question/update/likes',[UserAuthentication],updateLike);
router.delete('/api/v1/discussion/question/delete',[UserAuthentication],deleteQuestion);
router.post('/api/v1/discussion/answer/getAll',getAllAnswers);
router.post('/api/v1/discussion/answer/search/tags',searchByTags);
router.post('/api/v1/discussion/answer/post',[UserAuthentication],postAnswer);


//collaborate routes
router.get('/api/v1/collaborate/getAll',getAllCollabPosts);
router.post('/api/v1/collaborate/post',[UserAuthentication],createCollabPost);
router.delete('/api/v1/collaborate/delete',[UserAuthentication],deleteCollabPost);


export default router;