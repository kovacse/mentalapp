const express = require('express');
const path = require("path");
const app = express();
const port = 3000;

app.set('view engine', 'pug')

app.get('/', (req, res) => {
	res.render("server", { title: "Login", message: "Welcome"});
});

app.listen(port, () => {
	console.log(`Server started at port ${port}`);
});