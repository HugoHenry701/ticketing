import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { BadRequestError } from '@pippip/hugo-common';
import { User } from '../models/user';
import jwt from 'jsonwebtoken';
import { validateRequest } from '@pippip/hugo-common';
const router = express.Router();

router.post(
  '/api/users/signup',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be between 4 and 20 characters'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const existngUser = await User.findOne({ email });

    if (existngUser) {
      // console.log('Email in use.');
      // return res.send({});
      throw new BadRequestError('email in use');
    }

    const user = User.build({
      email,
      password,
    }); //create instance in Typescript
    await user.save(); //save in database
    //Generate JWT

    const userJWT = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_KEY! // symbol "!" means "We knows 100% that this env variable is defined in "index.ts". Typescript dont worry about it (ignore the caution)"
    );
    //Store it on session object
    req.session = {
      jwt: userJWT,
    };
    res.status(201).send(user);
  }
);

export { router as signupRouter };
