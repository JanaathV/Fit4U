"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDeletePage = exports.ProcessAddPage = exports.ProcessEditPage = exports.DisplayAddPage = exports.DisplayEditPage = exports.DisplayMatchListPage = void 0;
const match_1 = __importDefault(require("../Models/match"));
const Util_1 = require("../Util");
function DisplayMatchListPage(req, res, next) {
    match_1.default.find(function (err, matchCollection) {
        if (err) {
            return console.error(err);
        }
        res.render('index', { title: 'Match List', page: 'match-list', match: matchCollection, displayName: Util_1.UserDisplayName(req) });
    });
}
exports.DisplayMatchListPage = DisplayMatchListPage;
function DisplayEditPage(req, res, next) {
    let id = req.params.id;
    console.log(id);
    match_1.default.findById(id, {}, {}, (err, matchItemToEdit) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'editmatch', page: 'editmatch', match: matchItemToEdit, displayName: Util_1.UserDisplayName(req) });
    });
}
exports.DisplayEditPage = DisplayEditPage;
function DisplayAddPage(req, res, next) {
    res.render('index', { title: 'Add', page: 'editmatch', match: '', displayName: Util_1.UserDisplayName(req) });
}
exports.DisplayAddPage = DisplayAddPage;
function ProcessEditPage(req, res, next) {
    let id = req.params.id;
    let updatedMatchItem = new match_1.default({
        "_id": id,
        "matchNumber": req.body.matchNumber,
        "competitor1Name": req.body.competitor1Name,
        "competitor2Name": req.body.competitor2Name,
        "winner": req.body.winner
    });
    match_1.default.updateOne({ _id: id }, updatedMatchItem, {}, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/match-list');
    });
}
exports.ProcessEditPage = ProcessEditPage;
function ProcessAddPage(req, res, next) {
    let newMatch = new match_1.default({
        "matchNumber": req.body.matchNumber,
        "competitor1Name": req.body.competitor1Name,
        "competitor2Name": req.body.competitor2Name,
        "winner": req.body.winner
    });
    match_1.default.create(newMatch, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/match-list');
    });
}
exports.ProcessAddPage = ProcessAddPage;
function ProcessDeletePage(req, res, next) {
    let id = req.params.id;
    match_1.default.remove({ _id: id }, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/match-list');
    });
}
exports.ProcessDeletePage = ProcessDeletePage;
//# sourceMappingURL=match.js.map