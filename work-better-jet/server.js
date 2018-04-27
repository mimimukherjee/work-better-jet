const express = require('express');

// e.g.: $ LISTENPORT=8080 DBHOST=localhost DBPASS=password node server.js

var bodyParser = require('body-parser'),
    mysql = require('mysql'),
    useCache = process.env.DBUSECACHE || 'true',
    employeeCache = undefined,
    connectionOptions = {
        host: process.env.DBHOST || 'mysql_host',
        port: process.env.DBPORT || '3306',
        user: process.env.DBUSER || 'root',
        password: process.env.DBPASS || 'Welc0me_2017',
        database: process.env.DBSCHEMA || 'work_better'
    },
    connection = mysql.createConnection(connectionOptions);

// console.log("DB Options:");
// console.log(JSON.stringify(connectionOptions, undefined, 4));

const app = express();

app.use(bodyParser.json());
app.use(function (request, response, next) {
    console.log(request.path);
    next();
});


app.use(express.static(__dirname));


// Define the service that will use mysql to return the list of all employees
app.get('/employees', function (req, res) {

    var start = new Date();


    if (useCache === 'true' && employeeCache) {
        console.log("Using cached copy of employee table.");
        res.end(employeeCache);
    }
    else {
        console.log("Querying employees table");

        connection.query('SELECT * from employees', function (err, rows, fields) {
            if (err) {
                console.log('Error while performing Query.');
                return;
            }
            let end = new Date() - start;

            console.log("Query complete, found " + rows.length + " rows and took approx: " + end + " ms");
            employeeCache = JSON.stringify({"employees": rows});
            res.end(employeeCache);
        });
    }
});

let port = process.env.LISTENPORT || 80;
console.log("Listening for requests on port: " + port);
console.log("Using db cache: " + useCache);
app.listen(port);

