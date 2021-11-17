"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
const match_1 = require("../Controllers/match");
const index_1 = require("../Util/index");
router.get('/', match_1.DisplayMatchListPage);
router.get('/add', index_1.AuthGuard, match_1.DisplayAddPage);
router.get('/edit/:id', index_1.AuthGuard, match_1.DisplayEditPage);
router.post('/add', index_1.AuthGuard, match_1.ProcessAddPage);
router.post('/edit/:id', index_1.AuthGuard, match_1.ProcessEditPage);
router.get('/delete/:id', index_1.AuthGuard, match_1.ProcessDeletePage);
//# sourceMappingURL=match.js.map