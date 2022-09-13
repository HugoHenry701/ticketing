# Package Note

## "name": "expiration"

## "version": "1.0.0"

## "main": "index.js"

The startup file would be index.js

## Scripts

- **"start": "ts-node-dev --poll src/index.ts"**

## Dependencies (the project library would be installed for running purposes)

- "@types/cookie-session": "^2.0.44" **(CookieTS Library)**
- "@types/express": "^4.17.13" **(ExpressTS Library)**
- "@types/jsonwebtoken": "^8.5.8" **(JWT-TS Library)**
- "cookie-session": "^2.0.0" **(Cookie Library)**
- "express": "^4.18.1" **(Express Library)**
- "express-async-errors": "^3.1.1" **(Error Handler Library)**
- "express-validator": "^6.14.2" **(Validator Library)**
- "jsonwebtoken": "^8.5.1" **(JWT Library)**
- "mongoose": "^6.4.1" **(MongoDB Library)**
- "ts-node-dev": "^2.0.0" **(TS Node Compiler Library)**
- "typescript": "^4.7.4" **(Typescript Library)**

## devDependencies (the project library would be installed for testing purposes) - And it would not be built in Docker image.

- "@types/jest": "^28.1.4" **(TS Jest Library)**
- "@types/supertest": "^2.0.12" **(TS Super Test Library)**
- "jest": "^28.1.2" **(Delightful JavaScript Testing Framework)**
- "mongodb-memory-server": "^8.7.2" **(Copy of Mongo in memory Library)**
- "supertest": "^6.2.4" **(HTTP Testing Library)**
- "ts-jest": "^28.0.5" **(TS Jest Library)**
