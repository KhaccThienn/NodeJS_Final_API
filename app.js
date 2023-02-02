require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const connect = require('./config/database');

const api_routes = require('./routes/api.route');

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

api_routes(app);

app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
    console.log(`Server is listening on http://%s:%s`, process.env.APP_HOST, process.env.APP_PORT);
});