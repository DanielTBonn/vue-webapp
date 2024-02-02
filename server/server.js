const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const PATH = require('path');

const { typeDefs, resolvers } = require('./schema');
const db = require('./config/connection');

const app = express();