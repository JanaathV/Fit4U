//      File Name: tournament.ts
//      Author: Web Wiz
//      Group Number: 1
//      Date: July 13, 2021
//
import express from 'express';
const router = express.Router();
export default router;

// instantiate an object of type competitor controller
import { DisplayAddPage, DisplayTournamentListPage, DisplayEditPage, ProcessAddPage, ProcessEditPage, ProcessDeletePage } from '../Controllers/tournament';
import { AuthGuard } from '../Util/index'; // import Util functions

// Display the tournament-List Page
router.get('/', DisplayTournamentListPage); // default route

/* GET - display /tournament-List/add page. */
router.get('/add', AuthGuard, DisplayAddPage);

// Display the Edit page by id
router.get('/edit/:id', AuthGuard, DisplayEditPage);

// Display the Add page
router.post('/add', AuthGuard, ProcessAddPage);

/* POST - process /tournament-List/edit/:id page */
router.post('/edit/:id', AuthGuard, ProcessEditPage);

/* GET - process /tournament-List/delete/:id */
router.get('/delete/:id', AuthGuard, ProcessDeletePage);