const mongoose = require('mongoose');

const app = require('./app');

const DB = 'mongodb://admin:admin@tlw-shard-00-00-xus4c.mongodb.net:27017,tlw-shard-00-01-xus4c.mongodb.net:27017,tlw-shard-00-02-xus4c.mongodb.net:27017/tlw?ssl=true&replicaSet=TLW-shard-0&authSource=admin&retryWrites=true&w=majority';

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB Connected'));

const server = app.listen(process.env.PORT || 9000, () => {
  console.log(`App running on port...`);
});
