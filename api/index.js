const { ApolloServer } = require('apollo-server');
const  userSchema = require('./user/schema/user.graphql');
const  userResolvers = require('./user/resolvers/userResolvers.js');
const {mergeTypeDefs} = require('graphql-tools');
const UsersAPI = require('./user/datasource/user');



const typeDefs = mergeTypeDefs([userSchema])
const resolvers = [userResolvers]

const server = new ApolloServer( 
  {
     typeDefs, 
     resolvers,
     dataSources : () => {
       return { usersAPI :  new UsersAPI()}
     }
  } ) 

server.listen().then(({url}) => {
  console.log(`Servidor rodando ${url}`)
})