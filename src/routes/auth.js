const { userLogin } = require('../controllers/auth/login');
const { usersRegistration } = require('../controllers/auth/register');

const route = require('express').Router();


route.post('/users', usersRegistration);
route.post('/users/auth', userLogin)


module.exports = route;