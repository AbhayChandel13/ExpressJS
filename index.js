const express = require("express");
const path = require("path");
var { engine } = require("express-handlebars");
const members = require("./Members");

const app = express();

//Handlebar Middleware
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
// app.set('views', './views');

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Homepage Route
app.get("/", (req, res) => {
  res.render("index", { title: "Member App",members });
});


//app.use(logger);

//app.get('/',(req,res)=>{
// res.sendFile(path.join(__dirname,'public','index.html'));
// });
app.use(express.static(path.join(__dirname, "public")));

//Members api Routes
app.use("/api/members", require("./routes/api/members"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}`));
