
import express from 'express';
const router = express.Router();
export default router;

// instantiate an object of type index controller DisplayCompetitorsListPage
import { DisplayHomePage, DisplayLoginPage, ProcessLoginPage,  DisplayRegisterPage, ProcessRegisterPage, ProcessLogoutPage } from '../Controllers/index';
/* GET home page. */
router.get('/', DisplayHomePage);

/* GET home page. */
router.get('/home', DisplayHomePage);

/* GET tournament statistics page. */


/* GET services page. */
router.get('/services', DisplayServicesPage);





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
