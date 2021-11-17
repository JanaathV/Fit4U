"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayAddPage = exports.DisplayEditPage = exports.DisplayClothingListPage = void 0;
const clothing_1 = __importDefault(require("../Models/clothing"));
function DisplayClothingListPage(req, res, next) {
    clothing_1.default.find(function (err, clothingCollection) {
        if (err) {
            return console.error(err);
        }
        res.render('index', { title: 'Clothing List', page: 'clothing-list', clothing: clothingCollection });
    });
}
exports.DisplayClothingListPage = DisplayClothingListPage;
function DisplayEditPage(req, res, next) {
    let id = req.params.id;
    console.log(id);
    clothing_1.default.findById(id, {}, {}, (err, clothingItemToEdit) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Edit', page: 'edit', clothing: clothingItemToEdit });
    });
}
exports.DisplayEditPage = DisplayEditPage;
function DisplayAddPage(req, res, next) {
    res.render('index', { title: 'Add', page: 'edit', clothing: '' });
}
exports.DisplayAddPage = DisplayAddPage;
//# sourceMappingURL=clothing.js.map