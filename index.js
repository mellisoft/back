const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const config = require('./config');
const cors = require('cors');
const app = express();
const multer = require('multer');
const logger = require('./logger');
const {transports, format} = require('winston')
const expressWinston = require('express-winston');
mongoose.set('strictQuery', false);
const myFormat = format.printf(({level, meta, timestamp})=>{
  return `${timestamp} ${level}: ${meta.message}`
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressWinston.logger({
  winstonInstance: logger,
  statusLevels: true
}))
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(cors());
const testRoute = require('./routes/test');

app.use(testRoute);


//app.use(helmet());
// app.use((err, req, res, next) => {
//     if (err.name === 'ValidationError') {
//         var valErrors = [];
//         Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
//         res.status(422).send(valErrors)
//     }
//     if(err instanceof multer.MulterError){
//       res.status(200).send({
//         success:0,
//         message: err.message
//       })
//     }
// });
// app.use(expressWinston.errorLogger({
//   transports: [
//     new transports.File({
//       filename: 'public/logsInternalErrors.log'
//     })
//   ],
//   format: format.combine(
//     format.json(),
//     format.timestamp(),
//     myFormat
//   )
// }));
mongoose.connect(config.MongoURI,{useNewUrlParser: true,
    useUnifiedTopology: true})
.then(()=>{
    app.listen(config.PORT)
}).catch(err=>{
    console.log(err);
});