import request from 'supertest';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { app } from '../app';
import jwt from 'jsonwebtoken';

declare global {
  var signin: (id?: string) => string[];
}

jest.mock('../nats-wrapper'); //fake implement for test

process.env.STRIPE_KEY =
  'sk_test_51LcnyEEU6WAFz5EEe5HwSi25cByk77soapSNqDR8vD7g6cxiiNqRrTtDntiCb5iqw229yC4g6CCARTcauPdgpsvX00LPKLVs44';

let mongo: any;
beforeAll(async () => {
  process.env.JWT_KEY = 'asdasdasd';
  const mongo = await MongoMemoryServer.create();
  const mongoUri = mongo.getUri();

  await mongoose.connect(mongoUri, {});
});

beforeEach(async () => {
  jest.clearAllMocks();
  const collections = await mongoose.connection.db.collections();
  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  if (mongo) {
    await mongo.stop();
  }
  await mongoose.connection.close();
});

global.signin = (id?: string) => {
  //Build a JW payload. {id, email}
  const payload = {
    id: id || new mongoose.Types.ObjectId().toHexString(),
    email: 'test@test.com',
  };
  //Create the JWT!
  const token = jwt.sign(payload, process.env.JWT_KEY!);
  //build session Object. {jwt: MY_JWT}
  const session = { jwt: token };
  //Turn that session into JSON
  const sessionJSON = JSON.stringify(session);
  //Take JSON and encode it as base64
  const base64 = Buffer.from(sessionJSON).toString('base64');
  //return a string thats the cookie with encoded data.
  return [`session=${base64}`];
};
