const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const router = express.Router();

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

//Routes
const html = require('./routes/html-routes');

//  ************** MIDDLEWARES ****************
// --------------------------------------------Handle-bars middleware
app.engine(
	'handlebars',
	exphbs({
		defaultLayout: 'main',
	})
);
app.set('view engine', 'handlebars');

//Routes to use
app.use('/', html);

const PORT = process.env.PORT || 4000;

app.listen(PORT, function() {
	console.log('App listening on PORT ' + PORT);
});
