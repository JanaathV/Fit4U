//      File Name: match.ts
//      Author: Web Wiz
//      Group Number: 1
//      Date: July 13, 2021
//
import express from 'express';
const router = express.Router();
export default router;

// instantiate an object of type competitor controller
import { DisplayAddPage, DisplayMatchListPage, DisplayEditPage, ProcessAddPage, ProcessEditPage, ProcessDeletePage } from '../Controllers/match';
import { AuthGuard } from '../Util/index';

// Display the match-list Page
router.get('/', DisplayMatchListPage); // default route

/* GET - display /match-list/add page. */
router.get('/add', AuthGuard, DisplayAddPage);

// Display the Edit page by id
router.get('/edit/:id', AuthGuard, DisplayEditPage);

// Display the Add page
router.post('/add', AuthGuard, ProcessAddPage);

/* POST - process /match-list/edit/:id page */
router.post('/edit/:id', AuthGuard, ProcessEditPage);

/* GET - process /match-list/delete/:id */
router.get('/delete/:id', AuthGuard, ProcessDeletePage);