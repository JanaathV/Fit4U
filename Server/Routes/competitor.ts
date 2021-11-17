//      File Name: competitor.ts
//      Author: Web Wiz
//      Group Number: 1
//      Date: July 13, 2021
//


import express from 'express';
const router = express.Router();
export default router;


// instantiate an object of type competitor controller
import {DisplayAddPage, DisplayCompetitorListPage, DisplayEditPage, ProcessAddPage, ProcessEditPage, ProcessDeletePage } from '../Controllers/competitor';
import { AuthGuard } from '../Util/index';

// Display the Competitor-List Page
router.get('/', DisplayCompetitorListPage); // default route

/* GET - display /competitor-list/add page. */
router.get('/add', AuthGuard, DisplayAddPage);

// Display the Edit page by id
router.get('/edit/:id', AuthGuard, DisplayEditPage);

// Process the Add page
router.post('/add', AuthGuard, ProcessAddPage);

/* POST - process /competitor-list/edit/:id page */
router.post('/edit/:id', AuthGuard, ProcessEditPage);

/* GET - process /competitor-list/delete/:id */
router.get('/delete/:id', AuthGuard, ProcessDeletePage);


