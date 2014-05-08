var express = require('express');
var app = express();

var Sequelize = require('Sequelize');

sequelize = new Sequelize('mydatabase', 'root', null, {
	host : 'localhost'
});


sequelize.authenticate().complete(function(err){
	if (!!err) {
		console.log('unable to connect to the database:', err)
	} else {
		console.log('Connection established.')
	}
});

var post = sequelize.define('post', {
title: Sequelize.STRING,
description: Sequelize.TEXT

});

var lawyer = sequelize.define('lawyer', {
name: Sequelize.STRING,
location: Sequelize.STRING,
winrecord: Sequelize.INTEGER,
lossrecord: Sequelize.INTEGER,
hourlyrate: Sequelize.FLOAT
});


sequelize.sync();

app.get('/', function(req, res ){

    lawyer.all().success(function(lawyers) {
  // lawyers will be an array of all Lawyer instances
  

  res.json(lawyers);
})

});



app.listen(3000);