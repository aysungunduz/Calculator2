const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/index.html");
})

app.post("/", function(request, response) {
    let num1 = Number(request.body.num1);
    let num2 = Number(request.body.num2);

    let result = num1+num2;
    response.send("The result of calculation is " + result);
})
app.listen(3000, function(){
    console.log("Server is running on port 3000.")
})

