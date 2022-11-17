
const express = require('express');
const app = express();
const port = 3500;

const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


var clientRouter = require('./routes/client')(app);
var adminRouter = require('./routes/admin')(app);

app.use('/client', clientRouter);
app.use('/admin', adminRouter);


app.listen(port, () => {
    console.log(`E-mart ESG server is Running ${port}`)
})
