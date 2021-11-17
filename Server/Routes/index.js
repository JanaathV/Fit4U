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
router.get('/tournamentstat', index_1.DisplayTournamentStatPage);
router.get('/activetourney', index_1.DisplayActiveTourneyPage);
router.get('/services', index_1.DisplayServicesPage);
router.get('/newtourney', index_1.DisplayNewTourneyPage);
router.get('/viewtourney', index_1.DisplayViewTourneyPage);
router.get('/login', index_1.DisplayLoginPage);
router.post('/login', index_1.ProcessLoginPage);
router.get('/register', index_1.DisplayRegisterPage);
router.post('/register', index_1.ProcessRegisterPage);
router.get('/logout', index_1.ProcessLogoutPage);
//# sourceMappingURL=index.js.map