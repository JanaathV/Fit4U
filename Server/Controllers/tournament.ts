//      File Name: tournament.ts
//      Author: Web Wiz
//      Group Number: 1
//      Date: July 13, 2021
//
import express, { Request, Response, NextFunction } from 'express';
import { AuthGuard } from '../Util/index'; // import Util functions
// Clothing Model
import Competitor from '../Models/competitor';
import Match from '../Models/match';
import Tournament from '../Models/tournament';
import { UserDisplayName } from '../Util';  // import Util functions

// display page functions
export function DisplayTournamentListPage(req: Request, res: Response, next: NextFunction): void
{
    // db.competitor.find()
    Tournament.find(function(err, tournamentCollection){
        if(err)
        {
            return console.error(err);
        }
        res.render('index', {title: 'Tournament List', page: 'tournament-list', tournament: tournamentCollection, displayName: UserDisplayName(req)});
    });
}

export function DisplayEditPage(req: Request, res: Response, next: NextFunction): void {
  let id = req.params.id;

  console.log(id);

  Tournament.findById(id, {}, {}, (err, tournamentItemToEdit) => {
    if (err) {
      console.error(err);
      res.end(err);
    }

    // show the edit page

    res.render('index', { title: 'edittournament', page: 'edittournament', tournament: tournamentItemToEdit, displayName: UserDisplayName(req) });
  });
}

export function DisplayAddPage(req: Request, res: Response, next: NextFunction): void
{
        res.render('index', {title: 'Add', page: 'edittournament', tournament: '', displayName: UserDisplayName(req)});
}

// Process (E)dit page
export function ProcessEditPage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

    // instantiate a new Competitor Item
    let updatedTournamentItem = new Tournament
    ({
       "_id": id,
      "tournamentName": req.body.tournamentName,
      "tournament_Custom_Id": req.body.tournament_Custom_Id,
      "numberOfCompetitors": req.body.numberOfCompetitors,
      "type": req.body.type,
      "description": req.body.description,
      "champion": req.body.champion
    });
  
    // find the competitor item via db.competitor.update({"_id":id}) and then update
    Tournament.updateOne({_id: id}, updatedTournamentItem, {}, (err) =>{
      if(err)
      {
        console.error(err);
        res.end(err);
      }
  
      res.redirect('/tournament-list');
    });
}

// Process (C)reate page
export function ProcessAddPage(req: Request, res: Response, next: NextFunction): void
{
  // instantiate a new Competitor
  let newTournament = new Tournament
  ({
    "tournamentName": req.body.tournamentName,
    "tournament_Custom_Id": req.body.tournament_Custom_Id,
      "numberOfCompetitors": req.body.numberOfCompetitors,
      "type": req.body.type,
      "description": req.body.description,
      "champion": req.body.champion
  });

  // db.competitor.insert({competitor data is here...})
  Tournament.create(newTournament, (err) => {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    res.redirect('/competitor-list');
  });
}

// Process (D)elete page
  export function ProcessDeletePage(req: Request, res: Response, next: NextFunction): void
  {
    let id = req.params.id;

    // db.contact.remove({"_id: id"})
    Tournament.remove({ _id: id }, (err) => {
      if (err) {
        console.error(err);
        res.end(err);
      }

      res.redirect('/tournament-list');
    });
  }
