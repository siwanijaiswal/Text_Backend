const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

app.use(cors())
app.use(express.json());
//connect with database
const connectString = 'mongodb://0.0.0.0:27017/text-utils';
mongoose.connect(connectString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


app.get('/', (req, res) => {
    res.send('Hello World');
});

//routes
app.use('/auth', require('./routes/user'));
app.use("/text", require("./routes/Text"))

app.listen(5000, () => console.log('Server listening on port 5000'));
