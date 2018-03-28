const express = require('express');
const app = express();

app.use(function(request, response, next) {
    console.log(request.path);
    next();
});


app.use(express.static(__dirname));


let port = process.env.PORT || 9010;
app.listen(port);

