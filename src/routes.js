const express = require('express');
const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');
const TeamController = require('./controllers/TeamController');
const ProductController = require('./controllers/ProductController');
const ReportController = require('./controllers/ReportController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/users/:user_id/addresses', AddressController.index);
routes.post('/users/:user_id/addresses', AddressController.store);

routes.get('/users/:user_id/teams', TeamController.index);
routes.post('/users/:user_id/teams', TeamController.store);
routes.delete('/users/:user_id/teams', TeamController.delete);

routes.get('/teams/:team_id/products', ProductController.index);
routes.post('/teams/:team_id/products', ProductController.store);
//routes.delete('/users/:user_id/teams', ProductController.delete);

routes.get('/report', ReportController.show);

module.exports = routes;
