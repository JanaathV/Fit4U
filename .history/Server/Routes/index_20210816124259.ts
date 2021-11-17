//      File Name: index.ts
//      Author: Web Wiz
//      Group Number: 1
//      Date: July 13, 2021
//
import express from 'express';
const router = express.Router();
export default router;

// instantiate an object of type index controller DisplayCompetitorsListPage
import { DisplayNewTourneyPage, DisplayTournamentStatPage, DisplayHomePage, DisplayActiveTourneyPage, DisplayServicesPage, DisplayViewTourneyPage, DisplayLoginPage, ProcessLoginPage,  DisplayRegisterPage, ProcessRegisterPage, ProcessLogoutPage } from '../Controllers/index';
/* GET home page. */
router.get('/', DisplayHomePage);

/* GET home page. */
router.get('/home', DisplayHomePage);

/* GET tournament statistics page. */
router.get('/tournamentstat', DisplayTournamentStatPage);

/* GET projects page. */
router.get('/activetourney', DisplayActiveTourneyPage);

/* GET services page. */
router.get('/services', DisplayServicesPage);

/* GET new tourney page. */
router.get('/newtourney', DisplayNewTourneyPage);
// router.get('/competitor-list', DisplayCompetitorsListPage)

/* GET view tourney page. */
router.get('/viewtourney', DisplayViewTourneyPage);

/* GET view login page */
router.get('/login', DisplayLoginPage);

/* POST process login page */
router.post('/login', ProcessLoginPage);

/* GET view register page  */
router.get('/register', DisplayRegisterPage);

/* POST process register page */
router.post('/register', ProcessRegisterPage);

/* GET view logout page */                  /*NO NEED FOR POST LOGOUT PAGE*/
router.get('/logout', ProcessLogoutPage);
//module.exports = router;
