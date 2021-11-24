
import express, { Request, Response, NextFunction } from 'express';

import passport from 'passport';
import User from '../Models/user'; // create an instance of the User model
import { UserDisplayName } from '../Util';  // import Util functions


// Display Page Functions

export function DisplayHomePage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Home', page: 'home',  displayName: UserDisplayName(req)  });
}

export function DisplayProductPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Product Page', page: 'productpage',  displayName: UserDisplayName(req)  });
}

export function DisplayProfilePage(req: Request, res: Response, next: NextFunction): void
{
    User.find(function (err, usersCollection)){
        if (err) {
            return console.error(err);
        }
        res.render('index', { title: 'Profile Page', page: 'profile', user: usersCollection,  displayName: UserDisplayName(req)  });
    }
}

export function DisplayCartPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Cart', page: 'cart',  displayName: UserDisplayName(req)  });
}

export function DisplayCheckoutPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Checkout', page: 'checkout',  displayName: UserDisplayName(req)  });
}

export function DisplayLoginPage(req: Request, res: Response, next: NextFunction): void
{
    if(!req.user)
    {
        return res.render('index', { title: 'Login', page: 'login', messages: req.flash('loginMessage'), displayName: UserDisplayName(req)  });
    }

    return res.redirect('/home'); /*************NEEDS TO REDIRECT TO ANOTHER PAGE*********/
}

export function ProcessLoginPage(req: Request, res: Response, next: NextFunction): void
{
    passport.authenticate('local', (err, user, info) => {
        // are there server errors?
        if(err)
        {
            console.error(err);
            return next(err);
        }

        // are there login errors?
        if(!user)
        {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }

        req.login(user, (err) => 
        // are there db errors?
        {
            if(err)
            {
                console.error(err);
                return next(err);
            }

            return res.redirect('/home'); /*************NEEDS TO REDIRECT TO ANOTHER PAGE*********/

        });
    })(req, res, next);
}

export function DisplayRegisterPage(req: Request, res: Response, next: NextFunction): void
{
    if(!req.user)
    {
        return res.render('index', { title: 'Register', page: 'register', messages: req.flash('registerMessage'), displayName: UserDisplayName(req)  });
    }

    return res.redirect('/home'); /*************NEEDS TO REDIRECT TO ANOTHER PAGE*********/
}

export function ProcessRegisterPage(req: Request, res: Response, next: NextFunction): void
{
    // instantiate a new User Object
    let newUser = new User
    ({
        username: req.body.username,
        emailAddress: req.body.emailAddress,
        displayName: req.body.FirstName + " " + req.body.LastName
    });

    User.register(newUser, req.body.password, (err) =>
    {
        if(err)
        {
            console.error('Error: Inserting New User');
            if(err.name == "UserExistsError")
            {
                console.error('Error: User Already Exists');
            }
            req.flash('registerMessage', 'Registration Error');

            return res.redirect('/register');
        }

        // after successful registration - login the user
        return passport.authenticate('local')(req, res, () =>{
            return res.redirect('/home'); /*************NEEDS TO REDIRECT TO ANOTHER PAGE*********/
        });
    });
}

export function ProcessLogoutPage(req: Request, res: Response, next: NextFunction): void
{
    req.logout();

    res.redirect('/home');
}


