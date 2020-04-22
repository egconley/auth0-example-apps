const { ApolloServer } = require("apollo-server-lambda");
const typeDefs = require("./_utils/typedefs");
const resolvers = require("./_utils/resolvers");
const connectToMongoDB = require("./_utils/db");

exports.handler = async function(event, context) {
    const db = await connectToMongoDB();
    const server = new ApolloServer({
        typeDefs,
        resolvers: resolvers(db),
        introspection: true,
        playground: true,
        cors: true
    });
    return new Promise((yay, nay) => {
        const cb = (err, args) => (err ? nay(err) : yay(args));
        server.createHandler( { path: '/graphql', cors: true } )(event, context, cb);
    });
};

const config = {
  api: {
    bodyParser: false,
  },
};

exports.graphql = async function(req, res){
  if (req.method === 'OPTIONS') {
    return res.status(200).send();
  } else {
    return handler(req, res);
  }
};
