//      File Name: match.ts
//      Author: Web Wiz
//      Group Number: 1
//      Date: July 13, 2021
//
import express, { Request, Response, NextFunction } from 'express';

// Clothing Model

import Match from '../Models/match';
import { UserDisplayName } from '../Util';  // import Util functions

// display page functions
export function DisplayMatchListPage(req: Request, res: Response, next: NextFunction): void
{
    // db.competitor.find()
    Match.find(function(err, matchCollection){
        if(err)
        {
            return console.error(err);
        }

        res.render('index', {title: 'Match List', page: 'match-list', match: matchCollection, displayName: UserDisplayName(req)});
    });
}

export function DisplayEditPage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

    console.log(id);

    Match.findById(id, {}, {}, (err, matchItemToEdit) => 
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }

        // show the edit page

        res.render('index', {title: 'editmatch', page: 'editmatch', match: matchItemToEdit, displayName: UserDisplayName(req)});
    });
}

export function DisplayAddPage(req: Request, res: Response, next: NextFunction): void
{
        res.render('index', {title: 'Add', page: 'editmatch', match: '', displayName: UserDisplayName(req)});
}

// Process (E)dit page
export function ProcessEditPage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

    // instantiate a new Competitor Item
    let updatedMatchItem = new Match
    ({
       "_id": id,
      "matchNumber": req.body.matchNumber,
      "competitor1Name": req.body.competitor1Name,
      "competitor2Name": req.body.competitor2Name,
      "winner": req.body.winner
    });
  
    // find the competitor item via db.competitor.update({"_id":id}) and then update
    Match.updateOne({_id: id}, updatedMatchItem, {}, (err) =>{
      if(err)
      {
        console.error(err);
        res.end(err);
      }
  
      res.redirect('/match-list');
    });
}

// Process (C)reate page
export function ProcessAddPage(req: Request, res: Response, next: NextFunction): void
{
  // instantiate a new Competitor
  let newMatch = new Match
  ({
      "matchNumber": req.body.matchNumber,
      "competitor1Name": req.body.competitor1Name,
      "competitor2Name": req.body.competitor2Name,
      "winner": req.body.winner
  });

  // db.competitor.insert({competitor data is here...})
  Match.create(newMatch, (err) => {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    res.redirect('/match-list');
  });
}

// Process (D)elete page
export function ProcessDeletePage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

  // db.contact.remove({"_id: id"})
  Match.remove({_id: id}, (err) => {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    res.redirect('/match-list');
  });
}