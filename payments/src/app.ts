import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';

import cookieSession from 'cookie-session';

//routes
import { createChargeRouter } from './routes/new';
//middlewares
import { errorHandler } from '@pippip/hugo-common';
import { NotFoundError, currentUser } from '@pippip/hugo-common';

const app = express();

app.set('trust proxy', true); //trust HTTPS connection
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test',
  })
);
//middleware auth
app.use(currentUser);
//api
app.use(createChargeRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

//middleware Usage
app.use(errorHandler);

export { app };
