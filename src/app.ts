import express, { Application } from 'express';
import mongoose, { Error as MongooseError } from 'mongoose';
import { ApolloServer, ExpressContext } from 'apollo-server-express';
const dotenv = require('dotenv');
import { resolvers } from './graphql';
import typeDefs from './graphql/schemas';

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

const PORT = process.env.NODE_ENV === 'test'? 4001 : process.env.PORT || 4000; 

app.listen(PORT, () => {
  console.log(`Server has started in http://localhost:${PORT}`);
});

// ----- EXPRESS Router -----
//app.use('/', routes);
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// ----- !DB connection! -----
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/testing')
  .then(() => console.log('MongoDB conectado exitosamente'))
  .catch((err: MongooseError) => console.error(err?.message));

  export default app;