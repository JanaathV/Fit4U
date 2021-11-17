"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDeletePage = exports.ProcessAddPage = exports.ProcessEditPage = exports.DisplayAddPage = exports.DisplayEditPage = exports.DisplayTournamentListPage = void 0;
const tournament_1 = __importDefault(require("../Models/tournament"));
const Util_1 = require("../Util");
function DisplayTournamentListPage(req, res, next) {
    tournament_1.default.find(function (err, tournamentCollection) {
        if (err) {
            return console.error(err);
        }
        res.render('index', { title: 'Tournament List', page: 'tournament-list', tournament: tournamentCollection, displayName: Util_1.UserDisplayName(req) });
    });
}
exports.DisplayTournamentListPage = DisplayTournamentListPage;
function DisplayEditPage(req, res, next) {
    let id = req.params.id;
    console.log(id);
    tournament_1.default.findById(id, {}, {}, (err, tournamentItemToEdit) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'edittournament', page: 'edittournament', tournament: tournamentItemToEdit, displayName: Util_1.UserDisplayName(req) });
    });
}
exports.DisplayEditPage = DisplayEditPage;
function DisplayAddPage(req, res, next) {
    res.render('index', { title: 'Add', page: 'edittournament', tournament: '', displayName: Util_1.UserDisplayName(req) });
}
exports.DisplayAddPage = DisplayAddPage;
function ProcessEditPage(req, res, next) {
    let id = req.params.id;
    let updatedTournamentItem = new tournament_1.default({
        "_id": id,
        "tournamentName": req.body.tournamentName,
        "tournament_Custom_Id": req.body.tournament_Custom_Id,
        "numberOfCompetitors": req.body.numberOfCompetitors,
        "type": req.body.type,
        "description": req.body.description,
        "champion": req.body.champion
    });
    tournament_1.default.updateOne({ _id: id }, updatedTournamentItem, {}, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/tournament-list');
    });
}
exports.ProcessEditPage = ProcessEditPage;
function ProcessAddPage(req, res, next) {
    let newTournament = new tournament_1.default({
        "tournamentName": req.body.tournamentName,
        "tournament_Custom_Id": req.body.tournament_Custom_Id,
        "numberOfCompetitors": req.body.numberOfCompetitors,
        "type": req.body.type,
        "description": req.body.description,
        "champion": req.body.champion
    });
    tournament_1.default.create(newTournament, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/competitor-list');
    });
}
exports.ProcessAddPage = ProcessAddPage;
function ProcessDeletePage(req, res, next) {
    let id = req.params.id;
    tournament_1.default.remove({ _id: id }, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/tournament-list');
    });
}
exports.ProcessDeletePage = ProcessDeletePage;
//# sourceMappingURL=tournament.js.map