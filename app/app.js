const express = require('express');
const app = express();
const charRouter = require('../router/charRouter');
const locRouter = require('../router/charRouter');
const morgan = require('morgan');

app.use(morgan('dev'));

app.get("/", (req, res) => {
    res.status(200).json({ message: "Service is up and running" });
});

app.use("/character", charRouter);
app.use("/location", locRouter);

app.use((req, res, next) => {
    const error = new Error("Page not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status,
            method: req.method,
        }
    })
});

module.exports = app;