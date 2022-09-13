import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { BadRequestError } from '@pippip/hugo-common';
import { validateRequest } from '@pippip/hugo-common';
import { User } from '../models/user';
import { Password } from '../utils/password';
import jwt from 'jsonwebtoken';
const router = express.Router();

router.post(
  '/api/users/signin',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .notEmpty()
      .withMessage('You must supply a password'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      throw new BadRequestError('Invalid credentials');
    }
    const passwordsMatch = await Password.compare(
      existingUser.password,
      password
    );
    if (!passwordsMatch) {
      throw new BadRequestError('Invalid credentials');
    }
    const userJWT = jwt.sign(
      {
        id: existingUser.id,
        email: existingUser.email,
      },
      process.env.JWT_KEY! // symbol "!" means "We knows 100% that this env variable is defined in "index.ts". Typescript dont worry about it (ignore the caution)"
    );
    //Store it on session object
    req.session = {
      jwt: userJWT,
    };
    res.status(200).send(existingUser);
  }
);

export { router as signinRouter };
