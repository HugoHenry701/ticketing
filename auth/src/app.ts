import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';

import cookieSession from 'cookie-session';

//routes
import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';

//middlewares
import { errorHandler } from '@pippip/hugo-common';
import { NotFoundError } from '@pippip/hugo-common';

const app = express();

app.set('trust proxy', true); //trust HTTPS connection
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: false,
  })
);
//api
app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

//middleware Usage
app.use(errorHandler);

export { app };
