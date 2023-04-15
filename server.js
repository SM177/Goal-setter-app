const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT;
const colors = require('colors');
// const protect = require('../middleware/authorizationMiddleware');

// const errorHandler = require('./Backend/middleware/errorMIddleware');
const connectDB = require('./Backend/config/connect');
const protect = require('./Backend/middleware/authorizationMiddleware');

connectDB();
// app.use(errorHandler);
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use('/api/goals', require('./Backend/routes/goalRoutes'))
// user requests
app.use('/api/users', require('./Backend/routes/userRoutes'));
// build a server
// // protect the routes
app.use(protect);
app.listen(process.env.PORT, () =>
console.log(`server started on port : ${process.env.PORT.cyan}`))