"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessLogoutPage = exports.ProcessRegisterPage = exports.DisplayRegisterPage = exports.ProcessLoginPage = exports.DisplayLoginPage = exports.DisplayViewTourneyPage = exports.DisplayNewTourneyPage = exports.DisplayServicesPage = exports.DisplayActiveTourneyPage = exports.DisplayTournamentStatPage = exports.DisplayHomePage = void 0;
const passport_1 = __importDefault(require("passport"));
const user_1 = __importDefault(require("../Models/user"));
const Util_1 = require("../Util");
const competitor_1 = __importDefault(require("../Models/competitor"));
const tournament_1 = __importDefault(require("../Models/tournament"));
function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home', displayName: Util_1.UserDisplayName(req) });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayTournamentStatPage(req, res, next) {
    res.render('index', { title: 'Tournament Statistics', page: 'tournamentstat', displayName: Util_1.UserDisplayName(req) });
}
exports.DisplayTournamentStatPage = DisplayTournamentStatPage;
function DisplayActiveTourneyPage(req, res, next) {
    res.render("index", { title: "Active Tournaments", page: "activetourney", displayName: Util_1.UserDisplayName(req) });
}
exports.DisplayActiveTourneyPage = DisplayActiveTourneyPage;
function DisplayServicesPage(req, res, next) {
    res.render('index', { title: 'Our Services', page: 'services', displayName: Util_1.UserDisplayName(req) });
}
exports.DisplayServicesPage = DisplayServicesPage;
function DisplayNewTourneyPage(req, res, next) {
    res.render('index', { title: 'Create New A Tournament', page: 'newtourney', displayName: Util_1.UserDisplayName(req) });
}
exports.DisplayNewTourneyPage = DisplayNewTourneyPage;
function DisplayViewTourneyPage(req, res, next) {
    competitor_1.default.find(function (err, competitorCollection) {
        if (err) {
            return console.error(err);
        }
        tournament_1.default.find(function (err, tournamentCollection) {
            if (err) {
                return console.error(err);
            }
            res.render('index', { title: 'Tournament Tree', page: 'viewtourney', competitor: competitorCollection, tournament: tournamentCollection, displayName: Util_1.UserDisplayName(req) });
        });
    });
}
exports.DisplayViewTourneyPage = DisplayViewTourneyPage;
function DisplayLoginPage(req, res, next) {
    if (!req.user) {
        return res.render('index', { title: 'Login', page: 'login', messages: req.flash('loginMessage'), displayName: Util_1.UserDisplayName(req) });
    }
    return res.redirect('/home');
}
exports.DisplayLoginPage = DisplayLoginPage;
function ProcessLoginPage(req, res, next) {
    passport_1.default.authenticate('local', (err, user, info) => {
        if (err) {
            console.error(err);
            return next(err);
        }
        if (!user) {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
        req.login(user, (err) => {
            if (err) {
                console.error(err);
                return next(err);
            }
            return res.redirect('/home');
        });
    })(req, res, next);
}
exports.ProcessLoginPage = ProcessLoginPage;
function DisplayRegisterPage(req, res, next) {
    if (!req.user) {
        return res.render('index', { title: 'Register', page: 'register', messages: req.flash('registerMessage'), displayName: Util_1.UserDisplayName(req) });
    }
    return res.redirect('/home');
}
exports.DisplayRegisterPage = DisplayRegisterPage;
function ProcessRegisterPage(req, res, next) {
    let newUser = new user_1.default({
        username: req.body.username,
        emailAddress: req.body.emailAddress,
        displayName: req.body.FirstName + " " + req.body.LastName
    });
    user_1.default.register(newUser, req.body.password, (err) => {
        if (err) {
            console.error('Error: Inserting New User');
            if (err.name == "UserExistsError") {
                console.error('Error: User Already Exists');
            }
            req.flash('registerMessage', 'Registration Error');
            return res.redirect('/register');
        }
        return passport_1.default.authenticate('local')(req, res, () => {
            return res.redirect('/home');
        });
    });
}
exports.ProcessRegisterPage = ProcessRegisterPage;
function ProcessLogoutPage(req, res, next) {
    req.logout();
    res.redirect('/login');
}
exports.ProcessLogoutPage = ProcessLogoutPage;
//# sourceMappingURL=index.js.map