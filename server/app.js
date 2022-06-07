require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const FileStore = require('session-file-store')(session);

const app = express();
const { PORT, COOKIE_SECRET, COOKIE_NAME } = process.env;

const authRouter = require('./src/routes/auth.router');
const usersRouter = require('./src/routes/users.router');

const companyRouter = require('./src/routes/companyRouter');
const workerRouter = require('./src/routes/workerRouter');
const tipsRouter = require('./src/routes/tipsRouter');
const reviewRouter = require('./src/routes/reviewRouter');

// SERVER'S SETTINGS
app.set('cookieName', COOKIE_NAME);

// APP'S MIDDLEWARES
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);
app.use(express.json());
app.use(
  session({
    name: app.get('cookieName'),
    secret: COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new FileStore(),
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 1e3 * 86400, // COOKIE'S LIFETIME — 1 DAY
    },
  }),
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(process.env.PWD, 'public')));

// APP'S ROUTES
app.use('/auth', authRouter);
app.use('/users', usersRouter);

app.use('/lk', workerRouter);
app.use('/company', companyRouter);
app.use('/tips', tipsRouter);
app.use('/review', reviewRouter);

app.listen(PORT, () => {
  console.log('server start ', PORT);
});
