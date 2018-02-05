import express from 'express';
import cookieParser from 'cookie-parser';
import config from './config';
import router from './router'
import db from './mongodb/db.js';

const app = express()

// express middleWare
app.all('*', (req, res, next) => {
	res.header("Access-Control-Allow-Origin", req.headers.origin || '*');
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials", true); //可以带cookies
	res.header("X-Powered-By", '3.2.1')
	if (req.method == 'OPTIONS') {
	  	res.send(200);
	} else {
	    next();
	}
});
app.use(cookieParser());
app.use(express.static(__dirname + '/public'))

router(app)

app.listen(config.port);
console.log('请访问 localhost:' + config.port)
