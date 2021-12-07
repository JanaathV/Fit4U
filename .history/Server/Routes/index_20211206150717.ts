
import express from 'express';
const router = express.Router();
export default router;

// instantiate an object of type index controller DisplayCompetitorsListPage
import { DisplayHomePage, DisplayProductPage, DisplayProfilePage, DisplayCartPage, DisplayCheckoutPage, DisplayContactUsPage, DisplayLoginPage, ProcessLoginPage,  DisplayRegisterPage, ProcessRegisterPage, ProcessLogoutPage } from '../Controllers/index';
import { UserDisplayName } from '../Util/index';

/* GET home page. */
router.get('/', DisplayHomePage);

router.get('/home', DisplayHomePage);


router.get('/productpage', DisplayProductPage);


router.get('/profile', DisplayProfilePage);

router.get('/cart', DisplayCartPage);

router.get('/checkout', DisplayCheckoutPage);


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

router.get('/contactus', DisplayContactUsPage);