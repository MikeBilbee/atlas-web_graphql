const mongoose = require('mongoose');
const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors');


mongoose.connect('mongodb+srv://cmbilbee:qLcUidzR6tg9L1Ro@cluster0.znbtgui.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();
app.use(cors());

mongoose.connection.once('open', () => {
  console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(8080, () => {
  console.log('now listening for request on port 8080');
});
