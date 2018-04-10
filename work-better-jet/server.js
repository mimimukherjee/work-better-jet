const express = require('express');


var bodyParser = require('body-parser')
var mysql      = require('mysql')
var hostString = process.argv[2]
var connection = mysql.createConnection({
    host     : 'mysql_host',
    port     : '3306',
    user     : 'root',
    password : 'Welc0me_2017',
    database : 'EmployeeMySQLDB'
});


const app = express();

app.use(bodyParser.json())
app.use(function(request, response, next) {
    console.log(request.path);
    next();
});


app.use(express.static(__dirname));

app.get('/employees', function(req, res) {

        console.log('/employees api called')

    connection.query('SELECT * from employees', function(err, rows, fields) {
        if (err) {
            console.log('Error while performing Query.');
            return;
        }
        console.log('sql executed')
            console.log(rows);
        var employees = {"Employees" : rows}
        res.end(JSON.stringify(employees));
    });
});

let port = process.env.PORT || 80;
app.listen(port);

