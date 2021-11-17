import express, { Request, Response, NextFunction } from 'express';

// Clothing Model
import Clothing from '../Models/clothing';

// display page functions
export function DisplayClothingListPage(req: Request, res: Response, next: NextFunction): void
{
    // db.clothing.find()
    Clothing.find(function(err, clothingCollection){
        if(err)
        {
            return console.error(err);
        }

        res.render('index', {title: 'Clothing List', page: 'clothing-list', clothing: clothingCollection});
    });
}

export function DisplayEditPage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

    console.log(id);

    Clothing.findById(id, {}, {}, (err, clothingItemToEdit) => 
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }

        // show the edit page

        res.render('index', {title: 'Edit', page: 'edit', clothing: clothingItemToEdit});
    });
}

export function DisplayAddPage(req: Request, res: Response, next: NextFunction): void
{
        res.render('index', {title: 'Add', page: 'edit', clothing: ''});
}
