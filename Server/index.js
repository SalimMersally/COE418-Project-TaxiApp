
const  express  = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const session = require("express-session");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root" ,
    database: "db1",
});
const app = express();

app.use(cors());
app.use(express.json());
app.use(session({
    secret:'secret',
    resave:true,
    saveUninitialized: true
}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.post('/api/user/login', (req, res)=> {
	const username = request.body.username;
	const password = request.body.password;
	if (username && password) {
		connection.query('SELECT * FROM client WHERE email = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/api/user/dashboard');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});
app.post('/api/company/login', (req, res)=> {
	const username = request.body.username;
	const password = request.body.password;
	if (username && password) {
		connection.query('SELECT * FROM client WHERE email = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/api/user/dashboard');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

app.get('/api/User/Dashboard', (request, response) =>{
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});
app.get('/api/company/Dashboard', (request, response)=> {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});

app.post("/api/user/signup",(req , res) => {
    const firsstname = req.body.firsstName
    const lastName = req.body.lastName
    const email = req.body.email
    const password = req.body.password
    const mobileNB = req.body.mobileNB
    const sqlInsert = "INSERT INTO client (firsstname, lastname,email,password,mobileNB) VALUES (?,?,?,?,?)"
    db.query(sqlInsert, [firsstName,lastName,email,password,mobileNB],(err,result) =>{
        console.log(result);
        console.log(err);
    })
}); 

app.post("/api/company/signup",(req , res) => {
    const name = req.body.name
    const dateOfEstablishment = req.body.dateOfEstablishment
    const email = req.body.email
    const password = req.body.password
    const description = req.body.description
    const sqlInsert = "INSERT INTO company (firsstname, lastname,email,password,mobileNB) VALUES (?,?,?,?,?)"
    db.query(sqlInsert, [name,email,password,dateOfEstablishmet, description],(err,result) =>{
        console.log(result);
        console.log(err);
    })
}); 
app.post("/api/user/login", (req,res)=> {
    const email = req.body.email
    const password = req.body.password
    const sqlSelaect = "SELECT * FROM client WHERE email = ? AND password = ? "
    db.query(sqlSelect,  [username, password], function(err, result) {

    })
} );
app.post("/api/company/login", (req,res)=> {
    const email = req.body.email
    const password = req.body.password
    const sqlSelaect = "SELECT * FROM client WHERE email = ? AND password = ? "
    db.query(sqlSelect,  [username, password], function(err, result) {

    })
} );
app.listen(3001, ()=>{
    console.log("Server started on port 3001");
});