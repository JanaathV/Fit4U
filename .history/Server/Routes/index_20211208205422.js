"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
const index_1 = require("../Controllers/index");
router.get('/', index_1.DisplayHomePage);
router.get('/home', index_1.DisplayHomePage);
router.get('/productpage', index_1.DisplayProductPage);
router.get('/profile', index_1.DisplayProfilePage);
router.get('/profile/healthData', index_1.DisplayHealthDataPage);
router.get('/profile/orders', index_1.DisplayOrdersPage);
router.get('/cart', index_1.DisplayCartPage);
router.get('/updateCart/:cartParam', index_1.UpdateCartPage);
router.get('/checkout', index_1.DisplayCheckoutPage);
router.post('/checkout', index_1.ProcessCheckoutPage);
router.get('/confirmedpayment', index_1.DisplayConfirmedPaymentPage);
router.get('/login', index_1.DisplayLoginPage);
router.post('/login', index_1.ProcessLoginPage);
router.get('/register', index_1.DisplayRegisterPage);
router.post('/register', index_1.ProcessRegisterPage);
router.get('/logout', index_1.ProcessLogoutPage);
router.get('/contactus', index_1.DisplayContactUsPage);
//# sourceMappingURL=index.js.map