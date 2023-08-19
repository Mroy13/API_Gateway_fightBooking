const express=require('express');
const routes=require('./routes');
const rateLimit = require('express-rate-limit')
 const {ServerConfig}=require('./config');
 

 const app=express();
 const limiter = rateLimit({
	windowMs: 1 * 60 * 1000, // 1 minutes
	max: 5, // Limit each IP to 5 requests per `window` (here, per 1 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false,
})
 app.use(limiter);
 app.use(express.json());
 app.use(express.urlencoded({extended: true}));
 app.use('/api',routes);
 app.listen(ServerConfig.PORT,()=>{
   console.log(`server is up at port no ${ServerConfig.PORT}`);
 })
