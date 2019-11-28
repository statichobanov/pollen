const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const expressLayouts = require('express-ejs-layouts');
const errorHandler = require('express-error-handler');

module.exports = (app) => {
  app.set('port', 2001);
  app.set('view engine', 'ejs');
  app.use(expressLayouts);
  app.set('layout', 'layouts/layout.ejs');

  app.use(errorHandler());
  app.use(bodyParser.urlencoded({
    extended: false,
  }));
  app.use(bodyParser.json());
  app.use(methodOverride('X-HTTP-Method-Override'));
  app.use(session({
    secret: 'pollen',
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: true,
    },
  }));
};