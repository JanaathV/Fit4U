'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.DisplayContactUsPage =
  exports.DisplayHealthDataPage =
  exports.ProcessLogoutPage =
  exports.ProcessRegisterPage =
  exports.DisplayRegisterPage =
  exports.ProcessLoginPage =
  exports.DisplayLoginPage =
  exports.DisplayCheckoutPage =
  exports.DisplayCartPage =
  exports.UpdateCartPage =
  exports.DisplayProfilePage =
  exports.DisplayProductPage =
  exports.DisplayHomePage =
  exports.ProcessCheckoutPage =
    void 0;
const passport_1 = __importDefault(require('passport'));
const user_1 = __importDefault(require('../Models/user'));
const cart_1 = __importDefault(require('../Models/cart'));
const healthData_1 = __importDefault(require('../Models/healthdata'));
const orderData_1 = __importDefault(require('../Models/order'));
const Util_1 = require('../Util');
function DisplayHomePage(req, res, next) {
  res.render('index', {
    title: 'Home',
    page: 'home',
    displayName: Util_1.UserDisplayName(req),
  });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayProductPage(req, res, next) {
  res.render('index', {
    title: 'Product Page',
    page: 'productpage',
    displayName: Util_1.UserDisplayName(req),
  });
}
exports.DisplayProductPage = DisplayProductPage;
function DisplayProfilePage(req, res, next) {
  res.render('index', {
    title: 'Profile Page',
    page: 'profile',
    displayName: Util_1.UserDisplayName(req),
    emailAddress: Util_1.UserEMail(req),
    username: Util_1.UserName(req),
  });
}
exports.DisplayProfilePage = DisplayProfilePage;

function DisplayHealthDataPage(req, res, next) {
  let query;
  if (req.user) {
    query = healthData_1.default.findOne({ userId: req.user.id });
  } else {
    res.redirect('/login');
  }

  query.exec(function (err, healthData) {
    if (err) return console.error(err);
    if (healthData) {
      res.render('index', {
        title: 'Your Health Data',
        page: 'healthData',
        displayName: Util_1.UserDisplayName(req),
        healthData,
        emailAddress: Util_1.UserEMail(req),
      });
    } else {
      res.redirect('/register');
    }
  });
}
exports.DisplayHealthDataPage = DisplayHealthDataPage;

function DisplayCartPage(req, res, next) {
  let query;
  if (req.user) {
    query = cart_1.default.findOne({ userId: req.user.id });
  } else {
    res.redirect('/login');
  }

  query.exec(function (err, cart) {
    if (err) return console.error(err);
    if (cart) {
      res.render('index', {
        title: 'Your Cart',
        page: 'cart',
        displayName: Util_1.UserDisplayName(req),
        cart,
      });
    } else {
      res.redirect('/register');
    }
  });
}
exports.DisplayCartPage = DisplayCartPage;

function UpdateCartPage(req, res, next) {
  let query;
  if (req.user) {
    query = cart_1.default.findOne({ userId: req.user.id });
  } else {
    res.redirect('/login');
  }
  query.exec(function (err, cart) {
    if (err) return console.error(err);
    if (!cart) return console.error('NO CART FOUND');
    if (req.params.cartParam == 'increase') {
      cart.increaseQuantity();
    } else if (req.params.cartParam == 'decrease' && cart.quantity > 0) {
      cart.decreaseQuantity();
    } else if (req.params.cartParam == 'giftToggle') {
      cart.toggleGift();
    } else {
      res.redirect('/cart');
    }
    cart.save().then(() => {
      res.redirect('/cart');
    });
  });
}
exports.UpdateCartPage = UpdateCartPage;

function DisplayCheckoutPage(req, res, next) {
    let query;
  if (req.user) {
    query = cart_1.default.findOne({ userId: req.user.id });
  } else {
    res.redirect('/login');
  }
  query.exec(function (err, cart) {
    if (err) return console.error(err);
    if (cart) {
      res.render('index', {
        title: 'Checkout',
        page: 'checkout',
        displayName: Util_1.UserDisplayName(req),
        cart,
      });
    } else {
      res.redirect('/register');
    }
  });
}
exports.DisplayCheckoutPage = DisplayCheckoutPage;

function ProcessCheckoutPage(req, res, next) {
  let newOrder = new orderData_1.default({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    address: req.body.address,
    city: req.body.city,
    province: req.body.province,
    postalCode: req.body.postalCode,
  });
  res.redirect('/home');
}
exports.ProcessCheckoutPage = ProcessCheckoutPage;

function DisplayLoginPage(req, res, next) {
  if (!req.user) {
    return res.render('index', {
      title: 'Login',
      page: 'login',
      messages: req.flash('loginMessage'),
      displayName: Util_1.UserDisplayName(req),
    });
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
    return res.render('index', {
      title: 'Register',
      page: 'register',
      messages: req.flash('registerMessage'),
      displayName: Util_1.UserDisplayName(req),
    });
  }
  return res.redirect('/home');
}
exports.DisplayRegisterPage = DisplayRegisterPage;
function ProcessRegisterPage(req, res, next) {
  let newUser = new user_1.default({
    username: req.body.username,
    emailAddress: req.body.EmailAddress,
    displayName: req.body.FirstName + ' ' + req.body.LastName,
  });
  user_1.default.register(newUser, req.body.password, (err) => {
    if (err) {
      console.error('Error: Inserting New User');
      if (err.name == 'UserExistsError') {
        console.error('Error: User Already Exists');
      }
      req.flash('registerMessage', 'Registration Error');
      return res.redirect('/register');
    }
    return passport_1.default.authenticate('local')(req, res, () => {
      let newCart = new cart_1.default({ userId: req.user.id });
      newCart.save();
      let newHealthData = new healthData_1.default({ userId: req.user.id });
      newHealthData.save();
      return res.redirect('/home');
    });
  });
}
exports.ProcessRegisterPage = ProcessRegisterPage;
function ProcessLogoutPage(req, res, next) {
  req.logout();
  res.redirect('/home');
}
exports.ProcessLogoutPage = ProcessLogoutPage;
function DisplayContactUsPage(req, res, next) {
  res.render('index', {
    title: 'Contact Us Page',
    page: 'contactus',
    displayName: Util_1.UserDisplayName(req),
  });
}
exports.DisplayContactUsPage = DisplayContactUsPage;


//# sourceMappingURL=index.js.map