const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
 var cookie = require('cookie');
	
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);

});

app.post('/forma', (req, res) => {
  const email = {email:JSON.stringify(req.body.email)};
	
 var fs = require('fs');
  console.log(`POST request: username is ${JSON.stringify(req.body.email)} `);
 
	let data = JSON.stringify(email);  
fs.writeFileSync('subs.json', JSON.stringify(data));
	 
	res.setHeader('Set-Cookie', cookie.serialize('Email', String(req.body.email), {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7 // 1 week
    }));
// <- true
 

});

app.listen(3000, () => {
  console.log("Started on http://localhost:3000");
});