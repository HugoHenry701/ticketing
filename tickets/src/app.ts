import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';

import cookieSession from 'cookie-session';

//routes
import { createTicketRouter } from './routes/new';
import { showTicketRouter } from './routes/show';
import { indexTicketRouter } from './routes/index';
import { updateTicketRouter } from './routes/update';
//middlewares
import { errorHandler } from '@pippip/hugo-common';
import { NotFoundError, currentUser } from '@pippip/hugo-common';

const app = express();

app.set('trust proxy', true); //trust HTTPS connection
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: false,
  })
);
//middleware auth
app.use(currentUser);
//api
app.use(createTicketRouter);
app.use(showTicketRouter);
app.use(indexTicketRouter);
app.use(updateTicketRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

//middleware Usage
app.use(errorHandler);

export { app };
