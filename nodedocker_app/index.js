// const hapi = require('@hapi/hapi');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

console.log('=================Mela: trying to connect to Mongo');

// Connect to MongoDB
mongoose
  .connect(
    'mongodb://mongo:27017/docker-node-mongo',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// const options = {
//   autoIndex: false, // Don't build indexes
//   reconnectTries: 30, // Retry up to 30 times
//   reconnectInterval: 500, // Reconnect every 500ms
//   poolSize: 10, // Maintain up to 10 socket connections
//   // If not connected, return errors immediately rather than waiting for reconnect
//   bufferMaxEntries: 0
// }

// const connectWithRetry = () => {
//   console.log('===Mela: MongoDB connection with retry')
//   mongoose.connect("mongodb://mongo:27017/docker-node-mongo", options).then(()=>{
//     console.log('===Mela: MongoDB is connected')
//   }).catch(err=>{
//     console.log('===Mela: MongoDB connection unsuccessful, retry after 5 seconds.')
//     setTimeout(connectWithRetry, 5000)
//   })
// }

// connectWithRetry()

const Item = require('./models/Item');

app.get('/', (req, res) => {
    Item.find()
      .then(items => res.render('index', { items }))
      .catch(err => res.status(404).json({ msg: 'No items found' }));
  });
  
app.post('/item/add', (req, res) => {
    const newItem = new Item({
      name: req.body.name
    });
  
    newItem.save().then(item => res.redirect('/'));
});
  
const port = 3000;
  
app.listen(port, () => console.log('=====Mela: Server running...'));

// const server = hapi.server({
//     port: 3000,
//     host: 'localhost'
// });

// const start = async () => {
//     await server.start();
// };

// start();

// server.route({
//     path: '/',
//     method: 'GET',
//     handler: (request, h) => {
//       return 'Hello, hapi!';
//     }
// });

// server.start();
// console.log('Server running on %s', server.info.uri);

