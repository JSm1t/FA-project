const express = require('express');
// const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const logger = require('morgan');
const users = require('./routes/users');

const app = express();


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err.stack : {};

  // render the error page
  res.status(err.status || 500);
  res.send({
    message: res.locals.message,
    stack: res.locals.error
  });
});

module.exports = app;
