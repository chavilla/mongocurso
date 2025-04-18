import express, { Application } from 'express'
import mongoose, { Error as MongooseError } from 'mongoose';
import { ApolloServer, ExpressContext } from 'apollo-server-express';
const dotenv = require('dotenv');
import { typeDefs, resolvers } from './graphql';
import cors from 'cors'
//const routes = require('./routes');

const app: Application = express()
app.use(express.json());
// ----- GRAPHQL config
async function startServer() {
  const server = new ApolloServer<ExpressContext>({ typeDefs, resolvers });
  await server.start();
  
  // Use server.getMiddleware() to mount the GraphQL server to the Express app
  // Apply middleware to Express
  server.applyMiddleware({
    app: app as any,
    path: '/graphql', // specify the path for the GraphQL endpoint
  });
}

startServer()

 // ----- EXPRESS general configs -----
dotenv.config();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  return console.log(`Server has started in http://localhost:${PORT}`);
});

// ----- EXPRESS Router -----
//app.use('/', routes);
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// ----- !DB connection! -----
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/practicas')
  .then(() => console.log('MongoDB conectado exitosamente'))
  .catch((err: MongooseError) => console.error(err?.message));