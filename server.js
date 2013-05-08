var express = require("express"),
	app = express(),
	port = process.env.PORT || 3000;

var pub = __dirname + '/public',
	view = __dirname + '/views';
   
app.configure(function(){
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(pub));
	app.use(express.static(view));
	app.use(express.errorHandler());
});

app.get("/views", function(req, res) {
 	res.render('index.html');
});

app.listen(port);