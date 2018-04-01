import express from 'express'
import createError from "http-errors";
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

const publicPath = path.resolve(__dirname, './../../dist/');

export default (app) => {

    app.set('port', 3000);
    app.set('views', path.join(__dirname, './../views'));
    app.set('view engine', 'pug');
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(publicPath));

    app.use((req, res, next) => {
        next(createError(404));
    });

    app.use((err, req, res, next) => {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // render the error page
        res.status(err.status || 500);
        res.render('error');
    });
}