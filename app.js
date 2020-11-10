const path =  require("path");

const express = require("express");
const bodyParser = require("body-parser");

const adminData = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");
const errorRoutes = require("./routes/404.js");

//Setup
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', 'views');

//Middlewares defintion
app.use('/admin', adminData.routes);
app.use(shopRoutes);

//404 Catch-all page
app.use(errorRoutes )

app.listen(3000);