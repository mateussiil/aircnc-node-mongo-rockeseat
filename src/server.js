const express = require('express');
const mongoose = require('mongoose') ;

const routes = require('./routes');

const app = express();

mongoose.connect(process.env.MONGO_URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// get=busca(lista) informaçoes put=edita delete=apaga post=adiciona
//idade:req.query.idade

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333);
